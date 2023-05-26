import * as dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import createPosts from './routes/posts.js';

dotenv.config()
const DB = process.env.DB;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = DB;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(()=>{console.log(`Server running on ${PORT}`)})
  .catch((error) => console.log("from app", error.message));

  app.use('/', (req, res) => {
    res.send('This is the homepage') ;
   });
   
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
