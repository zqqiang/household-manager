define([
	'marionette',
	'views/home', 'views/login', 'views/signup', 'views/shop', 'views/account',
	'views/employee'
], function(
	Marionette,
	Home, Login, Signup, Shop, Account,
	Employee
) {
	var map = {
		'Home': Home,
		'Login': Login,
		'Signup': Signup,
		'Shop': Shop,
		'Account': Account,
		'Employee': Employee,
	};

	return function(context, options) {
		if (_.isUndefined(map[context])) console.error('Context [%s] is not Defined!', context);
		return new map[context](options);
	};
});