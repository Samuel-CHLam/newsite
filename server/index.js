const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv")
const mongoose = require("mongoose"); // library to connect to MongoDB
const categoryRoute = require("./routes/categories");
const courseRoute = require("./routes/courses");
const postRoute = require("./routes/posts");
const publicationRoute = require("./routes/publications");
const teachingRoute = require("./routes/teachings");

// Setup for mongodb
dotenv.config();
app.use(express.json());
const mongoConnectionURL = process.env.mongodbSRV;
const databaseName = "personal-database";

mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB111: ${err}`));

// get is for specific route, use is for any routes that begin with the string.

app.use("/api/categories", categoryRoute);
app.use("/api/courses", courseRoute);
app.use("/api/posts", postRoute);
app.use("/api/publications", publicationRoute);
app.use("/api/teachings", teachingRoute);

app.get("/", (req, res) => res.send("Welcome to Samuel Lam's personal api!"));
app.get("/newEndpoint", (req, res) => res.send("newEndpoint"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));