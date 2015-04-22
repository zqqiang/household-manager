define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Dummy = Marionette.ItemView.extend({
		template: JST.NavbarTemplate,
		tagName: 'nav',
		className: 'navbar navbar-inverse navbar-static-top',
		ui: {
			'logout': '#logout'
		},
		events: {
			'click @ui.logout': 'logout'
		},
		initialize: function(options) {
			var Model = Backbone.Model.extend({});
			this.model = new Model({
				module: options.module
			});
		},
		logout: function() {
			this.$el.find('#user').html('管理员');
		}
	});
	return Dummy;
});