define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Dummy = Marionette.ItemView.extend({
		template: JST.AccountTemplate,
		className: 'account-table',
		initialize: function(options) {
			var Model = Backbone.Model.extend({});
			this.model = new Model({

			});
		}
	});
	return Dummy;
});