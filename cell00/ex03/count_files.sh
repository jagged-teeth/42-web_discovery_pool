#!/bin/bash

ls -1 | wc -l | awk '{print $1}'
