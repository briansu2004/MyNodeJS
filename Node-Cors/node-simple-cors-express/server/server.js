const express = require("express");
const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5500",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

app.put("/data", (req, res) => {
  res.json({ name: "Brian", favoriteFood: "Fish" });
});

app.listen(3000);
