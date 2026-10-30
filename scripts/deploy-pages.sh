#!/usr/bin/env bash
# Deploy to GitHub Pages (project site: aifriend.github.io/personal).
# Builds with the /personal base path, then force-pushes dist/ to gh-pages.
set -euo pipefail
cd "$(dirname "$0")/.."

ORIGIN=$(git config --get remote.origin.url)
AUTHOR_NAME=$(git config user.name || echo 'deploy')
AUTHOR_EMAIL=$(git config user.email || echo 'deploy@localhost')

ASTRO_BASE=/personal npm run build

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
cp -R dist/ "$TMP/site"
cd "$TMP/site"
touch .nojekyll
git init -q -b gh-pages .
git add -A
git -c user.name="$AUTHOR_NAME" -c user.email="$AUTHOR_EMAIL" \
  commit -qm "Deploy: Pages build (base /personal)"
git push -q --force "$ORIGIN" HEAD:gh-pages

echo "Deployed → https://aifriend.github.io/personal/ (live in ~1 min)"
