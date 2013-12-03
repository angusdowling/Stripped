// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
 
    while (length--) {
        method = methods[length];
 
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/**
 * jQuery Mobile Select
 * @Author: Jochen Vandendriessche <jochen@builtbyrobot.com>
 * @Author URI: http://builtbyrobot.com
 *
 * @TODO:
 *			- create a before / after hook so we can fix some things euhm... before and
 *				after I suppose
**/
(function(b){var c={init:function(a){a=b.extend({autoHide:!0,defaultOption:"Go to...",deviceWidth:480,appendTo:"",className:"mobileselect",useWindowWidth:!1},a);if((a.useWindowWidth===!0?b(window).width():screen.width)<a.deviceWidth){var d=b(this),c=a.appendTo.length?b(a.appendTo):d.parent(),e=b('<select class="'+a.className+'" />');e.appendTo(c);b("<option />",{selected:!b(".current",d).length?"selected":!1,value:"",text:a.defaultOption}).appendTo(e);b("a",d).each(function(){var a=b(this),c=a.parent("li").hasClass("current")||a.hasClass("current")?"selected":!1;b("<option />",{selected:c,value:a.attr("href"),text:a.text()}).appendTo(e)});a.autoHide&&b(d).hide();e.change(function(){window.location=b(this).find("option:selected").val()})}}};b.fn.mobileSelect=function(a){if(c[a])return c[a].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof a==="object"||!a)return c.init.apply(this,arguments);else b.error("Method "+a+" does not exist on jQuery.mobileselect")}})(this.jQuery);

/*
 * http://github.com/amiel/html5support
 * Amiel Martin
 * 2010-01-26
 *
 * Support certain HTML 5 attributes with javascript, but only if the browser doesn't already support them.
 */

var HTML5Support=function(a){function e(){var d=a(this),e=d.attr(b)+"   ",f=function(){if(a.trim(d.val())==""||d.val()==e)d.val(e).addClass(c)},g=function(){if(d.val()==e)d.val("").removeClass(c)};d.focus(g).blur(f).blur()}function f(){var d=a(this),e=d.attr(b),f=a('<input type="text">').val(e).addClass(c).addClass(d.attr("class")).css("display","none");set_value=function(){if(a.trim(d.val())==""){f.show();d.hide()}},clear_value=function(){f.hide();d.show().focus()};d.after(f);f.focus(clear_value);d.blur(set_value).blur()}var b="placeholder",c=b,d={};a.extend(d,{supports_attribute:function(a,b){return a in document.createElement(b||"input")}});a.fn.placeholder=function(b){if(d.supports_attribute("placeholder"))return this;return this.each(function(){a(this).attr("type")=="password"?f.apply(this):e.apply(this)})};a.fn.autofocus=function(){if(d.supports_attribute("autofocus"))return this;return this.focus()};a.autofocus=function(){a("[autofocus]:visible").autofocus()};a.placeholder=function(){a("["+b+"]").placeholder()};a.html5support=function(){a.autofocus();a.placeholder()};return d}(jQuery)
