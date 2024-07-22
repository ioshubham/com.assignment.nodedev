import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import pincoderouter from './routes/pincode.route.js';

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/pincode", pincoderouter)
app.use("/find", pincoderouter)

export default app;
