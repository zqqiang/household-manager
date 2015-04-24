var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');

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