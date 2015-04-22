define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Shop = Marionette.ItemView.extend({
		template: JST.ShopTemplate,
		className: 'shop-page',
	});
	return Shop;
});