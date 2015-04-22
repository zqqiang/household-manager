define(['marionette', 'templates/compiled'], function(Marionette, JST) {

	var Login = Marionette.ItemView.extend({
		template: JST.LoginTemplate,
		className: 'login-page',
		ui: {
			'submit': 'span[type="submit"]'
		},
		events: {
			'click @ui.submit': 'submitLogin'
		},
		getValues: function() {
			return {
				username: this.$el.find('#username').val(),
				password: this.$el.find('#password').val(),
			};
		},
		submitLogin: function() {
			var payload = this.getValues();
			$.ajax({
				url: 'data/Login',
				type: 'POST',
				data: payload
			}).success(function(data, textStatus, jqXHR) {

			}).fail(function(jqXHR, textStatus, errorThrown) {
				console.error(jqXHR.responseText);
				alert(jqXHR.responseText);
			});
		}

	});

	return Login;
});