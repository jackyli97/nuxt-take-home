const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
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

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Recipe API',
            version: '1.0.0'
        }
    },
    apis: ['routes/api/recipes.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

console.log(swaggerDocs);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use("/api/recipes", recipes);


const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});