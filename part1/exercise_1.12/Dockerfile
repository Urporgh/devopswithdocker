FROM ubuntu:18.04

EXPOSE 5000

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get install curl -y && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash && \
    apt-get install nodejs -y && \
    node -v && npm -v && \
    npm install && npm run build && \
    npm install -g serve

CMD serve -s -l 5000 build
