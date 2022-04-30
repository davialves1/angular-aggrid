const express = require("express");
const cors = require("cors");
const dataset = require("./DataSet");

const port = 8080;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(dataset);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
