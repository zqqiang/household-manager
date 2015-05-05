var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');
var async = require('async');
var _ = require('underscore');

router.post('/', function(req, res) {
	console.log('body: ', req.body);

	var Model = Models['Employee'];

	Model.find({
		employee: req.body.employee,
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
				designer: []
			});

			Model.create(body, function(err, model) {
				if (err) console.error(err);
				res.json(model);
			});
		}
	});
});

module.exports = router;