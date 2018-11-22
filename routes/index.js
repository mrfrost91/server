var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var username = "";
    if (req.isAuthenticated()) {
        username = req.user.username;
    }
    res.render('index', {username: username});
});

module.exports = router;