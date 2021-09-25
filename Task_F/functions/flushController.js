const redis = require('redis');
const redisClient = redis.createClient(); 

exports.flushall = function (req, res) {
    redisClient.flushall(); 
    return res.status(200).send('Flushed all redis cache.');
}