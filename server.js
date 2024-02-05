const express = require("express");
const color = require("colors");
//rest object
const app = express();

//rest api
app.get("/", (req, res) => {
  res.send({ message: "Welcome to ecommer app" });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgCyan.white);
});
