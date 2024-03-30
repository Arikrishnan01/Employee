import express from "express";
import colors from "colors";
import cors from 'cors';
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import bodyParser from 'body-parser';
import empRoutes from "./routes/empRoute.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT;

/**DB CONNECTION  */
connectDB();

/**MIDDLEWARE */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**CORS */
app.use(cors());

/** HOME API FOR SERVER */
app.get('/',(req,res) => {
    return res.status(200).json({
        message: "API RUNNING SUCCESSFULLY..."
    });
});

// SUB ROUTER
app.use('/emp', empRoutes);


/** SERVER LISTEN WITH PORT NUMBER */
app.listen(PORT, () => {
    console.log(`SERVER STARTED : ${PORT}`.bold.yellow);
});