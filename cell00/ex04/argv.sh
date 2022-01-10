#!/bin/bash

if [ $# -eq 0 ]
	then
		echo "No arguments supplied"
fi
while (( "$#" )); do
  echo $1
  shift
done
