const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

const dbURL = process.env.dbURL;

app.use(bodyParser.json());
const postsRoute = require("./routes/posts");
// app.use((req, res, next) => { //to get access to the server from postman
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.use("/posts", postsRoute);
app.get("/", (req, res)=>{
    res.send("Hello Home Route")
});

try{
    mongoose.connect(
        dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => {
            console.log("Connected to Database");
            app.listen(3000);
            console.log("Listening to port 3000");
        }
    )
}catch(err){
    console.log(err);
}