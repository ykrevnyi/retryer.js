#!/bin/bash

docker run --rm $DOCKER_IMAGE_NAME:$DOCKER_TAG npm test
