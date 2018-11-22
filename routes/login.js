var express = require('express');
var router = express.Router();
var User = require('../db/models/userSchema');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.get('/login', function (req, res) {
    res.render('login');
});

router.get('/profile', function(req, res){
    res.render('profile', { username: req.user.username });
});

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.getUserByUsername(username, function (err, user) {
            if (err) throw err;
            if (!user) {
                console.log('unknown user');
                return done(null, false, { message: 'Unknown User' });
            }

            User.comparePassword(password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    console.log('logged in');
                    return done(null, user);
                } else {
                    console.log('invalid password');
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});

router.post('/login',
    passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: true}),
    function (req, res) {
        res.status(200).send();
    });

module.exports = router;