const config = {
    ENVIRONMENT: 'ENVIRONMENT',
    PORT: 'PORT',
    MONGO_URI: 'MONGO_URI',
    DB_NAME: 'DB_NAME',
    REDIS_URI: 'REDIS_URI'
}

export const getConfig = (key) => process.env[key];

export default config;