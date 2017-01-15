
<h1 align="center">retryer.js examples</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/basic/">basic</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/request/">request</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongoose/">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongodb/">mongodb</a> &bull;
  <b>redis</b> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/angular/">angular</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/react/">react</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/async-await/">async/await</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/">advanced-options</a>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/blob/docs/docs/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

In this `redis` example we will reconnect to the `Redis` data store.

## Quick Start

### Given you have code:

```javascript
const client = redis.createClient('redis://redis/test-db');

client.on('ready', data => console.log('Connected 🎉'));
client.on('error', err => console.log('error'));
```

### With `retryer` it looks 100% same
`Redis` perfectly handles retries by itself.

```javascript
const client = redis.createClient('redis://redis/test-db');

client.on('ready', data => console.log('Connected 🎉'));
client.on('error', err => console.log('error'));
```
<h5 align="center">Full <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/redis/index.js">example here</a></h5>

## Test it yourself
### Using `Docker`
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `redis` example.
```bash
cd retryer.js/examples/redis
```

Build image.
```bash
docker-compose build redis-example
```

Start `redis` example.
```bash
docker-compose run --rm redis-example npm start
```

### Not Using `Docker`
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `redis` example.
```bash
cd retryer.js/examples/redis
```

Make sure redis is running.
```bash
redis-cli ping
# -> PONG
```

Install dependencies.
```bash
npm install
```

Start `redis` example.
```bash
npm start
```

## Need Help?
Please submit an issue on GitHub and provide information about your setup.
