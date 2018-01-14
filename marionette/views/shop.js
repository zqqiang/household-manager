define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Shop = Marionette.ItemView.extend({
		template: JST.ShopTemplate,
		className: 'shop-page',
		ui: {
			'buy': 'a.btn'
		},
		events: {
			'click @ui.buy': 'buy'
		},
		buy: function(e) {
			var price = $(e.target).attr('price');
			var order = $($(e.target).context.parentNode).find('p').html();
			$.ajax({
				url: 'data/Buy',
				type: 'POST',
				data: {
					order: order,
					price: price,
				}
			}).success(function(data, textStatus, jqXHR) {
				alert('Success!');
			}).fail(function(jqXHR, textStatus, errorThrown) {
				console.error(jqXHR.responseText);
				alert(jqXHR.responseText);
			});
		}
	});
	return Shop;
});