

$(function() {
  $(".phone-number").mask("+7(000)000-00-00", {
  });
});

$(function () {
	$('.slick-carousel').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    	$(".header-nav_item").on("click","a", function (event) {
        	event.preventDefault();
       		var id  = $(this).attr('href'),
            top = $(id).offset().top;
            $(".header-nav_item ul li a").removeClass('active');
  			$(this).addClass('active');
        	$('body,html').animate({scrollTop: top-59}, 1000);
    	});

	var $icon = $('.header-nav_mobileMenu span');
  	$icon.on('click',function(e){
    	$(this).toggleClass('close');
    	$('.header-nav_item .nav-pills').toggleClass('d-block');
  	});


  	$('.overlay').click(function (){
		$('.popup, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
	});
	$('a.open_window').click(function (e){
		$('.popup, .overlay').css({'opacity': 1, 'visibility': 'visible'});
		e.preventDefault();
	});

  $('button').click(function () {
        var val = $(this).closest("form").find("input[name=phone-number]").val().length;
        console.log(val);
        if (val != 16){
            alert('Номер введён не полностью');
            event.preventDefault();
        }
    });

});

$(document).ready(function(){
  
  var subcatLink = $('.header-nav_item ul li a');

  subcatLink.bind('click', function(e) {
    e.preventDefault();
    $(subcatLink).removeClass('active');
    $(this).addClass('active');
  });
  
  var lastScrollPosition = 0;
  var isFiring = false;
  
  function changeActiveLink() {
    var scrollbarLocation = $(this).scrollTop();
    
    subcatLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 70
      
      if (sectionOffset <= scrollbarLocation) {
         $(subcatLink).removeClass('active');
         $(this).addClass('active');
      }
    });
  }
  
  window.addEventListener('scroll', function() {
    if (!isFiring) {
      window.requestAnimationFrame(function() {
        changeActiveLink();
        isFiring = false;
      });
      isFiring = true;
    }
  });
   
});
