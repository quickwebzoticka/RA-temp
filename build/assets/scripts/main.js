$(document).ready(function () {

	var select = function(s) {
    return document.querySelector(s);
  },
  animationWindow = select('#lottie'),    
    animData = {
		wrapper: animationWindow,
		animType: 'svg',
		loop: true,
		prerender: true,
		autoplay: true,
		path: 'assets/scripts/lottie/data.json'  
	}, anim;

	anim = bodymovin.loadAnimation(animData);
	anim.setSpeed(1);

	var select = function(s) {
    return document.querySelector(s);
  },
  animationWindow = select('#lottie2'),    
    animData = {
		wrapper: animationWindow,
		animType: 'svg',
		loop: true,
		prerender: true,
		autoplay: true,
		path: 'assets/scripts/lottie2/data.json'  
	}, anim2;

	anim2 = bodymovin.loadAnimation(animData);
	anim2.setSpeed(1);

	$(document).find('[name="tel"]').inputmask({
		mask: "+7 (999) 999-99-99",
		showMaskOnHover: false,
		showMaskOnFocus: true
	});
	$(document).find('[name="email"]').inputmask({ 
		alias: "email",
		showMaskOnHover: false,
		showMaskOnFocus: true
	});

	resizewindow();
	$(window).resize(function(e){
		resizewindow();
	});

});

$(document).on('click', '.main-banner-bot-mouse', function(){
	var $div = $(this).data('div');
	$('html, body').animate({
		scrollTop: $('#'+$div).offset().top
	}, 1000);
});

$(document).on('click', '.main-ways-item-top', function(){
	$(this).toggleClass('out');
	$(this).next().slideToggle();
	$('.main-ways-item-top').not(this).removeClass('out').next().slideUp();
});

$(document).on('click', '.main-adv-left-item-top', function(){
	$(this).toggleClass('out');
	$(this).next().slideToggle();
	$('.main-adv-left-item-top').not(this).removeClass('out').next().slideUp();
});

function resizewindow() {
	if (screen.width > 767) {
		$(document).find('.main-vacancy-items-item:not(:nth-child(3))').css('height', $(document).find('.main-vacancy-items-item:nth-child(1)').width() / 0.717 + 'px');
		$(document).find('.main-vacancy-items-item:nth-child(3)').css('height', $(document).find('.main-vacancy-items-item:nth-child(3)').width() + 'px');
	}

	let hideInfoWay = $(document).find('.main-ways-item-main');
	for (let i = 0; i < hideInfoWay.length; i++) {
		hideInfoWay.eq(i).prev().removeClass('out');
		hideInfoWay.eq(i).slideUp();
	}

	let hideInfoAdv = $(document).find('.main-adv-left-item-content');
	for (let i = 0; i < hideInfoAdv.length; i++) {
		hideInfoAdv.eq(i).prev().removeClass('out');
		hideInfoAdv.eq(i).slideUp();
	}

	
};