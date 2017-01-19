#!/bin/bash

sudo docker build \
  -t $DOCKER_IMAGE_NAME:$BRANCH.$BUILD_NUMBER \
  -f container_images/Dockerfile-nodejs-v7.1.0 \
  container_images/
