var mongoose = require('../db/db');

var Employee = mongoose.model('Employee', {
	employee: String,
	designer: String,
});

module.exports = Employee;