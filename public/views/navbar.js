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
			app.commands.setHandler('render-navbar', function(options) {
				if ('admin' === options.type) {
					self.$el.find('#dashboard').html('<a href="#Employee"><i class="glyphicon glyphicon-usd"></i> <span>员工管理</span> </a>');
					self.$el.find('#manager').html('<a href="#Account"><i class="glyphicon glyphicon-user"></i> <span>' + options.name + '</span> </a>');
				} else if ('employee' === options.type) {
					self.$el.find('#dashboard').html('<a href="#Designer"><i class="glyphicon glyphicon-usd"></i> <span>设计师管理</span> </a>');
					self.$el.find('#manager').html('<a href="#EmployeeManage"><i class="glyphicon glyphicon-user"></i> <span>' + options.name + '</span> </a>');
				}
			});
		},
		logout: function() {
			this.$el.find('#user').html('管理员');
		}
	});
	return Dummy;
});