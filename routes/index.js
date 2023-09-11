const express = require('express');
const router = express.Router();
import bcrypt from 'bcrypt';
//const {Router}  = require('express');  ESTE ES lo mismo que lo de arriba solo que usando DESESTRUCTURACION
//const router  = Router();   LINEA 1 Y 2 === LINEA 4 Y 5


//saving USERS in my Server : 
const users = [];

// Home page route
router.get('/', (req, res) => {
    res.render('home');
  });
  
  
  router.get('/login', (req, res) => {
    res.render('login');
  });
  
  
  router.get('/register', (req, res) => {
    res.render('register');
  });

  router.post('/register', (req, res) => {
    const data = req.body;
    const email = req.body.email;
    const password = req.body.password;
    console.log(data);
    console.log(email);
    console.log(password);

    const newUser = {"email" : email, "password": password };
    users.push(newUser);
    console.log(users);

    bcrypt(password); // im working on this rigth now 

    //res.send(`your email : ${email} and your password :  ${password} have been save sucessfully`)
    res.redirect('/login');
  });

  router.post('/login',(req,res)=>{
    const userObj = req.body; //data user i just fill it out with this i get the object with  : {email,password}
    const emailCheck = userObj.email;
    const passwordCheck = userObj.password;

    console.log(emailCheck);
    console.log(passwordCheck);


    const foundUser = findMyUser(emailCheck,passwordCheck);
    console.log(foundUser + " since post login");

    if(foundUser){
        res.redirect('/');
    }else { 
        res.status(404).send('the user is not register please register yourself first');
    }

  });

  function findMyUser(email,password){
     const userObject=users.find(object => {
        return object.email == email && object.password ==password;
    });
    return userObject;
    //console.log(userObject);
  };
  
  module.exports={router};


  function bcrypt (password){
    const saltRound = 10;
    const passwordFunction = password;
  
  bcrypt.hash(passwordFunction,saltRound,()=>{

  });

  }
