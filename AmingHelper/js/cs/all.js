All = new function() {};
All = {
	key: "all",
	localdata: {},
	init: function() {
		Aming.getData(this.key, function(data) {
			All.localdata = data;
			if (All.localdata.isShowToTop) {
				$(window).aming_scrolltop({
					imgurl: All.localdata.totop_bg,
					showopacity: 1,
					mainwidth: $(window).width() - 150
				});
			}
		});
	}
};

Aming.addFunc({
	key: "*",
	val: function() {
		All.init();
	}
});