var BaiduEx = new function() {};
BaiduEx = {
	key: "baidu",
	localdata: {},
	New_nav_obj: null,
	init: function() {
		Aming.getData(BaiduEx.key, function(data) {
			BaiduEx.localdata = data;
			BaiduEx.Page();
		});
	},
	Page: function() {
		document.title = "摆渡一下,你就知道";
		$("body >*").animate({
			"opacity": 0
		}, "slow");

		$("#m").animate({
			"margin-top": 150
		}, 800, function() {
			var $bg = $(".s-skin-container");
			if (BaiduEx.localdata.bg != "") {
				$bg.css("background-image", "url('" + BaiduEx.localdata.bg + "')");
			}
			$bg.animate({
				"opacity": 1
			}, "slow");
			//set backgrund end
			//set search div start
			var $sdiv = $("#m");
			var $nv = $("#nv");
			var $nv_a = $("#nv a,#nv b");
			var $kw = $("#kw");

			$sdiv.css("background-color", "rgba(162, 158, 185, 0.35)");
			$sdiv.css("margin-top", "-300px");
			$sdiv.css("opacity", "1");
			$sdiv.css("border", "5px solid rgba(255, 255, 255, 0.15)");
			$sdiv.css("border-radius", "3px");
			$sdiv.css("background-color", "rgba(255, 255, 255, 0.4)");
			$sdiv.css("z-index", "999");
			$sdiv.css("position", "relative");
			// $sdiv.css("box-shadow", "1px 1px 6px rgba(234, 150, 255, 0.85)");

			$nv_a.css("color", "#427FFF");
			$nv_a.css("font-size", "24px");
			$nv_a.css("font-family", "'Microsoft YaHei',Arial, Helvetica, sans-serif");
			$nv_a.css("text-shadow", "#fff 1px 0 0,#fff 0 1px 0,#fff -1px 0 0,#fff 0 -1px 0");
			$nv_a.css("text-decoration", "none");

			$nv.css("text-indent", "12px");
			$nv.css("display", "none");
			$kw.css("background-color", "rgba(255, 255, 255, 0.8)");

			//set search div end
			$sdiv.before("<div id='new_nav' style='position: fixed;top: 0;left: 0;z-index: 99;'></div>");
			BaiduEx.CreateNav();
			// show search div
			$sdiv.animate({
				"margin-top": 100
			}, 800, "easeInOutQuart", function() {
				BaiduEx.New_nav_obj.shownav();
			});

		}); //hide all

	},
	CreateNav: function() {
		this.New_nav_obj = $("#new_nav").aming_nav({
			datalist: [{
				left: -90,
				color: "#C5885B",
				imgurl: "http://www.y2443.com/images/nav/31532569_200_50_t.jpg",
				title: "[Tieba]贴吧",
				link: $("#nv a:contains('贴吧')").attr("href")
			}, {
				left: -100,
				color: "#7D52AE",
				imgurl: "http://www.y2443.com/images/nav/32368289_200_50_t.jpg",
				title: "[ZhiDao]知道",
				link: $("#nv a:contains('知道')").attr("href")
			}, {
				left: -90,
				color: "#4E69AE",
				imgurl: "http://www.y2443.com/images/nav/31532612_200_50_t.jpg",
				title: "[Pictures]图片",
				link: $("#nv a:contains('图片')").attr("href")
			}, {
				left: -150,
				color: "#EC709E",
				imgurl: "http://www.y2443.com/images/nav/34065982_200_50_t.jpg",
				title: "[Maps]地图",
				link: $("#nv a:contains('地图')").attr("href")
			}, {
				left: -180,
				color: "#4CAC2A",
				imgurl: "http://www.y2443.com/images/nav/34178791_200_50_t.jpg",
				title: "[More]更多",
				link: $("#nv a:contains('更多>>')").attr("href")
			}]
		});
	}
};


Aming.addFunc({
	key: "http://www.baidu.com/",
	similar: false,
	val: function() {
		setTimeout(BaiduEx.init, 200);
	}
});