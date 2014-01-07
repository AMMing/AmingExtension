window.addEventListener('load', function() {
	var baidu = localData.Get("baidu");
	/*baidu*/
	txt_bg.value = baidu.bg;
	txt_sbg.value = baidu.sbg;
	txt_nav1.value = baidu.nav1;
	txt_nav2.value = baidu.nav2;
	txt_nav3.value = baidu.nav3;
	txt_nav4.value = baidu.nav4;
	txt_nav5.value = baidu.nav5;
	isShowSbg.checked = baidu.isShowSbg;
	isShowNav.checked = baidu.isShowNav;
	baidu_enabled.checked = baidu.enabled;

	txt_bg.onchange = function() {
		baidu.bg = txt_bg.value;
		localData.Set("baidu", baidu);
	};
	txt_sbg.onchange = function() {
		baidu.sbg = txt_sbg.value;
		localData.Set("baidu", baidu);
	};
	txt_nav1.onchange = function() {
		baidu.nav1 = txt_nav1.value;
		localData.Set("baidu", baidu);
	};
	txt_nav2.onchange = function() {
		baidu.nav2 = txt_nav2.value;
		localData.Set("baidu", baidu);
	};
	txt_nav3.onchange = function() {
		baidu.nav3 = txt_nav3.value;
		localData.Set("baidu", baidu);
	};
	txt_nav4.onchange = function() {
		baidu.nav4 = txt_nav4.value;
		localData.Set("baidu", baidu);
	};
	txt_nav5.onchange = function() {
		baidu.nav5 = txt_nav5.value;
		localData.Set("baidu", baidu);
	};
	isShowSbg.onchange = function() {
		baidu.isShowSbg = isShowSbg.checked;
		localData.Set("baidu", baidu);
	};
	isShowNav.onchange = function() {
		baidu.isShowNav = isShowNav.checked;
		localData.Set("baidu", baidu);
	};
	baidu_enabled.onchange = function() {
		baidu.enabled = baidu_enabled.checked;
		localData.Set("baidu", baidu);
	};

	/*to top*/
	var all = localData.Get("all");
	txt_totop_bg.value = all.totop_bg;
	totop_enabled.checked = all.enabled;
	number_radius.value = all.radius;

	txt_totop_bg.onchange = function() {
		all.totop_bg = txt_totop_bg.value;
		localData.Set("all", all);
	};
	totop_enabled.onchange = function() {
		all.enabled = totop_enabled.checked;
		localData.Set("all", all);
	};
	number_radius.onchange = function() {
		all.radius = number_radius.value;
		localData.Set("all", all);
	};


	/* tieba */
	var baidutieba = localData.Get("baidutieba");
	baidutieba_removead.checked = all.enabled;

	baidutieba_removead.onchange = function() {
		baidutieba.remove_ad = baidutieba_removead.checked;
		localData.Set("baidutieba", baidutieba);
	};



	
});