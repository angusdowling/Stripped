(function($) {
	$(document).ready(function(){
		$('img').baseline(18); // Apply a 18px baseline to all images on the page
    	$('input, textarea').placeholder(); //Validate safe placeholders for ie

    	// insert code here

	});

	$(window).resize(function(){

		if(!$(".mobileselect").length) {
			createMobileMenu();
		} else if ($(window).width()>=960) {
			$('#navigation ul').show();
			$('.mobileselect').hide();
		} else {
			$('#navigation ul').hide();
			$('.mobileselect').show();
		}
	});
	function createMobileMenu(){
		$('#navigation ul').mobileSelect({
			autoHide: true, // Hide the ul automatically
			defaultOption: "Go to..", // The default select option
			deviceWidth: 960, // The select will be added for screensizes smaller than this
			appendTo: '#navigation', // Used to place the drop-down in some location other than where the primary nav exists
			className: 'mobileselect', // The class name applied to the select element
			useWindowWidth: true // Use the width of the window instead of the width of the screen
		});
	}
	Drupal.behaviors.mobileMenu = {
		attach: function (context) {
			createMobileMenu();
		}
	}
})(jQuery);