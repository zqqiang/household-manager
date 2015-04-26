define([], function() {
	return {
		getCookie: function() {
			var cookies = {};
			var all = document.cookie;
			if (all === "")
				return cookies;
			var list = all.split("; ");
			for (var i = 0; i < list.length; i++) {
				var cookie = list[i];
				var p = cookie.indexOf("=");
				var name = cookie.substring(0, p);
				var value = cookie.substring(p + 1);
				value = decodeURIComponent(value);
				cookies[name] = value;
			}
			return cookies;
		}
	};
});