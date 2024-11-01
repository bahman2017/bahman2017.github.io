const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('1,50,2,50');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});