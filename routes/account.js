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

		if ('Employee' === req.params.module) {
			var Company = {};
			async.each(models, function(item, callback) {
				if (_.isUndefined(Company[item.employee])) Company[item.employee] = {};
				if (_.isUndefined(Company[item.employee].designer)) Company[item.employee].designer = [];
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
							designer: _.uniq(value.designer).toString(),
							sale: value.sale,
						};
					});
					res.json(result);
				}
			});
		} else if ('Designer' === req.params.module) {
			var Company = {};
			async.each(models, function(item, callback) {
				if (_.isUndefined(Company[item.designer])) Company[item.designer] = {};
				if (_.isUndefined(Company[item.designer].customer)) Company[item.designer].customer = [];
				Company[item.designer].customer.push(item.username);

				if (_.isUndefined(Company[item.designer].sale)) Company[item.designer].sale = 0;
				Company[item.designer].sale += item.price;

				console.log('%s ==> %s', item.designer, item.username);
				console.log('%s += %d', item.designer, item.price);

				callback();
			}, function(err) {
				if (err) {
					console.log('some error!');
				} else {
					var result = _.map(Company, function(value, key) {
						return {
							designer: key,
							customer: _.uniq(value.customer).toString(),
							sale: value.sale,
						};
					});
					res.json(result);
				}
			});
		} else if ('Customer' === req.params.module) {
			res.json(models);
		}
	});
});

module.exports = router;