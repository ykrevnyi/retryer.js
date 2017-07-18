FROM node:7.1.0-alpine

ENV service=mongoose-example
ENV appPath=/home/app

RUN addgroup -S app && adduser -S -g app app

RUN mkdir -p $appPath/$service
COPY package.json $appPath/$service
RUN chown -R app:app $appPath/*

USER app
WORKDIR $appPath/$service
RUN npm i -q
