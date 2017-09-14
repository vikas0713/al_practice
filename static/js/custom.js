$(document).ready(function(){
	$(".button1").click(function () {
			$('#page1').hide();
				$('html, body').animate({scrollTop: '0px'}, 0);
		
					$('#page2').show();		
			$('#page2').stop().animate({
				right: 0    
		}, 1200);
	});
			
			
	$("#g-img").click(function () {
			$('#page2').hide();
				$('html, body').animate({scrollTop: '0px'}, 0);
		
			$('#page3').show();		
				$('#page3').stop().animate({
				right: 0    
		}, 1200);
	});
			
			
	$("#buy-tickets").click(function () {
			$('#page3').hide();
				$('html, body').animate({scrollTop: '0px'}, 0);
		
					$('#page4').show();		
			$('#page4').stop().animate({
					right: 0    
		}, 1200);
	});			
			
	$("#buy-your-ticket").click(function () {
				$('#page4').hide();
					$('html, body').animate({scrollTop: '0px'}, 0);
		
						$('#page5').show();		
				$('#page5').stop().animate({
					right: 0    
		}, 1200);
	});
			
	$(".div_hide_show").click(function(){
				$(".pop-up-wrap").hide();
						$('html, body').animate({scrollTop: '0px'}, 0);
							$("#div_hide_show").show();
			
	});
	$("#view-schedule").click(function () {
				$('#page5').hide();
					$('html, body').animate({scrollTop: '0px'}, 0);
		
						$('#page6').show();		
				$('#page6').stop().animate({
					right: 0    
		}, 1200);
	});
				
	$(".register-button").click(function () {
				$('#page6').hide();
					$('html, body').animate({scrollTop: '0px'}, 0);
		
		// initialize menu
					cbpHorizontalMenu.init();
		
					$('#page7').show();
		
					$('#page7').stop().animate({
						right: 0    
		}, 1200);
	});
		$( ".fa-search" ).click(function() {
				$( ".search-bar" ).toggleClass( "search-value" );
	});
	
	
	
	
	
	/* 2nd step */
	$("#value2").click(function () {
			$('.value-label2').hide();
			
			
				$('html, body').animate({scrollTop: '0px'}, 0);
		
					$('#lifestyle_bar').show();		
			$('#lifestyle_bar').stop().animate({
				right: 0    
		}, 1200);
		
	});
	/*2nd step */
	
	/* step3*/
	
	
		$("#register3").click(function () {
			$('#lifestyle_bar').hide();
			
			
				$('html, body').animate({scrollTop: '0px'}, 0);
		
					$('#three_column_img').show();		
			$('#three_column_img').stop().animate({
				right: 0    
		}, 1200);
		
	});
	

	
	
	
	
	
	
	/* step3*/
	
	
	
	/* step4*/
	
	
		$(".go-next4").click(function () {
			$('#three_column_img').hide();
			
			
				$('html, body').animate({scrollTop: '0px'}, 0);
		
					$('.four-slides-div').show();		
			$('.four-slides-div').stop().animate({
				right: 0    
		}, 1200);
		
	});
	

	
		$(".go-next5").click(function () {
			$('#three_column_img').hide();
			
			
				$('html, body').animate({scrollTop: '0px'}, 0);
		
					$('.four-slides-div_1').show();		
			$('.four-slides-div_1').stop().animate({
				right: 0    
		}, 1200);
		
	});
	
	
	$(".go-next6").click(function () {
			$('#three_column_img').hide();
			
			
				$('html, body').animate({scrollTop: '0px'}, 0);
		
					$('.four-slides-div_2').show();		
			$('.four-slides-div_2').stop().animate({
				right: 0    
		}, 1200);
		
	});
	
	/* step4*/
	
	
	/* step5*/
	
	
		$("#last-step-login").click(function () {
			$('.four-slides-div').hide();
			
			
				$('html, body').animate({scrollTop: '0px'}, 0);
		
					$('#soft-regis-login').show();		
			$('#soft-regis-login').stop().animate({
				right: 0    
		}, 1200);
		
	});
	

	
	
	/* step5*/
	/* step6*/
	
	
		$("#gotostep6").click(function () {
			$('#soft-regis-login').hide();
			
			
				$('html, body').animate({scrollTop: '0px'}, 0);
		
					$('#soft-regis-form-fill').show();		
			$('#soft-regis-form-fill').stop().animate({
				right: 0    
		}, 1200);
		
	});
	

	
	
	/* step6*/
	
	
	
	
	$('input[name="c1"]').click(function() {
		if ($("#formID input:checkbox:checked").length > 0) {
			$('#next-button').removeClass('disbaled-pop');
		} else {
				$('#next-button').addClass('disbaled-pop');
			}
		
	});
	
	
	$("#next-button").click(function () {
			
			$('.value-label3').hide();
			
				$('html, body').animate({scrollTop: '0px'}, 0);
		
					$('.value-label4').show();		
			$('.value-label4').stop().animate({
				right: 0    
		}, 1200);
		
	});
	
	/* if($('input[name="c1"]').is(":checked")) {
		$('#feel_car').removeClass('disbaled-pop');
	} */
	
	/* Range Slider for Desktop layout begins */
	var $r = $('input[type="range1"]');
	const sliders1 = document.querySelectorAll('input[type=range1]');
	
	// Initialize
	$r.rangeslider({
		polyfill: false,
		rangeClass: 'rangeslider',
		disabledClass: 'rangeslider--disabled',
		horizontalClass: 'rangeslider--horizontal',
		verticalClass: 'rangeslider--vertical',
		fillClass: 'rangeslider__fill',
		handleClass: 'rangeslider__handle',
		// onInit: function() {
			// this.min = 0;
		// }
	}).on('change', function() {
			const value = getValues(sliders1);
			/* console.log(value[0]); */
	
			if(value[0] > 5) {
				
				$("#imgID1").attr("src", "./img/bg2.jpg");
				$("#imgID2").attr("src", "./img/bg2.jpg");
			} else {
				
				$("#imgID1").attr("src", "./img/bg3.jpg");
				$("#imgID2").attr("src", "./img/bg3.jpg");
			}			
		});
				
	/* Range Slider for Desktop layout ends */
	function getValues(elements) {
		return Array.from(elements).map(el => el.value);
		
	}
	
	
	
});

