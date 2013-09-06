function SetbtnIcon() {
	chrome.browserAction.setIcon({
		path: "images/icon_16.png"
	});
}

function ToolIconClick() {
	// open("chrome://extensions/");
}
if (localStorage.bgurl == undefined) {
	localStorage.bgurl = "";
}


chrome.browserAction.onClicked.addListener(ToolIconClick);

chrome.commands.onCommand.addListener(
	function(command) {
		if (command == "aming-pin") {
			ToolIconClick();
		}
	}
);

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		switch (request.type) {
			case "notif":
				var notification = window.webkitNotifications.createNotification(
					'images/icon_48.png', // The image.
					request.title, // The title.
					request.body // The body.
				);
				notification.show();
				sendResponse({
					msg: "notification show. "
				});
				break;
			case "bgurl":
				sendResponse(localStorage.bgurl);
				break;
			default:
				sendResponse({});
				break;
		}
	}
);

SetbtnIcon();
