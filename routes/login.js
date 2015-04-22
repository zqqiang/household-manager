var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');

router.post('/', function(req, res) {
	console.log('body: ', req.body);

	var Model = Models['Login'];

	Model.find({
		username: req.body.username
	}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);
		if (models.length) {
			res.statusCode = 401;
			res.json({
				message: 'The user name already exist!'
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