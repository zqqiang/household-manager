define(
	[
		'handlebars',
		'text!templates/navbar.html',
		'text!templates/home.html',
		'text!templates/login.html',
		'text!templates/signup.html',
		'text!templates/shop.html',
	],
	function(
		Handlebars,
		NavbarTpl,
		HomeTpl,
		LoginTpl,
		SignupTpl,
		ShopTpl
	) {
		return {
			NavbarTemplate: Handlebars.compile(NavbarTpl),
			HomeTemplate: Handlebars.compile(HomeTpl),
			LoginTemplate: Handlebars.compile(LoginTpl),
			SignupTemplate: Handlebars.compile(SignupTpl),
			ShopTemplate: Handlebars.compile(ShopTpl),
		};
	}
);