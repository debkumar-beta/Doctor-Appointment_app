const express = require("express");
const app = express();
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Srver is running"));

//listen
app.listen(port, () =>
  console.log(`Doctor Appointment app listening on port ${port}!`)
);
