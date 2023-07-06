#!/bin/bash
echo "Start backend application"
cd ..
# shellcheck disable=SC2164
cd back
pwd
docker run -it -p 5000:5000 back
