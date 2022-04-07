**Command:**

```docker run -it --name curling ubuntu sh -c 'echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'```

In another terminal:
```docker exec -ti curling bash```

Inside container:
```apt-get update && apt-get install curl```
