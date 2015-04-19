define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Dummy = Marionette.ItemView.extend({
		template: JST.NavbarTemplate,
		tagName: 'nav',
		className: 'navbar navbar-default',
		initialize: function(options) {
			var Model = Backbone.Model.extend({});
			this.model = new Model({
				module: options.module
			});
		}
	});
	return Dummy;
});