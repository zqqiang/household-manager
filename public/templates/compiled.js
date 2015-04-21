define(
	[
		'handlebars',
		'text!templates/navbar.html',
		'text!templates/home.html',
	],
	function(
		Handlebars,
		NavbarTpl,
		HomeTpl
	) {
		return {
			NavbarTemplate: Handlebars.compile(NavbarTpl),
			HomeTemplate: Handlebars.compile(HomeTpl),
		};
	}
);