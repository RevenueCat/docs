#!/usr/bin/env python3
"""
Context-Based Image Renaming Script

This script analyzes markdown files for image references and renames images
based on their context in the document. It's designed to replace gibberish
UUID-like filenames with meaningful names derived from surrounding content.

Usage:
    python rename_images_by_context.py <markdown_file> [--dry-run] [--verbose]
    python rename_images_by_context.py --batch <docs_directory> [--dry-run] [--verbose]
"""

import os
import re
import argparse
import shutil
from pathlib import Path
from typing import Dict, List, Tuple, Set
import unicodedata

class ImageContextRenamer:
    def __init__(self, root_dir: str = ".", dry_run: bool = False, verbose: bool = False):
        self.root_dir = Path(root_dir)
        self.static_dir = self.root_dir / "static"
        self.docs_images_dir = self.static_dir / "docs_images"
        self.dry_run = dry_run
        self.verbose = verbose
        
        # Image patterns to find references
        self.image_patterns = [
            # Standard markdown image syntax
            r'!\[([^\]]*)\]\(([^")]+\.(?:png|jpg|jpeg|gif|svg|webp))(?:\s+"[^"]*")?\)',
            # HTML img tags with alt text
            r'<img[^>]+alt=["\']([^"\']*)["\'][^>]+src=["\']([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\'][^>]*>',
            # HTML img tags with src first
            r'<img[^>]+src=["\']([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\'][^>]+alt=["\']([^"\']*)["\'][^>]*>',
        ]
        
        # Words to exclude from generated names
        self.exclude_words = {
            'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
            'from', 'up', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below',
            'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
            'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'shall'
        }
        
        # Renamed files tracker to avoid conflicts
        self.renamed_files: Dict[str, str] = {}
        
    def sanitize_filename(self, text: str) -> str:
        """Convert text to a safe filename."""
        # Normalize unicode characters
        text = unicodedata.normalize('NFKD', text)
        
        # Convert to lowercase and replace spaces/special chars with hyphens
        text = re.sub(r'[^\w\s-]', '', text.lower())
        text = re.sub(r'[-\s]+', '-', text)
        
        # Remove excluded words
        words = text.split('-')
        filtered_words = [word for word in words if word not in self.exclude_words and len(word) > 1]
        
        # Limit to reasonable length
        text = '-'.join(filtered_words[:6])
        
        # Ensure it's not empty and doesn't start/end with hyphens
        text = text.strip('-')
        if not text:
            text = 'image'
            
        return text
        
    def extract_context_around_image(self, content: str, image_path: str, context_lines: int = 3) -> str:
        """Extract context around an image reference to generate a meaningful name."""
        lines = content.split('\n')
        image_line_idx = -1
        
        # Find the line containing the image
        for i, line in enumerate(lines):
            if image_path in line:
                image_line_idx = i
                break
                
        if image_line_idx == -1:
            return ""
            
        # Extract context before and after the image
        start_idx = max(0, image_line_idx - context_lines)
        end_idx = min(len(lines), image_line_idx + context_lines + 1)
        
        context_lines_text = lines[start_idx:end_idx]
        
        # Also look for the nearest heading
        heading_text = ""
        for i in range(image_line_idx, -1, -1):
            if lines[i].startswith('#'):
                heading_text = re.sub(r'^#+\s*', '', lines[i]).strip()
                break
                
        # Combine heading and context
        all_context = heading_text + " " + " ".join(context_lines_text)
        
        # Clean up markdown syntax
        all_context = re.sub(r'!\[.*?\]\([^)]+\)', '', all_context)  # Remove image syntax
        all_context = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', all_context)  # Convert links to text
        all_context = re.sub(r'[#*`_~]', '', all_context)  # Remove markdown formatting
        all_context = re.sub(r':::.*?:::', '', all_context)  # Remove admonitions
        all_context = re.sub(r'\s+', ' ', all_context).strip()  # Normalize whitespace
        
        return all_context
        
    def extract_alt_text_from_match(self, content: str, image_path: str) -> str:
        """Extract alt text from image reference."""
        for pattern in self.image_patterns:
            matches = re.finditer(pattern, content, re.IGNORECASE)
            for match in matches:
                if len(match.groups()) >= 2:
                    # Check which group contains the image path
                    if image_path in match.group(2):
                        return match.group(1).strip()
                    elif image_path in match.group(1):
                        return match.group(2).strip()
        return ""
        
    def generate_contextual_name(self, markdown_file: Path, image_path: str) -> str:
        """Generate a contextual name for an image based on its usage in markdown."""
        try:
            with open(markdown_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            if self.verbose:
                print(f"   ⚠️  Error reading {markdown_file}: {e}")
            return ""
            
        # Try to get alt text first
        alt_text = self.extract_alt_text_from_match(content, image_path)
        if alt_text and len(alt_text) > 2:
            name_candidate = self.sanitize_filename(alt_text)
            if name_candidate and name_candidate != 'image':
                return name_candidate
                
        # If no good alt text, use surrounding context
        context = self.extract_context_around_image(content, image_path)
        if context:
            # Extract the most relevant words
            words = re.findall(r'\b[a-zA-Z]{3,}\b', context)
            relevant_words = []
            
            for word in words[:10]:  # Limit to first 10 words
                word_lower = word.lower()
                if (word_lower not in self.exclude_words and 
                    len(word_lower) > 2 and 
                    not word_lower.isdigit()):
                    relevant_words.append(word_lower)
                    
            if relevant_words:
                name_candidate = self.sanitize_filename('-'.join(relevant_words[:4]))
                if name_candidate and name_candidate != 'image':
                    return name_candidate
                    
        # Fallback: use the markdown filename
        md_name = markdown_file.stem
        return self.sanitize_filename(md_name)
        
    def find_images_in_markdown(self, markdown_file: Path) -> List[Tuple[str, str]]:
        """Find all local docs_images references in a markdown file."""
        try:
            with open(markdown_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            if self.verbose:
                print(f"   ⚠️  Error reading {markdown_file}: {e}")
            return []
            
        images = []
        
        # Find all image patterns
        for pattern in self.image_patterns:
            matches = re.finditer(pattern, content, re.IGNORECASE)
            for match in matches:
                # Extract image path from match groups
                image_path = None
                for group in match.groups():
                    if group and any(ext in group.lower() for ext in ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']):
                        image_path = group
                        break
                        
                if image_path and '/docs_images/' in image_path:
                    # Normalize the path
                    normalized_path = image_path.strip('\'"').strip()
                    if normalized_path.startswith('/'):
                        normalized_path = normalized_path[1:]
                    if normalized_path.startswith('static/'):
                        normalized_path = normalized_path[7:]
                        
                    images.append((image_path, normalized_path))
                    
        return images
        
    def is_uuid_like_filename(self, filename: str) -> bool:
        """Check if a filename looks like a UUID or gibberish."""
        name_without_ext = Path(filename).stem
        
        # Check for UUID-like patterns
        uuid_pattern = r'^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$'
        if re.match(uuid_pattern, name_without_ext, re.IGNORECASE):
            return True
            
        # Check for mixed alphanumeric gibberish (common pattern in the examples)
        gibberish_patterns = [
            r'^[a-f0-9]{7,}-.*',  # Starts with 7+ hex chars followed by dash
            r'^[a-f0-9]{32,}$',   # Long hex string
            r'.*_[a-f0-9]{32,}$', # Ends with underscore and long hex
        ]
        
        for pattern in gibberish_patterns:
            if re.match(pattern, name_without_ext, re.IGNORECASE):
                return True
                
        # Check for very long mixed alphanumeric names without clear meaning
        if (len(name_without_ext) > 20 and 
            sum(1 for c in name_without_ext if c.isdigit()) > len(name_without_ext) * 0.3):
            return True
            
        return False
        
    def ensure_unique_name(self, directory: Path, base_name: str, extension: str) -> str:
        """Ensure the generated name is unique in the directory."""
        counter = 1
        name = base_name
        
        while (directory / f"{name}{extension}").exists() or f"{name}{extension}" in self.renamed_files.values():
            name = f"{base_name}-{counter}"
            counter += 1
            
        return name
        
    def rename_images_in_file(self, markdown_file: Path) -> Dict[str, str]:
        """Rename images referenced in a markdown file and return mapping of old->new paths."""
        if self.verbose:
            print(f"📄 Processing {markdown_file}")
            
        images = self.find_images_in_markdown(markdown_file)
        renamed_mapping = {}
        
        for original_path, normalized_path in images:
            # Check if this is a docs_images file
            if not normalized_path.startswith('docs_images/'):
                continue
                
            full_image_path = self.static_dir / normalized_path
            
            if not full_image_path.exists():
                if self.verbose:
                    print(f"   ⚠️  Image not found: {full_image_path}")
                continue
                
            filename = full_image_path.name
            
            # Only rename if it looks like a UUID/gibberish
            if not self.is_uuid_like_filename(filename):
                if self.verbose:
                    print(f"   ⏭️  Skipping {filename} (already has meaningful name)")
                continue
                
            # Generate contextual name
            contextual_name = self.generate_contextual_name(markdown_file, original_path)
            if not contextual_name:
                if self.verbose:
                    print(f"   ⚠️  Could not generate name for {filename}")
                continue
                
            # Ensure unique name
            extension = full_image_path.suffix
            unique_name = self.ensure_unique_name(full_image_path.parent, contextual_name, extension)
            new_filename = f"{unique_name}{extension}"
            new_path = full_image_path.parent / new_filename
            
            # Track the new filename to prevent future conflicts
            self.renamed_files[normalized_path] = new_filename
            
            if self.verbose:
                print(f"   🔄 {filename} -> {new_filename}")
                
            if not self.dry_run:
                try:
                    shutil.move(str(full_image_path), str(new_path))
                    # Update the mapping for markdown file updates
                    old_path_in_md = normalized_path
                    new_path_in_md = str(new_path.relative_to(self.static_dir)).replace('\\', '/')
                    renamed_mapping[old_path_in_md] = new_path_in_md
                    print(f"   ✅ Renamed: {filename} -> {new_filename}")
                except Exception as e:
                    print(f"   ❌ Error renaming {filename}: {e}")
            else:
                old_path_in_md = normalized_path
                new_path_in_md = str(new_path.relative_to(self.static_dir)).replace('\\', '/')
                renamed_mapping[old_path_in_md] = new_path_in_md
                
        return renamed_mapping
        
    def update_markdown_references(self, markdown_file: Path, renamed_mapping: Dict[str, str]):
        """Update image references in the markdown file."""
        if not renamed_mapping:
            return
            
        try:
            with open(markdown_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"   ❌ Error reading {markdown_file}: {e}")
            return
            
        updated_content = content
        updates_made = 0
        
        for old_path, new_path in renamed_mapping.items():
            # Update various path formats
            path_variants = [
                old_path,
                f"/{old_path}",
                f"static/{old_path}",
                f"/static/{old_path}",
            ]
            
            for variant in path_variants:
                if variant in updated_content:
                    # Determine the correct replacement format
                    if f"/{old_path}" in updated_content:
                        replacement = f"/{new_path}"
                    elif f"static/{old_path}" in updated_content:
                        replacement = f"static/{new_path}"
                    elif f"/static/{old_path}" in updated_content:
                        replacement = f"/static/{new_path}"
                    else:
                        replacement = new_path
                        
                    updated_content = updated_content.replace(variant, replacement)
                    updates_made += 1
                    
        if updates_made > 0:
            if not self.dry_run:
                try:
                    with open(markdown_file, 'w', encoding='utf-8') as f:
                        f.write(updated_content)
                    print(f"   ✅ Updated {updates_made} image references in {markdown_file.name}")
                except Exception as e:
                    print(f"   ❌ Error updating {markdown_file}: {e}")
            else:
                print(f"   🔄 Would update {updates_made} image references in {markdown_file.name}")
                
    def process_file(self, markdown_file: Path):
        """Process a single markdown file."""
        if not markdown_file.exists():
            print(f"❌ File not found: {markdown_file}")
            return
            
        print(f"\n🚀 Processing {markdown_file}")
        
        # Rename images and get mapping
        renamed_mapping = self.rename_images_in_file(markdown_file)
        
        # Update markdown references
        if renamed_mapping:
            self.update_markdown_references(markdown_file, renamed_mapping)
            print(f"✅ Completed processing {markdown_file.name}")
        else:
            print(f"ℹ️  No images to rename in {markdown_file.name}")
            
    def process_directory(self, docs_dir: Path):
        """Process all markdown files in a directory."""
        if not docs_dir.exists():
            print(f"❌ Directory not found: {docs_dir}")
            return
            
        markdown_files = []
        for pattern in ['**/*.md', '**/*.mdx']:
            markdown_files.extend(docs_dir.glob(pattern))
            
        if not markdown_files:
            print(f"ℹ️  No markdown files found in {docs_dir}")
            return
            
        print(f"🚀 Processing {len(markdown_files)} markdown files in {docs_dir}")
        
        for md_file in markdown_files:
            self.process_file(md_file)
            
        print(f"\n✅ Completed batch processing of {len(markdown_files)} files")


def main():
    parser = argparse.ArgumentParser(description="Rename images based on their context in markdown files")
    parser.add_argument('input', nargs='?', help='Markdown file or directory to process')
    parser.add_argument('--batch', help='Process all markdown files in the specified directory')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be done without making changes')
    parser.add_argument('--verbose', '-v', action='store_true', help='Show detailed output')
    
    args = parser.parse_args()
    
    # Determine root directory (assume script is in scripts/ folder)
    script_dir = Path(__file__).parent
    root_dir = script_dir.parent
    
    renamer = ImageContextRenamer(root_dir, dry_run=args.dry_run, verbose=args.verbose)
    
    if args.batch:
        batch_dir = Path(args.batch)
        if not batch_dir.is_absolute():
            batch_dir = root_dir / batch_dir
        renamer.process_directory(batch_dir)
    elif args.input:
        input_path = Path(args.input)
        if not input_path.is_absolute():
            input_path = root_dir / input_path
            
        if input_path.is_file():
            renamer.process_file(input_path)
        elif input_path.is_dir():
            renamer.process_directory(input_path)
        else:
            print(f"❌ Invalid input: {input_path}")
    else:
        # Default: process the example file provided
        example_file = root_dir / "docs" / "getting-started" / "entitlements" / "android-products.md"
        if example_file.exists():
            print("ℹ️  No input specified, processing example file...")
            renamer.process_file(example_file)
        else:
            print("❌ No input specified and example file not found")
            parser.print_help()


if __name__ == "__main__":
    main() 