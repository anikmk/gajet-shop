const express = require('express');
require('dotenv').config();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('GAJETSHOP SERVER IS READY')
})

const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@anik.34iapyi.mongodb.net/?retryWrites=true&w=majority&appName=Anik`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  catch(error) {
    console.log(error)
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})