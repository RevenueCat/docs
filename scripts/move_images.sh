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
        filename=$(basename "$url")
        # Download the image if it does not exist
        if [ ! -f "$static_dir/$filename" ]; then
            echo "📥 Downloading $url to $static_dir/$filename"
            wget -q "$url" -P "$static_dir"
        fi
        # Update the file to reference the local copy of the image
        replacement="$images_dir/$filename"
        echo "🔄 Replacing $url with $replacement in $file"
        sed -i.bak "s|$url|$replacement|g" "$file" && rm "${file}.bak"
    done < <(grep -oE '!\[.*?\]\((https?:\/\/[^ ]+).*\)' "$file")
}

export -f process_files

find "$docs_dir" -type f -name "*.mdx" -exec bash -c 'process_files "$0"' {} \;
