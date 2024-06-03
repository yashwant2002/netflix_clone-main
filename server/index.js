import express from 'express'
import cors from 'cors';
import Connection from './db/db.js';
import userRoutes from './routes/user.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config()
const FRONTEND_URL = process.env.FRONTEND_URL;

const PORT = 8000;

const app = express();

// configurations 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: [FRONTEND_URL, 'http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE']
}))
app.use(cookieParser())


// routes 
app.use("/auth", userRoutes)

// database connection 
Connection()

// starting the express server 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))