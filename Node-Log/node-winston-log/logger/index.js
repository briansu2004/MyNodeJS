const buildDevLogger = require("./dev-logger");
const buildProdLogger = require("./prod-logger");

//console.log(process.env);

let logger = null;
//if (process.env.NODE_ENV === "development") {
if (process.env.NODE_ENV === "production") {
  //console.log("production mode...");
  logger = buildProdLogger();
} else {
  //require("dotenv").config();
  console.log("development mode...");
  logger = buildDevLogger();
}

module.exports = logger;
