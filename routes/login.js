var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');

function UserProcess(req, res) {

	var UserModel = Models['Login'];
	UserModel.find({
		username: req.body.username,
		password: req.body.password,
	}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);
		if (models.length) {
			res.json({
				type: 'user'
			});
		} else {
			res.statusCode = 401;
			res.json({
				message: 'The username password not match!'
			});
		}
	});

};

router.post('/', function(req, res) {
	console.log('body: ', req.body);

	// Is Admin ?
	if ('admin' === req.body.username && 'pass' === req.body.password) {
		return res.json({
			type: 'admin'
		});
	}

	// Is Employee ?
	var EmployeeModel = Models['Employee'];

	EmployeeModel.find({
		employee: req.body.username,
		password: req.body.password,
	}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);
		if (models.length) {
			res.json({
				type: 'employee'
			});
		} else {
			UserProcess(req, res);
		}
	});

});

module.exports = router;