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

/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));