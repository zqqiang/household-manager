require(
	[
		'jquery', 'app',

		'bootstrap', 'highcharts'
	],
	function(
		$, app, Router
	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		app.addInitializer(function(options) {
			app.addRegions({
				headerRegion: 'header[role="banner"]',
				mainRegion: 'main[role="main"]',
				footerRegion: 'footer[role="contentinfo"]',
			});

			// app.headerRegion.show(new Navbar());
			// app.footerRegion.show(new Footer());

			Backbone.history.start();
		});
	}
);