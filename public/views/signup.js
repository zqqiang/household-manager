define(['app', 'marionette', 'templates/compiled'], function(app, Marionette, JST) {

	var Login = Marionette.ItemView.extend({
		template: JST.SignupTemplate,
		className: 'signup-page',
		ui: {
			'submit': 'span[type="submit"]'
		},
		events: {
			'click @ui.submit': 'submitSignup'
		},
		getValues: function() {
			return {
				username: this.$el.find('#username').val(),
				password: this.$el.find('#password').val(),
				confirmPassword: this.$el.find('#confirm-password').val(),
				designer: this.$el.find('#designer').val(),
			};
		},
		submitSignup: function() {
			var payload = this.getValues();
			if (payload.password === payload.confirmPassword) {
				$.ajax({
					url: 'data/Signup',
					type: 'POST',
					data: {
						username: payload.username,
						password: payload.password,
						designer: payload.designer,
					}
				}).success(function(data, textStatus, jqXHR) {
					window.location.href = '#Login';
				}).fail(function(jqXHR, textStatus, errorThrown) {
					console.error(jqXHR.responseText);
					alert(jqXHR.responseText);
				});
			} else {
				alert('password is different with confirm passord!');
			}
		}

	});

	return Login;
});