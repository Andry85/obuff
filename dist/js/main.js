$(function() {

	/*********************************************************/
						/* START MAIN SLIDER  */
	/********************************************************/
			$('#slider').owlCarousel({
                center: false,
                items: 1.5,
                loop: true,
                margin: 0,
                nav:true,
                dots: false,
              });
	/*********************************************************/
						/* END MAIN SLIDER  */
	/********************************************************/


	/*********************************************************/
						/* START CATALOG SLIDER  */
	/********************************************************/
			$('.catalog-slider').owlCarousel({
                center: false,
                items: 3,
                loop: true,
                margin: 52,
                nav:true,
                dots: false,
              });
	/*********************************************************/
						/* END CATALOG SLIDER  */
	/********************************************************/


	/*********************************************************/
						/* START PARTNERS SLIDER  */
	/********************************************************/
			$('.partners-list').owlCarousel({
				autoplay: true,
                center: false,
                items: 8,
                loop: true,
                margin: 58,
                nav: false,
                dots: false,
                autoHeight:true
              });
	/*********************************************************/
						/* END PARTNERS SLIDER  */
	/********************************************************/

	/*********************************************************/
						/* START PARTNERS SLIDER  */
	/********************************************************/
			$('.postambule-list').owlCarousel({
				autoplay: true,
                center: false,
                items: 3,
                loop: true,
                margin: 48,
                nav: false,
                dots: false,
                autoHeight:true
              });
	/*********************************************************/
						/* END PARTNERS SLIDER  */
	/********************************************************/

	/*********************************************************/
						/* Start CUSTOM SELECT  */
	/********************************************************/
    	$(".classic-select").select2({
		   theme: "classic",
		   minimumResultsForSearch: Infinity
		});


    /*********************************************************/
						/* End CUSTOM SELECT  */
	/********************************************************/ 



	/*********************************************************/
						/* Start MENU ACCARDION  */
	/********************************************************/
	$('.submenu > li > a').click(function(event) {
		event.preventDefault();
        $(this).next('ul').slideToggle(500);
        $(this).parent().siblings().children('ul').slideUp(500);
        $(this).parent().siblings().children('ul').prev('a').removeClass("activ");
        $(this).toggleClass("activ");
    }).next('ul').hide();
    /*********************************************************/
						/* End MENU ACCARDION  */
	/********************************************************/ 



	/*********************************************************/
						/* Start CATALOG ITEM  */
	/********************************************************/
		var add = $(".catalogList__add").outerHeight();
		$(".catalogList__item").css("padding-bottom", add);
		$(".catalogList__item").css("margin-bottom", -add+25);
	/*********************************************************/
						/* End CATALOG ITEM  */
	/********************************************************/


	/*********************************************************/
						/* Start PHONE MASK  */
	/********************************************************/
		$(".telephone").mask("+38 (999) 999-99-99");
	/*********************************************************/
						/* End PHONE MASK  */
	/********************************************************/


	/*********************************************************/
						/* Start COUNT  */
	/********************************************************/
		$('.number__down').click(function(event) {
			event.preventDefault(); 
			var count = $(this).parent().children('.number__count').val();
			$(this).parent().children('.number__count').val(--count);
    	});
    	$('.number__up').click(function(event) {
			event.preventDefault(); 
			var count = $(this).parent().children('.number__count').val();
			$(this).parent().children('.number__count').val(++count);
    	});

	/*********************************************************/
						/* End COUNT  */
	/********************************************************/  


	/*********************************************************/
						/* START FANCYBOX  */
	/********************************************************/
		$(".order__link--login").fancybox();
		$(".formRegFooter__link").fancybox();
		$(".forgot").fancybox();
		$(".backPass").fancybox();
		$(".addTocart").fancybox();
		$(".sendLetter").fancybox();
	/*********************************************************/
						/* END FANCYBOX */
	/********************************************************/
	

	/*********************************************************/
						/* START HINT  */
	/********************************************************/
		$(".hint__icon").mouseenter(function() {
		  $(this).next('.hint__desc').fadeIn("fast");
		});
		$(".hint__icon").mouseleave(function() {
		  $(this).next('.hint__desc').fadeOut("fast");
		});
	/*********************************************************/
						/* END HINT */
	/********************************************************/


	/*********************************************************/
						/* START BXSLIDER  */
	/********************************************************/
		$('.bxslider').bxSlider({
		  pagerCustom: '#bx-pager'
		});
		var srcPic;
		$(".bx-wrapper img").mouseenter(function(e) {
		  srcPic = $(this).attr('src');
		  var dataImg = $(this).data("img");

		  $(this).hide().attr('src', dataImg);
		  $(this).load(function() {							  
				$(this).fadeIn();							 
		  });
		$(".bx-wrapper img").mouseleave(function() {
		  $(this).hide().attr('src', srcPic);
		  $(this).load(function() {							  
				$(this).fadeIn();							 
		  });
		  $(this).clearQueue();
		  $(this).animate({left: 0,top: 0},1); 
		});
		$('.bx-wrapper img').mousemove(function(e){
			var offset = $(this).parents(".bx-wrapper").offset();
    		var parrent_height = $(this).parents(".bx-wrapper").height();
    		var  x = e.pageX - offset.left;
			var  y = e.pageY - offset.top;
			$(this).clearQueue();
			$(this).animate({left: -x,top: -y},1);
			});
		});
	/*********************************************************/
						/* END BXSLIDER */
	/********************************************************/



	




	


	

	











	

	


});