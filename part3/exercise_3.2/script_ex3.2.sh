#!/bin/sh

git clone https://github.com/Urporgh/backend.git

docker build -t backcab ./backend

docker login -u="${DOCKER_USERNAME}" -p="${DOCKER_PASSWORD}"

docker tag backcab elvari/backcab

docker push elvari/backcab