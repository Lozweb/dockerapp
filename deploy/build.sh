#!/bin/bash
echo "Build docker client"
cd ..
# shellcheck disable=SC2164
cd front
pwd
docker build -f Dockerfile -t client .

echo "Build docker back"
cd ..
# shellcheck disable=SC2164
cd back
pwd
docker build -f Dockerfile -t back .
