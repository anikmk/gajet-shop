const express = require('express');
require('dotenv').config();
const cors = require("cors");
var jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@anik.34iapyi.mongodb.net/?retryWrites=true&w=majority&appName=Anik`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const userCollection = client.db("gajetShop").collection("users");
const productCollection = client.db("gajetShop").collection("products");
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(" connected to MongoDB!");
  } 
  catch(error) {
    console.log(error)
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('GAJETSHOP SERVER IS READY')
})

// Genarate jwt token 
app.post('/jsonwebtoken',async(req,res) => {
  try{
    const userEmail = req.body;
    if(userEmail){
     const token = jwt.sign({userEmail},process.env.SECRET_TOKEN_KEY,{expiresIn:"5h"});
      res.send({token})
    }
  }
  catch(err){
    res.send({error:err})
  }
})
// post request for single users
app.post('/users',async(req,res) => {
  try{
    const usersData = req.body;
    const query = {email:usersData.email};
    const existingUser = await userCollection.findOne(query);
    if(existingUser){
      return res.send({message:"user already store in db"})
    }
    else{
      const result = await userCollection.insertOne(usersData);
      res.send(result);
    }
  }
  catch(err){res.send({error:"internal server error"})}
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})