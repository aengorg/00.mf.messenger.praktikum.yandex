const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use('/static', express.static('static'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
