define(['app', 'marionette', 'templates/compiled'], function(app, Marionette, JST) {
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

			var self = this;

			app.commands.setHandler('render-login-user', function(name) {
				self.$el.find('#user').html(name);
			});

			app.commands.setHandler('render-manage-employee', function(username) {
				if ('admin' === username) {
					self.$el.find('#employee').html('<a href="#Employee"><i class="glyphicon glyphicon-usd"></i> <span>员工管理</span> </a>');
				}
			});
		},
		logout: function() {
			this.$el.find('#user').html('管理员');
		}
	});
	return Dummy;
});