#!/usr/bin/env python3
"""
Cleanup Unused Images Script

This script uses the image usage analysis to safely delete unused images from the static directory.
Includes safety features like dry-run mode and confirmation prompts.
"""

import os
import sys
import argparse
from pathlib import Path
from typing import List, Set

# Import the analyzer from the same directory
from analyze_image_usage import ImageUsageAnalyzer

class ImageCleanup:
    def __init__(self, dry_run: bool = True, force: bool = False):
        self.dry_run = dry_run
        self.force = force
        
        # Get the parent directory of the script (the project root)
        script_dir = Path(__file__).parent
        self.project_root = script_dir.parent
        self.static_dir = self.project_root / "static"
        
    def run_analysis(self) -> Set[str]:
        """Run the image usage analysis and return unused images."""
        print("🔍 Running image usage analysis...")
        
        analyzer = ImageUsageAnalyzer(str(self.project_root))
        results = analyzer.analyze_usage()
        
        unused_images = set(results['unused_images_list'])
        
        print(f"\n📊 Analysis complete:")
        print(f"   🗂️  Total images in static: {results['total_static_images']}")
        print(f"   🔗 Local images referenced: {results['local_referenced_images']}")
        print(f"   ❌ Unused images found: {len(unused_images)}")
        
        return unused_images
    
    def get_file_paths(self, unused_images: Set[str]) -> List[Path]:
        """Convert relative image paths to full file paths."""
        file_paths = []
        
        for img_path in unused_images:
            full_path = self.static_dir / img_path
            if full_path.exists():
                file_paths.append(full_path)
            else:
                print(f"⚠️  Warning: File not found: {full_path}")
        
        return file_paths
    
    def calculate_total_size(self, file_paths: List[Path]) -> int:
        """Calculate total size of files to be deleted."""
        total_size = 0
        for file_path in file_paths:
            try:
                total_size += file_path.stat().st_size
            except OSError:
                pass
        return total_size
    
    def format_size(self, size_bytes: int) -> str:
        """Format file size in human readable format."""
        size = float(size_bytes)
        for unit in ['B', 'KB', 'MB', 'GB']:
            if size < 1024.0:
                return f"{size:.1f} {unit}"
            size /= 1024.0
        return f"{size:.1f} TB"
    
    def confirm_deletion(self, file_paths: List[Path]) -> bool:
        """Ask user for confirmation before deleting files."""
        if self.force:
            return True
            
        total_size = self.calculate_total_size(file_paths)
        
        print(f"\n🚨 DELETION CONFIRMATION")
        print(f"   📁 Files to delete: {len(file_paths)}")
        print(f"   💾 Total size: {self.format_size(total_size)}")
        print(f"   📍 Location: {self.static_dir}")
        
        if len(file_paths) <= 10:
            print(f"\n📋 Files to be deleted:")
            for file_path in file_paths:
                rel_path = file_path.relative_to(self.static_dir)
                size = self.format_size(file_path.stat().st_size)
                print(f"   • {rel_path} ({size})")
        else:
            print(f"\n📋 First 10 files to be deleted:")
            for file_path in file_paths[:10]:
                rel_path = file_path.relative_to(self.static_dir)
                size = self.format_size(file_path.stat().st_size)
                print(f"   • {rel_path} ({size})")
            print(f"   ... and {len(file_paths) - 10} more files")
        
        print(f"\n❗ This action cannot be undone!")
        
        while True:
            response = input("\nDo you want to proceed with deletion? (yes/no): ").lower().strip()
            if response in ['yes', 'y']:
                return True
            elif response in ['no', 'n']:
                return False
            else:
                print("Please answer 'yes' or 'no'")
    
    def delete_files(self, file_paths: List[Path]) -> tuple:
        """Delete the specified files."""
        deleted_count = 0
        failed_count = 0
        total_size_deleted = 0
        
        print(f"\n🗑️  {'[DRY RUN] ' if self.dry_run else ''}Deleting unused images...")
        
        for file_path in file_paths:
            try:
                if self.dry_run:
                    # Just simulate deletion
                    size = file_path.stat().st_size
                    total_size_deleted += size
                    rel_path = file_path.relative_to(self.static_dir)
                    print(f"   [DRY RUN] Would delete: {rel_path}")
                    deleted_count += 1
                else:
                    # Actually delete the file
                    size = file_path.stat().st_size
                    file_path.unlink()
                    total_size_deleted += size
                    rel_path = file_path.relative_to(self.static_dir)
                    print(f"   ✅ Deleted: {rel_path}")
                    deleted_count += 1
                    
            except OSError as e:
                rel_path = file_path.relative_to(self.static_dir)
                print(f"   ❌ Failed to delete: {rel_path} - {e}")
                failed_count += 1
        
        return deleted_count, failed_count, total_size_deleted
    
    def cleanup_empty_directories(self):
        """Remove empty directories in the images folder after cleanup."""
        if self.dry_run:
            print("\n📁 [DRY RUN] Would check for empty directories to remove")
            return
            
        print("\n📁 Checking for empty directories to remove...")
        
        images_dir = self.static_dir / "images"
        if not images_dir.exists():
            return
            
        removed_dirs = []
        
        # Walk through directories bottom-up to remove empty subdirectories
        for root, dirs, files in os.walk(images_dir, topdown=False):
            root_path = Path(root)
            
            # Skip the main images directory itself
            if root_path == images_dir:
                continue
                
            # Check if directory is empty
            try:
                if not any(root_path.iterdir()):
                    root_path.rmdir()
                    rel_path = root_path.relative_to(self.static_dir)
                    print(f"   ✅ Removed empty directory: {rel_path}")
                    removed_dirs.append(rel_path)
            except OSError as e:
                rel_path = root_path.relative_to(self.static_dir)
                print(f"   ❌ Failed to remove directory: {rel_path} - {e}")
        
        if not removed_dirs:
            print("   ℹ️  No empty directories found")
    
    def run(self):
        """Run the complete cleanup process."""
        print("🧹 Image Cleanup Tool")
        print("=" * 50)
        
        if self.dry_run:
            print("🔍 Running in DRY RUN mode - no files will be deleted")
        
        # Step 1: Run analysis
        unused_images = self.run_analysis()
        
        if not unused_images:
            print("\n🎉 No unused images found! Your static directory is clean.")
            return
        
        # Step 2: Get file paths
        file_paths = self.get_file_paths(unused_images)
        
        if not file_paths:
            print("\n⚠️  No files found to delete (they may have already been removed)")
            return
        
        # Step 3: Confirm deletion (unless in dry run mode)
        if not self.dry_run:
            if not self.confirm_deletion(file_paths):
                print("\n❌ Cleanup cancelled by user")
                return
        
        # Step 4: Delete files
        deleted_count, failed_count, total_size = self.delete_files(file_paths)
        
        # Step 5: Clean up empty directories
        if not self.dry_run:
            self.cleanup_empty_directories()
        
        # Step 6: Report results
        print(f"\n📊 Cleanup Summary:")
        if self.dry_run:
            print(f"   🔍 [DRY RUN] Files that would be deleted: {deleted_count}")
            print(f"   💾 [DRY RUN] Space that would be freed: {self.format_size(total_size)}")
        else:
            print(f"   ✅ Files successfully deleted: {deleted_count}")
            print(f"   ❌ Files failed to delete: {failed_count}")
            print(f"   💾 Space freed: {self.format_size(total_size)}")
        
        if self.dry_run:
            print(f"\n💡 To actually delete files, run: python3 cleanup_unused_images.py --no-dry-run")

def main():
    parser = argparse.ArgumentParser(
        description="Clean up unused images from the static directory",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 cleanup_unused_images.py                    # Dry run (safe preview)
  python3 cleanup_unused_images.py --no-dry-run       # Actually delete files
  python3 cleanup_unused_images.py --no-dry-run --force  # Delete without confirmation
        """
    )
    
    parser.add_argument(
        "--no-dry-run",
        action="store_true",
        help="Actually delete files (default is dry run mode)"
    )
    
    parser.add_argument(
        "--force",
        action="store_true",
        help="Skip confirmation prompt (use with caution!)"
    )
    
    args = parser.parse_args()
    
    # Dry run mode is default, unless --no-dry-run is specified
    dry_run = not args.no_dry_run
    
    cleanup = ImageCleanup(dry_run=dry_run, force=args.force)
    cleanup.run()

if __name__ == "__main__":
    main() 