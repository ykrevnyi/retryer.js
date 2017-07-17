FROM node:7.1.0

ENV service=redis-example
ENV appPath=/home/app

RUN useradd --user-group --create-home --shell /bin/false app

RUN mkdir -p $appPath/$service
COPY package.json $appPath/$service
RUN chown -R app:app $appPath/*

USER app
WORKDIR $appPath/$service
RUN npm i -q
