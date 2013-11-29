/**
 * jQuery Mobile Select
 * @Author: Jochen Vandendriessche <jochen@builtbyrobot.com>
 * @Author URI: http://builtbyrobot.com
 *
**/
(function($){
	"use strict";

	var methods = {
		init : function(config) {
			var options = $.extend({
				autoHide: true,
				defaultOption: "Go to...",
				deviceWidth: 480,
				appendTo: '',
				className: 'mobileselect',
				useWindowWidth: false
			}, config);
			// we'll use the width of the device, because we stopped browsersniffing
			// a long time ago. Anyway, we want to target _every_ small display
			var width = (options.useWindowWidth === true) ? $(window).width() : screen.width;
			if (width < options.deviceWidth){
				var _o = $(this), // store the jqyuery object once
						_p = (options.appendTo.length) ? $(options.appendTo) : _o.parent(), // get the parent node
						_s = $("<select class=\""+ options.className +"\" />"); // create a filthy select
					_s.appendTo(_p); // append it to the parent

					$("<option />", {
						 "selected": (!$('.active', _o).length) ? 'selected' : false,
						 "value": "",
						 "text": options.defaultOption
					}).appendTo(_s);

					// Populate the dropdown with menu items. If there is an li.active we'll
					// make this one selected
					$('a', _o).each(function() {
						var el = $(this),
						sl = ( el.parent('li').hasClass('active') || el.hasClass('active') ) ? 'selected' : false;
						$("<option />", {
							"selected": sl,
							"value": el.attr("href"),
							"text": el.text()
						}).appendTo(_s);
					});
					// hide the navigation ul
					if (options.autoHide){
						$(_o).hide();
					}
					// now make it work :-)
					_s.change(function() {
						window.location = $(this).find("option:selected").val();
					});
			}
		}
	};

	$.fn.mobileSelect = function(method){
		if ( methods[method] ) {
					return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
				} else if ( typeof method === 'object' || ! method ) {
					return methods.init.apply( this, arguments );
				} else {
					$.error( 'Method ' + method + ' does not exist on jQuery.mobileselect' );
		}
	};
})(this.jQuery);

/*global jQuery */
/*!
* Baseline.js 1.0
*
* Copyright 2012, Daniel Eden http://daneden.me
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Wed June 20 11:39:00 2012 GMT
*/
(function( $ ) {

	$.fn.baseline = function(breakpoints) {

		// Set up our variables, like a good little developer
		var tall, newHeight, base, old = 0;

		return this.each(function(){
			var $this = $(this); // Set the images as objects

			var setbase = function(breakpoints) { // The fun starts here
			
				// Check if a single value or multiple breakpoints are given                
		                if (typeof breakpoints === 'number') {
		                    base = breakpoints;
		                } else if (typeof breakpoints === 'object') {
		                    // Loop through the breakpoints and check which baseline to apply
		                    for (key in breakpoints) {
		                    	var current = parseInt(key);
		                        if (document.width > current && current >= old) {
		                            base = breakpoints[key];
		                            old = current;
		                        }
		                    }
		                }
                
				$this.css('maxHeight', 'none'); // Remove old max-height so that we can resize up as well as down
				tall = $this.height(); // Grab the height
				newHeight = Math.floor(tall / base) * base; // Make up a new height based on the baseline
				$this.css('maxHeight', newHeight); // Set it!
			}

			setbase(breakpoints); // Call on load

			$(window).resize(function(){ // And call again on resize.
				setbase(breakpoints);
			});

		});

	}

}) ( jQuery );
