define(['marionette', 'handlebars'], function(Marionette, Handlebars) {
	var Dummy = Marionette.ItemView.extend({
		template: Handlebars.compile('<h1>{{module}} Comming Soon...</h1>'),
		initialize: function(options) {
			var Model = Backbone.Model.extend({});
			this.model = new Model({
				module: options.module
			});
		}
	});
	return Dummy;
});