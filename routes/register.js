var express = require('express');
var router = express.Router();
var User = require('../db/models/userSchema');

router.get('/register', function (req, res) {
    res.render('register');
});

router.post("/register", function (req, res) {
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;

    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();
    if (errors) {
        console.log("There are errors");
        res.status(500).send();
    } else {
        console.log("No Errors");
        var newUser = new User({
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname
    });
    User.createUser(newUser, function (err, user) {
        if (err) throw err;
        console.log(user);
    });
    req.flash('success_msg', 'You are registered and can now login');
    res.redirect('/login');
    res.status(200).send();
    }
});

module.exports = router;