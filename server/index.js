import * as dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config()
const DB = process.env.DB;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = DB;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(()=>{console.log(`Server running on ${PORT}`)})
  .catch((error) => console.log(error.message));

