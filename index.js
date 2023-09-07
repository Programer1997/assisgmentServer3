const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

const {router} = require('./routes/index.js');

//Set EJS as the view emgine
app.set('view engine', 'ejs');

app.use(express.static(__dirname + './public'));

app.set('views',path.join(__dirname, 'views'));


//middleware
app.use(express.json());
app.use('/',router);


/*
app.get('/',(req,res)=>{
    res.send('listening from server jajaj');

});
*/

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});