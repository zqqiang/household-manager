define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Dummy = Marionette.ItemView.extend({
		template: JST.CustomerTemplate,
		className: 'customer-form',
		ui: {
			'submit': 'span[type="submit"]'
		},
		events: {
			'click @ui.submit': 'submit'
		},
		getValues: function() {
			return {
				customer: this.$el.find('#customer').val(),
			};
		},
		submit: function() {
			var payload = this.getValues();
			$.ajax({
				url: 'data/Customer',
				type: 'POST',
				data: payload
			}).success(function(data, textStatus, jqXHR) {
				alert('Success!');
			}).fail(function(jqXHR, textStatus, errorThrown) {
				console.error(jqXHR.responseText);
				alert(jqXHR.responseText);
			});
		}
	});
	return Dummy;
});