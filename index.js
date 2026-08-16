// require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoDb = require("./config/mongoDb");
const authRouter = require("./router/authRouter");
const app = express();
app.use(express.json());
app.use(cors());

// MAIN ROUTE
app.use("/api/v1/auth", authRouter);
// Database CONNECTION
mongoDb();

// SERVER PORT
app.listen(5000, () => {
  console.log("Server is Running 5000 port");
});
