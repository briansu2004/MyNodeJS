import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editText, setEditText] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  const updatePost = (id) => {
    axios
      .put(`http://localhost:5000/api/posts/${id}`, {
        text: editText[id],
      })
      .then((response) => {
        console.log(response.data);
        setEditId(null);
        setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      })
      .catch((error) => {
        console.error('Error updating post:', error);
      });
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {editId === post.id ? (
            <>
              <input
                value={editText[post.id] || ''}
                onChange={(e) =>
                  setEditText({ ...editText, [post.id]: e.target.value })
                }
              />
              <button onClick={() => updatePost(post.id)}>Save</button>
            </>
          ) : (
            <>
              <p>{post.text}</p>
              <button onClick={() => setEditId(post.id)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
