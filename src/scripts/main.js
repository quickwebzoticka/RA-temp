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

	resizewindow();
	$(window).resize(function(e){
		resizewindow();
	});

});

$(document).on('click', '.main-ways-item-top', function(){
	$(this).toggleClass('out');
	$(this).next().slideToggle();
	$('.main-ways-item-top').not(this).removeClass('out').next().slideUp();
});

function resizewindow() {
	let hideInfoWay = $(document).find('.main-ways-item-main');
	for (let i = 0; i < hideInfoWay.length; i++) {
		hideInfoWay.eq(i).prev().removeClass('out');
		hideInfoWay.eq(i).slideUp();
	}
};