import { createClient } from 'redis';
import config, { getConfig } from '../../config.js';

const redisClient = createClient({ url: getConfig(config.REDIS_URI) });

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
    try {
        await redisClient.connect();
        console.log("Redis connected successfully!");
    } catch (err) {
        console.error('Failed to connect to Redis:', err);
    }
})();

export default redisClient;

