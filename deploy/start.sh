#!/bin/bash
echo "update app"
./update.sh

echo "build containers"
./build.sh

echo "run application"

./start-back.sh
./start-client.sh
