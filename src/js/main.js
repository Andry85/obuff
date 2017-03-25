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
						/* Start SORT POPAP  */
	/********************************************************/
		$(".sort__text").click(function() {
		  $(this).next('ul').slideToggle(500);
		});
		$( ".sort__it" ).click(function() {
		  $(this).children("i").show();
		  $(this).siblings().children("i").hide();
		  $(this).parent("ul").slideUp(500);
		  var sortText = $(this).children("span").text();
		  $(".sort__text" ).text(sortText);
		});
	/*********************************************************/
						/* End SORT POPAP  */
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


	




	


	

	











	

	


});