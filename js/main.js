(function($, window, undefined){
	//sn = Space Name TODO: change it every time you inti a new blank project
	var sn = {}, 
			windowHeight, windowWidth, contentHeight, contentWidth = 0;

	jQuery.fn.verticalCenter = function (position) {
		this.css("position", position);
		this.css("top", ( $(window).height() - this.height() ) / 2 + $(window).scrollTop() + "px");

		return this;
	};

	jQuery.fn.absoluteCenter = function (position) {
		this.css("position", position);
		this.css("top", ( $(window).height() - this.height() ) / 2 + $(window).scrollTop() + "px");
		this.css("left", ( $(window).width() - this.width() ) / 2 + "px");
		return this;
	};

	sn.getWindowSize = function() {
		windowHeight = $(window).height();
		windowWidth = $(window).width();
	};


	sn.sizeContent = function(){
		
	};

	$(window).load(function(){
		sn.getWindowSize();
		sn.sizeContent();
	});



	$(window).on("resize", function(){
		sn.getWindowSize();
		sn.sizeContent();
	});


	(function($) {
		
		// SVG fallback
		if (!Modernizr.svg) {
			var imgs = document.getElementsByTagName('img');
			var dotSVG = /.*\.svg$/;
			for (var i = 0; i != imgs.length; ++i) {
				if(imgs[i].src.match(dotSVG)) {
					imgs[i].src = imgs[i].src.slice(0, -3) + "png";
				}
			}
		}
	})(jQuery);

})(jQuery, window);
