var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');
var async = require('async');
var _ = require('underscore');
var cookies = require('./cookies');

router.post('/', function(req, res) {
	console.log('body: ', req.body);

	var LoginModel = Models['Login'];

	LoginModel.find({
		username: req.body.customer,
	}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);

		if (!models.length) {
			var body = _.extend(req.body, {
				password: 'pass',
			});

			LoginModel.create(body, function(err, model) {
				if (err) console.error(err);
				res.json(model);
			});
		}

		var DesignerModel = Models['Designer'];
		var cookie = cookies.get(req);
		var designer = cookie.username;

		DesignerModel.update({
			designer: designer,
		}, {
			$push: {
				customer: req.body.customer
			}
		}, {}, function(err, raw) {
			if (err) console.error(err);
			console.log('The raw response from Mongo was ', raw);
		});

	});
});

module.exports = router;