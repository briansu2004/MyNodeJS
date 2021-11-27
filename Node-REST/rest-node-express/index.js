const Joi = require("joi");
const express = require("express");

const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
];

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

// http://localhost:5000/api/courses
app.get("/api/courses", (req, res) => {
  //res.send([1, 2, 3]);
  res.send(courses);
});

// http://localhost:5000/api/courses/2
app.get("/api/courses/:id", (req, res) => {
  //res.send(req.params.id);
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    // 404 Not Found
    res.status(404).send("The course with the given ID was not found");
    return;
  }

  res.send(course);
});

// http://localhost:5000/api/posts/2021/11
// http://localhost:5000/api/posts/2021/11?sortBy=name
app.get("/api/posts/:year/:month", (req, res) => {
  //res.send(req.params);
  res.send(req.query);
});

app.post("/api/courses", (req, res) => {
  // Old Joi
  //   const schema = {
  //     name: Joi.string().min(3).required(),
  //   };
  //   const result = Joi.validate(req.body, schema);
  //   console.log(result);

  // New Joi
  //   const schema = Joi.object({
  //     name: Joi.string().min(3).required(),
  //   });

  //   const result = schema.validate(req.body);
  //console.log(result);

  //   const schema = Joi.object({ name: Joi.string() .min(6) .required(),
  //     email: Joi.string() .min(6) .required() .email(),
  //     password: Joi.string() .min(6) .required() });

  //   if (!req.body.name || req.body.name.length < 3) {
  //     // 400 Bad Request
  //     res.status(400).send("Name is required and should be minimum 3 characters");
  //     return;
  //   }

  //   if (result.error) {
  //     // 400 Bad Request
  //     //res.status(400).send("Name is required and should be minimum 3 characters");
  //     res.status(400).send(result.error.details[0].message);
  //     return;
  //   }

  const result = validateCourse(req.body);
  //const { error } = validateCourse(req.body); // result.error
  const error = result?.error;

  if (error) {
    // 400 Bad Request
    //res.status(400).send("Name is required and should be minimum 3 characters");
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  // #1
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    // 404 Not Found
    res.status(404).send("The course with the given ID was not found");
    return;
  }

  // #2
  const { error } = validateCourse(req.body); // result.error

  if (error) {
    // 400 Bad Request
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // #3
  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}

app.delete("/api/courses/:id", (req, res) => {
  // #1
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    // 404 Not Found
    res.status(404).send("The course with the given ID was not found");
    return;
  }

  // #2
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // #3
  res.send(course);
});

// PORT
const port = process.env.NODE_EXPRESS_PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port} ...`));
