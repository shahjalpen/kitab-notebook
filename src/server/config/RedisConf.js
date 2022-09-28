//Currently not in use..

const redis = require('redis');
const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379,
  detect_buffers: true,
});

client.on('error', function (error) {
  console.error(error);
});

module.exports.clientObj = client;
