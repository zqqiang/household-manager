define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var EmployeeRowView = Marionette.ItemView.extend({
		template: JST.EmployeeRowTemplate,
		tagName: 'tr',
	});

	var DesignerRowView = Marionette.ItemView.extend({
		template: JST.DesignerRowTemplate,
		tagName: 'tr',
	});

	var CustomerRowView = Marionette.ItemView.extend({
		template: JST.CustomerRowTemplate,
		tagName: 'tr',
	});

	var EmployeeTableView = Marionette.CompositeView.extend({
		template: JST.EmployeeTableTemplate,
		className: 'employee-table',
		childView: EmployeeRowView,
		childViewContainer: "tbody",
		initialize: function() {
			var Model = Backbone.Model.extend({});
			var Collection = Backbone.Collection.extend({
				model: Model,
				url: '/data/Account/Employee',
			});
			this.collection = new Collection();
			this.collection.fetch();
		}
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
				url: '/data/Account/Designer',
			});
			this.collection = new Collection();
			this.collection.fetch();
		}
	});

	var CustomerTableView = Marionette.CompositeView.extend({
		template: JST.CustomerTableTemplate,
		className: 'customer-table',
		childView: CustomerRowView,
		childViewContainer: "tbody",
		initialize: function() {
			var Model = Backbone.Model.extend({});
			var Collection = Backbone.Collection.extend({
				model: Model,
				url: '/data/Account/Customer',
			});
			this.collection = new Collection();
			this.collection.fetch();
		}
	});

	var Account = Marionette.LayoutView.extend({
		className: 'account-body',
		template: JST.AccountTemplate,
		regions: {
			employeeTable: '#employeeTable',
			designerTable: '#designerTable',
			customerTable: '#customerTable',
		},
		onShow: function() {
			this.employeeTable.show(new EmployeeTableView());
			this.designerTable.show(new DesignerTableView());
			this.customerTable.show(new CustomerTableView());
		}
	});

	return Account;
});