define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var RowView = Marionette.ItemView.extend({
		template: JST.RowTemplate,
		tagName: 'tr',
	});

	var Account = Marionette.CompositeView.extend({
		template: JST.AccountTemplate,
		className: 'account-table',
		childView: RowView,
		childViewContainer: "tbody",
		initialize: function() {
			var Model = Backbone.Model.extend({});
			var Collection = Backbone.Collection.extend({
				model: Model,
				url: '/data/Employee'
			});
			this.collection = new Collection();
			this.collection.fetch();
		}
	});

	return Account;
});