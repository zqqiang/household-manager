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
		}
	});
});

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