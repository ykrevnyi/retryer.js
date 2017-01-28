#!/bin/bash

# Push to the docker registry
docker push $DOCKER_IMAGE_NAME:$DOCKER_TAG

# Publish npm package
if [ "$IS_RELEASE" = true ]; then
  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
  echo "//registry.npmjs.org/:email=$NPM_EMAIL" >> ~/.npmrc
  chmod 0600 .npmrc
  cat .npmrc
  npm --no-git-tag-version version $DOCKER_TAG
  npm publish
fi
