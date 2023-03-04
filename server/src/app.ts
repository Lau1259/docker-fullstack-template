import { NextFunction, Request, Response } from "express";

const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Root route is working");
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
