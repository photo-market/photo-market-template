#!/bin/bash

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push ${IMAGE_NAME}

# Run
# docker run --rm -p 9000:80 saniaky/photo-market-tpl:latest