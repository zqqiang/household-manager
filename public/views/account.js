define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var EmployeeRowView = Marionette.ItemView.extend({
		template: JST.EmployeeRowTemplate,
		tagName: 'tr',
	});

	var EmployeeTableView = Marionette.CompositeView.extend({
		template: JST.EmployeeTableTemplate,
		className: 'account-table',
		childView: EmployeeRowView,
		childViewContainer: "tbody",
		initialize: function() {
			var Context = this.model.get('context');

			var Model = Backbone.Model.extend({});
			var Collection = Backbone.Collection.extend({
				model: Model,
				url: '/data/Account/Employee',
			});
			this.collection = new Collection();
			this.collection.fetch();
		}
	});

	var Account = Marionette.LayoutView.extend({
		className: 'account-body',
		template: JST.AccountTemplate,
		initialize: function() {

		},
	});

	return Account;
});