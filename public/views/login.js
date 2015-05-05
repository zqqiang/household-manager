define(['app', 'marionette', 'templates/compiled'], function(app, Marionette, JST) {

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
			var self = this;
			var payload = this.getValues();
			$.ajax({
				url: 'data/Login',
				type: 'POST',
				data: payload
			}).success(function(data, textStatus, jqXHR) {
				console.log(data.type);
				if ('admin' === data.type) {
					app.execute('render-navbar', {
						type: 'admin',
						name: payload.username
					});

					document.cookie = 'username=' + payload.username;
					document.cookie = 'password=' + payload.password;

					window.location.href = '#Shop';
				} else if ('employee' === data.type) {
					app.execute('render-navbar', {
						type: 'employee',
						name: payload.username
					});

					document.cookie = 'username=' + payload.username;
					document.cookie = 'password=' + payload.password;
				} else if ('user' === data.type) {

				}
			}).fail(function(jqXHR, textStatus, errorThrown) {
				console.error(jqXHR.responseText);
				alert(jqXHR.responseText);
			});
		}

	});

	return Login;
});