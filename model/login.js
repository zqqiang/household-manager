var mongoose = require('../db/db');

var Login = mongoose.model('Login', {
	username: String,
	password: String,
	designer: String,
});

module.exports = Login;