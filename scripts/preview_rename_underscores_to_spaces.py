#!/usr/bin/env python3
"""
Preview script to show what files would be renamed when replacing spaces with dashes.

This script recursively traverses the static/docs_images directory and shows what files
would be renamed without actually performing the renaming operation.
"""

import os
from pathlib import Path


def preview_rename_files_with_spaces(directory_path):
    """
    Preview files that would be renamed (spaces to dashes).
    
    Args:
        directory_path (str): Path to the directory to process
    """
    directory = Path(directory_path)
    
    if not directory.exists():
        print(f"Error: Directory '{directory_path}' does not exist.")
        return False
    
    if not directory.is_dir():
        print(f"Error: '{directory_path}' is not a directory.")
        return False
    
    rename_preview_count = 0
    
    # Walk through all files and subdirectories
    for root, dirs, files in os.walk(directory):
        for filename in files:
            if ' ' in filename:
                old_path = Path(root) / filename
                new_filename = filename.replace(' ', '-')
                new_path = Path(root) / new_filename
                
                print(f"Would rename: {old_path.relative_to(directory)} → {new_path.relative_to(directory)}")
                rename_preview_count += 1
    
    print(f"\nTotal files that would be renamed: {rename_preview_count}")
    return True


def main():
    """Main function to run the preview script."""
    script_dir = Path(__file__).parent
    workspace_root = script_dir.parent
    docs_images_path = workspace_root / "static" / "docs_images"
    
    print(f"Previewing file renames in: {docs_images_path}")
    print("Files with spaces that would be renamed:\n")
    
    success = preview_rename_files_with_spaces(docs_images_path)
    
    if success:
        print("\nPreview completed successfully!")
        print("To actually rename the files, run: python3 scripts/rename_underscores_to_spaces.py")
    else:
        print("Preview failed!")


if __name__ == "__main__":
    main() 