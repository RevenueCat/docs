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
    while IFS= read -r line; do
        # Extract URL, ignoring alt text if present
        url=$(echo "$line" | sed -E 's/.*\((https?:\/\/[^ ]+).*\)/\1/')

        # Skip images from https://img.shields.io/
        if echo "$url" | grep -q "https://img.shields.io/"; then
            echo "⏭ Skipping badge $url"
            continue
        fi

        filename=$(basename "$url")
        # Create a unique filename by appending a hash of the URL to the original filename
        # This prevents different images with the same name (like giphy.gif images) from being overwritten
        unique_suffix=$(echo "$url" | md5sum | cut -d' ' -f1)
        unique_filename="${filename%.*}_$unique_suffix.${filename##*.}"

        # Download the image if it does not exist
        if [ ! -f "$static_dir/$unique_filename" ]; then # Fixed typo in variable name here
            echo "📥 Downloading $url to $static_dir/$unique_filename"
            wget -q "$url" -O "$static_dir/$unique_filename"
        fi

        # Update the file to reference the local copy of the image
        replacement="/$images_dir/$unique_filename"
        echo "🔄 Replacing $url with $replacement in $file"
        sed -i.bak "s|$(echo "$url" | sed 's|[\&/]|\\&|g')|$replacement|g" "$file" && rm "${file}.bak"
    done < <(grep -oE '!\[.*?\]\((https?:\/\/[^ ]+).*\)' "$file")
}

export -f process_files

find "$docs_dir" -type f -name "*.mdx" -exec bash -c 'process_files "$0"' {} \;
