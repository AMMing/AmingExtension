var Aming = new function() {};
Aming = {
	js_list: new Array(),
	init: function() {
		var pageurl = document.location.href;

		Aming.js_list.forEach(function(item) {
			if (item.key == "*") {
				item.val();
			} else if (pageurl.indexOf(item.key) >= 0) {
				if (item.similar == true || pageurl == item.key) {
					item.val();
				}
			}
		});
	},
	addFunc: function(data) {
		this.js_list.push(data);
	},
	getData: function(key, callback) {
		chrome.extension.sendRequest({
			type: "data",
			key: key
		}, function(response) {
			// console.log(response);
			callback(response);
		});
	}
};


$(document).ready(function() {
	Aming.init();
});