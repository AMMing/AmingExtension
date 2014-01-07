var Wangda = new function() {};
Wangda = {
	key: "baidu",
	localdata: {},
	New_nav_obj: null,
	init: function() {
		this.timer();
	},
	timer: function() {
		setTimeout(function() {
			var hour = $("#hour").html();
			var minute = $("#minute").html();
			var second = $("#second").html();
			if (hour == 0 && minute == 0 && second == 0) {
				$("#button_gp").trigger("click");
				$("#376").trigger("click");
				debugger;
			}

			Wangda.timer();
			document.title = 'h:' + hour + ' m:' + minute + ' s:' + second;
		}, 500);
	}
};

// Aming.addFunc({
// 	key: "http://www.wandafilm.com/christmasSecondSkill.do?m=getPreSuccessUsers",
// 	similar: true,
// 	val: function() {
// 		Wangda.init();
// 	}
// });