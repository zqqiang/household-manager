define(['marionette', 'views/home', 'views/login'], function(Marionette, Home, Login) {
	var map = {
		'Home': Home,
		'Login': Login,
	};

	return function(context, options) {
		if (_.isUndefined(map[context])) console.error('Context [%s] is not Defined!', context);
		return new map[context](options);
	};
});