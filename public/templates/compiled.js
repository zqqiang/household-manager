define(
	[
		'handlebars',
		'text!templates/navbar.html',
	],
	function(
		Handlebars,
		NavbarTpl
	) {
		return {
			NavbarTemplate: Handlebars.compile(NavbarTpl),
		};
	}
);