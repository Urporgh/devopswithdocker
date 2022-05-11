FROM node:16 as build-stage

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL="http://127.0.0.1:8080"

RUN npm install && \
    npm run build && \
    npm install -g serve

FROM nginx:1.19-alpine

COPY --from=build-stage /usr/src/app/build/ /usr/share/nginx/html