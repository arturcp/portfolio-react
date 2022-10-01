#!/bin/bash

npm run-script build
git add .
git commit -m "Build deploy"
git push origin main
git push production main
