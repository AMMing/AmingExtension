var localData = new function() {};
localData = {
	Get: function(key) {
		var data = window.localStorage.getItem(key);

		return JSON.parse(data);
	},
	Set: function(key, data) {
		var json = JSON.stringify(data);
		window.localStorage.setItem(key, json);
	},
	Delete: function(key) {
		window.localStorage.removeItem(key);
	},
	Init: function(key, data) {
		var val = this.Get(key);
		if (!val) {
			this.Set(key, data);
		}
	}
};