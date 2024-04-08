import express from  'express';
import dotenv  from 'dotenv' ;

import Routes from './router/auth.js';
import { connectToDB } from "./db/conn.js";
import createDB from  './db/createDB.js';
import cors from "cors";
import cookieParser from 'cookie-parser';

var corsOptions = {
    origin: 'https://mern-project1-five.vercel.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

dotenv.config();
connectToDB();
const app = express();
app.use(cookieParser());
app.use(Routes);
app.use(cors(corsOptions));

// createDB();



app.listen(process.env.PORT || 4000, ()=>{
    console.log('Server is running on port 4000');
}); 