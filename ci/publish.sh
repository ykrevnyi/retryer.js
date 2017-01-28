#!/bin/bash

# Push to the docker registry
docker push $DOCKER_IMAGE_NAME:$DOCKER_TAG

# Publish npm package
if [ "$IS_RELEASE" = true ]; then
  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc
  chmod 0600 .npmrc
  npm publish
fi
