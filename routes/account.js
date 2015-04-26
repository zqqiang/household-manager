var mongoose = require('../db/db');
var express = require('express');
var router = express.Router();
var Models = require('../model/models');
var async = require('async');
var _ = require('underscore');

router.get('/:module', function(req, res) {
	var Model = Models['Order'];

	Model.find({}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);
		console.log('req.params.module [%s]', req.params.module);

		var Company = {};
		async.each(models, function(item, callback) {
			if (_.isUndefined(Company[item.employee])) Company[item.employee] = {};
			Company[item.employee].designer = [];
			Company[item.employee].designer.push(item.designer);

			if (_.isUndefined(Company[item.employee].sale)) Company[item.employee].sale = 0;
			Company[item.employee].sale += item.price;

			console.log('%s ==> %s', item.employee, item.designer);
			console.log('%s += %d', item.employee, item.price);

			callback();
		}, function(err) {
			if (err) {
				console.log('some error!');
			} else {
				var result = _.map(Company, function(value, key) {
					return {
						employee: key,
						designer: value.designer.toString(),
						sale: value.sale,
					};
				});
				res.json(result);
			}
		});
	});
});

module.exports = router;