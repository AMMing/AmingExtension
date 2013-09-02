var AmingHelper = new function() {};
AmingHelper = {
	Select_Page: function() {
		var pageurl = document.location.href;

		switch (pageurl) {
			case "http://www.baidu.com/":
				BaiduEx.Page();
				break;

		}
	}
};


$(document).ready(function() {
	BaiduEx.Get_Data(function() {
		setTimeout(AmingHelper.Select_Page, 200);
	});
});