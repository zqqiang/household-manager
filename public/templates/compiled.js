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
		'text!templates/employeeTable.html',
		'text!templates/employeeRow.html',
		'text!templates/designerTable.html',
		'text!templates/designerRow.html',
		'text!templates/customerTable.html',
		'text!templates/customerRow.html',
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
		EmployeeTableTpl,
		EmployeeRowTpl,
		DesignerTableTpl,
		DesignerRowTpl,
		CustomerTableTpl,
		CustomerRowTpl
	) {
		return {
			NavbarTemplate: Handlebars.compile(NavbarTpl),
			HomeTemplate: Handlebars.compile(HomeTpl),
			LoginTemplate: Handlebars.compile(LoginTpl),
			SignupTemplate: Handlebars.compile(SignupTpl),
			ShopTemplate: Handlebars.compile(ShopTpl),
			AccountTemplate: Handlebars.compile(AccountTpl),
			EmployeeTemplate: Handlebars.compile(EmployeeTpl),
			EmployeeTableTemplate: Handlebars.compile(EmployeeTableTpl),
			EmployeeRowTemplate: Handlebars.compile(EmployeeRowTpl),
			DesignerTableTemplate: Handlebars.compile(DesignerTableTpl),
			DesignerRowTemplate: Handlebars.compile(DesignerRowTpl),
			CustomerTableTemplate: Handlebars.compile(CustomerTableTpl),
			CustomerRowTemplate: Handlebars.compile(CustomerRowTpl),
		};
	}
);