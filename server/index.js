const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.use('/static', express.static('../client/source'));
app.use('/vendor', express.static('../client/node_modules'));
app.use('/source', express.static('../client/source'));
app.use('/', express.static('../client/public'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
