const express = require('express');
const bodyParser = require('body-parser');

// const feedRoutes = require('./routes/feed');

const app = express();
const mongoose = require("mongoose");


app.use(bodyParser.json());
const postsRoute = require("./routes/posts");

// app.use(bodyParser.json());

// app.use((req, res, next) => { //to get access to the server from postman
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

// app.use('/feed', feedRoutes); 

// try{
//     app.listen(3000)
//     console.log("listening to port 3000");
// }catch(err){
//     console.log(err);
// }

app.listen(3000);

// app.use("/bdays", ()=>{
//     console.log("Middleware is running");
// });

app.use("/posts", postsRoute);

app.get("/", (req, res)=>{
    res.send("Hello Home Route")
});

// app.get("/bdays", (req, res)=>{
//     res.send("This is Bdays route")
// });

mongoose.connect(
    "mongodb+srv://pran:dontlookdown@nodetuts.jmktc.mongodb.net/nodetuts?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("Connected to Database");
    }
);
