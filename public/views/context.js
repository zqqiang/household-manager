define(['marionette', 'views/home'], function(Marionette, Home) {
	var map = {
		'Home': Home,
	};

	return function(context, options) {
		if (_.isUndefined(map[context])) console.error('Context [%s] is not Defined!', context);
		return new map[context](options);
	};
});