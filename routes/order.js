var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');
var async = require('async');
var _ = require('underscore');
var cookies = require('./cookies');

router.get('/', function(req, res) {
	var Model = Models['Order'];
	var cookie = cookies.get(req);
	var customer = cookie.username;

	Model.find({
		username: customer
	}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);
		res.json(models);
	});
});

module.exports = router;