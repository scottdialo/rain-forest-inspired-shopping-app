const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());



app.listen(5000, () => {
  console.log("server is up and running...");
});
