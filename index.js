var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 3005;


//This is to allow API for cross-origin resource sharing
app.use(cors());
//This is to allow our API for parsing json
app.use(express.urlencoded({
    extended: true
}));

//Register routes in the main.js

// http://localhost:3005/tweets - GET, POST
// http://localhost:3005/tweets/user/:id - GET
// http://localhost:3005/tweets/:id - DELETE
// http://localhost:3005/tweets - POST for login session

app.get('/', (req,res) =>{
    res.send("Welcome to Gangster's Paradise")
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
