import redisClient from "../db/redis.js";


async function getLocationFromCache(pinCode) {
    try {
        if (redisClient.isOpen) {
            const cachedData = await redisClient.get(pinCode);
            return cachedData ? JSON.parse(cachedData) : null;
        }
        return null;

    } catch (err) {
        console.error('Error getting data from Redis:', err);
        return null;
    }
}

async function setLocationInCache(pinCode, data, expirationInSeconds) {
    try {
        if (redisClient.isOpen) {
            await redisClient.set(pinCode, JSON.stringify(data));
            await redisClient.expire(pinCode, expirationInSeconds);
        }
        return;
    } catch (err) {
        console.error('Error setting data in Redis:', err);
    }
}


const RedisHelper = {
    getLocationFromCache,
    setLocationInCache
}

export default RedisHelper
