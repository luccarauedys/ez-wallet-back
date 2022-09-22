import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import appRouter from "./routers/index.js";
import errorHandler from "./middlewares/errors.middleware.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(appRouter);
app.use(errorHandler);

export default app;
