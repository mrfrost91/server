var express = require('express');
var router = express.Router();

// Register
router.get('/register', function(req, res){
    res.render('register');
});

// Login
router.get('/login', function(req, res){
    res.render('login');
});

//router.post("/register", function(req, res) {
    //console.log(req.body);
    //var username = req.body.username;
   //var password = req.body.password;
    //var password2 = req.body.password2;
    //var firstname = req.body.firstname;
    //var lastname = req.body.lastname;

   // req.checkBody('username', 'Username is required').notEmpty();
    //req.checkBody('password', 'Password is required').notEmpty();
    //req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    //var errors = req.validationErrors();
    //if (errors) {
       //console.log("YES");
    //} else {
        //console.log("NO");
    //}
//});

module.exports = router;