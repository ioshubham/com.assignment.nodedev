import http from 'http';
import dotenv from 'dotenv';
import app from './server/app.js';
import config, { getConfig } from './config.js';
import mongodb from './server/db/mongodb.js';
import redisConnect from './server/db/redis.js';

const environment = process.env.NODE_ENV || 'development';

if (environment == 'development') {
    dotenv.config({ path: './environments/.env.development' });
}
else if (environment == 'production') {
    dotenv.config({ path: './environments/.env.production' });
}
else {
    throw new Error(`Unknown environment: ${environment}`);
}


const server = http.createServer(app);
mongodb().catch("failed", console.dir)
// redisConnect();


export default server.listen(getConfig(config.PORT), function () {
    console.log(`${getConfig(config.ENVIRONMENT)} server is running in port: ${getConfig(config.PORT)}`)
});

