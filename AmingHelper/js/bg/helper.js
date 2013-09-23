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

var notification = new function() {};
notification = {
	show: function(title, body) {
		var notification = window.webkitNotifications.createNotification(
			'images/64.jpg', // The image.
			title, // The title.
			body // The body.
		);
		notification.show();
	}
};

var contextmenus = new function() {};
contextmenus = {
	googlePlusImage: function() {
		return function(info, tab) {
			var imgurl = info.srcUrl;
			var index = imgurl.indexOf('googleusercontent.com');

			if (index > 0) {
				var lastIndex = imgurl.lastIndexOf('/');
				var lastStr = imgurl.substr(lastIndex);
				var startIndex = imgurl.substr(0, lastIndex).lastIndexOf('/');
				var startStr = imgurl.substr(0, startIndex);
				var surl = startStr + '/s0' + lastStr;

				chrome.tabs.create({
					url: surl
				});
			}
		}
	} //,
	// HuaBan: function() {
	// 	return function(info, tab) {

	// 		var imgurl = info.srcUrl;
	// 		var index = imgurl.lastIndexOf('/w');
	// 		var lastindex = imgurl.lastIndexOf('/');
	// 		if (index > 0) {
	// 			imgurl = imgurl.substr(0, index) + '/s0' + imgurl.substr(lastindex);
	// 		}

	// 		var surl = 'http://huaban.com/bookmarklet/?media=' + imgurl + '&url=' + tab.url + '&alt=' + tab.title;
	// 		chrome.windows.create({
	// 			url: surl
	// 		});
	// 	}
	// }
};