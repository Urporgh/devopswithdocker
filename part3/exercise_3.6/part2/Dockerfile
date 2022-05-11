FROM golang:1.16 as build-stage

WORKDIR /usr/src/app

COPY . .

ENV REQUEST_ORIGIN=http://localhost

RUN CGO_ENABLED=0 go build && go test ./...

FROM scratch

EXPOSE 8080

COPY --from=build-stage /usr/src/app/server /server

ENTRYPOINT ["/server"]