var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');

router.post('/', function(req, res) {
	console.log('body: ', req.body);

	var LoginModel = Models['Login'];
	var OrderModel = Models['Order'];

	var mockUser = {
		username: 'admin',
		password: 'pass'
	};

	LoginModel.find({
		username: mockUser.username, //mock
		password: mockUser.password,
	}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);
		if (models.length) {
			OrderModel.create({
				username: mockUser.username,
				order: req.body.order,
				price: req.body.price,
			}, function(err, model) {
				if (err) console.error(err);
				res.json(model);
			});
		} else {
			res.statusCode = 401;
			res.json({
				message: 'Can not find this user! Please login first!'
			});
		}
	});
});

module.exports = router;