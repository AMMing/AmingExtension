var BaiduTieBaEx = new function() {};
BaiduTieBaEx = {
	key: "baidutieba",
	localdata: {},
	New_nav_obj: null,
	init: function() {
		Aming.getData(BaiduTieBaEx.key, function(data) {
			BaiduTieBaEx.localdata = data;
			if (BaiduTieBaEx.localdata.remove_ad) {
				$('.game_spread_thread,#aside_ad,#pb_adbanner,.game_rank').hide();
			}
		});
	}
};


Aming.addFunc({
	key: "http://tieba.baidu.com/",
	similar: true,
	val: function() {
		// setTimeout(BaiduEx.init, 200);
		BaiduTieBaEx.init();
	}
});