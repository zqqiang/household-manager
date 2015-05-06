var mongoose = require('../db/db');

require('../model/login.js')();
require('../model/order.js')();
require('../model/employee.js')();
require('../model/designer.js')();

var Models = {
	Login: mongoose.model('Login'),
	Order: mongoose.model('Order'),
	Employee: mongoose.model('Employee'),
	Designer: mongoose.model('Designer'),
};

module.exports = Models;