import retry from 'retryer';
import redis from 'redis';

const client = redis.createClient('redis://redis/0');

client.on('ready', data => console.log('Connected 🎉'));
client.on('error', err => console.log(`error ${err}`));
