const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.use('/static', express.static('../client/source')); // css
app.use('/vendor', express.static('../client/node_modules')); // hbs
app.use('/source', express.static('../client/source')); // ts
app.use('/', express.static('../client/public')); // build js

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
