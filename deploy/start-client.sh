#!/bin/bash
echo "Start client application"
cd ..
# shellcheck disable=SC2164
cd front
pwd
docker run -it -p 80:80 -p 443:443 client
