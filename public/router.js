define(
	[
		'backbone', 'app'
	],
	function(Backbone, app) {
		var Router = Backbone.Router.extend({
			routes: {
				'Home': 'defaultRouter',
				"*all": "defaultRouter",
			},
			defaultRouter: function(all) {
				console.log(all);
				app.navigateTo(all);
			}
		});
		return Router;
	}
);