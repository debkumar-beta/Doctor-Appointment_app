const express = require("express");
const app = express();
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

//mongodb conn
connectDB();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

// app.get("/", (req, res) => res.send("Server is running"));
//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
//listen
app.listen(port, () =>
  console.log(`Doctor Appointment app listening on port ${port}!`)
);
