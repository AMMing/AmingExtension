var AmingHelper = new function() {};
AmingHelper = {
	js_list: new Array(),
	Init: function() {
		var pageurl = document.location.href;

		debugger;

		switch (pageurl) {
			case "http://www.baidu.com/":
				BaiduEx.Page();
				break;

		}
	}
};


$(document).ready(function() {
	// BaiduEx.Get_Data(function() {
	// 	setTimeout(AmingHelper.Select_Page, 200);
	// });

	AmingHelper.Init();
});