define(
	[
		'backbone', 'app'
	],
	function(Backbone, app) {
		var Router = Backbone.Router.extend({
			routes: {
				"*other": "defaultRouter",
			},
			defaultRouter: function(other) {
				app.navigateTo("other");
			}
		});
		return Router;
	}
);