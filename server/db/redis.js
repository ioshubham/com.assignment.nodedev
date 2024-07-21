// import redis from 'redis';
// import config, { getConfig } from '../../config.js';

// async function redisConnect() {
//     try {
//         await redis.createClient({ url: getConfig(config.REDIS_URI) }).connect();
//         console.log("Redis connected succesfully!")
//     }
//     catch (err) {
//         console.error('Redis connection error:', err);
//     }

// }


// export default redisConnect;

import { createClient } from 'redis';
import config, { getConfig } from '../../config.js';

const redisClient = createClient({ url: getConfig(config.REDIS_URI) });

redisClient.on('error', (err) => console.error('Redis Client Error', err));

// Connect to Redis
(async () => {
    try {
        await redisClient.connect();
        console.log("Redis connected successfully!");
    } catch (err) {
        console.error('Failed to connect to Redis:', err);
    }
})();

export default redisClient;

