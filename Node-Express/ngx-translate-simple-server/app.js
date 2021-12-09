const express = require("express");
const posts = require("./posts");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

// const posts = [
//   { title: 1, description: "Course 1" },
//   { title: 2, description: "Course 2" },
//   { title: 3, description: "Course 3" },
// ];

app.get("/posts", (req, res) => {
  res.send(posts);
  //res.send([{ title: "1", description: "1" }]);
});

app.post("/posts/:id", (req, res) => {
  //res.send(posts);

  console.log("req.params: ", req.params);
  console.log("req.body: ", req.body);

  if (req.body.quantity) {
    qty = parseInt(req.body.quantity);
    if (!qty || qty > 100) {
      res.status(400).send({ message: "Quantity not found or too large" });
    } else {
      res.status(200).send({ message: "Congratulations" });
    }
  } else {
    res.status(400).send({ message: "Quantity not found" });
  }
});

const port = process.env.NODE_EXPRESS_PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port} ...`));
