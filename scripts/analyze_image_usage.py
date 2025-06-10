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
        self.root_dir = Path(root_dir)
        self.docs_dir = self.root_dir / "docs"
        self.static_dir = self.root_dir / "static"
        self.icons_dir = self.static_dir / "icons"
        self.output_dir = self.root_dir / "image_analysis"
        
        # FIXED image patterns to match various reference formats
        self.image_patterns = [
            # Standard markdown image syntax - FIXED to handle alt text after image path
            r'!\[.*?\]\(([^"\s)]+\.(?:png|jpg|jpeg|gif|svg|webp))(?:\s+"[^"]*")?\)',
            # Alternative markdown pattern that captures until space or quote
            r'!\[.*?\]\(([^"\s)]+\.(?:png|jpg|jpeg|gif|svg|webp))',
            # HTML img tags
            r'<img[^>]+src=["\']([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\'][^>]*>',
            # Background images in CSS/style attributes
            r'background-image:\s*url\(["\']?([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\']?\)',
            # Import statements in MDX files
            r'import\s+.*?\s+from\s+["\']([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\']',
            # require() statements
            r'require\(["\']([^"\']*?\.(?:png|jpg|jpeg|gif|svg|webp))["\']\)',
        ]
        
        self.referenced_images = set()
        self.static_images = set()
        self.unused_images = set()

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
        """Find all image references in documentation files."""
        print("🔍 Scanning docs directory for image references...")
        
        referenced_images = set()
        
        # Find all markdown and MDX files
        doc_files = []
        for pattern in ['**/*.md', '**/*.mdx']:
            doc_files.extend(glob.glob(str(self.docs_dir / pattern), recursive=True))
        
        print(f"📄 Found {len(doc_files)} documentation files to scan")
        
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
                print(f"⚠️  Error reading {file_path}: {e}")
        
        print(f"📊 Found {len(referenced_images)} unique image references in docs")
        return referenced_images

    def analyze_usage(self) -> Dict:
        """Perform complete image usage analysis."""
        print("🚀 Starting comprehensive image usage analysis...\n")
        
        # Find all images in static directory
        self.static_images = self.find_all_static_images()
        
        # Find all referenced images in docs
        self.referenced_images = self.find_referenced_images()
        
        # Find unused images
        self.unused_images = self.static_images - self.referenced_images
        
        # Find missing images (referenced but don't exist)
        missing_images = self.referenced_images - self.static_images
        
        print("\n📈 Analysis Results:")
        print(f"🗂️  Total images in static (excluding icons): {len(self.static_images)}")
        print(f"🔗 Images referenced in docs: {len(self.referenced_images)}")
        print(f"❌ Unused images: {len(self.unused_images)}")
        print(f"🚫 Missing images (referenced but don't exist): {len(missing_images)}")
        
        return {
            'total_static_images': len(self.static_images),
            'referenced_images': len(self.referenced_images),
            'unused_images': len(self.unused_images),
            'missing_images': len(missing_images),
            'static_images_list': sorted(self.static_images),
            'referenced_images_list': sorted(self.referenced_images),
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
        
        # Save referenced images
        with open(self.output_dir / 'referenced_images.txt', 'w') as f:
            for img in results['referenced_images_list']:
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
        
        # Save detailed report
        with open(self.output_dir / 'report.md', 'w') as f:
            f.write("# Image Usage Analysis Report\n\n")
            f.write("## Summary\n\n")
            f.write(f"- **Total images in static directory (excluding icons):** {results['total_static_images']}\n")
            f.write(f"- **Images referenced in docs:** {results['referenced_images']}\n")
            f.write(f"- **Unused images:** {results['unused_images']} ({results['unused_images']/results['total_static_images']*100:.1f}%)\n")
            f.write(f"- **Missing images:** {results['missing_images']}\n\n")
            
            f.write("## Analysis Method\n\n")
            f.write("This analysis was performed using a corrected script that:\n")
            f.write("- Properly handles markdown image syntax with alt text\n")
            f.write("- Scans all .md and .mdx files in the /docs directory\n")
            f.write("- Excludes images in the /static/icons directory\n")
            f.write("- Normalizes various image path formats\n\n")
            
            if results['unused_images'] > 0:
                f.write("## Unused Images\n\n")
                f.write("These images exist in the static directory but are not referenced in any documentation:\n\n")
                for img in results['unused_images_list'][:20]:  # Show first 20
                    f.write(f"- {img}\n")
                if len(results['unused_images_list']) > 20:
                    f.write(f"\n... and {len(results['unused_images_list']) - 20} more (see unused_images.txt for complete list)\n")
            
            if results['missing_images_list']:
                f.write("\n## Missing Images\n\n")
                f.write("These images are referenced in documentation but don't exist in the static directory:\n\n")
                for img in results['missing_images_list']:
                    f.write(f"- {img}\n")
        
        print("✅ Results saved to image_analysis/ folder:")
        print("   📄 all_static_images.txt")
        print("   📄 referenced_images.txt") 
        print("   📄 unused_images.txt")
        if results['missing_images_list']:
            print("   📄 missing_images.txt")
        print("   📄 report.md")

    def show_sample_references(self, limit: int = 10):
        """Show sample image references for verification."""
        print(f"\n🔍 Sample image references found (first {limit}):")
        for i, img in enumerate(sorted(self.referenced_images)[:limit]):
            print(f"   {i+1}. {img}")
        
        if len(self.referenced_images) > limit:
            print(f"   ... and {len(self.referenced_images) - limit} more")

def main():
    analyzer = ImageUsageAnalyzer()
    results = analyzer.analyze_usage()
    analyzer.show_sample_references()
    analyzer.save_results(results)
    
    print(f"\n🎉 Analysis complete! Check the image_analysis/ folder for results.")

if __name__ == "__main__":
    main() 