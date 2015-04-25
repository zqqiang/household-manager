var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');
var async = require('async');
var _ = require('underscore');

router.get('/', function(req, res) {
	var Model = Models['Employee'];

	Model.find({}, function(err, models) {
		if (err) console.error(err);

		console.log('match count: ', models.length);

		var Company = {};
		async.each(models, function(item, callback) {
			if (_.isUndefined(Company[item.employee])) Company[item.employee] = [];
			Company[item.employee].push(item.designer);
			console.log('%s ==> %s', item.employee, item.designer);
			callback();
		}, function(err) {
			if (err) {
				console.log('some error!');
			} else {
				var result = _.map(Company, function(value, key) {
					return {
						employee: key,
						designer: value.toString(),
					};
				});
				res.json(result);
			}
		});
	});
});

router.post('/', function(req, res) {
	console.log('body: ', req.body);

	var Model = Models['Employee'];

	Model.find({
		employee: req.body.employee,
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
			Model.create(req.body, function(err, model) {
				if (err) console.error(err);
				res.json(model);
			});
		}
	});
});

module.exports = router;