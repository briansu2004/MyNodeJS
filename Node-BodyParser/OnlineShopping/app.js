const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();

//false: querystring
//true: qs
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  fs.createReadStream(path.join(__dirname, "views", "add-product.html")).pipe(
    res
  );
});

app.use("/save-product", (req, res, next) => {
  console.log("Saving product ...");
  console.log(req.body);
  res.send("Saving product successfully");
});

app.listen(3000);
