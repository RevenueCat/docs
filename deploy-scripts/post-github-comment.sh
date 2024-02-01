#!/bin/sh
PRNUMBER=$(echo $1 | grep -oEi '[0-9]+')
STRINGS=$(curl -H "Accept: application/vnd.github+json" -H "Authorization: token $2" https://api.github.com/repos/RevenueCat/docusaurus/issues/$PRNUMBER/comments | sed -r 's/^[^:]*:(.*)$/\1/')

if [[ $STRINGS == *'PR available for testing'* ]]; then
    echo "Comment already exists"
else
    curl -s -H "Authorization: token $2" \
    -X POST -d '{"body": "PR available for testing on https://app-development.revenuecat.com/?switchToPr='"$1"'"}' \
    "https://api.github.com/repos/RevenueCat/docusaurus/issues/$PRNUMBER/comments"
fi
