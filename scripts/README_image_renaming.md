# Context-Based Image Renaming Script

This script analyzes markdown files for image references and renames images based on their context in the document. It's designed to replace gibberish UUID-like filenames with meaningful names derived from surrounding content.

## Features

- **Context-aware renaming**: Generates meaningful filenames based on:
  - Alt text from image references
  - Surrounding text and headings
  - Section context where the image appears
- **Smart detection**: Only renames files that look like UUIDs or gibberish
- **Safe operation**: Includes dry-run mode to preview changes
- **Batch processing**: Can process single files or entire directories
- **Reference updating**: Automatically updates markdown file references to use new filenames

## Usage

**Note**: Use `python3` instead of `python` as the script requires Python 3.6+

### Process a single markdown file

```bash
python3 scripts/rename_images_by_context.py docs/getting-started/entitlements/android-products.md
```

### Process all markdown files in a directory

```bash
python3 scripts/rename_images_by_context.py --batch docs/
```

### Dry run (preview changes without making them)

```bash
python3 scripts/rename_images_by_context.py docs/getting-started/entitlements/android-products.md --dry-run
```

### Verbose output (see detailed processing information)

```bash
python3 scripts/rename_images_by_context.py docs/getting-started/entitlements/android-products.md --verbose
```

### Combine options

```bash
python3 scripts/rename_images_by_context.py --batch docs/ --dry-run --verbose
```

## What gets renamed

The script identifies files that should be renamed based on these patterns:

- UUID-like filenames (e.g., `f309ab8-Screen_Shot_2022-07-07_at_2.12.18_PM.png`)
- Long hexadecimal strings
- Files with hash suffixes (e.g., `filename_a1b2c3d4e5f6...`)
- Very long mixed alphanumeric names (over 20 chars with >30% digits)

## Naming strategy

The script generates new names using this priority order:

1. **Alt text**: If the image has meaningful alt text, use that
2. **Context**: Extract relevant words from surrounding text and headings
3. **Fallback**: Use the markdown filename as a base

### Example transformations from android-products.md

Based on the actual output from the script:

| Original                                             | Context/Section                                  | New Name                                         |
| ---------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------ |
| `1bbcf2f-2020-10-09_18.02.44_play.google.com...`     | Under "Create an In-App Product or Subscription" | `create-app-product-subscription.png`            |
| `9b43a80-Screen_Shot_2022-06-28_at_5.51.57_PM...`    | Under "Tips for creating robust product IDs"     | `tips-creating-robust-product.png`               |
| `9f32a53-image_dba8895e87a0d3979f5b87804f93d73d.png` | Screenshot caption context                       | `screenshot-2023-07-27-56-24.png`                |
| `63e2cad-Screen_Shot_2022-06-30_at_3.58.40_PM...`    | Under "Optional) Create an offer"                | `optional-create-offer-you.png`                  |
| `3b927cd-Screen_Shot_2022-07-07_at_2.23.03_PM...`    | Under "Making Subscriptions Editable"            | `making-subscriptions-editable-inappproduct.png` |

## Safety features

- **Dry run mode**: Test without making changes
- **Conflict resolution**: Automatically handles filename conflicts by adding numbers (`-1`, `-2`, etc.)
- **Backup tracking**: Keeps track of all renames to avoid conflicts
- **Path preservation**: Maintains the same directory structure
- **Reference updating**: Updates all markdown references to use new filenames
- **Smart skipping**: Leaves files with already meaningful names unchanged

## Duplicate filename handling

When multiple images would generate the same contextual name (which happens when they appear in similar contexts), the script automatically makes them unique:

```
🔄 first-image.png -> create-app-purchase-create.png
🔄 second-image.png -> create-app-purchase-create-1.png
🔄 third-image.png -> create-app-purchase-create-2.png
```

This ensures no files are overwritten and all names remain meaningful while being unique.

## Sample output

The script provides clear feedback about its operations:

```
🚀 Processing /path/to/docs/getting-started/entitlements/android-products.md

📄 Processing android-products.md
   🔄 1bbcf2f-2020-10-09_18.02.44_play.google.com... -> create-app-product-subscription.png
   🔄 9b43a80-Screen_Shot_2022-06-28_at_5.51.57_PM... -> tips-creating-robust-product.png
   🔄 9f32a53-image_dba8895e87a0d3979f5b87804f93d73d.png -> screenshot-2023-07-27-56-24.png
   ⏭️  Skipping non-consumable-android-support.png (already has meaningful name)
   🔄 Would update 8 image references in android-products.md

✅ Completed processing android-products.md
```

## Making the script executable

To make the script executable and avoid typing `python3` each time:

```bash
chmod +x scripts/rename_images_by_context.py
```

Then you can run it directly:

```bash
./scripts/rename_images_by_context.py docs/getting-started/entitlements/android-products.md --dry-run
```

## Requirements

- **Python 3.6+** (uses type hints and f-strings)
- Standard library only (no external dependencies)

## Directory structure

The script expects this directory structure:

```
project-root/
├── scripts/
│   └── rename_images_by_context.py
├── static/
│   └── docs_images/
│       ├── products/
│       ├── sdk/
│       └── ...
└── docs/
    ├── getting-started/
    └── ...
```

## Tips

1. **Always run with `--dry-run` first** to see what changes would be made
2. Use `--verbose` to see detailed processing information
3. Process single files first to test the naming strategy before batch processing
4. The script preserves files that already have meaningful names
5. Generated names are automatically made unique to avoid conflicts
