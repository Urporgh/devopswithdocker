Changes made:

Backend dockerfile: `ENV REQUEST_ORIGIN=http://localhost:5000 -> http://localhost`

docker-compose.yml: added `REDIS_HOST=redis` to backend environment variables