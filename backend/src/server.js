import express from "express";
import cors from "cors";
import colors from "colors";
import config from "./config";
import routes from './routes';
import morgan from 'morgan'
import connectDB from "./config/db.js";
import { notFound, errorHandler } from './middleware/errorMiddleware'

import products from "./data/products";
const app = express();
// dotenv.config();
connectDB();
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

app.use(morgan('dev'))

app.get("/", (req, res) => {
  res.send("API is running");
});


//** routes
app.use('/api', routes);
app.use(notFound)
app.use(errorHandler)

const PORT = config.port || 5000;
app.listen(
  PORT,
  console.log(`server running in ${config.env} on port ${PORT}`.yellow.bold)
);
