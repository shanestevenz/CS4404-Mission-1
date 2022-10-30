const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/vote", (req, res) => {
 
    console.log(req.body.candidate)
});

//add other API calls
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("Server started"));