const express = require("express");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();
require("express-async-errors");

const app = express();

app.use(express.json());

// routes

app.get("/", (req, res) => {
    res.send("jobs api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        app.listen(process.env.PORT || 5000, console.log(`Server is listening on port ${process.env.PORT}..`));
    } catch (err) {
        console.log(err);
    }
}

start();