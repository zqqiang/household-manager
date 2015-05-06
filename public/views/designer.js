define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Dummy = Marionette.ItemView.extend({
		template: JST.DesignerTemplate,
		className: 'designer-form',
		ui: {
			'submit': 'span[type="submit"]'
		},
		events: {
			'click @ui.submit': 'submit'
		},
		getValues: function() {
			return {
				designer: this.$el.find('#designer').val(),
			};
		},
		submit: function() {
			var payload = this.getValues();
			$.ajax({
				url: 'data/Designer',
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