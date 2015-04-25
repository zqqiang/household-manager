define(
	[
		'handlebars',
		'text!templates/navbar.html',
		'text!templates/home.html',
		'text!templates/login.html',
		'text!templates/signup.html',
		'text!templates/shop.html',
		'text!templates/account.html',
		'text!templates/employee.html',
		'text!templates/row.html',
	],
	function(
		Handlebars,
		NavbarTpl,
		HomeTpl,
		LoginTpl,
		SignupTpl,
		ShopTpl,
		AccountTpl,
		EmployeeTpl,
		RowTpl
	) {
		return {
			NavbarTemplate: Handlebars.compile(NavbarTpl),
			HomeTemplate: Handlebars.compile(HomeTpl),
			LoginTemplate: Handlebars.compile(LoginTpl),
			SignupTemplate: Handlebars.compile(SignupTpl),
			ShopTemplate: Handlebars.compile(ShopTpl),
			AccountTemplate: Handlebars.compile(AccountTpl),
			EmployeeTemplate: Handlebars.compile(EmployeeTpl),
			RowTemplate: Handlebars.compile(RowTpl),
		};
	}
);