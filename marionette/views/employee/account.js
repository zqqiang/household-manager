define(['marionette', 'templates/compiled', 'lib/cookie'], function(Marionette, JST, Cookie) {
	var DesignerRowView = Marionette.ItemView.extend({
		template: JST.DesignerRowTemplate,
		tagName: 'tr',
	});

	var DesignerTableView = Marionette.CompositeView.extend({
		template: JST.DesignerTableTemplate,
		className: 'designer-table',
		childView: DesignerRowView,
		childViewContainer: "tbody",
		initialize: function() {
			var Model = Backbone.Model.extend({});
			var Collection = Backbone.Collection.extend({
				model: Model,
				url: '/data/Designer',
			});
			this.collection = new Collection();
			this.collection.fetch();
		}
	});

	var Account = Marionette.LayoutView.extend({
		className: 'account-body',
		template: JST.EmployeeAccountTemplate,
		regions: {
			designerTable: '#designerTable',
		},
		onShow: function() {
			this.designerTable.show(new DesignerTableView());
		}
	});

	return Account;
});