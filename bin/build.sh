#!/usr/bin/env bash

set -e

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8

export PATH=$NODEJS_BIN_LATEST:$YARN_BIN_LATEST:$PATH

export PATH=$(npm bin):$PATH

echo "node: $(node -v)"
echo "npm: v$(npm -v)"

NODE_ENV=development npm install

NODE_ENV=production npm run build

mkdir output

cp -rf dist/* output/