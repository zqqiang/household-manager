var mongoose = require('../db/db');

require('../model/login.js')();

var Models = {
	Login: mongoose.model('Login'),
};

module.exports = Models;