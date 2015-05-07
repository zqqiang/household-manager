var mongoose = require('../db/db');

var Employee = mongoose.model('Employee', {
	employee: String,
	password: String,
	designer: [String],
});

module.exports = Employee;