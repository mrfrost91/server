var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
    firstname: {type: String},
    lastname: {type: String}
});

var User = module.exports = mongoose.model('User', UserSchema);
module.exports.createUser = function(newUser, callback) {
    newUser.save(callback);
};

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.comparePassword = function(password, callback){
    var password = {password: password};
    User.findOne(password, callback);
}