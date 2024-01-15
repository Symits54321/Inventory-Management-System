
// Port
const port = 8100;

// Express app
const express = require('express');
const app = express();

//CORS
const cors = require('cors');
app.use(cors());

// database
const db = require('./config/mongoose');


//routes
app.use('/',require('./routes/index'));


// Listening
app.listen(port,function(err){
    if(err){
        console.log('not able to listen port');
    }
    console.log(`Inventory Management System is Listening to port:${port}`);
    
});