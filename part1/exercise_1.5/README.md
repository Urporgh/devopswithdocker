Size comparison:

```
docker images
REPOSITORY                          TAG       IMAGE ID       CREATED         SIZE
devopsdockeruh/simple-web-service   ubuntu    4e3362e907d5   12 months ago   83MB
devopsdockeruh/simple-web-service   alpine    fd312adc88e0   12 months ago   15.7MB
```

Secret message is: 'You can find the source code here: https://github.com/docker-hy'

**Commands:**
```
docker run -d devopsdockeruh/simple-web-service:alpine
docker exec -ti tender_wiles sh
tail -f ./text.log
```