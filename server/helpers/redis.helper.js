import redisClient from "../db/redis.js";

async function getLocationFromCache(pinCode) {
    try {
        const cachedData = await redisClient.get(pinCode);
        return cachedData ? JSON.parse(cachedData) : null;
    } catch (err) {
        console.error('Error getting data from Redis:', err);
        return null;
    }
}

async function setLocationInCache(pinCode, data, expirationInSeconds) {
    try {
        await redisClient.set(pinCode, JSON.stringify(data));
        await redisClient.expire(pinCode, expirationInSeconds);
    } catch (err) {
        console.error('Error setting data in Redis:', err);
    }
}


const RedisHelper = {
    getLocationFromCache,
    setLocationInCache
}

export default RedisHelper
