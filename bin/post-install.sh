#!/bin/bash

echo "Downloading nesasm"
git clone https://github.com/ericandre615/nesasm

sleep 2
echo "running make install on nesasm"
cd ./nesasm
make
echo "build nesasm"
