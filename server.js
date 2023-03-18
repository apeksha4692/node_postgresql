const express = require('express');
const app = express();
require('dotenv').config();
const router = require("./Router/userRouter");


app.use(express.json());
app.use("/api",router);


// we will eventually use env variables
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
});