define(['marionette', 'views/home'], function(Marionette, Home) {
	var map = {
		'Home': Home,
	};

	return function(context, options) {
		console.log(context);
		return map[context](options);
	};
});