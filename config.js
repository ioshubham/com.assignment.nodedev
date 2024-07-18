const config = {
    ENVIRONMENT: 'ENVIRONMENT',
    PORT: 'PORT'
}

export const getConfig = (key) => process.env[key];

export default config;