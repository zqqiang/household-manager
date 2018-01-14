define(
	[
		'backbone', 'app'
	],
	function(Backbone, app) {
		var Router = Backbone.Marionette.AppRouter.extend({
			routes: {
				"*all": "Default",
			},
			Default: function(module) {
				app.navigateTo(module);
			}
		});
		return Router;
	}
);