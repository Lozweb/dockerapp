#!/bin/bash
echo "Start backend application"
cd ..
# shellcheck disable=SC2164
cd postgres
pwd
docker run -rm --name database -p 5432:5432 -d database
