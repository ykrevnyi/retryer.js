#!/bin/bash

docker build \
  -t $DOCKER_IMAGE_NAME:$DOCKER_TAG \
  -f Dockerfile \
  .
