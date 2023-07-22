#!/bin/bash

if [ ! -d "node_modules" ]; then
  # Install client and server dependencies
  npm install
fi

# Start the server
npm run server &

# Start the client
npm run client