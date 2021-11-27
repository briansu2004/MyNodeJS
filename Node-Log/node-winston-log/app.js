// Tradtional console log
// console.log("Hello");
// console.info("text info");
// console.warn("text warn");
// console.error("text error");
// console.error(new Error("Something went wrong"));

require("dotenv").config();

const logger = require("./logger");

logger.info("text info", { meta: "meta1" });
logger.warn("text warn");
logger.error("text error");
logger.debug("text debug");
logger.error(new Error("Something went wrong"));
