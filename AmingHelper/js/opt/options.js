window.addEventListener('load', function() {
	var baidu = localData.Get("baidu");

	txt_bgurl.value = baidu.bg;

	txt_bgurl.onchange = function() {
		baidu.bg = txt_bgurl.value;
		localData.Set("baidu", baidu);
	}
});