var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');
var async = require('async');
var _ = require('underscore');

router.post('/', function(req, res) {
	console.log('body: ', req.body);

	var mockUser = {
		username: 'admin',
		password: 'pass'
	};

	var context = {};

	async.series([function(callback) {
		var LoginModel = Models['Login'];
		LoginModel.find({
			username: mockUser.username, //mock
			password: mockUser.password,
		}, function(err, models) {
			if (err) callback(err);
			if (models.length) {
				context.designer = models[0].designer;
				console.log('Designer [%s]', context.designer);
				callback(null, models[0].designer);
			} else {
				callback('Can not find designer for user [' + mockUser.username + ']');
			}
		});
	}, function(callback) {
		var LoginModel = Models['Employee'];
		LoginModel.find({
			designer: context.designer,
		}, function(err, models) {
			if (err) callback(err);
			if (models.length) {
				context.employee = models[0].employee;
				console.log('Employee [%s]', context.employee);
				callback(null, models[0].employee);
			} else {
				callback('Can not find employee for designer [' + context.designer + ']');
			}
		});
	}], function(err, results) {
		if (err) {
			res.statusCode = 401;
			res.json({
				message: _.isObject(err) ? err.toString() : err,
			});
		} else {
			console.log(results);
			//order create
			var OrderModel = Models['Order'];
			OrderModel.create({
				username: mockUser.username,
				order: req.body.order,
				price: req.body.price,
				designer: results[0],
				employee: results[1],
			}, function(err, model) {
				if (err) console.error(err);
				res.json(model);
			});
		}
	});

});

module.exports = router;