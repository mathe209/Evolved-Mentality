#!/bin/bash

# Exit on error
set -e

echo "🛠️ Building the project..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
cd dist
echo > .nojekyll
git init
# Only add remote if it doesn't already exist
if ! git remote get-url origin &> /dev/null; then
  git remote add origin https://github.com/mathe209/Evolved-Mentality.git
fi

git checkout -b gh-pages
git add .
git commit -m "Deploy site"
git push -f origin gh-pages

cd ..
echo "✅ Deployment complete! Visit: https://mathe209.github.io/Evolved-Mentality/"
