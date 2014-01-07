// http://www.i7wu.cn/ebook/1/123/
Aming.addFunc({
	key: "http://www.i7wu.cn/ebook/",
	similar: true,
	val: function() {
		$("body>*:not(.ebookcontent)").remove();
	}
});
Aming.addFunc({
	key: "http://www.i7wu.cn/xiazai/txt/",
	similar: true,
	val: function() {
		var download = $('.dla').attr('href');
		open(download);
		// window.location.href = download;
		window.close();
	}
});