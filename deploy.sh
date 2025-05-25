#!/bin/bash

set -e

echo "🛠️ Building the project..."
npm run build

echo "🚀 Deploying to GitHub Pages..."

cd dist
echo > .nojekyll

# 💥 Remove old Git repo if it exists
rm -rf .git

# 🚀 Fresh Git repo
git init
git checkout -b gh-pages
git remote add origin https://github.com/mathe209/Evolved-Mentality.git

git add .
git commit -m "Deploy site"
git push -f origin gh-pages

cd ..
echo "✅ Deployment complete! Visit: https://mathe209.github.io/Evolved-Mentality/"
