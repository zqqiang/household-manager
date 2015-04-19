define(['marionette'], function(Marionette) {
	var Home = Marionette.ItemView.extend({
		template: 'Home page',
		className: 'home-page',
	});
	return Home;
});