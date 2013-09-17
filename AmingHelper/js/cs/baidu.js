var BaiduEx = new function() {};
BaiduEx = {
	key: "baidu",
	localdata: {},
	New_nav_obj: null,
	init: function() {
		Aming.getData(BaiduEx.key, function(data) {
			BaiduEx.localdata = data;
			if (BaiduEx.localdata.enabled) {
				if ($('.s-skin-container').length > 0) {
					BaiduEx.Page();
					setTimeout(BaiduEx.HideSkinBtn, 1000);
				}
			}
		});
	},
	Page: function() {
		document.title = "摆渡一下,你就知道";

		$("body").css("background", "#43484D");

		$("body >*:not(#m)").animate({
			"opacity": 0
		}, "slow");

		$("#nv").animate({
			"height": 0,
			"opacity": 0
		}, 400);

		$("#m").animate({
			"margin-top": 150
		}, 800, "easeInOutQuart", function() {
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
			var $lg = $("#lg");
			var $lgimg = $("#lg>img");
			var $btn_wr = $(".btn_wr");

			var $sdiv_bg = $("<div class='sdiv_bg'></div>");

			$sdiv.prepend($sdiv_bg);

			$sdiv_bg.width($sdiv.width());
			$sdiv_bg.height($sdiv.height());
			$sdiv_bg.css("position", "absolute");
			$sdiv_bg.css("background-color", "rgba(162, 158, 185, 0.35)");
			$sdiv_bg.css("opacity", "0");
			$sdiv_bg.css("border", "5px solid rgba(255, 255, 255, 0.15)");
			$sdiv_bg.css("border-radius", "3px");
			$sdiv_bg.css("background-color", "rgba(255, 255, 255, 0.4)");
			$sdiv_bg.css("background-position", "center 0");
			$sdiv_bg.css("background-repeat", "no-repeat");
			$sdiv_bg.css("background-size", "cover");

			if (BaiduEx.localdata.sbg != "") {
				$sdiv_bg.css("background-image", "url('" + BaiduEx.localdata.sbg + "')");
			}

			if (BaiduEx.localdata.isShowSbg) {
				$sdiv_bg.animate({
					"opacity": 1
				}, "slow");
			}

			$sdiv.css("position", "relative");

			$nv_a.css("color", "#fff");

			$lg.css("position", "relative");
			$lg.css("z-index", "999");

			$nv.css("text-indent", "12px");
			$kw.css("background-color", "rgba(255, 255, 255, 0.8)");
			$lgimg.attr('src', 'http://su.bdimg.com/static/skin/img/logo_white.png');
			$btn_wr.css('background-color', "transparent");

			$nv.animate({
				"height": 0,
				"opacity": 0
			}, 400);

			//set search div end
			$sdiv.before("<div id='new_nav' style='position: fixed;top: 0;left: 0;z-index: 99;'></div>");
			BaiduEx.CreateNav();
			// show search div

			if (BaiduEx.localdata.isShowNav) {
				BaiduEx.New_nav_obj.shownav();

				$('.aming_nav_img').css('border', 'none');
				$('.aming_nav_img_button').css({
					height: '100px',
					border: "4px solid rgba(255, 255, 255, 0.6)",
					backgroundColor: "transparent",
					boxShadow: "rgba(20, 20, 20, 0.9) 1px 1px 6px"

				});
				$('#new_nav').css("z-index", "1000000000");
			}
		}); //hide all

	},
	CreateNav: function() {
		this.New_nav_obj = $("#new_nav").aming_nav({
			datalist: [{
				left: -90,
				color: "#C5885B",
				imgurl: BaiduEx.localdata.nav1,
				title: "[Tieba]贴吧",
				link: $("#nv a:contains('贴吧')").attr("href")
			}, {
				left: -160,
				color: "#7D52AE",
				imgurl: BaiduEx.localdata.nav2,
				title: "[ZhiDao]知道",
				link: $("#nv a:contains('知道')").attr("href")
			}, {
				left: -110,
				color: "#4E69AE",
				imgurl: BaiduEx.localdata.nav3,
				title: "[Pictures]图片",
				link: $("#nv a:contains('图片')").attr("href")
			}, {
				left: -160,
				color: "#EC709E",
				imgurl: BaiduEx.localdata.nav4,
				title: "[Maps]地图",
				link: $("#nv a:contains('地图')").attr("href")
			}, {
				left: -50,
				color: "#4CAC2A",
				imgurl: BaiduEx.localdata.nav5,
				title: "[More]更多",
				link: $("#nv a:contains('更多>>')").attr("href")
			}]
		});
	},
	HideSkinBtn: function() {
		$('#s_bg_entrance').hide();
	}
};


Aming.addFunc({
	key: "http://www.baidu.com/",
	similar: true,
	val: function() {
		// setTimeout(BaiduEx.init, 200);
		BaiduEx.init();
	}
});