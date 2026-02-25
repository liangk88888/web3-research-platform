#!/bin/bash
read -s -p "Enter your Gemini API Key: " api_key
echo ""
echo "GEMINI_API_KEY=$api_key" > .env
echo "API key saved securely to .env"
