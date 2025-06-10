#!/usr/bin/env python3

import re

# Test content that contains the discord image reference
test_content = '''![](/images/07cde5bd-discord-message-example-aceaac4fd516.png "Discord message example")'''

# Fixed image patterns to match various reference formats
image_patterns = [
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

def normalize_image_path(path: str) -> str:
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
        path = path[18:]  # Remove '../../../static/'
    elif path.startswith('../../static/'):
        path = path[15:]  # Remove '../../static/'
    elif path.startswith('../static/'):
        path = path[10:]  # Remove '../static/'
    elif path.startswith('/'):
        path = path[1:]   # Remove leading '/'
        
    # Normalize path separators
    path = path.replace('\\', '/')
    
    return path

print("Testing regex patterns against discord image reference:")
print(f"Test content: {test_content}")
print()

for i, pattern in enumerate(image_patterns):
    print(f"Pattern {i+1}: {pattern}")
    matches = re.findall(pattern, test_content, re.IGNORECASE | re.MULTILINE)
    print(f"Matches: {matches}")
    for match in matches:
        normalized = normalize_image_path(match)
        print(f"  Original: {match}")
        print(f"  Normalized: {normalized}")
    print() 