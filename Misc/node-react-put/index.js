const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
// app.use(
//   cors({
//     origin: 'http://localhost:3000', // Allow requests only from this origin
//   })
// );

let posts = [
  { id: 1, text: 'Hello, CodeSignal' },
  { id: 2, text: 'I am loving these lessons' },
];

app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json(newPost);
});

// TODO: Add PUT endpoint for /api/posts/:id, updating the provided post
// The updated post text is provided in the request's body
// app.put('/api/posts/:id', (req, res) => {
//   const { id } = req.params; // Extract the post ID from the route parameter
//   const { text } = req.body; // Extract the updated text from the request body

//   // Ensure ID is parsed as a number since `posts` array uses numeric IDs
//   const postIndex = posts.findIndex((post) => post.id === parseInt(id, 1));

//   if (postIndex === -1) {
//     // If no matching post is found, return a 404 response
//     return res.status(404).json({ error: 'Post not found' });
//   }

//   // Update the text of the post
//   posts[postIndex].text = text;

//   // Return the updated post
//   res.json(posts[postIndex]);
// });

app.put('/api/posts/:id', (req, res) => {
    const { id } = req.params; // Extract `id` from URL
    const { text } = req.body; // Extract `text` from request body
  
    const postIndex = posts.findIndex((post) => post.id === parseInt(id, 10));
    if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });
  
    posts[postIndex].text = text;
    res.json(posts[postIndex]);
  });

  
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(5000, () => console.log('App listening on port 5000'));
