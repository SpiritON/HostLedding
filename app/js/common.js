//OwlCarouselOption
$(document).ready(function(){




	  	$(".owl-carousel").owlCarousel({

	loop: true,
  	margin: 40,
  	dots: true,
  	autoplay: true,
  	autoplayTimeout: 5000,
  	responsiveClass:true,
		responsive:{
        320:{
            items:1
        },
        769:{
            items:2
        },
        1170:{
            items:3
        }


    }



				
	  	
		});


});





//SlideToTop

$(function() {
 
	$(window).scroll(function() {
	 
		if($(this).scrollTop() != 0) 

		{
		 
			$('#toTop').fadeIn();
		 
		} 

		else 

		{
		 
			$('#toTop').fadeOut();
		}
		 
	});
		 
	$('#toTop').click(function() {
		 
			$('body,html').animate({scrollTop:0},800);
	 
	});
	 
});

//burgerMenuButton
$('.headerBurgerMenu').on('click', function(){

	$(this).toggleClass('active')

})


 