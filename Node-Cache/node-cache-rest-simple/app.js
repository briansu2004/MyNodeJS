import fetch from "node-fetch";
import NodeCache from "node-cache";
import express from "express";

const app = express();
const port = 3000;

const myCache = new NodeCache({ stdTTL: 10 });

const todosUrl = "https://jsonplaceholder.typicode.com/todos";

app.get("/todos", (req, res) => {
  if (myCache.has("todos")) {
    console.log("Getting it from cache");
    return res.send(myCache.get("todos"));
  } else {
    fetch(todosUrl)
      .then((response) => response.json())
      .then((json) => {
        myCache.set("todos", json);
        console.log("Getting it from API");
        res.send(json);
      });
  }
});

app.get("/stats", (req, res) => {
  res.send(myCache.getStats());
});

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
