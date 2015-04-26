define(
	[
		'handlebars',
		'text!templates/navbar.html',
		'text!templates/home.html',
		'text!templates/login.html',
		'text!templates/signup.html',
		'text!templates/shop.html',
		'text!templates/account.html',
		'text!templates/employeeTable.html',
		'text!templates/employeeRow.html',
	],
	function(
		Handlebars,
		NavbarTpl,
		HomeTpl,
		LoginTpl,
		SignupTpl,
		ShopTpl,
		AccountTpl,
		EmployeeTableTpl,
		EmployeeRowTpl
	) {
		return {
			NavbarTemplate: Handlebars.compile(NavbarTpl),
			HomeTemplate: Handlebars.compile(HomeTpl),
			LoginTemplate: Handlebars.compile(LoginTpl),
			SignupTemplate: Handlebars.compile(SignupTpl),
			ShopTemplate: Handlebars.compile(ShopTpl),
			AccountTemplate: Handlebars.compile(AccountTpl),
			EmployeeTableTemplate: Handlebars.compile(EmployeeTableTpl),
			EmployeeRowTemplate: Handlebars.compile(EmployeeRowTpl),
		};
	}
);