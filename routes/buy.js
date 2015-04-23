var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');

router.post('/', function(req, res) {
	console.log('body: ', req.body);

	var Model = Models['Login'];

	Model.find({
		username: req.body.username,
		password: req.body.password,
	}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);
		if (models.length) {
			res.json({});
		} else {
			res.statusCode = 401;
			res.json({
				message: 'The username password not match!'
			});
		}
	});
});

module.exports = router;