require(
	[
		'jquery', 'app', 'router',
		'views/dummy', 'views/context', 'views/navbar',
		'bootstrap', 'highcharts'
	],
	function(
		$, app, Router,
		Dummy, Context, Navbar
	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		app.navigateTo = function(name, options) {
			app.mainRegion.show(new Context(name, options));
		};

		app.addInitializer(function(options) {
			app.addRegions({
				headerRegion: 'header[role="banner"]',
				mainRegion: 'main[role="main"]',
				footerRegion: 'footer[role="contentinfo"]',
			});

			app.headerRegion.show(new Navbar());

			// app.footerRegion.show(new Dummy({
			// 	module: 'footerRegion'
			// }));

			new Router();
			Backbone.history.start();
		});
	}
);