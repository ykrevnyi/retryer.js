#!/bin/bash

sudo docker push $DOCKER_IMAGE_NAME:$BRANCH.$BUILD_NUMBER
