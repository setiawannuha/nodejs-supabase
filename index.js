require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const router = require("./src/routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = process.env.APP_PORT || 3009;
app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});
