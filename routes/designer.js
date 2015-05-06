var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');
var async = require('async');
var _ = require('underscore');
var cookies = require('./cookies');

router.post('/', function(req, res) {
	console.log('body: ', req.body);

	var Model = Models['Designer'];

	Model.find({
		designer: req.body.designer,
	}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);
		if (models.length) {
			res.statusCode = 401;
			res.json({
				message: 'The designer already added!'
			});
		} else {
			var body = _.extend(req.body, {
				password: 'pass',
				customer: []
			});

			Model.create(body, function(err, model) {
				if (err) console.error(err);
				res.json(model);
			});

			var EmployeeModel = Models['Employee'];
			var cookie = cookies.get(req);
			var employee = cookie.username;
			EmployeeModel.update({
				employee: employee,
			}, {
				$push: {
					designer: req.body.designer
				}
			}, {}, function(err, raw) {
				if (err) console.error(err);
				console.log('The raw response from Mongo was ', raw);
			});
		}
	});
});

var designersProcess = function(models, res) {
	var designers = {};
	async.each(models, function(item, callback) {
		var OrderModel = Models['Order'];

		if (_.isUndefined(designers[item.designer])) designers[item.designer] = {};
		designers[item.designer].customer = item.customer;

		OrderModel.find({
			username: {
				$in: item.customer,
			}
		}, function(err, models) {
			if (err) {
				callback(err);
				console.error(err);
			} else {
				_.each(models, function(elem) {
					designers[item.designer].sale += elem.price;
				});
			}
		})
		callback();
	}, function(err) {
		if (err) {
			console.log('some error!');
			res.json({
				msg: err
			});
		} else {
			var result = _.map(designers, function(value, key) {
				return {
					employee: key,
					designer: _.uniq(value.customer).toString(),
					sale: value.sale,
				};
			});
			res.json(result);
		}
	});
};

router.get('/', function(req, res) {
	var EmployeeModel = Models['Employee'];

	var cookie = cookies.get(req);
	var user = cookie.username;

	EmployeeModel.find({
		employee: user
	}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);
		if (models.length) {
			var designers = models[0].designer;
			var DesignerModel = Models['Designer'];
			DesignerModel.find({
				designer: {
					$in: designers
				}
			}, function(err, models) {
				if (err) return console.error(err);
				console.log(models);
				designersProcess(models, res);
			});
		} else {
			res.statusCode = 401;
			res.json({
				message: 'The designer already added!'
			});
		}
	});
});

module.exports = router;