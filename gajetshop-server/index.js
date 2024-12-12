const express = require('express');
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors())
app.get('/', (req, res) => {
  res.send('GAJETSHOP SERVER IS READY')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})