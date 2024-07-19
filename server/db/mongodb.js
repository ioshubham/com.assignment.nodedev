import mongoose from 'mongoose';
import config, { getConfig } from '../../config.js';


async function dbConnect() {
    try {
        await mongoose.connect(getConfig(config.MONGO_URI), { dbName: getConfig(config.DB_NAME) })
            .then(() => console.log("You successfully connected to MongoDB!"))
            .catch(e => console.log("Database connection failed ", e));

    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;