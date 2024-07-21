import mongoose from 'mongoose';
import config, { getConfig } from '../../config.js';


async function dbConnect() {
    try {
        await mongoose.connect(getConfig(config.MONGO_URI), { dbName: getConfig(config.DB_NAME) })
            .then(() => console.log("MongoDB connected successfully!"))
            .catch(e => console.log("Database connection failed ", e));

    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;