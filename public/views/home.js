define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Home = Marionette.ItemView.extend({
		template: JST.HomeTemplate,
		className: 'home-page',
	});
	return Home;
});