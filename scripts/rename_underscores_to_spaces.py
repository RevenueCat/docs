#!/usr/bin/env python3
"""
Script to rename files in the /static/docs_images folder to replace spaces with dashes.

This script recursively traverses the static/docs_images directory and renames any files
that contain spaces in their filenames by replacing the spaces with dashes.
"""

import os
import sys
from pathlib import Path


def rename_files_with_spaces(directory_path):
    """
    Recursively rename files with spaces to have dashes instead.
    
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
    
    renamed_count = 0
    
    # Walk through all files and subdirectories
    for root, dirs, files in os.walk(directory):
        for filename in files:
            if ' ' in filename:
                old_path = Path(root) / filename
                new_filename = filename.replace(' ', '-')
                new_path = Path(root) / new_filename
                
                try:
                    old_path.rename(new_path)
                    print(f"Renamed: {old_path.relative_to(directory)} → {new_path.relative_to(directory)}")
                    renamed_count += 1
                except OSError as e:
                    print(f"Error renaming {old_path}: {e}")
    
    print(f"\nTotal files renamed: {renamed_count}")
    return True


def main():
    """Main function to run the script."""
    script_dir = Path(__file__).parent
    workspace_root = script_dir.parent
    docs_images_path = workspace_root / "static" / "docs_images"
    
    print(f"Renaming files in: {docs_images_path}")
    print("Replacing spaces with dashes in filenames...\n")
    
    success = rename_files_with_spaces(docs_images_path)
    
    if success:
        print("File renaming completed successfully!")
    else:
        print("File renaming failed!")
        sys.exit(1)


if __name__ == "__main__":
    main() 