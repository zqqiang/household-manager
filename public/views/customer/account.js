define(['marionette', 'templates/compiled', 'lib/cookie'], function(Marionette, JST, Cookie) {
	var OrderRowView = Marionette.ItemView.extend({
		template: JST.OrderRowTemplate,
		tagName: 'tr',
	});

	var OrderTableView = Marionette.CompositeView.extend({
		template: JST.OrderTableTemplate,
		className: 'order-table',
		childView: OrderRowView,
		childViewContainer: "tbody",
		initialize: function() {
			var Model = Backbone.Model.extend({});
			var Collection = Backbone.Collection.extend({
				model: Model,
				url: '/data/Order',
			});
			this.collection = new Collection();
			this.collection.fetch();
		}
	});

	var Account = Marionette.LayoutView.extend({
		className: 'account-body',
		template: JST.CustomerAccountTemplate,
		regions: {
			orderTable: '#orderTable',
		},
		onShow: function() {
			this.orderTable.show(new OrderTableView());
		}
	});

	return Account;
});