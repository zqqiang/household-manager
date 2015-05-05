define(['app', 'marionette', 'templates/compiled'], function(app, Marionette, JST) {

	var Login = Marionette.ItemView.extend({
		template: JST.SignupTemplate,
		className: 'signup-page',
		ui: {
			'submit': 'span[type="submit"]',
			'userType': '#userType'
		},
		events: {
			'click @ui.submit': 'submitSignup',
			'change @ui.userType': 'userTypeChange'
		},
		getValues: function() {
			return {
				username: this.$el.find('#username').val(),
				password: this.$el.find('#password').val(),
				confirmPassword: this.$el.find('#confirm-password').val(),
				usertype: this.$el.find('#userType').val(),
				designer: this.$el.find('#designer').val(),
			};
		},
		userTypeChange: function() {
			var type = this.$el.find('#userType').val();
			if ('user' === type) {
				this.$el.find('#designer').show();
			} else {
				this.$el.find('#designer').hide();
			}
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