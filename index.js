const path = require('path');

const express = require('express');
const app = express();

const port = 3000;

const {router} = require('./routes/index.js');
//console.log(router);



//Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); 
app.set('views',path.join(__dirname, 'views'));

console.log(path.join(__dirname, 'public')); //just Testing


//middleware
app.use(express.urlencoded());
app.use('/',router);

//example to understand very well
app.get('/house',(req,res)=>{
    res.sendFile(path.join(__dirname + `/./views/house.html`));
});

//Application listening configuration
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});