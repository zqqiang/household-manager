define([
	'marionette',
	'views/home', 'views/login', 'views/signup', 'views/shop'
], function(
	Marionette,
	Home, Login, Signup, Shop
) {
	var map = {
		'Home': Home,
		'Login': Login,
		'Signup': Signup,
		'Shop': Shop,
	};

	return function(context, options) {
		if (_.isUndefined(map[context])) console.error('Context [%s] is not Defined!', context);
		return new map[context](options);
	};
});