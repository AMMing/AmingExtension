chrome.browserAction.setIcon({
	path: "images/16.jpg"
});

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		switch (request.type) {
			case "notif":
				var notification = window.webkitNotifications.createNotification(
					'images/64.jpg', // The image.
					request.title, // The title.
					request.body // The body.
				);
				notification.show();
				sendResponse({
					msg: "notification show."
				});
				break;
			case "data":
				var val = localData.Get(request.key);
				sendResponse(val);
				break;
			default:
				sendResponse({});
				break;
		}
	}
);

initData();