/* Video code snippet for desktop view - begins */
$(document).ready(function(){
	var vid = document.getElementById("bgvid");

	var $ = jQuery;
	$("#bgvid").click(function() {
		var video = $(this).get(0);
		if (video.paused === false) {
			video.pause();
			jQuery("a.play-icon-desk").css('background', 'url("img/play.png")');
			jQuery("#vidCont").removeClass('vidActive');
			jQuery(".clickhide").show();
			jQuery(".clickshow").hide();
			jQuery("#tab-hide").show();
		} else { 
			video.play();		
			jQuery("a.play-icon-desk").css('background', 'url("img/play1.png")');
			jQuery("#vidCont").addClass('vidActive');
			jQuery(".clickhide").hide();
			jQuery(".clickshow").show();
			jQuery("#tab-hide").hide();
		}
	});

	jQuery(".glyphicon-remove").click(function(){
		vid.classList.toggle("stopfade");
	  if(vid.play) {
		jQuery("a.play-icon-desk").css('background', 'url("img/play1.png")');
		jQuery("#vidCont").addClass('vidActive');
		jQuery(".clickhide").hide();
		jQuery("#tab-hide").show();
		jQuery(".clickshow").show();
		
	  }
	  if (vid.paused) {
		vid.play();
	  } else {
		vid.pause();
		jQuery("a.play-icon-desk").css('background', 'url("img/play.png")');
		jQuery("#vidCont").removeClass('vidActive');
		jQuery(".clickhide").show();
		jQuery(".clickshow").hide();
		jQuery("#tab-hide").show();
	  }
	});

	var pauseButton = document.querySelector("#playIconDesk");

	if (window.matchMedia('(prefers-reduced-motion)').matches) {
		//vid.removeAttribute("autoplay");
		//vid.pause();
		
		//vid.removeAttribute("autoplay");
		//vid.pause();
	}

	function vidFade() {
	  vid.classList.add("stopfade");
	}

	vid.addEventListener('ended', function()
	{
	// only functional if "loop" is removed 
	vid.pause();
	// to capture IE10
	vidFade();
	}); 

	pauseButton.addEventListener("click", function() {
	  vid.classList.toggle("stopfade");
	  if(vid.play) { //alert('here1');
		jQuery("a.play-icon-desk").css('background', 'url("img/play1.png")');
		jQuery("#vidCont").addClass('vidActive');
		jQuery(".clickhide").hide();
		jQuery("#tab-hide").hide();
		jQuery(".clickshow").show();
		
	  }
	  if (vid.paused) {
		vid.play();
	  } else {
		vid.pause();
		jQuery("a.play-icon-desk").css('background', 'url("img/play.png")');
		jQuery("#vidCont").removeClass('vidActive');
		jQuery(".clickhide").show();
		jQuery(".clickshow").hide();
		
	  }
	});
});
/* Video code snippet for desktop view - ends */