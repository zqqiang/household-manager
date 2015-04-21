define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Login = Marionette.ItemView.extend({
		template: JST.LoginTemplate,
		className: 'login-page',
	});
	return Login;
});