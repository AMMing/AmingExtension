chrome.browserAction.setIcon({
	path: "images/16.jpg"
});

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		switch (request.type) {
			case "notif":
				notification.show(request.title, request.body);
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

chrome.contextMenus.create({
	"title": "Google+ Source Image",
	"type": "normal",
	"contexts": ["image"],
	"onclick": contextmenus.googlePlusImage()
});
// chrome.contextMenus.create({
// 	"title": "HuaBan Image",
// 	"type": "normal",
// 	"contexts": ["image"],
// 	"onclick": contextmenus.HuaBan()
// });

aminghelper.initData();
// aminghelper.checkupdate();