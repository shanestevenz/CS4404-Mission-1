const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());



const mongodb= require('mongodb');
const uri = "mongodb+srv://Misison1:Mission1@cluster0.ewyurrb.mongodb.net/?retryWrites=true&w=majority"; //username: Misison1    password: Mission1
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

let collection


client.connect()
  .then(() => {
    return client.db('networkSecurity_data').collection('networkSecurity_collection')
  })
  .then(__collection => {
    collection = __collection
    return collection.find({}).toArray()
  })
  .then(console.log)

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/result", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "result.html"));
});


app.get("/getResults", function (req, res) {
    
  if (collection !== null) {
    
    //TODO: dont pass username here: just get everyting
    collection.find({username: req.session.username}).toArray().then(result => res.json(result))
  }
});



app.use("/vote", (req, res) => {
    console.log("Cast Vote")
    console.log(req.body)

 try {
  collection.updateOne( { candidate: req.body.candidate}, { $inc: { numVotes: req.body.numVotes  }}, { upsert: true }).then(result => console.log(result))
 } catch (error) {
  console.log(error);
 }
   
});

//add other API calls
app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, () => console.log("Server started"));