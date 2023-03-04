"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
app.get("/", (req, res, next) => {
    res.send("Root route is working");
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
