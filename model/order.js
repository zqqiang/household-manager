var mongoose = require('../db/db');

var Order = mongoose.model('Order', {
	username: String,
	order: String,
	price: Number,
});

module.exports = Order;