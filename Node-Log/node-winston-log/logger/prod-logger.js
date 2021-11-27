const { format, createLogger, transports } = require("winston");
const { timestamp, combine, errors, json } = format;

function buildProdLogger() {
  return createLogger({
    format: combine(
      //format.colorize(),
      timestamp(),
      errors({ stack: true }),
      json()
    ),
    defaultMeta: { service: "user-service" },
    transports: [new transports.Console()],
  });
}

module.exports = buildProdLogger;
