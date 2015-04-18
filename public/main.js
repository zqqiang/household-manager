require(
	[
		'jquery', 'app', 'router',
		'views/dummy',
		'bootstrap', 'highcharts'
	],
	function(
		$, app, Router,
		Dummy
	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		app.navigateTo = function(context, options) {
			app.mainRegion.show(new Dummy());
		};

		app.addInitializer(function(options) {
			app.addRegions({
				headerRegion: 'header[role="banner"]',
				mainRegion: 'main[role="main"]',
				footerRegion: 'footer[role="contentinfo"]',
			});

			app.headerRegion.show(new Dummy({
				module: 'headerRegion'
			}));
			app.mainRegion.show(new Dummy({
				module: 'mainRegion'
			}));
			app.footerRegion.show(new Dummy({
				module: 'footerRegion'
			}));

			Backbone.history.start();
		});
	}
);