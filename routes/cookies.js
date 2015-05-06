exports.get = function(req) {
	var Cookies = {};
	req.headers.cookie && req.headers.cookie.split(';').forEach(function(Cookie) {
		var parts = Cookie.split('=');
		Cookies[parts[0].trim()] = (parts[1] || '').trim();
	});
	console.log('Cookies: %s', JSON.stringify(Cookies));
	return Cookies;
}