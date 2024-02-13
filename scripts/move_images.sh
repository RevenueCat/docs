#!/bin/bash

docs_dir="docs"
images_dir="images"
static_dir="static/$images_dir"
export static_dir
export images_dir

mkdir -p "$static_dir"

process_files() {
    local file="$1"
    echo "📄 Processing $file"

    # Use grep to find image URLs within the markdown content
    grep -Eo "https?://[^][ ]+\.(jpg|png|gif|jpeg|svg)" "$file" | while IFS= read -r url; do
        # Skip already processed images
        if [[ "$url" =~ ^/images ]]; then
            echo "⏭ Skipping already processed image $url"
            continue
        fi

        # Skip images from https://img.shields.io/
        if echo "$url" | grep -q "https://img.shields.io/"; then
            echo "⏭ Skipping badge $url"
            continue
        fi

        filename=$(basename "$url")
        # Generate a unique suffix to prevent overwriting files with common names
        unique_suffix=$(echo "$url" | md5sum | cut -d' ' -f1)
        unique_filename="${filename%.*}_$unique_suffix.${filename##*.}"

        # Check and download the image if it does not already exist
        if [ ! -f "$static_dir/$unique_filename" ]; then
            echo "📥 Downloading $url to $static_dir/$unique_filename"
            wget -q "$url" -O "$static_dir/$unique_filename"
        fi

        # Prepare the replacement text for the markdown file
        replacement="/$images_dir/$unique_filename"
        echo "🔄 Replacing $url with $replacement in $file"

        # Use sed to replace the URL in the file; ensure correct handling of special characters
        escaped_url=$(printf '%s\n' "$url" | sed -e 's/[\/&]/\\&/g')
        escaped_replacement=$(printf '%s\n' "$replacement" | sed -e 's/[\/&]/\\&/g')
        sed -i '' -E "s|$escaped_url|$escaped_replacement|g" "$file"
    done
}

export -f process_files

find "$docs_dir" -type f -name "*.mdx" -exec bash -c 'process_files "$0"' {} \;
find "$docs_dir" -type f -name "*.md" -exec bash -c 'process_files "$0"' {} \;
