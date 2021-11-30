const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();
const port = 5000;

const swaggerDefinition = {
  info: {
    title: "Library API",
    version: "1.0.0",
  },
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["app.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
console.log(swaggerDocs);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /books:
 *  get:
 *      description: Get all books
 *      response:
 *          200:
 *              description: Success
 */
app.get("/books", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Harry Porter",
    },
  ]);
});

/**
 * @swagger
 * /books:
 *  post:
 *      description: Create a new book
 *      parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *      response:
 *          201:
 *              description: Created
 */
app.post("/books", (req, res) => {
  res.status(201).send();
});

app.listen(port, () => console.log(`Listening on ${port}`));
