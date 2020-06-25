const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.use("/", express.static("../client/public"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
