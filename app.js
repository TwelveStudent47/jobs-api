const express = require("express");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authRoutes = require("./routes/auth");
const jobsRoutes = require("./routes/jobs");
const connectDB = require("./db/connect");
require("dotenv").config();
require("express-async-errors");

const app = express();

app.use(express.json());

// routes

app.get("/", (req, res) => {
    res.send("jobs api");
});

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT || 5000, console.log(`Server is listening on port ${process.env.PORT}..`));
    } catch (err) {
        console.log(err);
    }
}

start();