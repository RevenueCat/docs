#!/usr/bin/env python3
"""
Image Usage Analysis Script

This script finds all image references in the /docs folder and compares them
with images in the /static directory to identify truly unused images.
Excludes the /static/icons folder as requested.
"""

import os
import re
import glob
from pathlib import Path
from typing import Set, List, Dict

class ImageUsageAnalyzer:
    def __init__(self, root_dir: str = "."):
        # Get the script's directory
        script_dir = Path(__file__).parent
        
        self.root_dir = Path(root_dir)
        self.docs_dir = self.root_dir / "docs"
        self.src_dir = self.root_dir / "src"
        self.openapi_dir = self.root_dir / "openapi-spec"
        self.static_dir = self.root_dir / "static"
        self.icons_dir = self.static_dir / "icons"
        # Create image_analysis folder in the same directory as the script
        self.output_dir = script_dir / "image_analysis"
        
        # Images to ignore in unused analysis (known to be used but not directly referenced)
        self.ignored_images = {
            'img/logo-rc.svg',  # Logo used in templates or other non-trackable ways
        }
        
        # FIXED image patterns to match various reference formats
        self.image_patterns = [
            # Standard markdown image syntax - FIXED to handle alt text after image path
            r'!\[.*?\]\(([^"\s)]+\.(?:png|jpg|jpeg|gif|svg|webp))(?:\s+"[^"]*")?\)',
            # Alternative markdown pattern that captures until space or quote
            r'!\[.*?\]\(([^"\s)]+\.(?:png|jpg|jpeg|gif|svg|webp))',
            # Markdown links that point to image files (for clickable images)
            r'(?<!!)\[.*?\]\(([^"\s)]+\.(?:png|jpg|jpeg|gif|svg|webp))(?:\s+"[^"]*")?\)',
            # HTML img tags
            r'<img[^>]+src=["\']([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\'][^>]*>',
            # Background images in CSS/style attributes
            r'background-image:\s*url\(["\']?([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\']?\)',
            # Import statements in MDX/JS/TS files
            r'import\s+.*?\s+from\s+["\']([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\']',
            # require() statements
            r'require\(["\']([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\']\)',
            # ES6 dynamic imports
            r'import\(["\']([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\']\)',
            # JSX src attributes (with proper boundaries)
            r'\bsrc=["\']([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\']',
            # CSS-in-JS url() patterns
            r'\burl\(["\']?([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\']?\)',
            # String literals in JS/TS that clearly reference images directory
            r'["\']([^"\']*?/images/[^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\']',
        ]
        
        self.referenced_images: Set[str] = set()
        self.static_images: Set[str] = set()
        self.unused_images: Set[str] = set()

    def find_all_static_images(self) -> Set[str]:
        """Find all images in the static directory (excluding icons)."""
        print("🔍 Scanning static directory for images...")
        
        static_images = set()
        
        # Search in all subdirectories of static except icons
        for root, dirs, files in os.walk(self.static_dir):
            # Skip the icons directory
            if 'icons' in dirs:
                dirs.remove('icons')
                
            root_path = Path(root)
            for file in files:
                if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp')):
                    # Get relative path from static directory
                    rel_path = root_path.relative_to(self.static_dir) / file
                    static_images.add(str(rel_path))
        
        print(f"📊 Found {len(static_images)} images in static directory (excluding icons)")
        return static_images

    def normalize_image_path(self, path: str) -> str:
        """Normalize image paths to be relative to static directory."""
        # Remove quotes and whitespace
        path = path.strip('\'"').strip()
        
        # Handle different path formats
        if path.startswith('@site/static/'):
            path = path[13:]  # Remove '@site/static/'
        elif path.startswith('/static/'):
            path = path[8:]   # Remove '/static/'
        elif path.startswith('static/'):
            path = path[7:]   # Remove 'static/'
        elif path.startswith('/docs/'):
            path = path[6:]   # Remove '/docs/' (this maps to static directory)
        elif path.startswith('docs/'):
            path = path[5:]   # Remove 'docs/' (this maps to static directory)
        elif path.startswith('../../../static/'):
            path = path[16:]  # Remove '../../../static/' (16 characters)
        elif path.startswith('../../static/'):
            path = path[13:]  # Remove '../../static/' (13 characters)
        elif path.startswith('../static/'):
            path = path[10:]  # Remove '../static/' (10 characters)
        elif path.startswith('/'):
            path = path[1:]   # Remove leading '/'
            
        # Normalize path separators
        path = path.replace('\\', '/')
        
        return path

    def find_referenced_images(self) -> Set[str]:
        """Find all image references in documentation and source files."""
        print("🔍 Scanning for image references...")
        
        referenced_images = set()
        total_files = 0
        
        # Scan documentation files (markdown and MDX)
        if self.docs_dir.exists():
            print(f"   📄 Scanning docs directory...")
            doc_files = []
            for pattern in ['**/*.md', '**/*.mdx']:
                doc_files.extend(glob.glob(str(self.docs_dir / pattern), recursive=True))
            
            print(f"   📄 Found {len(doc_files)} documentation files")
            total_files += len(doc_files)
            
            for file_path in doc_files:
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    # Apply all image patterns
                    for pattern in self.image_patterns:
                        matches = re.findall(pattern, content, re.IGNORECASE | re.MULTILINE)
                        for match in matches:
                            normalized_path = self.normalize_image_path(match)
                            if normalized_path:
                                referenced_images.add(normalized_path)
                
                except Exception as e:
                    print(f"   ⚠️  Error reading {file_path}: {e}")
        
        # Scan source files (JS, TS, JSX, TSX, CSS, SCSS)
        if self.src_dir.exists():
            print(f"   🔧 Scanning src directory...")
            src_files = []
            for pattern in ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.css', '**/*.scss']:
                src_files.extend(glob.glob(str(self.src_dir / pattern), recursive=True))
            
            print(f"   🔧 Found {len(src_files)} source files")
            total_files += len(src_files)
            
            for file_path in src_files:
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    # Apply all image patterns
                    for pattern in self.image_patterns:
                        matches = re.findall(pattern, content, re.IGNORECASE | re.MULTILINE)
                        for match in matches:
                            normalized_path = self.normalize_image_path(match)
                            if normalized_path:
                                referenced_images.add(normalized_path)
                
                except Exception as e:
                    print(f"   ⚠️  Error reading {file_path}: {e}")
        
        # Scan OpenAPI spec files (YAML)
        if self.openapi_dir.exists():
            print(f"   📋 Scanning openapi-spec directory...")
            yaml_files = []
            for pattern in ['**/*.yaml', '**/*.yml']:
                yaml_files.extend(glob.glob(str(self.openapi_dir / pattern), recursive=True))
            
            print(f"   📋 Found {len(yaml_files)} YAML files")
            total_files += len(yaml_files)
            
            for file_path in yaml_files:
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    # Apply all image patterns
                    for pattern in self.image_patterns:
                        matches = re.findall(pattern, content, re.IGNORECASE | re.MULTILINE)
                        for match in matches:
                            normalized_path = self.normalize_image_path(match)
                            if normalized_path:
                                referenced_images.add(normalized_path)
                
                except Exception as e:
                    print(f"   ⚠️  Error reading {file_path}: {e}")
        
        print(f"📊 Scanned {total_files} total files")
        print(f"📊 Found {len(referenced_images)} unique image references")
        return referenced_images

    def analyze_usage(self) -> Dict:
        """Perform complete image usage analysis."""
        print("🚀 Starting comprehensive image usage analysis...\n")
        
        # Find all images in static directory
        self.static_images = self.find_all_static_images()
        
        # Find all referenced images in docs
        self.referenced_images = self.find_referenced_images()
        
        # Separate external images from local references
        external_images = set()
        local_references = set()
        
        for img in self.referenced_images:
            if img.startswith(('http://', 'https://')):
                external_images.add(img)
            else:
                local_references.add(img)
        
        # Find unused images (excluding ignored images)
        unused_images_raw = self.static_images - local_references
        self.unused_images = unused_images_raw - self.ignored_images
        
        # Find missing images (local references that don't exist in static)
        missing_images = local_references - self.static_images
        
        print("\n📈 Analysis Results:")
        print(f"🗂️  Total images in static (excluding icons): {len(self.static_images)}")
        print(f"🔗 Local images referenced in docs: {len(local_references)}")
        print(f"🌐 External images referenced in docs: {len(external_images)}")
        if self.ignored_images:
            print(f"🙈 Ignored images (excluded from cleanup): {len(self.ignored_images)}")
        print(f"❌ Unused images: {len(self.unused_images)}")
        print(f"🚫 Missing local images: {len(missing_images)}")
        
        return {
            'total_static_images': len(self.static_images),
            'referenced_images': len(self.referenced_images),
            'local_referenced_images': len(local_references),
            'external_images': len(external_images),
            'ignored_images': len(self.ignored_images),
            'unused_images': len(self.unused_images),
            'missing_images': len(missing_images),
            'static_images_list': sorted(self.static_images),
            'referenced_images_list': sorted(self.referenced_images),
            'local_referenced_images_list': sorted(local_references),
            'external_images_list': sorted(external_images),
            'ignored_images_list': sorted(self.ignored_images),
            'unused_images_list': sorted(self.unused_images),
            'missing_images_list': sorted(missing_images)
        }

    def save_results(self, results: Dict):
        """Save analysis results to files in a dedicated folder."""
        print("\n💾 Saving analysis results...")
        
        # Create output directory
        self.output_dir.mkdir(exist_ok=True)
        
        # Save all static images
        with open(self.output_dir / 'all_static_images.txt', 'w') as f:
            for img in results['static_images_list']:
                f.write(f"{img}\n")
        
        # Save local referenced images
        with open(self.output_dir / 'referenced_images.txt', 'w') as f:
            for img in results['local_referenced_images_list']:
                f.write(f"{img}\n")
        
        # Save external images
        with open(self.output_dir / 'external_images.txt', 'w') as f:
            for img in results['external_images_list']:
                f.write(f"{img}\n")
        
        # Save unused images
        with open(self.output_dir / 'unused_images.txt', 'w') as f:
            for img in results['unused_images_list']:
                f.write(f"{img}\n")
        
        # Save missing images (only if there are any)
        if results['missing_images_list']:
            with open(self.output_dir / 'missing_images.txt', 'w') as f:
                for img in results['missing_images_list']:
                    f.write(f"{img}\n")
        else:
            # Remove missing_images.txt if it exists but there are no missing images
            missing_file = self.output_dir / 'missing_images.txt'
            if missing_file.exists():
                missing_file.unlink()
        
        # Save detailed report
        with open(self.output_dir / 'report.md', 'w') as f:
            f.write("# Image Usage Analysis Report\n\n")
            f.write("## Summary\n\n")
            f.write(f"- **Total images in static directory (excluding icons):** {results['total_static_images']}\n")
            f.write(f"- **Local images referenced in docs:** {results['local_referenced_images']}\n")
            f.write(f"- **External images referenced in docs:** {results['external_images']}\n")
            if results['ignored_images'] > 0:
                f.write(f"- **Ignored images (excluded from cleanup):** {results['ignored_images']}\n")
            f.write(f"- **Unused images:** {results['unused_images']} ({results['unused_images']/results['total_static_images']*100:.1f}%)\n")
            f.write(f"- **Missing local images:** {results['missing_images']}\n\n")
            
            f.write("## Analysis Method\n\n")
            f.write("This analysis was performed using a corrected script that:\n")
            f.write("- Properly handles markdown image syntax with alt text\n")
            f.write("- Scans all .md and .mdx files in the /docs directory\n")
            f.write("- Scans all .js, .jsx, .ts, .tsx, .css, .scss files in the /src directory\n")
            f.write("- Scans all .yaml and .yml files in the /openapi-spec directory\n")
            f.write("- Detects both image syntax (![...]) and link syntax ([...]) pointing to images\n")
            f.write("- Excludes images in the /static/icons directory\n")
            f.write("- Excludes specific ignored images (logos, etc.) from cleanup analysis\n")
            f.write("- Separates external images (http/https URLs) from local images\n")
            f.write("- Normalizes various image path formats\n\n")
            
            if results['unused_images'] > 0:
                f.write("## Unused Images\n\n")
                f.write("These images exist in the static directory but are not referenced in any documentation:\n\n")
                for img in results['unused_images_list'][:20]:  # Show first 20
                    f.write(f"- {img}\n")
                if len(results['unused_images_list']) > 20:
                    f.write(f"\n... and {len(results['unused_images_list']) - 20} more (see unused_images.txt for complete list)\n")
            
            if results['external_images'] > 0:
                f.write("\n## External Images\n\n")
                f.write("These external images are referenced in documentation (hosted externally):\n\n")
                for img in results['external_images_list'][:10]:  # Show first 10
                    f.write(f"- {img}\n")
                if len(results['external_images_list']) > 10:
                    f.write(f"\n... and {len(results['external_images_list']) - 10} more (see external_images.txt for complete list)\n")
            
            if results['ignored_images'] > 0:
                f.write("\n## Ignored Images\n\n")
                f.write("These images are excluded from cleanup analysis (known to be used):\n\n")
                for img in results['ignored_images_list']:
                    f.write(f"- {img}\n")
            
            if results['missing_images_list']:
                f.write("\n## Missing Local Images\n\n")
                f.write("These local images are referenced in documentation but don't exist in the static directory:\n\n")
                for img in results['missing_images_list']:
                    f.write(f"- {img}\n")
        
        print("✅ Results saved to image_analysis/ folder:")
        print("   📄 all_static_images.txt")
        print("   📄 referenced_images.txt (local images only)")
        print("   📄 external_images.txt") 
        print("   📄 unused_images.txt")
        if results['missing_images_list']:
            print("   📄 missing_images.txt (local images only)")
        print("   📄 report.md")

    def show_sample_references(self, limit: int = 10):
        """Show sample image references for verification."""
        print(f"\n🔍 Sample image references found (first {limit}):")
        for i, img in enumerate(sorted(self.referenced_images)[:limit]):
            print(f"   {i+1}. {img}")
        
        if len(self.referenced_images) > limit:
            print(f"   ... and {len(self.referenced_images) - limit} more")

def main():
    # Get the parent directory of the script (the project root)
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    
    analyzer = ImageUsageAnalyzer(str(project_root))
    results = analyzer.analyze_usage()
    analyzer.show_sample_references()
    analyzer.save_results(results)
    
    print(f"\n🎉 Analysis complete! Check the scripts/image_analysis/ folder for results.")

if __name__ == "__main__":
    main() 