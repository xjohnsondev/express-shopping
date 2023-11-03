const express = require("express");
const itemsRouter = require("./routes/item")
const ExpressError = require("./expressError");
const morgan = require("morgan")

const app = express();

app.use(express.json());

app.use('/items', itemsRouter)
// app.use(middleware.logger)
app.use(morgan('dev'))













module.exports = app;