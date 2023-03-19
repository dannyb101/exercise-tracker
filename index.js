const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/tasks");
const mongoose = require("mongoose");
const notFound = require("./middleware/not-found");
const handleError = require("./middleware/error-handler");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", router);
app.use(notFound);
app.use(handleError);

const start = () => {
	mongoose.set("strictQuery", false);
	mongoose.connect(process.env.MONGO_URI);
	app.listen(PORT, console.log(`Listening on port ${PORT}...`));
};

start();
