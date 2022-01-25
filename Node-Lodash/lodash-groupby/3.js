const _ = require("lodash");

// The source object
var obj = {
  Name: "GeeksforGeeks",
  password: "gfg@1234",
  username: "your_geeks",
};

// Using the _.omit() method
console.log(_.omit(obj, ["password", "username"]));
