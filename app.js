const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/Peace'

const app= express();

mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection;

con.on('open', function(){
 console.log('connected....');
});

app.use(express.json())

const routerDetails = require('./routers/users');



app.use('/users', routerDetails);


app.listen(9000, function(){
    console.log('Server Started');
})



//nodemon run start --> to run the project