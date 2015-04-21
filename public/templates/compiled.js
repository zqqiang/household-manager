define(
	[
		'handlebars',
		'text!templates/navbar.html',
		'text!templates/home.html',
		'text!templates/login.html',
	],
	function(
		Handlebars,
		NavbarTpl,
		HomeTpl,
		LoginTpl
	) {
		return {
			NavbarTemplate: Handlebars.compile(NavbarTpl),
			HomeTemplate: Handlebars.compile(HomeTpl),
			LoginTemplate: Handlebars.compile(LoginTpl),
		};
	}
);