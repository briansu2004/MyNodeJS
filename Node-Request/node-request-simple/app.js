const request = require("request");

const _EXTERNAL_URL = "https://jsonplaceholder.typicode.com/todos/1";

request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
  //console.log(res);
  console.log(body);
});
