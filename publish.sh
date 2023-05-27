#!/bin/bash

VERSION=$@

if [ -z "$VERSION" ]; then
    echo "please, define version, run:  bash publish.sh 16-alpine3.17"
    exit
fi

echo "Make v$VERSION"

docker build -t valmirphp/node-puppeteer:latest -f Dockerfile .

docker tag valmirphp/node-puppeteer:latest "valmirphp/node-puppeteer:$VERSION"

docker push "valmirphp/node-puppeteer:latest"
docker push "valmirphp/node-puppeteer:$VERSION"
