import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import cors from 'cors';
import connectDb from './db';
connectDb();
import authRouter from './routes/index';
import webhookRouter from './webhook/index';


import { config } from "./utils/config/index";
import res from 'express/lib/response';


const {port} = config;


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(cors());

app.use('/auth', authRouter);
app.use('/webhook', webhookRouter);





app.get("/server", (req, res)=>{
    res.sendFile(__dirname+'/javaScript/index.js');
});



app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
});