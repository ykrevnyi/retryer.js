#!/bin/bash -e

docker build \
  -t $DOCKER_IMAGE_NAME:$DOCKER_TAG \
  -f ci/Dockerfile \
  .
