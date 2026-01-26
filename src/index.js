
const express = require('express');

const app = express();

const PORT = 3000;

const postRouter= require('./routes/post.routes');

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});