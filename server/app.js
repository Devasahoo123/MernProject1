import express from  'express';
import dotenv  from 'dotenv' ;

import Routes from './router/auth.js';
import { connectToDB } from "./db/conn.js";
import createDB from  './db/createDB.js';
import cors from "cors";
import cookieParser from 'cookie-parser';

dotenv.config();
connectToDB();
const app = express();
app.use(cookieParser());
app.use(Routes);
app.use(cors({
    origin: "https://mern-project1-five.vercel.app/signup",
    preflightContinue: true
}));

// createDB();



app.listen(process.env.PORT || 4000, ()=>{
    console.log('Server is running on port 4000');
}); 