#!/bin/bash

# Exit on error
set -e

echo "🛠️ Building the project..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
cd dist
echo > .nojekyll
git init
git remote add origin https://github.com/mathe209/Evolved-Mentality.git
git checkout -b gh-pages
git add .
git commit -m "Deploy site"
git push -f origin gh-pages

cd ..
echo "✅ Deployment complete! Visit: https://mathe209.github.io/Evolved-Mentality/"
