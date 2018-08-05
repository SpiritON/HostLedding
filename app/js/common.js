//OwlCarouselOption
$(document).ready(function(){




	  	$(".owl-carousel").owlCarousel({

	loop: true,
  	margin: 50,
  	dots: true,
  	responsiveClass:true,
		responsive:{
        320:{
            items:1,
            dot: true
            
        },
        768:{
            items:2,
            dot: true
        },
        1170:{
            items:3,
            dot: true
        },

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
$('.burgerMenu').on('click', function(){

	$(this).toggleClass('active')

})


 