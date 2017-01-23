#!/bin/bash

# Push to the docker registry
docker push $DOCKER_IMAGE_NAME:$DOCKER_TAG

# Publish npm package
if [ "$IS_RELEASE" = true ]; then
  npm version DOCKER_TAG
  npm publish
fi
