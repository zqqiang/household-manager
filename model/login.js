var mongoose = require('../db/db');

var Login = mongoose.model('Login', {
	username: String,
	password: String,
});

module.exports = Login;