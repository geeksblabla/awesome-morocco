const express = require("express"); // import express
const dotenv = require("dotenv").config(); // import dotenv
const colors = require("colors"); // import colors
const { errorHandler } = require("./middleware/errorMiddleware"); // custom error handler
const port = process.env.PORT || 6000; // set our port
const app = express();
const connectDB = require("./config/db"); // import db connection
const cors = require("cors"); // import cors

connectDB(); // connect to db
app.use(cors()); // enable cors
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));



app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`));
