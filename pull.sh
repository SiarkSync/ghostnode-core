#!/bin/bash
echo "🔄 Pulling latest from GitHub..."
git stash
git pull origin main
echo "✅ Repo updated."
