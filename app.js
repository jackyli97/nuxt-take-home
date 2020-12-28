const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const recipes = require("./routes/api/recipes");
const bodyParser = require("body-parser")
var cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

app.get("/", (req, res)=>{
    res.send("Hello World!");
});

app.use("/api/recipes", recipes)

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});