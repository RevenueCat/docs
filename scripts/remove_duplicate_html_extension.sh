#!/bin/bash

# Navigate to the build directory
cd build

# Find and rename all .html.html files to .html
find . -type f -name "*.html.html" -print0 | while IFS= read -r -d '' file; do
    # Construct new file name by removing the extra .html extension
    newname=$(echo "$file" | sed 's/.html.html$/.html/')
    # Rename the file
    mv "$file" "$newname"
done

echo "All files have been renamed."
