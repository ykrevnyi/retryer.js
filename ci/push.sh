#!/bin/bash

docker push $DOCKER_IMAGE_NAME:$BRANCH.$BUILD_NUMBER
