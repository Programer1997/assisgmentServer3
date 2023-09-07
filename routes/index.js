const {Router}  = require('express');
const router  = Router();

// Home page route
router.get('/', (req, res) => {
    res.render('home');
  });
  
  // Login route (you can define the login logic here)
  router.get('/login', (req, res) => {
    res.send('login');
  });
  
  // Register route (you can define the register logic here)
  router.get('/register', (req, res) => {
    res.send('register');
  });
  
  module.exports={router};