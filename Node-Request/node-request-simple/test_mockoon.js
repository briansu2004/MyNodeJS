const request = require("request");

const _EXTERNAL_URL = "http://localhost:3000/users/briansu2004";

request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
  console.log(body);
});
