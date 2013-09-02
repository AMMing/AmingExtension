window.addEventListener('load', function() {
	txt_bgurl.value = localStorage.bgurl;

	txt_bgurl.onchange = function() {
		localStorage.bgurl = txt_bgurl.value;
	}
});