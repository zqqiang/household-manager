define([
	'marionette',
	'views/home', 'views/login', 'views/signup', 'views/shop', 'views/account',
	'views/employee', 'views/designer', 'views/employee/account'
], function(
	Marionette,
	Home, Login, Signup, Shop, Account,
	Employee, Designer, EmployeeAccount
) {
	var map = {
		'Home': Home,
		'Login': Login,
		'Signup': Signup,
		'Shop': Shop,
		'Account': Account,
		'Employee': Employee,
		'Designer': Designer,
		'EmployeeAccount': EmployeeAccount,
	};

	return function(context, options) {
		if (_.isUndefined(map[context])) console.error('Context [%s] is not Defined!', context);
		return new map[context](options);
	};
});