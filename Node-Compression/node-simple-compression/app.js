const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression());

app.get("/", (req, res) => {
  const payload = "Do you need a resource?";
  res.send(payload.repeat(1000));
});

app.listen(4000, () => console.log("Listening on 4000 ...."));
