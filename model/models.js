var mongoose = require('../db/db');

require('../model/login.js')();
require('../model/order.js')();
require('../model/employee.js')();

var Models = {
	Login: mongoose.model('Login'),
	Order: mongoose.model('Order'),
	Employee: mongoose.model('Employee'),
};

module.exports = Models;