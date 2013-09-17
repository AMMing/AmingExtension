All = new function() {};
All = {
	key: "all",
	localdata: {},
	init: function() {
		Aming.getData(this.key, function(data) {
			All.localdata = data;
			if (All.localdata.enabled) {
				$('.totop_frame').remove();

				$(window).aming_scrolltop({
					imgurl: All.localdata.totop_bg,
					showopacity: 1,
					mainwidth: $(window).width() - 150
				});

				$('.aming_to_top').css({
					position: 'fixed',
					top: 'auto',
					left: 'auto',
					bottom: '40px',
					right: '10px'
				});

				$('.aming_to_top').css('-webkit-border-radius', All.localdata.radius + 'px');
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