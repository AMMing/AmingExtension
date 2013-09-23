var aminghelper = new function() {};
aminghelper = {
	verison: "1.0.2.8",
	initData: function() {
		localData.Init("baidu", {
			bg: "http://img.hb.aicdn.com/310f1b07f5bc1a17afef53245dcb50de43650c9914bf52-evNi8t",
			sbg: "",
			nav1: "http://img.hb.aicdn.com/385dfb1db2366799d0ac78e4109cbfa1140714045911-HJSVzg",
			nav2: "http://img.hb.aicdn.com/b029f083f70a73a27d8da5f24a462e236e90717e5939-h3GbQe",
			nav3: "http://img.hb.aicdn.com/49b4c568d0177d26b1ac08bc049302369f9cbf6a5bd0-75Ac6X",
			nav4: "http://img.hb.aicdn.com/9b16875c26f9a4662d260bdfa5341cf1f4d6247364b6-lVqhtE",
			nav5: "http://img.hb.aicdn.com/5aa360bcb876fee29c7f4a14ec2311901ff1b44c4f6e-8ECO0p",
			isShowSbg: false,
			isShowNav: true,
			enabled: true
		});
		localData.Init("all", {
			totop_bg: "http://img.hb.aicdn.com/306478c2d6bb856382a77a1e32830737d1d2c7f159d1-Bdu8Dm",
			enabled: true,
			radius: 30
		});
	},
	checkupdate: function() {
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			url: "http://www.y2443.com/ver/chrome.aminghelper.ver.txt",
			jsonpCallback: "jsonpCallback",
			success: function(data) {
				debugger;
				if (aminghelper.verison != data.version) {
					notification.show('new verison.', data.info);
				}
			}
		});
	}
};