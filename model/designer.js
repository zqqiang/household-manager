var mongoose = require('../db/db');

var Designer = mongoose.model('Designer', {
	designer: String,
	password: String,
	customer: [String],
});

module.exports = Designer;