/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
var CherryJsCore={};!function(e){"use strict";(CherryJsCore={name:"Cherry Js Core",version:"1.0.0",author:"Cherry Team",variable:{$document:e(document),$window:e(window),browser_supported:!0,security:window.cherry_ajax,loaded_assets:{script:window.wp_load_script,style:window.wp_load_style},ui_auto_init:"true"===window.ui_init_object.auto_init,ui_auto_target:window.ui_init_object.targets},status:{on_load:!1,is_ready:!1},init:function(){e(document).on("ready",CherryJsCore.ready),e(window).on("load",CherryJsCore.load)},ready:function(){CherryJsCore.status.is_ready=!0,CherryJsCore.expressions.widget_ui_init()},load:function(){CherryJsCore.status.on_load=!0},expressions:{widget_ui_init:function(){e(document).on("widget-added widget-updated",function(r,t){e("body").trigger({type:"cherry-ui-elements-init",_target:t})})}},utilites:{namespace:function(e){var r=e.split("."),t=CherryJsCore,i=r.length,o=0;for(o=0;o<i;o+=1)void 0===t[r[o]]&&(t[r[o]]={}),t=t[r[o]];return t}}}).init()}(jQuery);
(function($){window.tm_pb_smooth_scroll=function($target,$top_section,speed,easing){var $window_width=$(window).width();if($('body').hasClass('tm_fixed_nav')&&$window_width>980){$menu_offset=$('#top-header').outerHeight()+$('#main-header').outerHeight()-1;}else{$menu_offset=-1;}
if($('#wpadminbar').length&&$window_width>600){$menu_offset+=$('#wpadminbar').outerHeight();}
if($top_section){$scroll_position=0;}else{$scroll_position=$target.offset().top-$menu_offset;}
if(typeof easing==='undefined'){easing='swing';}
$('html, body').animate({scrollTop:$scroll_position},speed,easing);}
window.tm_fix_video_wmode=function(video_wrapper){$(video_wrapper).each(function(){if($(this).find('iframe').length){var $this_el=$(this).find('iframe'),src_attr=$this_el.attr('src'),wmode_character=src_attr.indexOf('?')==-1?'?':'&amp;',this_src=src_attr+wmode_character+'wmode=opaque';$this_el.attr('src',this_src);}});}
window.tm_pb_form_placeholders_init=function($form){$form.find('input:text, textarea').each(function(index,domEle){var $tm_current_input=jQuery(domEle),$tm_comment_label=$tm_current_input.siblings('label'),tm_comment_label_value=$tm_current_input.siblings('label').text();if($tm_comment_label.length){$tm_comment_label.hide();if($tm_current_input.siblings('span.required')){tm_comment_label_value+=$tm_current_input.siblings('span.required').text();$tm_current_input.siblings('span.required').hide();}
$tm_current_input.val(tm_comment_label_value);}}).bind('focus',function(){var tm_label_text=jQuery(this).siblings('label').text();if(jQuery(this).siblings('span.required').length)tm_label_text+=jQuery(this).siblings('span.required').text();if(jQuery(this).val()===tm_label_text)jQuery(this).val("");}).bind('blur',function(){var tm_label_text=jQuery(this).siblings('label').text();if(jQuery(this).siblings('span.required').length)tm_label_text+=jQuery(this).siblings('span.required').text();if(jQuery(this).val()==="")jQuery(this).val(tm_label_text);});}
window.tm_duplicate_menu=function(menu,append_to,menu_id,menu_class,menu_click_event){append_to.each(function(){var $this_menu=$(this),$cloned_nav;if(''!==menu){menu.clone().attr('id',menu_id).removeClass().attr('class',menu_class).appendTo($this_menu);}
$cloned_nav=$this_menu.find('> ul');$cloned_nav.find('.menu_slide').remove();$cloned_nav.find('li:first').addClass('tm_first_mobile_item');$cloned_nav.find('a').on('click',function(){$this_menu.trigger('click');});if('no_click_event'!==menu_click_event){$this_menu.on('click','.mobile_menu_bar',function(){if($this_menu.hasClass('closed')){$this_menu.removeClass('closed').addClass('opened');$cloned_nav.stop().slideDown(500);}else{$this_menu.removeClass('opened').addClass('closed');$cloned_nav.stop().slideUp(500);}
return false;});}});$('#mobile_menu .centered-inline-logo-wrap').remove();}
window.tm_pb_remove_placeholder_text=function($form){$form.find('input:text, textarea').each(function(index,domEle){var $tm_current_input=jQuery(domEle),$tm_label=$tm_current_input.siblings('label'),tm_label_value=$tm_current_input.siblings('label').text();if($tm_label.length&&$tm_label.is(':hidden')){if($tm_label.text()==$tm_current_input.val())
$tm_current_input.val('');}});}
window.tm_fix_fullscreen_section=function(){var $tm_window=$(window);$('section.tm_pb_fullscreen').each(function(){var $this_section=$(this);$.proxy(tm_calc_fullscreen_section,$this_section)();$tm_window.on('resize',$.proxy(tm_calc_fullscreen_section,$this_section));});}})(jQuery);

!function(){"use strict";function e(e){e.fn.swiper=function(a){var s;return e(this).each(function(){var e=new t(this,a);s||(s=e)}),s}}var a,t=function(e,s){function r(e){return Math.floor(e)}function i(){y.autoplayTimeoutId=setTimeout(function(){y.params.loop?(y.fixLoop(),y._slideNext(),y.emit("onAutoplay",y)):y.isEnd?s.autoplayStopOnLast?y.stopAutoplay():(y._slideTo(0),y.emit("onAutoplay",y)):(y._slideNext(),y.emit("onAutoplay",y))},y.params.autoplay)}function n(e,t){var s=a(e.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){y.onResize(!0),y.emit("onObserverUpdate",y,e)})});s.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),y.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!y.params.allowSwipeToNext&&(y.isHorizontal()&&39===a||!y.isHorizontal()&&40===a))return!1;if(!y.params.allowSwipeToPrev&&(y.isHorizontal()&&37===a||!y.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(y.container.parents(".swiper-slide").length>0&&0===y.container.parents(".swiper-slide-active").length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=y.container.offset();y.rtl&&(n.left=n.left-y.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+y.width,n.top],[n.left,n.top+y.height],[n.left+y.width,n.top+y.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}y.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!y.rtl||37===a&&y.rtl)&&y.slideNext(),(37===a&&!y.rtl||39===a&&y.rtl)&&y.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&y.slideNext(),38===a&&y.slidePrev())}}function p(e){e.originalEvent&&(e=e.originalEvent);var a=y.mousewheel.event,t=0,s=y.rtl?-1:1;if(e.detail)t=-e.detail;else if("mousewheel"===a)if(y.params.mousewheelForceToAxis)if(y.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*s}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*s:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(y.params.mousewheelForceToAxis)if(y.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*s}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*s:-e.deltaY;if(0!==t){if(y.params.mousewheelInvert&&(t=-t),y.params.freeMode){var r=y.getWrapperTranslate()+t*y.params.mousewheelSensitivity,i=y.isBeginning,n=y.isEnd;if(r>=y.minTranslate()&&(r=y.minTranslate()),r<=y.maxTranslate()&&(r=y.maxTranslate()),y.setWrapperTransition(0),y.setWrapperTranslate(r),y.updateProgress(),y.updateActiveIndex(),(!i&&y.isBeginning||!n&&y.isEnd)&&y.updateClasses(),y.params.freeModeSticky?(clearTimeout(y.mousewheel.timeout),y.mousewheel.timeout=setTimeout(function(){y.slideReset()},300)):y.params.lazyLoading&&y.lazy&&y.lazy.load(),0===r||r===y.maxTranslate())return}else{if((new window.Date).getTime()-y.mousewheel.lastScrollTime>60)if(0>t)if(y.isEnd&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slideNext();else if(y.isBeginning&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slidePrev();y.mousewheel.lastScrollTime=(new window.Date).getTime()}return y.params.autoplay&&y.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function d(e,t){e=a(e);var s,r,i,n=y.rtl?-1:1;s=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):y.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",e.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},m=s&&s.virtualTranslate;s=s||{};var f={};for(var h in s)if("object"!=typeof s[h]||null===s[h]||(s[h].nodeType||s[h]===window||s[h]===document||"undefined"!=typeof Dom7&&s[h]instanceof Dom7||"undefined"!=typeof jQuery&&s[h]instanceof jQuery))f[h]=s[h];else{f[h]={};for(var g in s[h])f[h][g]=s[h][g]}for(var v in c)if("undefined"==typeof s[v])s[v]=c[v];else if("object"==typeof s[v])for(var w in c[v])"undefined"==typeof s[v][w]&&(s[v][w]=c[v][w]);var y=this;if(y.params=s,y.originalParams=f,y.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof Dom7&&(a=Dom7),("undefined"!=typeof a||(a="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(y.$=a,y.currentBreakpoint=void 0,y.getActiveBreakpoint=function(){if(!y.params.breakpoints)return!1;var e,a=!1,t=[];for(e in y.params.breakpoints)y.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)e=t[s],e>=window.innerWidth&&!a&&(a=e);return a||"max"},y.setBreakpoint=function(){var e=y.getActiveBreakpoint();if(e&&y.currentBreakpoint!==e){var a=e in y.params.breakpoints?y.params.breakpoints[e]:y.originalParams;for(var t in a)y.params[t]=a[t];y.currentBreakpoint=e}},y.params.breakpoints&&y.setBreakpoint(),y.container=a(e),0!==y.container.length)){if(y.container.length>1)return void y.container.each(function(){new t(this,s)});y.container[0].swiper=y,y.container.data("swiper",y),y.classNames.push("swiper-container-"+y.params.direction),y.params.freeMode&&y.classNames.push("swiper-container-free-mode"),y.support.flexbox||(y.classNames.push("swiper-container-no-flexbox"),y.params.slidesPerColumn=1),y.params.autoHeight&&y.classNames.push("swiper-container-autoheight"),(y.params.parallax||y.params.watchSlidesVisibility)&&(y.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(y.params.effect)>=0&&(y.support.transforms3d?(y.params.watchSlidesProgress=!0,y.classNames.push("swiper-container-3d")):y.params.effect="slide"),"slide"!==y.params.effect&&y.classNames.push("swiper-container-"+y.params.effect),"cube"===y.params.effect&&(y.params.resistanceRatio=0,y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.centeredSlides=!1,y.params.spaceBetween=0,y.params.virtualTranslate=!0,y.params.setWrapperSize=!1),("fade"===y.params.effect||"flip"===y.params.effect)&&(y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.watchSlidesProgress=!0,y.params.spaceBetween=0,y.params.setWrapperSize=!1,"undefined"==typeof m&&(y.params.virtualTranslate=!0)),y.params.grabCursor&&y.support.touch&&(y.params.grabCursor=!1),y.wrapper=y.container.children("."+y.params.wrapperClass),y.params.pagination&&(y.paginationContainer=a(y.params.pagination),"bullets"===y.params.paginationType&&y.params.paginationClickable?y.paginationContainer.addClass("swiper-pagination-clickable"):y.params.paginationClickable=!1,y.paginationContainer.addClass("swiper-pagination-"+y.params.paginationType)),y.isHorizontal=function(){return"horizontal"===y.params.direction},y.rtl=y.isHorizontal()&&("rtl"===y.container[0].dir.toLowerCase()||"rtl"===y.container.css("direction")),y.rtl&&y.classNames.push("swiper-container-rtl"),y.rtl&&(y.wrongRTL="-webkit-box"===y.wrapper.css("display")),y.params.slidesPerColumn>1&&y.classNames.push("swiper-container-multirow"),y.device.android&&y.classNames.push("swiper-container-android"),y.container.addClass(y.classNames.join(" ")),y.translate=0,y.progress=0,y.velocity=0,y.lockSwipeToNext=function(){y.params.allowSwipeToNext=!1},y.lockSwipeToPrev=function(){y.params.allowSwipeToPrev=!1},y.lockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!1},y.unlockSwipeToNext=function(){y.params.allowSwipeToNext=!0},y.unlockSwipeToPrev=function(){y.params.allowSwipeToPrev=!0},y.unlockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!0},y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab"),y.imagesToLoad=[],y.imagesLoaded=0,y.loadImage=function(e,a,t,s,r){function i(){r&&r()}var n;e.complete&&s?i():a?(n=new window.Image,n.onload=i,n.onerror=i,t&&(n.srcset=t),a&&(n.src=a)):i()},y.preloadImages=function(){function e(){"undefined"!=typeof y&&null!==y&&(void 0!==y.imagesLoaded&&y.imagesLoaded++,y.imagesLoaded===y.imagesToLoad.length&&(y.params.updateOnImagesReady&&y.update(),y.emit("onImagesReady",y)))}y.imagesToLoad=y.container.find("img");for(var a=0;a<y.imagesToLoad.length;a++)y.loadImage(y.imagesToLoad[a],y.imagesToLoad[a].currentSrc||y.imagesToLoad[a].getAttribute("src"),y.imagesToLoad[a].srcset||y.imagesToLoad[a].getAttribute("srcset"),!0,e)},y.autoplayTimeoutId=void 0,y.autoplaying=!1,y.autoplayPaused=!1,y.startAutoplay=function(){return"undefined"!=typeof y.autoplayTimeoutId?!1:y.params.autoplay?y.autoplaying?!1:(y.autoplaying=!0,y.emit("onAutoplayStart",y),void i()):!1},y.stopAutoplay=function(e){y.autoplayTimeoutId&&(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplaying=!1,y.autoplayTimeoutId=void 0,y.emit("onAutoplayStop",y))},y.pauseAutoplay=function(e){y.autoplayPaused||(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplayPaused=!0,0===e?(y.autoplayPaused=!1,i()):y.wrapper.transitionEnd(function(){y&&(y.autoplayPaused=!1,y.autoplaying?i():y.stopAutoplay())}))},y.minTranslate=function(){return-y.snapGrid[0]},y.maxTranslate=function(){return-y.snapGrid[y.snapGrid.length-1]},y.updateAutoHeight=function(){var e=y.slides.eq(y.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&y.wrapper.css("height",a+"px")}},y.updateContainerSize=function(){var e,a;e="undefined"!=typeof y.params.width?y.params.width:y.container[0].clientWidth,a="undefined"!=typeof y.params.height?y.params.height:y.container[0].clientHeight,0===e&&y.isHorizontal()||0===a&&!y.isHorizontal()||(e=e-parseInt(y.container.css("padding-left"),10)-parseInt(y.container.css("padding-right"),10),a=a-parseInt(y.container.css("padding-top"),10)-parseInt(y.container.css("padding-bottom"),10),y.width=e,y.height=a,y.size=y.isHorizontal()?y.width:y.height)},y.updateSlidesSize=function(){y.slides=y.wrapper.children("."+y.params.slideClass),y.snapGrid=[],y.slidesGrid=[],y.slidesSizesGrid=[];var e,a=y.params.spaceBetween,t=-y.params.slidesOffsetBefore,s=0,i=0;"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*y.size),y.virtualSize=-a,y.rtl?y.slides.css({marginLeft:"",marginTop:""}):y.slides.css({marginRight:"",marginBottom:""});var n;y.params.slidesPerColumn>1&&(n=Math.floor(y.slides.length/y.params.slidesPerColumn)===y.slides.length/y.params.slidesPerColumn?y.slides.length:Math.ceil(y.slides.length/y.params.slidesPerColumn)*y.params.slidesPerColumn,"auto"!==y.params.slidesPerView&&"row"===y.params.slidesPerColumnFill&&(n=Math.max(n,y.params.slidesPerView*y.params.slidesPerColumn)));var o,l=y.params.slidesPerColumn,p=n/l,d=p-(y.params.slidesPerColumn*p-y.slides.length);for(e=0;e<y.slides.length;e++){o=0;var u=y.slides.eq(e);if(y.params.slidesPerColumn>1){var c,m,f;"column"===y.params.slidesPerColumnFill?(m=Math.floor(e/l),f=e-m*l,(m>d||m===d&&f===l-1)&&++f>=l&&(f=0,m++),c=m+f*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(f=Math.floor(e/p),m=e-f*p),u.css({"margin-top":0!==f&&y.params.spaceBetween&&y.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",f)}"none"!==u.css("display")&&("auto"===y.params.slidesPerView?(o=y.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),y.params.roundLengths&&(o=r(o))):(o=(y.size-(y.params.slidesPerView-1)*a)/y.params.slidesPerView,y.params.roundLengths&&(o=r(o)),y.isHorizontal()?y.slides[e].style.width=o+"px":y.slides[e].style.height=o+"px"),y.slides[e].swiperSlideSize=o,y.slidesSizesGrid.push(o),y.params.centeredSlides?(t=t+o/2+s/2+a,0===e&&(t=t-y.size/2-a),Math.abs(t)<.001&&(t=0),i%y.params.slidesPerGroup===0&&y.snapGrid.push(t),y.slidesGrid.push(t)):(i%y.params.slidesPerGroup===0&&y.snapGrid.push(t),y.slidesGrid.push(t),t=t+o+a),y.virtualSize+=o+a,s=o,i++)}y.virtualSize=Math.max(y.virtualSize,y.size)+y.params.slidesOffsetAfter;var h;if(y.rtl&&y.wrongRTL&&("slide"===y.params.effect||"coverflow"===y.params.effect)&&y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),(!y.support.flexbox||y.params.setWrapperSize)&&(y.isHorizontal()?y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}):y.wrapper.css({height:y.virtualSize+y.params.spaceBetween+"px"})),y.params.slidesPerColumn>1&&(y.virtualSize=(o+y.params.spaceBetween)*n,y.virtualSize=Math.ceil(y.virtualSize/y.params.slidesPerColumn)-y.params.spaceBetween,y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),y.params.centeredSlides)){for(h=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<y.virtualSize+y.snapGrid[0]&&h.push(y.snapGrid[e]);y.snapGrid=h}if(!y.params.centeredSlides){for(h=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<=y.virtualSize-y.size&&h.push(y.snapGrid[e]);y.snapGrid=h,Math.floor(y.virtualSize-y.size)>Math.floor(y.snapGrid[y.snapGrid.length-1])&&y.snapGrid.push(y.virtualSize-y.size)}0===y.snapGrid.length&&(y.snapGrid=[0]),0!==y.params.spaceBetween&&(y.isHorizontal()?y.rtl?y.slides.css({marginLeft:a+"px"}):y.slides.css({marginRight:a+"px"}):y.slides.css({marginBottom:a+"px"})),y.params.watchSlidesProgress&&y.updateSlidesOffset()},y.updateSlidesOffset=function(){for(var e=0;e<y.slides.length;e++)y.slides[e].swiperSlideOffset=y.isHorizontal()?y.slides[e].offsetLeft:y.slides[e].offsetTop},y.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=y.translate||0),0!==y.slides.length){"undefined"==typeof y.slides[0].swiperSlideOffset&&y.updateSlidesOffset();var a=-e;y.rtl&&(a=e),y.slides.removeClass(y.params.slideVisibleClass);for(var t=0;t<y.slides.length;t++){var s=y.slides[t],r=(a-s.swiperSlideOffset)/(s.swiperSlideSize+y.params.spaceBetween);if(y.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+y.slidesSizesGrid[t],o=i>=0&&i<y.size||n>0&&n<=y.size||0>=i&&n>=y.size;o&&y.slides.eq(t).addClass(y.params.slideVisibleClass)}s.progress=y.rtl?-r:r}}},y.updateProgress=function(e){"undefined"==typeof e&&(e=y.translate||0);var a=y.maxTranslate()-y.minTranslate(),t=y.isBeginning,s=y.isEnd;0===a?(y.progress=0,y.isBeginning=y.isEnd=!0):(y.progress=(e-y.minTranslate())/a,y.isBeginning=y.progress<=0,y.isEnd=y.progress>=1),y.isBeginning&&!t&&y.emit("onReachBeginning",y),y.isEnd&&!s&&y.emit("onReachEnd",y),y.params.watchSlidesProgress&&y.updateSlidesProgress(e),y.emit("onProgress",y,y.progress)},y.updateActiveIndex=function(){var e,a,t,s=y.rtl?y.translate:-y.translate;for(a=0;a<y.slidesGrid.length;a++)"undefined"!=typeof y.slidesGrid[a+1]?s>=y.slidesGrid[a]&&s<y.slidesGrid[a+1]-(y.slidesGrid[a+1]-y.slidesGrid[a])/2?e=a:s>=y.slidesGrid[a]&&s<y.slidesGrid[a+1]&&(e=a+1):s>=y.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/y.params.slidesPerGroup),t>=y.snapGrid.length&&(t=y.snapGrid.length-1),e!==y.activeIndex&&(y.snapIndex=t,y.previousIndex=y.activeIndex,y.activeIndex=e,y.updateClasses())},y.updateClasses=function(){y.slides.removeClass(y.params.slideActiveClass+" "+y.params.slideNextClass+" "+y.params.slidePrevClass);var e=y.slides.eq(y.activeIndex);if(e.addClass(y.params.slideActiveClass),e.next("."+y.params.slideClass).addClass(y.params.slideNextClass),e.prev("."+y.params.slideClass).addClass(y.params.slidePrevClass),y.paginationContainer&&y.paginationContainer.length>0){var t,s=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length;if(y.params.loop?(t=Math.ceil(y.activeIndex-y.loopedSlides)/y.params.slidesPerGroup,t>y.slides.length-1-2*y.loopedSlides&&(t-=y.slides.length-2*y.loopedSlides),t>s-1&&(t-=s),0>t&&"bullets"!==y.params.paginationType&&(t=s+t)):t="undefined"!=typeof y.snapIndex?y.snapIndex:y.activeIndex||0,"bullets"===y.params.paginationType&&y.bullets&&y.bullets.length>0&&(y.bullets.removeClass(y.params.bulletActiveClass),y.paginationContainer.length>1?y.bullets.each(function(){a(this).index()===t&&a(this).addClass(y.params.bulletActiveClass)}):y.bullets.eq(t).addClass(y.params.bulletActiveClass)),"fraction"===y.params.paginationType&&(y.paginationContainer.find("."+y.params.paginationCurrentClass).text(t+1),y.paginationContainer.find("."+y.params.paginationTotalClass).text(s)),"progress"===y.params.paginationType){var r=(t+1)/s,i=r,n=1;y.isHorizontal()||(n=r,i=1),y.paginationContainer.find("."+y.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+i+") scaleY("+n+")").transition(y.params.speed)}"custom"===y.params.paginationType&&y.params.paginationCustomRender&&y.paginationContainer.html(y.params.paginationCustomRender(y,t+1,s))}y.params.loop||(y.params.prevButton&&(y.isBeginning?(a(y.params.prevButton).addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(a(y.params.prevButton))):(a(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(a(y.params.prevButton)))),y.params.nextButton&&(y.isEnd?(a(y.params.nextButton).addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(a(y.params.nextButton))):(a(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(a(y.params.nextButton)))))},y.updatePagination=function(){if(y.params.pagination&&y.paginationContainer&&y.paginationContainer.length>0){var e="";if("bullets"===y.params.paginationType){for(var a=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length,t=0;a>t;t++)e+=y.params.paginationBulletRender?y.params.paginationBulletRender(t,y.params.bulletClass):"<"+y.params.paginationElement+' class="'+y.params.bulletClass+'"></'+y.params.paginationElement+">";y.paginationContainer.html(e),y.bullets=y.paginationContainer.find("."+y.params.bulletClass),y.params.paginationClickable&&y.params.a11y&&y.a11y&&y.a11y.initPagination()}"fraction"===y.params.paginationType&&(e=y.params.paginationFractionRender?y.params.paginationFractionRender(y,y.params.paginationCurrentClass,y.params.paginationTotalClass):'<span class="'+y.params.paginationCurrentClass+'"></span> / <span class="'+y.params.paginationTotalClass+'"></span>',y.paginationContainer.html(e)),"progress"===y.params.paginationType&&(e=y.params.paginationProgressRender?y.params.paginationProgressRender(y,y.params.paginationProgressbarClass):'<span class="'+y.params.paginationProgressbarClass+'"></span>',y.paginationContainer.html(e))}},y.update=function(e){function a(){s=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate()),y.setWrapperTranslate(s),y.updateActiveIndex(),y.updateClasses()}if(y.updateContainerSize(),y.updateSlidesSize(),y.updateProgress(),y.updatePagination(),y.updateClasses(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),e){var t,s;y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode?(a(),y.params.autoHeight&&y.updateAutoHeight()):(t=("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0),t||a())}else y.params.autoHeight&&y.updateAutoHeight()},y.onResize=function(e){y.params.breakpoints&&y.setBreakpoint();var a=y.params.allowSwipeToPrev,t=y.params.allowSwipeToNext;if(y.params.allowSwipeToPrev=y.params.allowSwipeToNext=!0,y.updateContainerSize(),y.updateSlidesSize(),("auto"===y.params.slidesPerView||y.params.freeMode||e)&&y.updatePagination(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode){var s=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate());y.setWrapperTranslate(s),y.updateActiveIndex(),y.updateClasses(),y.params.autoHeight&&y.updateAutoHeight()}else y.updateClasses(),("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0);y.params.allowSwipeToPrev=a,y.params.allowSwipeToNext=t};var b=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?b=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(b=["MSPointerDown","MSPointerMove","MSPointerUp"]),y.touchEvents={start:y.support.touch||!y.params.simulateTouch?"touchstart":b[0],move:y.support.touch||!y.params.simulateTouch?"touchmove":b[1],end:y.support.touch||!y.params.simulateTouch?"touchend":b[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===y.params.touchEventsTarget?y.container:y.wrapper).addClass("swiper-wp8-"+y.params.direction),y.initEvents=function(e){var t=e?"off":"on",r=e?"removeEventListener":"addEventListener",i="container"===y.params.touchEventsTarget?y.container[0]:y.wrapper[0],n=y.support.touch?i:document,o=y.params.nested?!0:!1;y.browser.ie?(i[r](y.touchEvents.start,y.onTouchStart,!1),n[r](y.touchEvents.move,y.onTouchMove,o),n[r](y.touchEvents.end,y.onTouchEnd,!1)):(y.support.touch&&(i[r](y.touchEvents.start,y.onTouchStart,!1),i[r](y.touchEvents.move,y.onTouchMove,o),i[r](y.touchEvents.end,y.onTouchEnd,!1)),!s.simulateTouch||y.device.ios||y.device.android||(i[r]("mousedown",y.onTouchStart,!1),document[r]("mousemove",y.onTouchMove,o),document[r]("mouseup",y.onTouchEnd,!1))),window[r]("resize",y.onResize),y.params.nextButton&&(a(y.params.nextButton)[t]("click",y.onClickNext),y.params.a11y&&y.a11y&&a(y.params.nextButton)[t]("keydown",y.a11y.onEnterKey)),y.params.prevButton&&(a(y.params.prevButton)[t]("click",y.onClickPrev),y.params.a11y&&y.a11y&&a(y.params.prevButton)[t]("keydown",y.a11y.onEnterKey)),y.params.pagination&&y.params.paginationClickable&&(a(y.paginationContainer)[t]("click","."+y.params.bulletClass,y.onClickIndex),y.params.a11y&&y.a11y&&a(y.paginationContainer)[t]("keydown","."+y.params.bulletClass,y.a11y.onEnterKey)),(y.params.preventClicks||y.params.preventClicksPropagation)&&i[r]("click",y.preventClicks,!0)},y.attachEvents=function(e){y.initEvents()},y.detachEvents=function(){y.initEvents(!0)},y.allowClick=!0,y.preventClicks=function(e){y.allowClick||(y.params.preventClicks&&e.preventDefault(),y.params.preventClicksPropagation&&y.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},y.onClickNext=function(e){e.preventDefault(),(!y.isEnd||y.params.loop)&&y.slideNext()},y.onClickPrev=function(e){e.preventDefault(),(!y.isBeginning||y.params.loop)&&y.slidePrev()},y.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*y.params.slidesPerGroup;y.params.loop&&(t+=y.loopedSlides),y.slideTo(t)},y.updateClickedSlide=function(e){var t=n(e,"."+y.params.slideClass),s=!1;if(t)for(var r=0;r<y.slides.length;r++)y.slides[r]===t&&(s=!0);if(!t||!s)return y.clickedSlide=void 0,void(y.clickedIndex=void 0);if(y.clickedSlide=t,y.clickedIndex=a(t).index(),y.params.slideToClickedSlide&&void 0!==y.clickedIndex&&y.clickedIndex!==y.activeIndex){var i,o=y.clickedIndex;if(y.params.loop){if(y.animating)return;i=a(y.clickedSlide).attr("data-swiper-slide-index"),y.params.centeredSlides?o<y.loopedSlides-y.params.slidesPerView/2||o>y.slides.length-y.loopedSlides+y.params.slidesPerView/2?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o):o>y.slides.length-y.params.slidesPerView?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o)}else y.slideTo(o)}};var T,x,S,C,z,M,P,I,k,E,D="input, select, textarea, button",L=Date.now(),H=[];y.animating=!1,y.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,B;if(y.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),G="touchstart"===e.type,G||!("which"in e)||3!==e.which){if(y.params.noSwiping&&n(e,"."+y.params.noSwipingClass))return void(y.allowClick=!0);if(!y.params.swipeHandler||n(e,y.params.swipeHandler)){var t=y.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s=y.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(y.device.ios&&y.params.iOSEdgeSwipeDetection&&t<=y.params.iOSEdgeSwipeThreshold)){if(T=!0,x=!1,S=!0,z=void 0,B=void 0,y.touches.startX=t,y.touches.startY=s,C=Date.now(),y.allowClick=!0,y.updateContainerSize(),y.swipeDirection=void 0,y.params.threshold>0&&(I=!1),"touchstart"!==e.type){var r=!0;a(e.target).is(D)&&(r=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),r&&e.preventDefault()}y.emit("onTouchStart",y,e)}}}},y.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(G&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(y.params.onlyExternal)return y.allowClick=!1,void(T&&(y.touches.startX=y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.startY=y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,C=Date.now()));if(G&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return x=!0,void(y.allowClick=!1);if(S&&y.emit("onTouchMove",y,e),!(e.targetTouches&&e.targetTouches.length>1)){if(y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof z){var t=180*Math.atan2(Math.abs(y.touches.currentY-y.touches.startY),Math.abs(y.touches.currentX-y.touches.startX))/Math.PI;z=y.isHorizontal()?t>y.params.touchAngle:90-t>y.params.touchAngle}if(z&&y.emit("onTouchMoveOpposite",y,e),"undefined"==typeof B&&y.browser.ieTouch&&(y.touches.currentX!==y.touches.startX||y.touches.currentY!==y.touches.startY)&&(B=!0),T){if(z)return void(T=!1);if(B||!y.browser.ieTouch){y.allowClick=!1,y.emit("onSliderMove",y,e),e.preventDefault(),y.params.touchMoveStopPropagation&&!y.params.nested&&e.stopPropagation(),x||(s.loop&&y.fixLoop(),P=y.getWrapperTranslate(),y.setWrapperTransition(0),y.animating&&y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),y.params.autoplay&&y.autoplaying&&(y.params.autoplayDisableOnInteraction?y.stopAutoplay():y.pauseAutoplay()),E=!1,y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grabbing",y.container[0].style.cursor="-moz-grabbin",y.container[0].style.cursor="grabbing")),x=!0;var r=y.touches.diff=y.isHorizontal()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY;r*=y.params.touchRatio,y.rtl&&(r=-r),y.swipeDirection=r>0?"prev":"next",M=r+P;var i=!0;if(r>0&&M>y.minTranslate()?(i=!1,y.params.resistance&&(M=y.minTranslate()-1+Math.pow(-y.minTranslate()+P+r,y.params.resistanceRatio))):0>r&&M<y.maxTranslate()&&(i=!1,y.params.resistance&&(M=y.maxTranslate()+1-Math.pow(y.maxTranslate()-P-r,y.params.resistanceRatio))),i&&(e.preventedByNestedSwiper=!0),!y.params.allowSwipeToNext&&"next"===y.swipeDirection&&P>M&&(M=P),!y.params.allowSwipeToPrev&&"prev"===y.swipeDirection&&M>P&&(M=P),y.params.followFinger){if(y.params.threshold>0){if(!(Math.abs(r)>y.params.threshold||I))return void(M=P);if(!I)return I=!0,y.touches.startX=y.touches.currentX,y.touches.startY=y.touches.currentY,M=P,void(y.touches.diff=y.isHorizontal()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY)}(y.params.freeMode||y.params.watchSlidesProgress)&&y.updateActiveIndex(),y.params.freeMode&&(0===H.length&&H.push({position:y.touches[y.isHorizontal()?"startX":"startY"],time:C}),H.push({position:y.touches[y.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),y.updateProgress(M),y.setWrapperTranslate(M)}}}}}},y.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),S&&y.emit("onTouchEnd",y,e),S=!1,T){y.params.grabCursor&&x&&T&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab");var t=Date.now(),s=t-C;if(y.allowClick&&(y.updateClickedSlide(e),y.emit("onTap",y,e),300>s&&t-L>300&&(k&&clearTimeout(k),k=setTimeout(function(){y&&(y.params.paginationHide&&y.paginationContainer.length>0&&!a(e.target).hasClass(y.params.bulletClass)&&y.paginationContainer.toggleClass(y.params.paginationHiddenClass),
y.emit("onClick",y,e))},300)),300>s&&300>t-L&&(k&&clearTimeout(k),y.emit("onDoubleTap",y,e))),L=Date.now(),setTimeout(function(){y&&(y.allowClick=!0)},0),!T||!x||!y.swipeDirection||0===y.touches.diff||M===P)return void(T=x=!1);T=x=!1;var r;if(r=y.params.followFinger?y.rtl?y.translate:-y.translate:-M,y.params.freeMode){if(r<-y.minTranslate())return void y.slideTo(y.activeIndex);if(r>-y.maxTranslate())return void(y.slides.length<y.snapGrid.length?y.slideTo(y.snapGrid.length-1):y.slideTo(y.slides.length-1));if(y.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;y.velocity=o/l,y.velocity=y.velocity/2,Math.abs(y.velocity)<y.params.freeModeMinimumVelocity&&(y.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(y.velocity=0)}else y.velocity=0;H.length=0;var p=1e3*y.params.freeModeMomentumRatio,d=y.velocity*p,u=y.translate+d;y.rtl&&(u=-u);var c,m=!1,f=20*Math.abs(y.velocity)*y.params.freeModeMomentumBounceRatio;if(u<y.maxTranslate())y.params.freeModeMomentumBounce?(u+y.maxTranslate()<-f&&(u=y.maxTranslate()-f),c=y.maxTranslate(),m=!0,E=!0):u=y.maxTranslate();else if(u>y.minTranslate())y.params.freeModeMomentumBounce?(u-y.minTranslate()>f&&(u=y.minTranslate()+f),c=y.minTranslate(),m=!0,E=!0):u=y.minTranslate();else if(y.params.freeModeSticky){var h,g=0;for(g=0;g<y.snapGrid.length;g+=1)if(y.snapGrid[g]>-u){h=g;break}u=Math.abs(y.snapGrid[h]-u)<Math.abs(y.snapGrid[h-1]-u)||"next"===y.swipeDirection?y.snapGrid[h]:y.snapGrid[h-1],y.rtl||(u=-u)}if(0!==y.velocity)p=y.rtl?Math.abs((-u-y.translate)/y.velocity):Math.abs((u-y.translate)/y.velocity);else if(y.params.freeModeSticky)return void y.slideReset();y.params.freeModeMomentumBounce&&m?(y.updateProgress(c),y.setWrapperTransition(p),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating=!0,y.wrapper.transitionEnd(function(){y&&E&&(y.emit("onMomentumBounce",y),y.setWrapperTransition(y.params.speed),y.setWrapperTranslate(c),y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))})):y.velocity?(y.updateProgress(u),y.setWrapperTransition(p),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))):y.updateProgress(u),y.updateActiveIndex()}return void((!y.params.freeModeMomentum||s>=y.params.longSwipesMs)&&(y.updateProgress(),y.updateActiveIndex()))}var v,w=0,b=y.slidesSizesGrid[0];for(v=0;v<y.slidesGrid.length;v+=y.params.slidesPerGroup)"undefined"!=typeof y.slidesGrid[v+y.params.slidesPerGroup]?r>=y.slidesGrid[v]&&r<y.slidesGrid[v+y.params.slidesPerGroup]&&(w=v,b=y.slidesGrid[v+y.params.slidesPerGroup]-y.slidesGrid[v]):r>=y.slidesGrid[v]&&(w=v,b=y.slidesGrid[y.slidesGrid.length-1]-y.slidesGrid[y.slidesGrid.length-2]);var z=(r-y.slidesGrid[w])/b;if(s>y.params.longSwipesMs){if(!y.params.longSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&(z>=y.params.longSwipesRatio?y.slideTo(w+y.params.slidesPerGroup):y.slideTo(w)),"prev"===y.swipeDirection&&(z>1-y.params.longSwipesRatio?y.slideTo(w+y.params.slidesPerGroup):y.slideTo(w))}else{if(!y.params.shortSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&y.slideTo(w+y.params.slidesPerGroup),"prev"===y.swipeDirection&&y.slideTo(w)}}},y._slideTo=function(e,a){return y.slideTo(e,a,!0,!0)},y.slideTo=function(e,a,t,s){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),y.snapIndex=Math.floor(e/y.params.slidesPerGroup),y.snapIndex>=y.snapGrid.length&&(y.snapIndex=y.snapGrid.length-1);var r=-y.snapGrid[y.snapIndex];y.params.autoplay&&y.autoplaying&&(s||!y.params.autoplayDisableOnInteraction?y.pauseAutoplay(a):y.stopAutoplay()),y.updateProgress(r);for(var i=0;i<y.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*y.slidesGrid[i])&&(e=i);return!y.params.allowSwipeToNext&&r<y.translate&&r<y.minTranslate()?!1:!y.params.allowSwipeToPrev&&r>y.translate&&r>y.maxTranslate()&&(y.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=y.params.speed),y.previousIndex=y.activeIndex||0,y.activeIndex=e,y.rtl&&-r===y.translate||!y.rtl&&r===y.translate?(y.params.autoHeight&&y.updateAutoHeight(),y.updateClasses(),"slide"!==y.params.effect&&y.setWrapperTranslate(r),!1):(y.updateClasses(),y.onTransitionStart(t),0===a?(y.setWrapperTranslate(r),y.setWrapperTransition(0),y.onTransitionEnd(t)):(y.setWrapperTranslate(r),y.setWrapperTransition(a),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd(t)}))),!0))},y.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),y.params.autoHeight&&y.updateAutoHeight(),y.lazy&&y.lazy.onTransitionStart(),e&&(y.emit("onTransitionStart",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeStart",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextStart",y):y.emit("onSlidePrevStart",y)))},y.onTransitionEnd=function(e){y.animating=!1,y.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),y.lazy&&y.lazy.onTransitionEnd(),e&&(y.emit("onTransitionEnd",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeEnd",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextEnd",y):y.emit("onSlidePrevEnd",y))),y.params.hashnav&&y.hashnav&&y.hashnav.setHash()},y.slideNext=function(e,a,t){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex+y.params.slidesPerGroup,a,e,t)}return y.slideTo(y.activeIndex+y.params.slidesPerGroup,a,e,t)},y._slideNext=function(e){return y.slideNext(!0,e,!0)},y.slidePrev=function(e,a,t){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex-1,a,e,t)}return y.slideTo(y.activeIndex-1,a,e,t)},y._slidePrev=function(e){return y.slidePrev(!0,e,!0)},y.slideReset=function(e,a,t){return y.slideTo(y.activeIndex,a,e)},y.setWrapperTransition=function(e,a){y.wrapper.transition(e),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTransition(e),y.params.parallax&&y.parallax&&y.parallax.setTransition(e),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTransition(e),y.params.control&&y.controller&&y.controller.setTransition(e,a),y.emit("onSetTransition",y,e)},y.setWrapperTranslate=function(e,a,t){var s=0,i=0,n=0;y.isHorizontal()?s=y.rtl?-e:e:i=e,y.params.roundLengths&&(s=r(s),i=r(i)),y.params.virtualTranslate||(y.support.transforms3d?y.wrapper.transform("translate3d("+s+"px, "+i+"px, "+n+"px)"):y.wrapper.transform("translate("+s+"px, "+i+"px)")),y.translate=y.isHorizontal()?s:i;var o,l=y.maxTranslate()-y.minTranslate();o=0===l?0:(e-y.minTranslate())/l,o!==y.progress&&y.updateProgress(e),a&&y.updateActiveIndex(),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTranslate(y.translate),y.params.parallax&&y.parallax&&y.parallax.setTranslate(y.translate),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTranslate(y.translate),y.params.control&&y.controller&&y.controller.setTranslate(y.translate,t),y.emit("onSetTranslate",y,y.translate)},y.getTranslate=function(e,a){var t,s,r,i;return"undefined"==typeof a&&(a="x"),y.params.virtualTranslate?y.rtl?-y.translate:y.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),y.rtl&&s&&(s=-s),s||0)},y.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=y.isHorizontal()?"x":"y"),y.getTranslate(y.wrapper[0],e)},y.observers=[],y.initObservers=function(){if(y.params.observeParents)for(var e=y.container.parents(),a=0;a<e.length;a++)o(e[a]);o(y.container[0],{childList:!1}),o(y.wrapper[0],{attributes:!1})},y.disconnectObservers=function(){for(var e=0;e<y.observers.length;e++)y.observers[e].disconnect();y.observers=[]},y.createLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove();var e=y.wrapper.children("."+y.params.slideClass);"auto"!==y.params.slidesPerView||y.params.loopedSlides||(y.params.loopedSlides=e.length),y.loopedSlides=parseInt(y.params.loopedSlides||y.params.slidesPerView,10),y.loopedSlides=y.loopedSlides+y.params.loopAdditionalSlides,y.loopedSlides>e.length&&(y.loopedSlides=e.length);var t,s=[],r=[];for(e.each(function(t,i){var n=a(this);t<y.loopedSlides&&r.push(i),t<e.length&&t>=e.length-y.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)y.wrapper.append(a(r[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)y.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass))},y.destroyLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove(),y.slides.removeAttr("data-swiper-slide-index")},y.fixLoop=function(){var e;y.activeIndex<y.loopedSlides?(e=y.slides.length-3*y.loopedSlides+y.activeIndex,e+=y.loopedSlides,y.slideTo(e,0,!1,!0)):("auto"===y.params.slidesPerView&&y.activeIndex>=2*y.loopedSlides||y.activeIndex>y.slides.length-2*y.params.slidesPerView)&&(e=-y.slides.length+y.activeIndex+y.loopedSlides,e+=y.loopedSlides,y.slideTo(e,0,!1,!0))},y.appendSlide=function(e){if(y.params.loop&&y.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&y.wrapper.append(e[a]);else y.wrapper.append(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0)},y.prependSlide=function(e){y.params.loop&&y.destroyLoop();var a=y.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&y.wrapper.prepend(e[t]);a=y.activeIndex+e.length}else y.wrapper.prepend(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.slideTo(a,0,!1)},y.removeSlide=function(e){y.params.loop&&(y.destroyLoop(),y.slides=y.wrapper.children("."+y.params.slideClass));var a,t=y.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],y.slides[a]&&y.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,y.slides[a]&&y.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.params.loop?y.slideTo(t+y.loopedSlides,0,!1):y.slideTo(t,0,!1)},y.removeAllSlides=function(){for(var e=[],a=0;a<y.slides.length;a++)e.push(a);y.removeSlide(e)},y.effects={fade:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var a=y.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;y.params.virtualTranslate||(s-=y.translate);var r=0;y.isHorizontal()||(r=s,s=0);var i=y.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(y.slides.transition(e),y.params.virtualTranslate&&0!==e){var a=!1;y.slides.transitionEnd(function(){if(!a&&y){a=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)y.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var t=y.slides.eq(e),s=t[0].progress;y.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(y.isHorizontal()?y.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+y.slides.length,y.params.flip.slideShadows){var d=y.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=y.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.virtualTranslate&&0!==e){var t=!1;y.slides.eq(y.activeIndex).transitionEnd(function(){if(!t&&y&&a(this).hasClass(y.params.slideActiveClass)){t=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<e.length;s++)y.wrapper.trigger(e[s])}})}}},cube:{setTranslate:function(){var e,t=0;y.params.cube.shadow&&(y.isHorizontal()?(e=y.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),y.wrapper.append(e)),e.css({height:y.width+"px"})):(e=y.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),y.container.append(e))));for(var s=0;s<y.slides.length;s++){var r=y.slides.eq(s),i=90*s,n=Math.floor(i/360);y.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4===0?(l=4*-n*y.size,d=0):(s-1)%4===0?(l=0,d=4*-n*y.size):(s-2)%4===0?(l=y.size+4*n*y.size,d=y.size):(s-3)%4===0&&(l=-y.size,d=3*y.size+4*y.size*n),y.rtl&&(l=-l),y.isHorizontal()||(p=l,l=0);var u="rotateX("+(y.isHorizontal()?0:-i)+"deg) rotateY("+(y.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*s+90*o,y.rtl&&(t=90*-s-90*o)),r.transform(u),y.params.cube.slideShadows){var c=y.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),m=y.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),r.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),r.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(y.wrapper.css({"-webkit-transform-origin":"50% 50% -"+y.size/2+"px","-moz-transform-origin":"50% 50% -"+y.size/2+"px","-ms-transform-origin":"50% 50% -"+y.size/2+"px","transform-origin":"50% 50% -"+y.size/2+"px"}),y.params.cube.shadow)if(y.isHorizontal())e.transform("translate3d(0px, "+(y.width/2+y.params.cube.shadowOffset)+"px, "+-y.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+y.params.cube.shadowScale+")");else{var f=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),g=y.params.cube.shadowScale,v=y.params.cube.shadowScale/h,w=y.params.cube.shadowOffset;e.transform("scale3d("+g+", 1, "+v+") translate3d(0px, "+(y.height/2+w)+"px, "+-y.height/2/v+"px) rotateX(-90deg)")}var b=y.isSafari||y.isUiWebView?-y.size/2:0;y.wrapper.transform("translate3d(0px,0,"+b+"px) rotateX("+(y.isHorizontal()?0:t)+"deg) rotateY("+(y.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.cube.shadow&&!y.isHorizontal()&&y.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=y.translate,t=y.isHorizontal()?-e+y.width/2:-e+y.height/2,s=y.isHorizontal()?y.params.coverflow.rotate:-y.params.coverflow.rotate,r=y.params.coverflow.depth,i=0,n=y.slides.length;n>i;i++){var o=y.slides.eq(i),l=y.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*y.params.coverflow.modifier,u=y.isHorizontal()?s*d:0,c=y.isHorizontal()?0:s*d,m=-r*Math.abs(d),f=y.isHorizontal()?0:y.params.coverflow.stretch*d,h=y.isHorizontal()?y.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var g="translate3d("+h+"px,"+f+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(g),o[0].style.zIndex=-Math.abs(Math.round(d))+1,y.params.coverflow.slideShadows){var v=y.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=y.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(y.browser.ie){var b=y.wrapper[0].style;b.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},y.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==y.slides.length)){var s=y.slides.eq(e),r=s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!s.hasClass("swiper-lazy")||s.hasClass("swiper-lazy-loaded")||s.hasClass("swiper-lazy-loading")||(r=r.add(s[0])),0!==r.length&&r.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var r=e.attr("data-background"),i=e.attr("data-src"),n=e.attr("data-srcset");y.loadImage(e[0],i||r,n,!1,function(){if(r?(e.css("background-image","url("+r+")"),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),i&&(e.attr("src",i),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),s.find(".swiper-lazy-preloader, .preloader").remove(),y.params.loop&&t){var a=s.attr("data-swiper-slide-index");if(s.hasClass(y.params.slideDuplicateClass)){var o=y.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+y.params.slideDuplicateClass+")");y.lazy.loadImageInSlide(o.index(),!1)}else{var l=y.wrapper.children("."+y.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');y.lazy.loadImageInSlide(l.index(),!1)}}y.emit("onLazyImageReady",y,s[0],e[0])}),y.emit("onLazyImageLoad",y,s[0],e[0])})}},load:function(){var e;if(y.params.watchSlidesVisibility)y.wrapper.children("."+y.params.slideVisibleClass).each(function(){y.lazy.loadImageInSlide(a(this).index())});else if(y.params.slidesPerView>1)for(e=y.activeIndex;e<y.activeIndex+y.params.slidesPerView;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);else y.lazy.loadImageInSlide(y.activeIndex);if(y.params.lazyLoadingInPrevNext)if(y.params.slidesPerView>1||y.params.lazyLoadingInPrevNextAmount&&y.params.lazyLoadingInPrevNextAmount>1){var t=y.params.lazyLoadingInPrevNextAmount,s=y.params.slidesPerView,r=Math.min(y.activeIndex+s+Math.max(t,s),y.slides.length),i=Math.max(y.activeIndex-Math.max(s,t),0);for(e=y.activeIndex+y.params.slidesPerView;r>e;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);for(e=i;e<y.activeIndex;e++)y.slides[e]&&y.lazy.loadImageInSlide(e)}else{var n=y.wrapper.children("."+y.params.slideNextClass);n.length>0&&y.lazy.loadImageInSlide(n.index());var o=y.wrapper.children("."+y.params.slidePrevClass);o.length>0&&y.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){y.params.lazyLoading&&(y.params.lazyLoadingOnTransitionStart||!y.params.lazyLoadingOnTransitionStart&&!y.lazy.initialImageLoaded)&&y.lazy.load()},onTransitionEnd:function(){y.params.lazyLoading&&!y.params.lazyLoadingOnTransitionStart&&y.lazy.load()}},y.scrollbar={isTouched:!1,setDragPosition:function(e){var a=y.scrollbar,t=y.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[y.isHorizontal()?"left":"top"]-a.dragSize/2,r=-y.minTranslate()*a.moveDivider,i=-y.maxTranslate()*a.moveDivider;r>s?s=r:s>i&&(s=i),s=-s/a.moveDivider,y.updateProgress(s),y.setWrapperTranslate(s,!0)},dragStart:function(e){var a=y.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),y.params.scrollbarHide&&a.track.css("opacity",1),y.wrapper.transition(100),a.drag.transition(100),y.emit("onScrollbarDragStart",y)},dragMove:function(e){var a=y.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),y.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),y.emit("onScrollbarDragMove",y))},dragEnd:function(e){var a=y.scrollbar;a.isTouched&&(a.isTouched=!1,y.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),y.emit("onScrollbarDragEnd",y),y.params.scrollbarSnapOnRelease&&y.slideReset())},enableDraggable:function(){var e=y.scrollbar,t=y.support.touch?e.track:document;a(e.track).on(y.touchEvents.start,e.dragStart),a(t).on(y.touchEvents.move,e.dragMove),a(t).on(y.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=y.scrollbar,t=y.support.touch?e.track:document;a(e.track).off(y.touchEvents.start,e.dragStart),a(t).off(y.touchEvents.move,e.dragMove),a(t).off(y.touchEvents.end,e.dragEnd)},set:function(){if(y.params.scrollbar){var e=y.scrollbar;e.track=a(y.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=y.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=y.size/y.virtualSize,e.moveDivider=e.divider*(e.trackSize/y.size),e.dragSize=e.trackSize*e.divider,y.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",y.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(y.params.scrollbar){var e,a=y.scrollbar,t=(y.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*y.progress,y.rtl&&y.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),y.isHorizontal()?(y.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(y.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),y.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){y.params.scrollbar&&y.scrollbar.drag.transition(e)}},y.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,s;this.x.length;this.interpolate=function(e){return e?(s=r(this.x,e),t=s-1,(e-this.x[t])*(this.y[s]-this.y[t])/(this.x[s]-this.x[t])+this.y[t]):0};var r=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}()},getInterpolateFunction:function(e){y.controller.spline||(y.controller.spline=y.params.loop?new y.controller.LinearSpline(y.slidesGrid,e.slidesGrid):new y.controller.LinearSpline(y.snapGrid,e.snapGrid))},setTranslate:function(e,a){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-y.translate:y.translate,"slide"===y.params.controlBy&&(y.controller.getInterpolateFunction(a),i=-y.controller.spline.interpolate(-e)),i&&"container"!==y.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(y.maxTranslate()-y.minTranslate()),i=(e-y.minTranslate())*r+a.minTranslate()),y.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,y),a.updateActiveIndex()}var r,i,n=y.params.control;if(y.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&s(n[o]);else n instanceof t&&a!==n&&s(n)},setTransition:function(e,a){function s(a){a.setWrapperTransition(e,y),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===y.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=y.params.control;if(y.isArray(i))for(r=0;r<i.length;r++)i[r]!==a&&i[r]instanceof t&&s(i[r]);else i instanceof t&&a!==i&&s(i)}},y.hashnav={init:function(){if(y.params.hashnav){y.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,s=y.slides.length;s>t;t++){var r=y.slides.eq(t),i=r.attr("data-hash");if(i===e&&!r.hasClass(y.params.slideDuplicateClass)){var n=r.index();y.slideTo(n,a,y.params.runCallbacksOnInit,!0)}}}},setHash:function(){y.hashnav.initialized&&y.params.hashnav&&(document.location.hash=y.slides.eq(y.activeIndex).attr("data-hash")||"")}},y.disableKeyboardControl=function(){y.params.keyboardControl=!1,a(document).off("keydown",l)},y.enableKeyboardControl=function(){y.params.keyboardControl=!0,a(document).on("keydown",l)},y.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},y.params.mousewheelControl){try{new window.WheelEvent("wheel"),y.mousewheel.event="wheel"}catch(A){}y.mousewheel.event||void 0===document.onmousewheel||(y.mousewheel.event="mousewheel"),y.mousewheel.event||(y.mousewheel.event="DOMMouseScroll")}y.disableMousewheelControl=function(){return y.mousewheel.event?(y.container.off(y.mousewheel.event,p),!0):!1},y.enableMousewheelControl=function(){return y.mousewheel.event?(y.container.on(y.mousewheel.event,p),!0):!1},y.parallax={setTranslate:function(){y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){d(this,y.progress)}),y.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);d(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=y.params.speed),y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.transition(s)})}},y._plugins=[];for(var O in y.plugins){var R=y.plugins[O](y,y.params[O]);R&&y._plugins.push(R)}return y.callPlugins=function(e){for(var a=0;a<y._plugins.length;a++)e in y._plugins[a]&&y._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.emitterEventListeners={},y.emit=function(e){y.params[e]&&y.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(y.emitterEventListeners[e])for(a=0;a<y.emitterEventListeners[e].length;a++)y.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);y.callPlugins&&y.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.on=function(e,a){return e=u(e),y.emitterEventListeners[e]||(y.emitterEventListeners[e]=[]),y.emitterEventListeners[e].push(a),y},y.off=function(e,a){var t;if(e=u(e),"undefined"==typeof a)return y.emitterEventListeners[e]=[],y;if(y.emitterEventListeners[e]&&0!==y.emitterEventListeners[e].length){for(t=0;t<y.emitterEventListeners[e].length;t++)y.emitterEventListeners[e][t]===a&&y.emitterEventListeners[e].splice(t,1);return y}},y.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),y.off(e,t)};return y.on(e,t),y},y.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(y.params.nextButton)?(y.onClickNext(e),y.isEnd?y.a11y.notify(y.params.lastSlideMessage):y.a11y.notify(y.params.nextSlideMessage)):a(e.target).is(y.params.prevButton)&&(y.onClickPrev(e),y.isBeginning?y.a11y.notify(y.params.firstSlideMessage):y.a11y.notify(y.params.prevSlideMessage)),a(e.target).is("."+y.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=y.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){if(y.params.nextButton){var e=a(y.params.nextButton);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.nextSlideMessage)}if(y.params.prevButton){var t=a(y.params.prevButton);y.a11y.makeFocusable(t),y.a11y.addRole(t,"button"),y.a11y.addLabel(t,y.params.prevSlideMessage)}a(y.container).append(y.a11y.liveRegion)},initPagination:function(){y.params.pagination&&y.params.paginationClickable&&y.bullets&&y.bullets.length&&y.bullets.each(function(){var e=a(this);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){y.a11y.liveRegion&&y.a11y.liveRegion.length>0&&y.a11y.liveRegion.remove()}},y.init=function(){y.params.loop&&y.createLoop(),y.updateContainerSize(),y.updateSlidesSize(),y.updatePagination(),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.set(),y.params.scrollbarDraggable&&y.scrollbar.enableDraggable()),"slide"!==y.params.effect&&y.effects[y.params.effect]&&(y.params.loop||y.updateProgress(),y.effects[y.params.effect].setTranslate()),y.params.loop?y.slideTo(y.params.initialSlide+y.loopedSlides,0,y.params.runCallbacksOnInit):(y.slideTo(y.params.initialSlide,0,y.params.runCallbacksOnInit),0===y.params.initialSlide&&(y.parallax&&y.params.parallax&&y.parallax.setTranslate(),y.lazy&&y.params.lazyLoading&&(y.lazy.load(),y.lazy.initialImageLoaded=!0))),y.attachEvents(),y.params.observer&&y.support.observer&&y.initObservers(),y.params.preloadImages&&!y.params.lazyLoading&&y.preloadImages(),y.params.autoplay&&y.startAutoplay(),y.params.keyboardControl&&y.enableKeyboardControl&&y.enableKeyboardControl(),y.params.mousewheelControl&&y.enableMousewheelControl&&y.enableMousewheelControl(),y.params.hashnav&&y.hashnav&&y.hashnav.init(),y.params.a11y&&y.a11y&&y.a11y.init(),y.emit("onInit",y)},y.cleanupStyles=function(){y.container.removeClass(y.classNames.join(" ")).removeAttr("style"),y.wrapper.removeAttr("style"),y.slides&&y.slides.length&&y.slides.removeClass([y.params.slideVisibleClass,y.params.slideActiveClass,y.params.slideNextClass,y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),y.paginationContainer&&y.paginationContainer.length&&y.paginationContainer.removeClass(y.params.paginationHiddenClass),y.bullets&&y.bullets.length&&y.bullets.removeClass(y.params.bulletActiveClass),y.params.prevButton&&a(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.nextButton&&a(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.track&&y.scrollbar.track.length&&y.scrollbar.track.removeAttr("style"),y.scrollbar.drag&&y.scrollbar.drag.length&&y.scrollbar.drag.removeAttr("style"))},y.destroy=function(e,a){y.detachEvents(),y.stopAutoplay(),y.params.scrollbar&&y.scrollbar&&y.params.scrollbarDraggable&&y.scrollbar.disableDraggable(),y.params.loop&&y.destroyLoop(),a&&y.cleanupStyles(),y.disconnectObservers(),y.params.keyboardControl&&y.disableKeyboardControl&&y.disableKeyboardControl(),y.params.mousewheelControl&&y.disableMousewheelControl&&y.disableMousewheelControl(),y.params.a11y&&y.a11y&&y.a11y.destroy(),y.emit("onDestroy"),e!==!1&&(y=null)},y.init(),y}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,
ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var s=["jQuery","Zepto","Dom7"],r=0;r<s.length;r++)window[s[r]]&&e(window[s[r]]);var i;i="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,i&&("transitionEnd"in i.fn||(i.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in i.fn||(i.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in i.fn||(i.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
;
!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){function t(e){return new RegExp("(^| )"+e+"( |$)")}function e(e,t,n){for(var i=0;i<e.length;i++)t.call(n,e[i])}function n(e){this.element=e}n.prototype={add:function(){e(arguments,function(e){this.contains(e)||(this.element.className+=0<this.element.className.length?" "+e:e)},this)},remove:function(){e(arguments,function(e){this.element.className=this.element.className.replace(t(e),"")},this)},toggle:function(e){return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)},contains:function(e){return t(e).test(this.element.className)},replace:function(e,t){this.remove(e),this.add(t)}},"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:function(){return new n(this)}}),window.DOMTokenList&&null==DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=n.prototype.replace)}(),function(a,r){var e=new function(){this.cookiesAccepted=null,this.noticeContainer=null,this.setStatus=function(e){var t=this;"1"===cnArgs.onScroll&&a.removeEventListener("scroll",this.handleScroll);var n=new Date,i=new Date;"accept"===e?(e="true",i.setTime(parseInt(n.getTime())+1e3*parseInt(cnArgs.cookieTime))):(e="false",i.setTime(parseInt(n.getTime())+1e3*parseInt(cnArgs.cookieTimeRejected))),r.cookie=cnArgs.cookieName+"="+e+";expires="+i.toUTCString()+";"+(cnArgs.cookieDomain?"domain="+cnArgs.cookieDomain+";":"")+(cnArgs.cookiePath?"path="+cnArgs.cookiePath+";":"")+("1"===cnArgs.secure?"secure;":""),this.cookiesAccepted="true"===e;var o=new CustomEvent("setCookieNotice",{detail:{value:e,time:n,expires:i,data:cnArgs}});if(r.dispatchEvent(o),this.setBodyClass(["cookies-set","true"===e?"cookies-accepted":"cookies-refused"]),this.hideCookieNotice(),"automatic"===cnArgs.revokeCookiesOpt&&(this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.showRevokeNotice()}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.showRevokeNotice()})),"1"===cnArgs.redirection&&("true"===e&&null===this.cookiesAccepted||e!==this.cookiesAccepted&&null!==this.cookiesAccepted)){var s=a.location.protocol+"//",c=a.location.host+"/"+a.location.pathname;"1"===cnArgs.cache?(s=s+c.replace("//","/")+(""===a.location.search?"?":a.location.search+"&")+"cn-reloaded=1"+a.location.hash,a.location.href=s):(s=s+c.replace("//","/")+a.location.search+a.location.hash,a.location.reload(!0))}else;},this.getStatus=function(e){var t=("; "+r.cookie).split("; cookie_notice_accepted=");if(2!==t.length)return null;var n=t.pop().split(";").shift();return e?"true"===n:n},this.showCookieNotice=function(){var t=this,e=new CustomEvent("showCookieNotice",{detail:{data:cnArgs}});r.dispatchEvent(e),this.noticeContainer.classList.remove("cookie-notice-hidden"),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.add("cookie-notice-visible"),this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.noticeContainer.classList.remove("cn-animated")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.noticeContainer.classList.remove("cn-animated")})},this.hideCookieNotice=function(){var t=this,e=new CustomEvent("hideCookieNotice",{detail:{data:cnArgs}});r.dispatchEvent(e),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.remove("cookie-notice-visible"),this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.noticeContainer.classList.remove("cn-animated"),t.noticeContainer.classList.add("cookie-notice-hidden")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.noticeContainer.classList.remove("cn-animated"),t.noticeContainer.classList.add("cookie-notice-hidden")})},this.showRevokeNotice=function(){var t=this,e=new CustomEvent("showRevokeNotice",{detail:{data:cnArgs}});r.dispatchEvent(e),this.noticeContainer.classList.remove("cookie-revoke-hidden"),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.add("cookie-revoke-visible"),this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.noticeContainer.classList.remove("cn-animated")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.noticeContainer.classList.remove("cn-animated")})},this.hideRevokeNotice=function(){var t=this,e=new CustomEvent("hideRevokeNotice",{detail:{data:cnArgs}});r.dispatchEvent(e),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.remove("cookie-revoke-visible"),this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.noticeContainer.classList.remove("cn-animated"),t.noticeContainer.classList.add("cookie-revoke-hidden")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.noticeContainer.classList.remove("cn-animated"),t.noticeContainer.classList.add("cookie-revoke-hidden")})},this.setBodyClass=function(e){r.body.classList.remove("cookies-revoke"),r.body.classList.remove("cookies-accepted"),r.body.classList.remove("cookies-refused"),r.body.classList.remove("cookies-set"),r.body.classList.remove("cookies-not-set");for(var t=0;t<e.length;t++)r.body.classList.add(e[t])},this.handleScroll=function(){(a.pageYOffset||(r.documentElement||r.body.parentNode||r.body).scrollTop)>parseInt(cnArgs.onScrollOffset)&&this.setStatus("accept")},this.adjustOffset=function(){var e=r.getElementById("coronabar"),t=r.getElementById("wpadminbar"),n=0,i=0;"top"===cnArgs.position&&null!==t&&(i=t.offsetHeight,this.noticeContainer.style.top=i+"px"),null!==e&&(n=e.offsetHeight-1,"top"===cnArgs.position?(e.style.top=i+"px",this.noticeContainer.style.top=n+i+"px"):this.noticeContainer.style.bottom=n+"px")},this.getClosest=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n});e&&e!==r;e=e.parentNode)if(e.matches(t))return e;return null},this.init=function(){var t=this;this.cookiesAccepted=this.getStatus(!0),this.noticeContainer=r.getElementById("cookie-notice");var e=r.getElementsByClassName("cn-set-cookie"),n=r.getElementsByClassName("cn-revoke-cookie"),i=r.getElementById("cn-close-notice");this.noticeContainer.classList.add("cn-effect-"+cnArgs.hideEffect),t.adjustOffset(),a.addEventListener("resize",function(e){t.adjustOffset()}),"1"===cnArgs.coronabarActive&&(r.addEventListener("display.coronabar",function(e){t.adjustOffset()}),r.addEventListener("hide.coronabar",function(e){t.adjustOffset()}),r.addEventListener("saveData.coronabar",function(e){var t=e.detail;if(null!==t){var n=new XMLHttpRequest;n.open("POST",cnArgs.ajaxUrl,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"),n.onload=function(){200<=this.status&&this.status},n.onerror=function(){},n.send("action=cn_save_cases&nonce="+cnArgs.nonce+"&data="+JSON.stringify(t))}})),null===this.cookiesAccepted?("1"===cnArgs.onScroll&&a.addEventListener("scroll",function(e){t.handleScroll()}),"1"===cnArgs.onClick&&a.addEventListener("click",function(e){null===t.getClosest(e.target,"#cookie-notice")&&t.setStatus("accept")},!0),this.setBodyClass(["cookies-not-set"]),this.showCookieNotice()):(this.setBodyClass(["cookies-set",!0===this.cookiesAccepted?"cookies-accepted":"cookies-refused"]),"1"===cnArgs.revokeCookies&&"automatic"===cnArgs.revokeCookiesOpt&&this.showRevokeNotice());for(var o=0;o<e.length;o++)e[o].addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),t.setStatus(this.dataset.cookieSet)});"null"!==i&&i.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),t.setStatus(this.dataset.cookieSet)});for(o=0;o<n.length;o++)n[o].addEventListener("click",function(e){e.preventDefault(),t.noticeContainer.classList.contains("cookie-revoke-visible")?(t.hideRevokeNotice(),t.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.showCookieNotice()}),t.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.showCookieNotice()})):t.noticeContainer.classList.contains("cookie-notice-hidden")&&t.noticeContainer.classList.contains("cookie-revoke-hidden")&&t.showCookieNotice()})}};a.addEventListener("load",function(){e.init()},!1)}(window,document);
!function(t,i){"use strict";i.utilites.namespace("post_formats"),i.post_formats={init:function(){var t=this;i.status.document_ready?t.render(t):i.variable.$document.on("ready",t.render(t))},render:function(t){t.initalize("slider"),t.initalize("popup")},initalize:function(i){t(window).load(function(){t("*[data-cherry"+i+'="1"]').each(function(){var n=t(this).data(i),e=t(this).data("init");return t(this).data("initalized",!1),t(this).trigger({type:"cherry-post-formats-custom-init",item:t(this),object:i}),!0===t(this).data("initalized")?1:n?t.isFunction(jQuery.fn[n])?(t(this)[n](e),void 0):!1:!1})})}},i.post_formats.init()}(jQuery,window.CherryJsCore);
;
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
(function($){'use strict';$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null};if(!document.getElementById('fit-vids-style')){var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement("div");div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+'</style>';head.appendChild(div.childNodes[1]);}
if(options){$.extend(settings,options);}
return this.each(function(){var selectors=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]','object','embed'];if(settings.customSelector){selectors.push(settings.customSelector);}
var ignoreList='.fitvidsignore';if(settings.ignore){ignoreList=ignoreList+', '+settings.ignore;}
var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not('object object');$allVideos=$allVideos.not(ignoreList);$allVideos.each(function(count){var $this=$(this);if($this.parents(ignoreList).length>0){return;}
if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}
if((!$this.css('height')&&!$this.css('width'))&&(isNaN($this.attr('height'))||isNaN($this.attr('width'))))
{$this.attr('height',9);$this.attr('width',16);}
var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+count;$this.attr('id',videoID);}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+'%');$this.removeAttr('height').removeAttr('width');});});};})(window.jQuery||window.Zepto);
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */
(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});
(function($){jQuery.fn.closest_descendent=function(selector){var $found,$current_children=this.children();while($current_children.length){$found=$current_children.filter(selector);if($found.length){break;}
$current_children=$current_children.children();}
return $found;};}(jQuery));
(function($){jQuery.fn.reverse=[].reverse;}(jQuery));
(function($){$.tm_pb_simple_carousel=function(el,options){var settings=$.extend({slide_duration:500,},options);var $tm_carousel=$(el),$carousel_items=$tm_carousel.find('.tm_pb_carousel_items'),$the_carousel_items=$carousel_items.find('.tm_pb_carousel_item');$tm_carousel.tm_animation_running=false;$tm_carousel.addClass('container-width-change-notify').on('containerWidthChanged',function(event){set_carousel_columns($tm_carousel);set_carousel_height($tm_carousel);});$carousel_items.data('items',$the_carousel_items.toArray());$tm_carousel.data('columns_setting_up',false);$carousel_items.prepend('<div class="tm-pb-slider-arrows"><a class="tm-pb-slider-arrow et-pb-arrow-prev" href="#">'+'<span>'+tm_pb_custom.previous+'</span>'+'</a><a class="tm-pb-slider-arrow et-pb-arrow-next" href="#">'+'<span>'+tm_pb_custom.next+'</span>'+'</a></div>');set_carousel_columns($tm_carousel);set_carousel_height($tm_carousel);$tm_carousel_next=$tm_carousel.find('.tm-pb-arrow-next');$tm_carousel_prev=$tm_carousel.find('.tm-pb-arrow-prev');$tm_carousel_next.click(function(){if($tm_carousel.tm_animation_running)return false;$tm_carousel.tm_carousel_move_to('next');return false;});$tm_carousel_prev.click(function(){if($tm_carousel.tm_animation_running)return false;$tm_carousel.tm_carousel_move_to('previous');return false;});$tm_carousel.on('swipeleft',function(){$tm_carousel.tm_carousel_move_to('next');});$tm_carousel.on('swiperight',function(){$tm_carousel.tm_carousel_move_to('previous');});function set_carousel_height($the_carousel){var carousel_items_width=$the_carousel_items.width(),carousel_items_height=$the_carousel_items.height();$carousel_items.css('height',carousel_items_height+'px');}
function set_carousel_columns($the_carousel){var columns,$carousel_parent=$the_carousel.parents('.tm_pb_column'),carousel_items_width=$carousel_items.width(),carousel_item_count=$the_carousel_items.length;if($carousel_parent.hasClass('tm_pb_column_4_4')||$carousel_parent.hasClass('tm_pb_column_3_4')||$carousel_parent.hasClass('tm_pb_column_2_3')){if($tm_window.width()<768){columns=3;}else{columns=4;}}else if($carousel_parent.hasClass('tm_pb_column_1_2')||$carousel_parent.hasClass('tm_pb_column_3_8')||$carousel_parent.hasClass('tm_pb_column_1_3')){columns=3;}else if($carousel_parent.hasClass('tm_pb_column_1_4')){if($tm_window.width()>480&&$tm_window.width()<980){columns=3;}else{columns=2;}}
if(columns===$carousel_items.data('portfolio-columns')){return;}
if($the_carousel.data('columns_setting_up')){return;}
$the_carousel.data('columns_setting_up',true);$carousel_items.removeClass('columns-'+$carousel_items.data('portfolio-columns'));$carousel_items.addClass('columns-'+columns);$carousel_items.data('portfolio-columns',columns);if($carousel_items.find('.tm-carousel-group').length){$the_carousel_items.appendTo($carousel_items);$carousel_items.find('.tm-carousel-group').remove();}
var the_carousel_items=$carousel_items.data('items'),$carousel_group=$('<div class="tm-carousel-group active">').appendTo($carousel_items);$the_carousel_items.data('position','');if(the_carousel_items.length<=columns){$carousel_items.find('.tm-pb-slider-arrows').hide();}else{$carousel_items.find('.tm-pb-slider-arrows').show();}
for(position=1,x=0;x<the_carousel_items.length;x++,position++){if(x<columns){$(the_carousel_items[x]).show();$(the_carousel_items[x]).appendTo($carousel_group);$(the_carousel_items[x]).data('position',position);$(the_carousel_items[x]).addClass('position_'+position);}else{position=$(the_carousel_items[x]).data('position');$(the_carousel_items[x]).removeClass('position_'+position);$(the_carousel_items[x]).data('position','');$(the_carousel_items[x]).hide();}}
$the_carousel.data('columns_setting_up',false);}
$tm_carousel.tm_carousel_move_to=function(direction){var $active_carousel_group=$carousel_items.find('.tm-carousel-group.active'),items=$carousel_items.data('items'),columns=$carousel_items.data('portfolio-columns');$tm_carousel.tm_animation_running=true;var left=0;$active_carousel_group.children().each(function(){$(this).css({'position':'absolute','left':left});left=left+$(this).outerWidth(true);});if(direction=='next'){var $next_carousel_group,current_position=1,next_position=1,active_items_start=items.indexOf($active_carousel_group.children().first()[0]),active_items_end=active_items_start+columns,next_items_start=active_items_end,next_items_end=next_items_start+columns;$next_carousel_group=$('<div class="tm-carousel-group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group);$next_carousel_group.css({'width':$active_carousel_group.innerWidth()}).show();for(x=0,total=0;;x++,total++){if(total>=active_items_start&&total<active_items_end){$(items[x]).addClass('changing_position current_position current_position_'+current_position);$(items[x]).data('current_position',current_position);current_position++;}
if(total>=next_items_start&&total<next_items_end){$(items[x]).data('next_position',next_position);$(items[x]).addClass('changing_position next_position next_position_'+next_position);if(!$(items[x]).hasClass('current_position')){$(items[x]).addClass('container_append');}else{$(items[x]).clone(true).appendTo($active_carousel_group).hide().addClass('delayed_container_append_dup').attr('id',$(items[x]).attr('id')+'-dup');$(items[x]).addClass('delayed_container_append');}
next_position++;}
if(next_position>columns){break;}
if(x>=(items.length-1)){x=-1;}}
var sorted=$carousel_items.find('.container_append, .delayed_container_append_dup').sort(function(a,b){var el_a_position=parseInt($(a).data('next_position'));var el_b_position=parseInt($(b).data('next_position'));return(el_a_position<el_b_position)?-1:(el_a_position>el_b_position)?1:0;});$(sorted).show().appendTo($next_carousel_group);var left=0;$next_carousel_group.children().each(function(){$(this).css({'position':'absolute','left':left});left=left+$(this).outerWidth(true);});$active_carousel_group.animate({left:'-100%'},{duration:settings.slide_duration,complete:function(){$carousel_items.find('.delayed_container_append').each(function(){left=$('#'+$(this).attr('id')+'-dup').css('left');$(this).css({'position':'absolute','left':left});$(this).appendTo($next_carousel_group);});$active_carousel_group.removeClass('active');$active_carousel_group.children().each(function(){position=$(this).data('position');current_position=$(this).data('current_position');$(this).removeClass('position_'+position+' '+'changing_position current_position current_position_'+current_position);$(this).data('position','');$(this).data('current_position','');$(this).hide();$(this).css({'position':'','left':''});$(this).appendTo($carousel_items);});$active_carousel_group.remove();}});next_left=$active_carousel_group.width()+parseInt($the_carousel_items.first().css('marginRight').slice(0,-2));$next_carousel_group.addClass('active').css({'position':'absolute','top':0,left:next_left});$next_carousel_group.animate({left:'0%'},{duration:settings.slide_duration,complete:function(){$next_carousel_group.removeClass('next').addClass('active').css({'position':'','width':'','top':'','left':''});$next_carousel_group.find('.changing_position').each(function(index){position=$(this).data('position');current_position=$(this).data('current_position');next_position=$(this).data('next_position');$(this).removeClass('container_append delayed_container_append position_'+position+' '+'changing_position current_position current_position_'+current_position+' next_position next_position_'+next_position);$(this).data('current_position','');$(this).data('next_position','');$(this).data('position',(index+1));});$next_carousel_group.children().css({'position':'','left':''});$next_carousel_group.find('.delayed_container_append_dup').remove();$tm_carousel.tm_animation_running=false;}});}else if(direction=='previous'){var $prev_carousel_group,current_position=columns,prev_position=columns,columns_span=columns-1,active_items_start=items.indexOf($active_carousel_group.children().last()[0]),active_items_end=active_items_start-columns_span,prev_items_start=active_items_end-1,prev_items_end=prev_items_start-columns_span;$prev_carousel_group=$('<div class="tm-carousel-group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group);$prev_carousel_group.css({'left':'-'+$active_carousel_group.innerWidth(),'width':$active_carousel_group.innerWidth()}).show();for(x=(items.length-1),total=(items.length-1);;x--,total--){if(total<=active_items_start&&total>=active_items_end){$(items[x]).addClass('changing_position current_position current_position_'+current_position);$(items[x]).data('current_position',current_position);current_position--;}
if(total<=prev_items_start&&total>=prev_items_end){$(items[x]).data('prev_position',prev_position);$(items[x]).addClass('changing_position prev_position prev_position_'+prev_position);if(!$(items[x]).hasClass('current_position')){$(items[x]).addClass('container_append');}else{$(items[x]).clone(true).appendTo($active_carousel_group).addClass('delayed_container_append_dup').attr('id',$(items[x]).attr('id')+'-dup');$(items[x]).addClass('delayed_container_append');}
prev_position--;}
if(prev_position<=0){break;}
if(x==0){x=items.length;}}
var sorted=$carousel_items.find('.container_append, .delayed_container_append_dup').sort(function(a,b){var el_a_position=parseInt($(a).data('prev_position'));var el_b_position=parseInt($(b).data('prev_position'));return(el_a_position<el_b_position)?-1:(el_a_position>el_b_position)?1:0;});$(sorted).show().appendTo($prev_carousel_group);var left=0;$prev_carousel_group.children().each(function(){$(this).css({'position':'absolute','left':left});left=left+$(this).outerWidth(true);});$active_carousel_group.animate({left:'100%'},{duration:settings.slide_duration,complete:function(){$carousel_items.find('.delayed_container_append').reverse().each(function(){left=$('#'+$(this).attr('id')+'-dup').css('left');$(this).css({'position':'absolute','left':left});$(this).prependTo($prev_carousel_group);});$active_carousel_group.removeClass('active');$active_carousel_group.children().each(function(){position=$(this).data('position');current_position=$(this).data('current_position');$(this).removeClass('position_'+position+' '+'changing_position current_position current_position_'+current_position);$(this).data('position','');$(this).data('current_position','');$(this).hide();$(this).css({'position':'','left':''});$(this).appendTo($carousel_items);});$active_carousel_group.remove();}});prev_left=(-1)*$active_carousel_group.width()-parseInt($the_carousel_items.first().css('marginRight').slice(0,-2));$prev_carousel_group.addClass('active').css({'position':'absolute','top':0,left:prev_left});$prev_carousel_group.animate({left:'0%'},{duration:settings.slide_duration,complete:function(){$prev_carousel_group.removeClass('prev').addClass('active').css({'position':'','width':'','top':'','left':''});$prev_carousel_group.find('.delayed_container_append_dup').remove();$prev_carousel_group.find('.changing_position').each(function(index){position=$(this).data('position');current_position=$(this).data('current_position');prev_position=$(this).data('prev_position');$(this).removeClass('container_append delayed_container_append position_'+position+' '+'changing_position current_position current_position_'+current_position+' prev_position prev_position_'+prev_position);$(this).data('current_position','');$(this).data('prev_position','');position=index+1;$(this).data('position',position);$(this).addClass('position_'+position);});$prev_carousel_group.children().css({'position':'','left':''});$tm_carousel.tm_animation_running=false;}});}}}
$.fn.tm_pb_simple_carousel=function(options){return this.each(function(){new $.tm_pb_simple_carousel(this,options);});}}(jQuery));
(function($){$.tm_pb_simple_slider=function(el,options){var settings=$.extend({slide:'.tm-slide',arrows:'.tm-pb-slider-arrows',prev_arrow:'.tm-pb-arrow-prev',next_arrow:'.tm-pb-arrow-next',controls:'.tm-pb-controllers a',carousel_controls:'.tm_pb_carousel_item',control_active_class:'tm-pb-active-control',previous_text:tm_pb_custom.previous,next_text:tm_pb_custom.next,fade_speed:500,use_arrows:true,use_controls:true,manual_arrows:'',append_controls_to:'',controls_below:false,controls_class:'tm-pb-controllers',slideshow:false,slideshow_speed:7000,show_progress_bar:false,tabs_animation:false,use_carousel:false},options);var $tm_slider=$(el),$tm_slide=$tm_slider.closest_descendent(settings.slide),tm_slides_number=$tm_slide.length,tm_fade_speed=settings.fade_speed,tm_active_slide=0,$tm_slider_arrows,$tm_slider_prev,$tm_slider_next,$tm_slider_controls,$tm_slider_carousel_controls,tm_slider_timer,controls_html='',carousel_html='',$progress_bar=null,progress_timer_count=0,$tm_pb_container=$tm_slider.find('.tm_pb_container'),tm_pb_container_width=$tm_pb_container.width(),is_post_slider=$tm_slider.hasClass('tm_pb_post_slider');$tm_slider.tm_animation_running=false;$.data(el,"tm_pb_simple_slider",$tm_slider);$tm_slide.eq(0).addClass('tm-pb-active-slide');if(!settings.tabs_animation){if(!$tm_slider.hasClass('tm_pb_bg_layout_dark')&&!$tm_slider.hasClass('tm_pb_bg_layout_light')){$tm_slider.addClass(tm_get_bg_layout_color($tm_slide.eq(0)));}}
if(settings.use_arrows&&tm_slides_number>1){if(settings.manual_arrows=='')
$tm_slider.append('<div class="tm-pb-slider-arrows"><a class="tm-pb-arrow-prev" href="#">'+'<span>'+settings.previous_text+'</span>'+'</a><a class="tm-pb-arrow-next" href="#">'+'<span>'+settings.next_text+'</span>'+'</a></div>');else
$tm_slider.append(settings.manual_arrows);$tm_slider_arrows=$tm_slider.find(settings.arrows);$tm_slider_prev=$tm_slider.find(settings.prev_arrow);$tm_slider_next=$tm_slider.find(settings.next_arrow);$tm_slider_next.click(function(){if($tm_slider.tm_animation_running)return false;$tm_slider.tm_slider_move_to('next');return false;});$tm_slider_prev.click(function(){if($tm_slider.tm_animation_running)return false;$tm_slider.tm_slider_move_to('previous');return false;});$tm_slider.find(settings.slide).on('swipeleft',function(){$tm_slider.tm_slider_move_to('next');});$tm_slider.find(settings.slide).on('swiperight',function(){$tm_slider.tm_slider_move_to('previous');});}
if(settings.use_controls&&tm_slides_number>1){for(var i=1;i<=tm_slides_number;i++){controls_html+='<a href="#"'+(i==1?' class="'+settings.control_active_class+'"':'')+'>'+i+'</a>';}
controls_html='<div class="'+settings.controls_class+'">'+
controls_html+'</div>';if(settings.append_controls_to=='')
$tm_slider.append(controls_html);else
$(settings.append_controls_to).append(controls_html);if(settings.controls_below)
$tm_slider_controls=$tm_slider.parent().find(settings.controls);else
$tm_slider_controls=$tm_slider.find(settings.controls);tm_maybe_set_controls_color($tm_slide.eq(0));$tm_slider_controls.click(function(){if($tm_slider.tm_animation_running)return false;$tm_slider.tm_slider_move_to($(this).index());return false;});}
if(settings.use_carousel&&tm_slides_number>1){for(var i=1;i<=tm_slides_number;i++){slide_id=i-1;image_src=($tm_slide.eq(slide_id).data('image')!==undefined)?'url('+$tm_slide.eq(slide_id).data('image')+')':'none';carousel_html+='<div class="tm_pb_carousel_item '+(i==1?settings.control_active_class:'')+'" data-slide-id="'+slide_id+'">'+'<div class="tm_pb_video_overlay" href="#" style="background-image: '+image_src+';">'+'<div class="tm_pb_video_overlay_hover"><a href="#" class="tm_pb_video_play"></a></div>'+'</div>'+'</div>';}
carousel_html='<div class="tm_pb_carousel">'+'<div class="tm_pb_carousel_items">'+
carousel_html+'</div>'+'</div>';$tm_slider.after(carousel_html);$tm_slider_carousel_controls=$tm_slider.siblings('.tm_pb_carousel').find(settings.carousel_controls);$tm_slider_carousel_controls.click(function(){if($tm_slider.tm_animation_running)return false;var $this=$(this);$tm_slider.tm_slider_move_to($this.data('slide-id'));return false;});}
if(settings.slideshow&&tm_slides_number>1){$tm_slider.hover(function(){if($tm_slider.hasClass('tm_slider_auto_ignore_hover')){return;}
$tm_slider.addClass('tm_slider_hovered');if(typeof tm_slider_timer!='undefined'){clearInterval(tm_slider_timer);}},function(){if($tm_slider.hasClass('tm_slider_auto_ignore_hover')){return;}
$tm_slider.removeClass('tm_slider_hovered');tm_slider_auto_rotate();});}
tm_slider_auto_rotate();function tm_slider_auto_rotate(){if(settings.slideshow&&tm_slides_number>1&&!$tm_slider.hasClass('tm_slider_hovered')){tm_slider_timer=setTimeout(function(){$tm_slider.tm_slider_move_to('next');},settings.slideshow_speed);}}
function tm_stop_video(active_slide){var $tm_video,tm_video_src;if(active_slide.has('iframe').length){$tm_video=active_slide.find('iframe');tm_video_src=$tm_video.attr('src');$tm_video.attr('src','');$tm_video.attr('src',tm_video_src);}else if(active_slide.has('video').length){if(!active_slide.find('.tm_pb_section_video_bg').length){$tm_video=active_slide.find('video');$tm_video[0].pause();}}}
function tm_fix_slider_content_images(){var $this_slider=$tm_slider,$slide_image_container=$this_slider.find('.tm-pb-active-slide .tm_pb_slide_image');$slide_video_container=$this_slider.find('.tm-pb-active-slide .tm_pb_slide_video');$slide=$slide_image_container.closest('.tm_pb_slide'),$slider=$slide.closest('.tm_pb_slider'),slide_height=$slider.innerHeight(),image_height=parseInt(slide_height*0.8),$top_header=$('#top-header'),$main_header=$('#main-header'),$tm_transparent_nav=$('.tm_transparent_nav'),$tm_vertical_nav=$('.tm_vertical_nav');$slide_image_container.find('img').css('maxHeight',image_height+'px');if($slide.hasClass('tm_pb_media_alignment_center')){$slide_image_container.css('marginTop','-'+parseInt($slide_image_container.height()/2)+'px');}
$slide_video_container.css('marginTop','-'+parseInt($slide_video_container.height()/2)+'px');$slide_image_container.find('img').addClass('active');}
function tm_get_bg_layout_color($slide){if($slide.hasClass('tm_pb_bg_layout_dark')){return'tm_pb_bg_layout_dark';}
return'tm_pb_bg_layout_light';}
function tm_maybe_set_controls_color($slide){var next_slide_dot_color,$arrows,arrows_color;if(typeof $tm_slider_controls!=='undefined'&&$tm_slider_controls.length){next_slide_dot_color=$slide.data('dots_color')||'';if(next_slide_dot_color!==''){$tm_slider_controls.attr('style','background-color: '+hex_to_rgba(next_slide_dot_color,'0.3')+';')
$tm_slider_controls.filter('.tm-pb-active-control').attr('style','background-color: '+hex_to_rgba(next_slide_dot_color)+'!important;');}else{$tm_slider_controls.removeAttr('style');}}
if(typeof $tm_slider_arrows!=='undefined'&&$tm_slider_arrows.length){$arrows=$tm_slider_arrows.find('a');arrows_color=$slide.data('arrows_color')||'';if(arrows_color!==''){$arrows.css('color',arrows_color);}else{$arrows.css('color','inherit');}}}
function tm_fix_builder_content(){if(is_post_slider){setTimeout(function(){var $tm_pb_circle_counter=$('.tm_pb_circle_counter'),$tm_pb_number_counter=$('.tm_pb_number_counter');window.tm_fix_testimonial_inner_width();if($tm_pb_circle_counter.length){window.tm_pb_reinit_circle_counters($tm_pb_circle_counter);}
if($tm_pb_number_counter.length){window.tm_pb_reinit_number_counters($tm_pb_number_counter);}
window.tm_reinint_waypoint_modules();},1000);}}
function hex_to_rgba(color,alpha){var color_16=parseInt(color.replace('#',''),16),red=(color_16>>16)&255,green=(color_16>>8)&255,blue=color_16&255,alpha=alpha||1,rgba;rgba=red+','+green+','+blue+','+alpha;rgba='rgba('+rgba+')';return rgba;}
$tm_window.load(function(){tm_fix_slider_content_images();});$tm_window.resize(function(){tm_fix_slider_content_images();});$tm_slider.tm_slider_move_to=function(direction){var $active_slide=$tm_slide.eq(tm_active_slide),$next_slide;$tm_slider.tm_animation_running=true;$tm_slider.removeClass('tm_slide_transition_to_next tm_slide_transition_to_previous').addClass('tm_slide_transition_to_'+direction);$tm_slider.find('.tm-pb-moved-slide').removeClass('tm-pb-moved-slide');if(direction=='next'||direction=='previous'){if(direction=='next')
tm_active_slide=(tm_active_slide+1)<tm_slides_number?tm_active_slide+1:0;else
tm_active_slide=(tm_active_slide-1)>=0?tm_active_slide-1:tm_slides_number-1;}else{if(tm_active_slide==direction){$tm_slider.tm_animation_running=false;return;}
tm_active_slide=direction;}
if(typeof tm_slider_timer!='undefined')
clearInterval(tm_slider_timer);$next_slide=$tm_slide.eq(tm_active_slide);$tm_slider.trigger('simple_slider_before_move_to',{direction:direction,next_slide:$next_slide});$tm_slide.each(function(){$(this).css('zIndex',1);});$active_slide.css('zIndex',2).removeClass('tm-pb-active-slide').addClass('tm-pb-moved-slide');$next_slide.css({'display':'block',opacity:0}).addClass('tm-pb-active-slide');tm_fix_slider_content_images();tm_fix_builder_content();if(settings.use_controls)
$tm_slider_controls.removeClass(settings.control_active_class).eq(tm_active_slide).addClass(settings.control_active_class);if(settings.use_carousel)
$tm_slider_carousel_controls.removeClass(settings.control_active_class).eq(tm_active_slide).addClass(settings.control_active_class);if(!settings.tabs_animation){tm_maybe_set_controls_color($next_slide);$next_slide.animate({opacity:1},tm_fade_speed);$active_slide.addClass('tm_slide_transition').css({'display':'list-item','opacity':1}).animate({opacity:0},tm_fade_speed,function(){var active_slide_layout_bg_color=tm_get_bg_layout_color($active_slide),next_slide_layout_bg_color=tm_get_bg_layout_color($next_slide);$(this).css('display','none').removeClass('tm_slide_transition');tm_stop_video($active_slide);$tm_slider.removeClass(active_slide_layout_bg_color).addClass(next_slide_layout_bg_color);$tm_slider.tm_animation_running=false;$tm_slider.trigger('simple_slider_after_move_to',{next_slide:$next_slide});});}else{$next_slide.css({'display':'none',opacity:0});$active_slide.addClass('tm_slide_transition').css({'display':'block','opacity':1}).animate({opacity:0},tm_fade_speed,function(){$(this).css('display','none').removeClass('tm_slide_transition');$next_slide.css({'display':'block','opacity':0}).animate({opacity:1},tm_fade_speed,function(){$tm_slider.tm_animation_running=false;$tm_slider.trigger('simple_slider_after_move_to',{next_slide:$next_slide});});});}
tm_slider_auto_rotate();}}
$.fn.tm_pb_simple_slider=function(options){return this.each(function(){new $.tm_pb_simple_slider(this,options);});}}(jQuery));
(function(root,factory){if(typeof exports==='object'){module.exports=factory(require('jquery'));}
else if(typeof define==='function'&&define.amd){define(['jquery'],factory);}
else{factory(root.jQuery);}}(this,function($){var CanvasRenderer=function(el,options){var cachedBackground;var canvas=document.createElement('canvas');el.appendChild(canvas);if(typeof(G_vmlCanvasManager)!=='undefined'){G_vmlCanvasManager.initElement(canvas);}
var ctx=canvas.getContext('2d');canvas.width=canvas.height=options.size;var scaleBy=1;if(window.devicePixelRatio>1){scaleBy=window.devicePixelRatio;canvas.style.width=canvas.style.height=[options.size,'px'].join('');canvas.width=canvas.height=options.size*scaleBy;ctx.scale(scaleBy,scaleBy);}
ctx.translate(options.size/2,options.size/2);ctx.rotate((-1/2+options.rotate/180)*Math.PI);var radius=(options.size-options.lineWidth)/2;if(options.scaleColor&&options.scaleLength){radius-=options.scaleLength+2;}
Date.now=Date.now||function(){return+(new Date());};var drawCircle=function(color,lineWidth,percent,alpha){percent=Math.min(Math.max(-1,percent||0),1);var isNegative=percent<=0?true:false;ctx.beginPath();ctx.arc(0,0,radius,0,Math.PI*2*percent,isNegative);ctx.strokeStyle=color;ctx.globalAlpha=alpha;ctx.lineWidth=lineWidth;ctx.stroke();};var drawScale=function(){var offset;var length;ctx.lineWidth=1;ctx.fillStyle=options.scaleColor;ctx.save();for(var i=24;i>0;--i){if(i%6===0){length=options.scaleLength;offset=0;}else{length=options.scaleLength*0.6;offset=options.scaleLength-length;}
ctx.fillRect(-options.size/2+offset,0,length,1);ctx.rotate(Math.PI/12);}
ctx.restore();};var reqAnimationFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};}());var drawBackground=function(){if(options.scaleColor)drawScale();if(options.trackColor)drawCircle(options.trackColor,options.lineWidth,1,options.trackAlpha);};this.getCanvas=function(){return canvas;};this.getCtx=function(){return ctx;};this.clear=function(){ctx.clearRect(options.size/-2,options.size/-2,options.size,options.size);};this.draw=function(percent){if(!!options.scaleColor||!!options.trackColor){if(ctx.getImageData&&ctx.putImageData){if(!cachedBackground){drawBackground();cachedBackground=ctx.getImageData(0,0,options.size*scaleBy,options.size*scaleBy);}else{ctx.putImageData(cachedBackground,0,0);}}else{this.clear();drawBackground();}}else{this.clear();}
ctx.lineCap=options.lineCap;var color;if(typeof(options.barColor)==='function'){color=options.barColor(percent);}else{color=options.barColor;}
drawCircle(color,options.lineWidth,percent/100,options.barAlpha);}.bind(this);this.animate=function(from,to){var startTime=Date.now();options.onStart(from,to);var animation=function(){var process=Math.min(Date.now()-startTime,options.animate.duration);var currentValue=options.easing(this,process,from,to-from,options.animate.duration);this.draw(currentValue);options.onStep(from,to,currentValue);if(process>=options.animate.duration){options.onStop(from,to);}else{reqAnimationFrame(animation);}}.bind(this);reqAnimationFrame(animation);}.bind(this);};var EasyPieChart=function(el,opts){var defaultOptions={barColor:'#ef1e25',barAlpha:1.0,trackColor:'#f9f9f9',trackAlpha:1.0,scaleColor:'#dfe0e0',scaleLength:5,lineCap:'round',lineWidth:3,size:110,rotate:0,render:true,animate:{duration:1000,enabled:true},easing:function(x,t,b,c,d){t=t/(d/2);if(t<1){return c/2*t*t+b;}
return-c/2*((--t)*(t-2)-1)+b;},onStart:function(from,to){return;},onStep:function(from,to,currentValue){return;},onStop:function(from,to){return;}};if(typeof(CanvasRenderer)!=='undefined'){defaultOptions.renderer=CanvasRenderer;}else if(typeof(SVGRenderer)!=='undefined'){defaultOptions.renderer=SVGRenderer;}else{throw new Error('Please load either the SVG- or the CanvasRenderer');}
var options={};var currentValue=0;var init=function(){this.el=el;this.options=options;for(var i in defaultOptions){if(defaultOptions.hasOwnProperty(i)){options[i]=opts&&typeof(opts[i])!=='undefined'?opts[i]:defaultOptions[i];if(typeof(options[i])==='function'){options[i]=options[i].bind(this);}}}
if(typeof(options.easing)==='string'&&typeof(jQuery)!=='undefined'&&jQuery.isFunction(jQuery.easing[options.easing])){options.easing=jQuery.easing[options.easing];}else{options.easing=defaultOptions.easing;}
if(typeof(options.animate)==='number'){options.animate={duration:options.animate,enabled:true};}
if(typeof(options.animate)==='boolean'&&!options.animate){options.animate={duration:1000,enabled:options.animate};}
this.renderer=new options.renderer(el,options);this.renderer.draw(currentValue);if(el.dataset&&el.dataset.percent){this.update(parseFloat(el.dataset.percent));}else if(el.getAttribute&&el.getAttribute('data-percent')){this.update(parseFloat(el.getAttribute('data-percent')));}}.bind(this);this.update=function(newValue){newValue=parseFloat(newValue);if(options.animate.enabled){this.renderer.animate(currentValue,newValue);}else{this.renderer.draw(newValue);}
currentValue=newValue;return this;}.bind(this);this.disableAnimation=function(){options.animate.enabled=false;return this;};this.enableAnimation=function(){options.animate.enabled=true;return this;};init();};$.fn.easyPieChart=function(options){return this.each(function(){var instanceOptions;if(!$.data(this,'easyPieChart')){instanceOptions=$.extend({},options,$(this).data());$.data(this,'easyPieChart',new EasyPieChart(this,instanceOptions));}});};}));
var tm_hash_module_seperator='||',tm_hash_module_param_seperator='|';function process_tm_hashchange(hash){if((hash.indexOf(tm_hash_module_seperator,0))!==-1){modules=hash.split(tm_hash_module_seperator);for(var i=0;i<modules.length;i++){var module_params=modules[i].split(tm_hash_module_param_seperator);var element=module_params[0];module_params.shift();if($('#'+element).length){$('#'+element).trigger({type:"tm_hashchange",params:module_params});}}}else{module_params=hash.split(tm_hash_module_param_seperator);var element=module_params[0];module_params.shift();if($('#'+element).length){$('#'+element).trigger({type:"tm_hashchange",params:module_params});}}}
function tm_set_hash(module_state_hash){module_id=module_state_hash.split(tm_hash_module_param_seperator)[0];if(!$('#'+module_id).length){return;}
if(window.location.hash){var hash=window.location.hash.substring(1),new_hash=[];if((hash.indexOf(tm_hash_module_seperator,0))!==-1){modules=hash.split(tm_hash_module_seperator);var in_hash=false;for(var i=0;i<modules.length;i++){var element=modules[i].split(tm_hash_module_param_seperator)[0];if(element===module_id){new_hash.push(module_state_hash);in_hash=true;}else{new_hash.push(modules[i]);}}
if(!in_hash){new_hash.push(module_state_hash);}}else{module_params=hash.split(tm_hash_module_param_seperator);var element=module_params[0];if(element!==module_id){new_hash.push(hash);}
new_hash.push(module_state_hash);}
hash=new_hash.join(tm_hash_module_seperator);}else{hash=module_state_hash;}
var yScroll=document.body.scrollTop;window.location.hash=hash;document.body.scrollTop=yScroll;};
var $tm_pb_slider=jQuery('.tm_pb_slider'),$tm_pb_tabs=jQuery('.tm_pb_tabs'),$tm_pb_tabs_li=$tm_pb_tabs.find('.tm_pb_tabs_controls li'),$tm_pb_video_section=jQuery('.tm_pb_section_video_bg'),$tm_pb_newsletter_button=jQuery('.tm_pb_newsletter_button'),$tm_pb_filterable_portfolio=jQuery('.tm_pb_filterable_portfolio'),$tm_pb_fullwidth_portfolio=jQuery('.tm_pb_fullwidth_portfolio'),$tm_pb_gallery=jQuery('.tm_pb_gallery'),$tm_pb_countdown_timer=jQuery('.tm_pb_countdown_timer'),$tm_post_gallery=jQuery('.tm_post_gallery'),$tm_lightbox_image=jQuery('.tm_pb_lightbox_image'),$tm_pb_map=jQuery('.tm_pb_map_container'),$tm_pb_circle_counter=jQuery('.tm_pb_circle_counter_bar'),$tm_pb_number_counter=jQuery('.tm_pb_number_counter'),$tm_pb_parallax=jQuery('.tm_parallax_bg'),$tm_pb_shop=jQuery('.tm_pb_shop'),$tm_pb_post_fullwidth=jQuery('.single.tm_pb_pagebuilder_layout.tm_full_width_page'),tm_is_mobile_device=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/),tm_is_ipad=navigator.userAgent.match(/iPad/),$tm_container=!tm_pb_custom.is_builder_plugin_used?jQuery('.container'):jQuery('.tm_pb_row'),tm_container_width=$tm_container.width(),tm_is_fixed_nav=jQuery('body').hasClass('tm_fixed_nav'),tm_is_vertical_fixed_nav=jQuery('body').hasClass('tm_vertical_fixed'),tm_is_rtl=jQuery('body').hasClass('rtl'),tm_hide_nav=jQuery('body').hasClass('tm_hide_nav'),tm_header_style_left=jQuery('body').hasClass('tm_header_style_left'),tm_vertical_navigation=jQuery('body').hasClass('tm_vertical_nav'),$top_header=jQuery('#top-header'),$main_header=jQuery('#main-header'),$main_container_wrapper=jQuery('#page-container'),$tm_transparent_nav=jQuery('.tm_transparent_nav'),$tm_pb_first_row=jQuery('body.tm_pb_pagebuilder_layout .tm_pb_section:first-child'),$tm_main_content_first_row=jQuery('#main-content .container:first-child'),$tm_main_content_first_row_meta_wrapper=$tm_main_content_first_row.find('.tm_post_meta_wrapper:first'),$tm_main_content_first_row_meta_wrapper_title=$tm_main_content_first_row_meta_wrapper.find('h1'),$tm_main_content_first_row_content=$tm_main_content_first_row.find('.entry-content:first'),$tm_single_post=jQuery('body.single-post'),$tm_window=jQuery(window),etRecalculateOffset=false,tm_header_height,tm_header_modifier,tm_header_offset,tm_primary_header_top,$tm_vertical_nav=jQuery('.tm_vertical_nav'),$tm_header_style_split=jQuery('.tm_header_style_split'),$tm_top_navigation=jQuery('#tm-top-navigation'),$logo=jQuery('#logo'),$tm_sticky_image=jQuery('.tm_pb_image_sticky'),$tm_pb_counter_amount=jQuery('.tm_pb_counter_amount'),$tm_pb_carousel=jQuery('.tm_pb_carousel'),$tm_menu_selector=tm_pb_custom.is_divi_theme_used?jQuery('ul.nav'):jQuery('.tm_pb_fullwidth_menu ul.nav');jQuery(document).ready(function($){var $tm_top_menu=$tm_menu_selector,tm_parent_menu_longpress_limit=300,tm_parent_menu_longpress_start,tm_parent_menu_click=true;$('.tm_pb_posts').each(function(){var $item=$(this),loader='<div class="tm-pb-spinner tm-pb-spinner-double-bounce"><div class="tm-pb-double-bounce1"></div><div class="tm-pb-double-bounce2"></div></div>';$item.on('click','.tm_pb_ajax_more',function(event){var $this=$(this),$result=$item.find('.tm-posts_listing .row'),pages=$item.data('pages'),data=new Object();event.preventDefault();if($this.hasClass('in-progress')){return;}
data.page=$item.data('page');data.atts=$item.data('atts');data.action='tm_pb_load_more';$this.addClass('in-progress').after(loader);$.ajax({url:window.tm_pb_custom.ajaxurl,type:'post',dataType:'json',data:data,error:function(){$this.removeClass('in-progress').next('.tm-pb-spinner').remove();}}).done(function(response){$result.append(response.data.result);$item.data('page',response.data.page);$this.removeClass('in-progress').next('.tm-pb-spinner').remove();if(response.data.page==pages){$this.addClass('btn-hidden');}});});});if($('.tm_pb_row').length){$('.tm_pb_row').each(function(){var $this_row=$(this),row_class='';row_class=tm_get_column_types($this_row.find('>.tm_pb_column'));if(''!==row_class&&(-1!==row_class.indexOf('1-4')||'_4col'===row_class)){$this_row.addClass('tm_pb_row'+row_class);}
if($this_row.find('.tm_pb_row_inner').length){$this_row.find('.tm_pb_row_inner').each(function(){var $this_row_inner=$(this);row_class=tm_get_column_types($this_row_inner.find('.tm_pb_column'));if(''!==row_class&&-1!==row_class.indexOf('1-4')){$this_row_inner.addClass('tm_pb_row'+row_class);}});}});}
function tm_get_column_types($columns){var row_class='';if($columns.length){$columns.each(function(){var $this_column=$(this),column_type=$this_column.attr('class').split('tm_pb_column_')[1],column_type_clean=column_type.split(' ',1)[0],column_type_updated=column_type_clean.replace('_','-').trim();row_class+='_'+column_type_updated;});row_class='_1-4_1-4_1-4_1-4'===row_class?'_4col':row_class;}
return row_class;}
$tm_top_menu.find('li').hover(function(){if(!$(this).closest('li.mega-menu').length||$(this).hasClass('mega-menu')){$(this).addClass('tm-show-dropdown');$(this).removeClass('tm-hover').addClass('tm-hover');}},function(){var $this_el=$(this);$this_el.removeClass('tm-show-dropdown');setTimeout(function(){if(!$this_el.hasClass('tm-show-dropdown')){$this_el.removeClass('tm-hover');}},200);});$tm_top_menu.find('.menu-item-has-children > a').on('touchstart',function(){tm_parent_menu_longpress_start=new Date().getTime();}).on('touchend',function(){var tm_parent_menu_longpress_end=new Date().getTime()
if(tm_parent_menu_longpress_end>=tm_parent_menu_longpress_start+tm_parent_menu_longpress_limit){tm_parent_menu_click=true;}else{tm_parent_menu_click=false;var $tm_parent_menu=$(this).parent('li');if($tm_parent_menu.hasClass('tm-hover')){$tm_parent_menu.trigger('mouseleave');}else{$tm_parent_menu.trigger('mouseenter');}}
tm_parent_menu_longpress_start=0;}).click(function(){if(tm_parent_menu_click){return true;}
return false;});$tm_top_menu.find('li.mega-menu').each(function(){var $li_mega_menu=$(this),$li_mega_menu_item=$li_mega_menu.children('ul').children('li'),li_mega_menu_item_count=$li_mega_menu_item.length;if(li_mega_menu_item_count<4){$li_mega_menu.addClass('mega-menu-parent mega-menu-parent-'+li_mega_menu_item_count);}});$tm_sticky_image.each(function(){var $this_el=$(this),$row=$this_el.closest('.tm_pb_row'),$section=$row.closest('.tm_pb_section'),$column=$this_el.closest('.tm_pb_column'),sticky_class='tm_pb_section_sticky',sticky_mobile_class='tm_pb_section_sticky_mobile';if(!$row.is(':last-child')){return true;}
if(!$this_el.is(':last-child')){return true;}
if(!$section.hasClass(sticky_class)){$section.addClass(sticky_class);}
$column.addClass('tm_pb_row_sticky');if(!$section.hasClass(sticky_mobile_class)&&$column.is(':last-child')){$section.addClass(sticky_mobile_class);}});if(tm_is_mobile_device){$('.tm_pb_section_video_bg').each(function(){var $this_el=$(this);$this_el.css('visibility','hidden').closest('.tm_pb_preload').removeClass('tm_pb_preload')});$('body').addClass('tm_mobile_device');if(!tm_is_ipad){$('body').addClass('tm_mobile_device_not_ipad');}}
if($tm_pb_video_section.length){$tm_pb_video_section.find('video').mediaelementplayer({pauseOtherPlayers:false,success:function(mediaElement,domObject){mediaElement.addEventListener('loadeddata',function(){tm_pb_resize_section_video_bg($(domObject));tm_pb_center_video($(domObject));},false);mediaElement.addEventListener('canplay',function(){$(domObject).closest('.tm_pb_preload').removeClass('tm_pb_preload');},false);}});}
if($tm_post_gallery.length){var magnificPopup=$.magnificPopup.instance;$('body').on('swiperight','.mfp-container',function(){magnificPopup.prev();});$('body').on('swipeleft','.mfp-container',function(){magnificPopup.next();});$tm_post_gallery.each(function(){$(this).magnificPopup({delegate:'a',type:'image',removalDelay:500,gallery:{enabled:true,navigateByImgClick:true},mainClass:'mfp-fade',zoom:{enabled:true,duration:500,opener:function(element){return element.find('img');}}});});$tm_post_gallery.find('a').unbind('click');}
if($tm_lightbox_image.length){$tm_lightbox_image.unbind('click');$tm_lightbox_image.bind('click');$tm_lightbox_image.magnificPopup({type:'image',removalDelay:500,mainClass:'mfp-fade',zoom:{enabled:true,duration:500,opener:function(element){return element.find('img');}}});}
if($tm_pb_slider.length){$tm_pb_slider.each(function(){var $this_slider=$(this),tm_slider_settings={fade_speed:700,slide:!$this_slider.hasClass('tm_pb_gallery')?'.tm_pb_slide':'.tm_pb_gallery_item'}
if($this_slider.hasClass('tm_pb_slider_no_arrows'))
tm_slider_settings.use_arrows=false;if($this_slider.hasClass('tm_pb_slider_no_pagination'))
tm_slider_settings.use_controls=false;if($this_slider.hasClass('tm_slider_auto')){var tm_slider_autospeed_class_value=/tm_slider_speed_(\d+)/g;tm_slider_settings.slideshow=true;tm_slider_autospeed=tm_slider_autospeed_class_value.exec($this_slider.attr('class'));tm_slider_settings.slideshow_speed=tm_slider_autospeed[1];}
if($this_slider.parent().hasClass('tm_pb_video_slider')){tm_slider_settings.controls_below=true;tm_slider_settings.append_controls_to=$this_slider.parent();setTimeout(function(){$('.tm_pb_preload').removeClass('tm_pb_preload');},500);}
if($this_slider.hasClass('tm_pb_slider_carousel'))
tm_slider_settings.use_carousel=true;$this_slider.tm_pb_simple_slider(tm_slider_settings);});}
$tm_pb_carousel=$('.tm_pb_carousel');if($tm_pb_carousel.length){$tm_pb_carousel.each(function(){var $this_carousel=$(this),tm_carousel_settings={fade_speed:1000};$this_carousel.tm_pb_simple_carousel(tm_carousel_settings);});}
if($tm_pb_fullwidth_portfolio.length){function set_fullwidth_portfolio_columns($the_portfolio,carousel_mode){var columns,$portfolio_items=$the_portfolio.find('.tm_pb_portfolio_items'),portfolio_items_width=$portfolio_items.width(),$the_portfolio_items=$portfolio_items.find('.tm_pb_portfolio_item'),portfolio_item_count=$the_portfolio_items.length;if(portfolio_items_width>=1600){columns=5;}else if(portfolio_items_width>=1024){columns=4;}else if(portfolio_items_width>=768){columns=3;}else if(portfolio_items_width>=480){columns=2;}else{columns=1;}
portfolio_item_width=portfolio_items_width/columns;portfolio_item_height=portfolio_item_width*.75;if(carousel_mode){$portfolio_items.css({'height':portfolio_item_height});}
$the_portfolio_items.css({'height':portfolio_item_height});if(columns===$portfolio_items.data('portfolio-columns')){return;}
if($the_portfolio.data('columns_setting_up')){return;}
$the_portfolio.data('columns_setting_up',true);var portfolio_item_width_percentage=(100/columns)+'%';$the_portfolio_items.css({'width':portfolio_item_width_percentage});$portfolio_items.removeClass('columns-'+$portfolio_items.data('portfolio-columns'));$portfolio_items.addClass('columns-'+columns);$portfolio_items.data('portfolio-columns',columns);if(!carousel_mode){return $the_portfolio.data('columns_setting_up',false);}
if($portfolio_items.find('.tm_pb_carousel_group').length){$the_portfolio_items.appendTo($portfolio_items);$portfolio_items.find('.tm_pb_carousel_group').remove();}
var the_portfolio_items=$portfolio_items.data('items'),$carousel_group=$('<div class="tm_pb_carousel_group active">').appendTo($portfolio_items);$the_portfolio_items.data('position','');if(the_portfolio_items.length<=columns){$portfolio_items.find('.tm-pb-slider-arrows').hide();}else{$portfolio_items.find('.tm-pb-slider-arrows').show();}
for(position=1,x=0;x<the_portfolio_items.length;x++,position++){if(x<columns){$(the_portfolio_items[x]).show();$(the_portfolio_items[x]).appendTo($carousel_group);$(the_portfolio_items[x]).data('position',position);$(the_portfolio_items[x]).addClass('position_'+position);}else{position=$(the_portfolio_items[x]).data('position');$(the_portfolio_items[x]).removeClass('position_'+position);$(the_portfolio_items[x]).data('position','');$(the_portfolio_items[x]).hide();}}
$the_portfolio.data('columns_setting_up',false);}
function tm_carousel_auto_rotate($carousel){if('on'===$carousel.data('auto-rotate')&&$carousel.find('.tm_pb_portfolio_item').length>$carousel.find('.tm_pb_carousel_group .tm_pb_portfolio_item').length&&!$carousel.hasClass('tm_carousel_hovered')){tm_carousel_timer=setTimeout(function(){$carousel.find('.tm-pb-arrow-next').click();},$carousel.data('auto-rotate-speed'));$carousel.data('tm_carousel_timer',tm_carousel_timer);}}
$tm_pb_fullwidth_portfolio.each(function(){var $the_portfolio=$(this),$portfolio_items=$the_portfolio.find('.tm_pb_portfolio_items');$portfolio_items.data('items',$portfolio_items.find('.tm_pb_portfolio_item').toArray());$the_portfolio.data('columns_setting_up',false);if($the_portfolio.hasClass('tm_pb_fullwidth_portfolio_carousel')){$portfolio_items.prepend('<div class="tm-pb-slider-arrows"><a class="tm-pb-arrow-prev" href="#">'+'<span>'+tm_pb_custom.previous+'</span>'+'</a><a class="tm-pb-arrow-next" href="#">'+'<span>'+tm_pb_custom.next+'</span>'+'</a></div>');set_fullwidth_portfolio_columns($the_portfolio,true);tm_carousel_auto_rotate($the_portfolio);$the_portfolio.on('swiperight',function(){$(this).find('.tm-pb-arrow-prev').click();});$the_portfolio.on('swipeleft',function(){$(this).find('.tm-pb-arrow-next').click();});$the_portfolio.hover(function(){$(this).addClass('tm_carousel_hovered');if(typeof $(this).data('tm_carousel_timer')!='undefined'){clearInterval($(this).data('tm_carousel_timer'));}},function(){$(this).removeClass('tm_carousel_hovered');tm_carousel_auto_rotate($(this));});$the_portfolio.data('carouseling',false);$the_portfolio.on('click','.tm-pb-slider-arrows a',function(e){var $the_portfolio=$(this).parents('.tm_pb_fullwidth_portfolio'),$portfolio_items=$the_portfolio.find('.tm_pb_portfolio_items'),$the_portfolio_items=$portfolio_items.find('.tm_pb_portfolio_item'),$active_carousel_group=$portfolio_items.find('.tm_pb_carousel_group.active'),slide_duration=700,items=$portfolio_items.data('items'),columns=$portfolio_items.data('portfolio-columns'),item_width=$active_carousel_group.innerWidth()/columns,original_item_width=(100/columns)+'%';e.preventDefault();if($the_portfolio.data('carouseling')){return;}
$the_portfolio.data('carouseling',true);$active_carousel_group.children().each(function(){$(this).css({'width':$(this).innerWidth()+1,'position':'absolute','left':($(this).innerWidth()*($(this).data('position')-1))});});if($(this).hasClass('tm-pb-arrow-next')){var $next_carousel_group,current_position=1,next_position=1,active_items_start=items.indexOf($active_carousel_group.children().first()[0]),active_items_end=active_items_start+columns,next_items_start=active_items_end,next_items_end=next_items_start+columns;$next_carousel_group=$('<div class="tm_pb_carousel_group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter($active_carousel_group);$next_carousel_group.css({'width':$active_carousel_group.innerWidth()}).show();for(x=0,total=0;;x++,total++){if(total>=active_items_start&&total<active_items_end){$(items[x]).addClass('changing_position current_position current_position_'+current_position);$(items[x]).data('current_position',current_position);current_position++;}
if(total>=next_items_start&&total<next_items_end){$(items[x]).data('next_position',next_position);$(items[x]).addClass('changing_position next_position next_position_'+next_position);if(!$(items[x]).hasClass('current_position')){$(items[x]).addClass('container_append');}else{$(items[x]).clone(true).appendTo($active_carousel_group).hide().addClass('delayed_container_append_dup').attr('id',$(items[x]).attr('id')+'-dup');$(items[x]).addClass('delayed_container_append');}
next_position++;}
if(next_position>columns){break;}
if(x>=(items.length-1)){x=-1;}}
sorted=$portfolio_items.find('.container_append, .delayed_container_append_dup').sort(function(a,b){var el_a_position=parseInt($(a).data('next_position'));var el_b_position=parseInt($(b).data('next_position'));return(el_a_position<el_b_position)?-1:(el_a_position>el_b_position)?1:0;});$(sorted).show().appendTo($next_carousel_group);$next_carousel_group.children().each(function(){$(this).css({'width':item_width,'position':'absolute','left':(item_width*($(this).data('next_position')-1))});});$active_carousel_group.animate({left:'-100%'},{duration:slide_duration,complete:function(){$portfolio_items.find('.delayed_container_append').each(function(){$(this).css({'width':item_width,'position':'absolute','left':(item_width*($(this).data('next_position')-1))});$(this).appendTo($next_carousel_group);});$active_carousel_group.removeClass('active');$active_carousel_group.children().each(function(){position=$(this).data('position');current_position=$(this).data('current_position');$(this).removeClass('position_'+position+' '+'changing_position current_position current_position_'+current_position);$(this).data('position','');$(this).data('current_position','');$(this).hide();$(this).css({'position':'','width':'','left':''});$(this).appendTo($portfolio_items);});$active_carousel_group.remove();tm_carousel_auto_rotate($the_portfolio);}});$next_carousel_group.addClass('active').css({'position':'absolute','top':0,left:'100%'});$next_carousel_group.animate({left:'0%'},{duration:slide_duration,complete:function(){setTimeout(function(){$next_carousel_group.removeClass('next').addClass('active').css({'position':'','width':'','top':'','left':''});$next_carousel_group.find('.delayed_container_append_dup').remove();$next_carousel_group.find('.changing_position').each(function(index){position=$(this).data('position');current_position=$(this).data('current_position');next_position=$(this).data('next_position');$(this).removeClass('container_append delayed_container_append position_'+position+' '+'changing_position current_position current_position_'+current_position+' next_position next_position_'+next_position);$(this).data('current_position','');$(this).data('next_position','');$(this).data('position',(index+1));});$next_carousel_group.children().css({'position':'','width':original_item_width,'left':''});$the_portfolio.data('carouseling',false);},100);}});}else{var $prev_carousel_group,current_position=columns,prev_position=columns,columns_span=columns-1,active_items_start=items.indexOf($active_carousel_group.children().last()[0]),active_items_end=active_items_start-columns_span,prev_items_start=active_items_end-1,prev_items_end=prev_items_start-columns_span;$prev_carousel_group=$('<div class="tm_pb_carousel_group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore($active_carousel_group);$prev_carousel_group.css({'left':'-'+$active_carousel_group.innerWidth(),'width':$active_carousel_group.innerWidth()}).show();for(x=(items.length-1),total=(items.length-1);;x--,total--){if(total<=active_items_start&&total>=active_items_end){$(items[x]).addClass('changing_position current_position current_position_'+current_position);$(items[x]).data('current_position',current_position);current_position--;}
if(total<=prev_items_start&&total>=prev_items_end){$(items[x]).data('prev_position',prev_position);$(items[x]).addClass('changing_position prev_position prev_position_'+prev_position);if(!$(items[x]).hasClass('current_position')){$(items[x]).addClass('container_append');}else{$(items[x]).clone(true).appendTo($active_carousel_group).addClass('delayed_container_append_dup').attr('id',$(items[x]).attr('id')+'-dup');$(items[x]).addClass('delayed_container_append');}
prev_position--;}
if(prev_position<=0){break;}
if(x==0){x=items.length;}}
sorted=$portfolio_items.find('.container_append, .delayed_container_append_dup').sort(function(a,b){var el_a_position=parseInt($(a).data('prev_position'));var el_b_position=parseInt($(b).data('prev_position'));return(el_a_position<el_b_position)?-1:(el_a_position>el_b_position)?1:0;});$(sorted).show().appendTo($prev_carousel_group);$prev_carousel_group.children().each(function(){$(this).css({'width':item_width,'position':'absolute','left':(item_width*($(this).data('prev_position')-1))});});$active_carousel_group.animate({left:'100%'},{duration:slide_duration,complete:function(){$portfolio_items.find('.delayed_container_append').reverse().each(function(){$(this).css({'width':item_width,'position':'absolute','left':(item_width*($(this).data('prev_position')-1))});$(this).prependTo($prev_carousel_group);});$active_carousel_group.removeClass('active');$active_carousel_group.children().each(function(){position=$(this).data('position');current_position=$(this).data('current_position');$(this).removeClass('position_'+position+' '+'changing_position current_position current_position_'+current_position);$(this).data('position','');$(this).data('current_position','');$(this).hide();$(this).css({'position':'','width':'','left':''});$(this).appendTo($portfolio_items);});$active_carousel_group.remove();}});$prev_carousel_group.addClass('active').css({'position':'absolute','top':0,left:'-100%'});$prev_carousel_group.animate({left:'0%'},{duration:slide_duration,complete:function(){setTimeout(function(){$prev_carousel_group.removeClass('prev').addClass('active').css({'position':'','width':'','top':'','left':''});$prev_carousel_group.find('.delayed_container_append_dup').remove();$prev_carousel_group.find('.changing_position').each(function(index){position=$(this).data('position');current_position=$(this).data('current_position');prev_position=$(this).data('prev_position');$(this).removeClass('container_append delayed_container_append position_'+position+' '+'changing_position current_position current_position_'+current_position+' prev_position prev_position_'+prev_position);$(this).data('current_position','');$(this).data('prev_position','');position=index+1;$(this).data('position',position);$(this).addClass('position_'+position);});$prev_carousel_group.children().css({'position':'','width':original_item_width,'left':''});$the_portfolio.data('carouseling',false);},100);}});}
return false;});}else{set_fullwidth_portfolio_columns($the_portfolio,false);}});}
function tm_audio_module_set(){if($('.tm_pb_audio_module .mejs-audio').length||$('.tm_audio_content .mejs-audio').length){$('.tm_audio_container').each(function(){var $this_player=$(this),$time_rail=$this_player.find('.mejs-time-rail'),$time_slider=$this_player.find('.mejs-time-slider');$time_rail.removeAttr('style');$time_slider.removeAttr('style');var $count_timer=$this_player.find('div.mejs-currenttime-container'),player_width=$this_player.width(),controls_play_width=$this_player.find('.mejs-play').outerWidth(),time_width=$this_player.find('.mejs-currenttime-container').outerWidth(),volume_icon_width=$this_player.find('.mejs-volume-button').outerWidth(),volume_bar_width=$this_player.find('.mejs-horizontal-volume-slider').outerWidth(),new_time_rail_width;$count_timer.addClass('custom');$this_player.find('.mejs-controls div.mejs-duration-container').replaceWith($count_timer);new_time_rail_width=player_width-(controls_play_width+time_width+volume_icon_width+volume_bar_width+100);if(0<new_time_rail_width){$time_rail.attr('style','min-width: '+new_time_rail_width+'px;');$time_slider.attr('style','min-width: '+new_time_rail_width+'px;');}});}}
if($('.tm_pb_section_video').length){window._wpmejsSettings.pauseOtherPlayers=false;}
if($tm_pb_filterable_portfolio.length){$(window).load(function(){$tm_pb_filterable_portfolio.each(function(){var $the_portfolio=$(this),$the_portfolio_items=$the_portfolio.find('.tm_pb_portfolio_items'),$left_orientatation=true==$the_portfolio.data('rtl')?false:true;$the_portfolio.show();set_filterable_grid_items($the_portfolio);$the_portfolio.on('click','.tm_pb_portfolio_filter a',function(e){e.preventDefault();var category_slug=$(this).data('category-slug');$the_portfolio_items=$(this).parents('.tm_pb_filterable_portfolio').find('.tm_pb_portfolio_items');if('all'==category_slug){$the_portfolio.find('.tm_pb_portfolio_filter a').removeClass('active');$the_portfolio.find('.tm_pb_portfolio_filter_all a').addClass('active');$the_portfolio.find('.tm_pb_portfolio_item').removeClass('active inactive');$the_portfolio.find('.tm_pb_portfolio_item').show();$the_portfolio.find('.tm_pb_portfolio_item').addClass('active');}else{$the_portfolio.find('.tm_pb_portfolio_filter_all').removeClass('active');$the_portfolio.find('.tm_pb_portfolio_filter a').removeClass('active');$the_portfolio.find('.tm_pb_portfolio_filter_all a').removeClass('active');$(this).addClass('active');$the_portfolio_items.find('.tm_pb_portfolio_item').hide();$the_portfolio_items.find('.tm_pb_portfolio_item').addClass('inactive');$the_portfolio_items.find('.tm_pb_portfolio_item').removeClass('active');$the_portfolio_items.find('.tm_pb_portfolio_item.project_category_'+$(this).data('category-slug')).show();$the_portfolio_items.find('.tm_pb_portfolio_item.project_category_'+$(this).data('category-slug')).addClass('active').removeClass('inactive');}
set_filterable_grid_items($the_portfolio);setTimeout(function(){set_filterable_portfolio_hash($the_portfolio);},500);});$(this).on('tm_hashchange',function(event){var params=event.params;$the_portfolio=$('#'+event.target.id);if(!$the_portfolio.find('.tm_pb_portfolio_filter a[data-category-slug="'+params[0]+'"]').hasClass('active')){$the_portfolio.find('.tm_pb_portfolio_filter a[data-category-slug="'+params[0]+'"]').click();}
if(params[1]){setTimeout(function(){if(!$the_portfolio.find('.tm_pb_portofolio_pagination a.page-'+params[1]).hasClass('active')){$the_portfolio.find('.tm_pb_portofolio_pagination a.page-'+params[1]).addClass('active').click();}},300);}});});});function set_filterable_grid_items($the_portfolio){var active_category=$the_portfolio.find('.tm_pb_portfolio_filter > a.active').data('category-slug'),container_width=$the_portfolio.find('.tm_pb_portfolio_items').innerWidth(),item_width=$the_portfolio.find('.tm_pb_portfolio_item').outerWidth(true),last_item_margin=item_width-$the_portfolio.find('.tm_pb_portfolio_item').outerWidth(),columns_count=Math.round((container_width+last_item_margin)/item_width),counter=1,first_in_row=1;$the_portfolio.find('.tm_pb_portfolio_item').removeClass('last_in_row first_in_row');$the_portfolio.find('.tm_pb_portfolio_item').each(function(){var $this_el=$(this);if(!$this_el.hasClass('inactive')){if(first_in_row===counter){$this_el.addClass('first_in_row');}
if(0===counter%columns_count){$this_el.addClass('last_in_row');first_in_row=counter+1;}
counter++;}});if('all'===active_category){$the_portfolio_visible_items=$the_portfolio.find('.tm_pb_portfolio_item');}else{$the_portfolio_visible_items=$the_portfolio.find('.tm_pb_portfolio_item.project_category_'+active_category);}
var visible_grid_items=$the_portfolio_visible_items.length,posts_number=$the_portfolio.data('posts-number'),pages=Math.ceil(visible_grid_items/posts_number);set_filterable_grid_pages($the_portfolio,pages);var visible_grid_items=0;var _page=1;$the_portfolio.find('.tm_pb_portfolio_item').data('page','');$the_portfolio_visible_items.each(function(i){visible_grid_items++;if(0===parseInt(visible_grid_items%posts_number)){$(this).data('page',_page);_page++;}else{$(this).data('page',_page);}});$the_portfolio_visible_items.filter(function(){return $(this).data('page')==1;}).show();$the_portfolio_visible_items.filter(function(){return $(this).data('page')!=1;}).hide();}
function set_filterable_grid_pages($the_portfolio,pages){$pagination=$the_portfolio.find('.tm_pb_portofolio_pagination');if(!$pagination.length){return;}
$pagination.html('<ul></ul>');if(pages<=1){return;}
$pagination_list=$pagination.children('ul');$pagination_list.append('<li class="prev" style="display:none;"><a href="#" data-page="prev" class="page-prev">'+tm_pb_custom.prev+'</a></li>');for(var page=1;page<=pages;page++){var first_page_class=page===1?' active':'',last_page_class=page===pages?' last-page':'',hidden_page_class=page>=5?' style="display:none;"':'';$pagination_list.append('<li'+hidden_page_class+' class="page page-'+page+'"><a href="#" data-page="'+page+'" class="page-'+page+first_page_class+last_page_class+'">'+page+'</a></li>');}
$pagination_list.append('<li class="next"><a href="#" data-page="next" class="page-next">'+tm_pb_custom.next+'</a></li>');}
$tm_pb_filterable_portfolio.on('click','.tm_pb_portofolio_pagination a',function(e){e.preventDefault();var to_page=$(this).data('page'),$the_portfolio=$(this).parents('.tm_pb_filterable_portfolio'),$the_portfolio_items=$the_portfolio.find('.tm_pb_portfolio_items');tm_pb_smooth_scroll($the_portfolio,false,800);if($(this).hasClass('page-prev')){to_page=parseInt($(this).parents('ul').find('a.active').data('page'))-1;}else if($(this).hasClass('page-next')){to_page=parseInt($(this).parents('ul').find('a.active').data('page'))+1;}
$(this).parents('ul').find('a').removeClass('active');$(this).parents('ul').find('a.page-'+to_page).addClass('active');var current_index=$(this).parents('ul').find('a.page-'+to_page).parent().index(),total_pages=$(this).parents('ul').find('li.page').length;$(this).parent().nextUntil('.page-'+(current_index+3)).show();$(this).parent().prevUntil('.page-'+(current_index-3)).show();$(this).parents('ul').find('li.page').each(function(i){if(!$(this).hasClass('prev')&&!$(this).hasClass('next')){if(i<(current_index-3)){$(this).hide();}else if(i>(current_index+1)){$(this).hide();}else{$(this).show();}
if(total_pages-current_index<=2&&total_pages-i<=5){$(this).show();}else if(current_index<=3&&i<=4){$(this).show();}}});if(to_page>1){$(this).parents('ul').find('li.prev').show();}else{$(this).parents('ul').find('li.prev').hide();}
if($(this).parents('ul').find('a.active').hasClass('last-page')){$(this).parents('ul').find('li.next').hide();}else{$(this).parents('ul').find('li.next').show();}
$the_portfolio.find('.tm_pb_portfolio_item').hide();$the_portfolio.find('.tm_pb_portfolio_item').filter(function(index){return $(this).data('page')===to_page;}).show();setTimeout(function(){set_filterable_portfolio_hash($the_portfolio);},500);});function set_filterable_portfolio_hash($the_portfolio){if(!$the_portfolio.attr('id')){return;}
var this_portfolio_state=[];this_portfolio_state.push($the_portfolio.attr('id'));this_portfolio_state.push($the_portfolio.find('.tm_pb_portfolio_filter > a.active').data('category-slug'));if($the_portfolio.find('.tm_pb_portofolio_pagination a.active').length){this_portfolio_state.push($the_portfolio.find('.tm_pb_portofolio_pagination a.active').data('page'));}else{this_portfolio_state.push(1);}
this_portfolio_state=this_portfolio_state.join(tm_hash_module_param_seperator);tm_set_hash(this_portfolio_state);}}
if($tm_pb_gallery.length){function set_gallery_grid_items($the_gallery){var $the_gallery_items_container=$the_gallery.find('.tm_pb_gallery_items'),$the_gallery_items=$the_gallery_items_container.find('.tm_pb_gallery_item');var total_grid_items=$the_gallery_items.length,posts_number=$the_gallery_items_container.data('per_page'),pages=Math.ceil(total_grid_items/posts_number);set_gallery_grid_pages($the_gallery,pages);var total_grid_items=0;var _page=1;$the_gallery_items.data('page','');$the_gallery_items.each(function(i){total_grid_items++;if(0===parseInt(total_grid_items%posts_number)){$(this).data('page',_page);_page++;}else{$(this).data('page',_page);}});var visible_items=$the_gallery_items.filter(function(){return $(this).data('page')==1;}).show();$the_gallery_items.filter(function(){return $(this).data('page')!=1;}).hide();}
function set_gallery_grid_pages($the_gallery,pages){$pagination=$the_gallery.find('.tm_pb_gallery_pagination');if(!$pagination.length){return;}
$pagination.html('<ul></ul>');if(pages<=1){$pagination.hide();return;}
$pagination_list=$pagination.children('ul');$pagination_list.append('<li class="prev" style="display:none;"><a href="#" data-page="prev" class="page-prev">'+tm_pb_custom.prev+'</a></li>');for(var page=1;page<=pages;page++){var first_page_class=page===1?' active':'',last_page_class=page===pages?' last-page':'',hidden_page_class=page>=5?' style="display:none;"':'';$pagination_list.append('<li'+hidden_page_class+' class="page page-'+page+'"><a href="#" data-page="'+page+'" class="page-'+page+first_page_class+last_page_class+'">'+page+'</a></li>');}
$pagination_list.append('<li class="next"><a href="#" data-page="next" class="page-next">'+tm_pb_custom.next+'</a></li>');}
function set_gallery_hash($the_gallery){if(!$the_gallery.attr('id')){return;}
var this_gallery_state=[];this_gallery_state.push($the_gallery.attr('id'));if($the_gallery.find('.tm_pb_gallery_pagination a.active').length){this_gallery_state.push($the_gallery.find('.tm_pb_gallery_pagination a.active').data('page'));}else{this_gallery_state.push(1);}
this_gallery_state=this_gallery_state.join(tm_hash_module_param_seperator);tm_set_hash(this_gallery_state);}
$tm_pb_gallery.each(function(){var $the_gallery=$(this);if($the_gallery.hasClass('tm_pb_gallery_grid')){$the_gallery.show();set_gallery_grid_items($the_gallery);$the_gallery.on('tm_hashchange',function(event){var params=event.params;$the_gallery=$('#'+event.target.id);if(page_to=params[0]){if(!$the_gallery.find('.tm_pb_gallery_pagination a.page-'+page_to).hasClass('active')){$the_gallery.find('.tm_pb_gallery_pagination a.page-'+page_to).addClass('active').click();}}});}});$tm_pb_gallery.data('paginating',false);$tm_pb_gallery.on('click','.tm_pb_gallery_pagination a',function(e){e.preventDefault();var to_page=$(this).data('page'),$the_gallery=$(this).parents('.tm_pb_gallery'),$the_gallery_items_container=$the_gallery.find('.tm_pb_gallery_items'),$the_gallery_items=$the_gallery_items_container.find('.tm_pb_gallery_item');if($the_gallery.data('paginating')){return;}
$the_gallery.data('paginating',true);if($(this).hasClass('page-prev')){to_page=parseInt($(this).parents('ul').find('a.active').data('page'))-1;}else if($(this).hasClass('page-next')){to_page=parseInt($(this).parents('ul').find('a.active').data('page'))+1;}
$(this).parents('ul').find('a').removeClass('active');$(this).parents('ul').find('a.page-'+to_page).addClass('active');var current_index=$(this).parents('ul').find('a.page-'+to_page).parent().index(),total_pages=$(this).parents('ul').find('li.page').length;$(this).parent().nextUntil('.page-'+(current_index+3)).show();$(this).parent().prevUntil('.page-'+(current_index-3)).show();$(this).parents('ul').find('li.page').each(function(i){if(!$(this).hasClass('prev')&&!$(this).hasClass('next')){if(i<(current_index-3)){$(this).hide();}else if(i>(current_index+1)){$(this).hide();}else{$(this).show();}
if(total_pages-current_index<=2&&total_pages-i<=5){$(this).show();}else if(current_index<=3&&i<=4){$(this).show();}}});if(to_page>1){$(this).parents('ul').find('li.prev').show();}else{$(this).parents('ul').find('li.prev').hide();}
if($(this).parents('ul').find('a.active').hasClass('last-page')){$(this).parents('ul').find('li.next').hide();}else{$(this).parents('ul').find('li.next').show();}
$the_gallery_items.hide();var visible_items=$the_gallery_items.filter(function(index){return $(this).data('page')===to_page;}).show();$the_gallery.data('paginating',false);setTimeout(function(){set_gallery_hash($the_gallery);},100);$('html, body').animate({scrollTop:$the_gallery.offset().top-200},200);});}
if($tm_pb_counter_amount.length){$tm_pb_counter_amount.each(function(){var $bar_item=$(this),bar_item_width=$bar_item.attr('data-width'),bar_item_padding=Math.ceil(parseFloat($bar_item.css('paddingLeft')))+Math.ceil(parseFloat($bar_item.css('paddingRight'))),$bar_item_text=$bar_item.children('.tm_pb_counter_amount_number'),bar_item_text_width=$bar_item_text.width()+bar_item_padding;$bar_item.css({'width':bar_item_width,'min-width':bar_item_text_width});});}
function tm_countdown_timer(timer){var end_date=parseInt(timer.data('end-timestamp')),current_date=new Date().getTime()/1000,seconds_left=(end_date-current_date);days=parseInt(seconds_left/86400);days=days>0?days:0;seconds_left=seconds_left%86400;hours=parseInt(seconds_left/3600);hours=hours>0?hours:0;seconds_left=seconds_left%3600;minutes=parseInt(seconds_left/60);minutes=minutes>0?minutes:0;seconds=parseInt(seconds_left%60);seconds=seconds>0?seconds:0;if(days==0){if(!timer.find('.days > .value').parent('.section').hasClass('zero')){timer.find('.days > .value').html('00').parent('.section').addClass('zero').next().addClass('zero');}}else{days_slice=days.toString().length>=2?days.toString().length:2;timer.find('.days > .value').html(('00'+days).slice(-days_slice));}
if(days==0&&hours==0){if(!timer.find('.hours > .value').parent('.section').hasClass('zero')){timer.find('.hours > .value').html('00').parent('.section').addClass('zero').next().addClass('zero');}}else{timer.find('.hours > .value').html(('0'+hours).slice(-2));}
if(days==0&&hours==0&&minutes==0){if(!timer.find('.minutes > .value').parent('.section').hasClass('zero')){timer.find('.minutes > .value').html('00').parent('.section').addClass('zero').next().addClass('zero');}}else{timer.find('.minutes > .value').html(('0'+minutes).slice(-2));}
if(days==0&&hours==0&&minutes==0&&seconds==0){if(!timer.find('.seconds > .value').parent('.section').hasClass('zero')){timer.find('.seconds > .value').html('00').parent('.section').addClass('zero');}}else{timer.find('.seconds > .value').html(('0'+seconds).slice(-2));}}
function tm_countdown_timer_labels(timer){if(timer.closest('.tm_pb_column_3_8').length||timer.closest('.tm_pb_column_1_4').length||timer.children('.tm_pb_countdown_timer_container').width()<=400){timer.find('.days .label').html(timer.find('.days').data('short'));timer.find('.hours .label').html(timer.find('.hours').data('short'));timer.find('.minutes .label').html(timer.find('.minutes').data('short'));timer.find('.seconds .label').html(timer.find('.seconds').data('short'));}else{timer.find('.days .label').html(timer.find('.days').data('full'));timer.find('.hours .label').html(timer.find('.hours').data('full'));timer.find('.minutes .label').html(timer.find('.minutes').data('full'));timer.find('.seconds .label').html(timer.find('.seconds').data('full'));}}
if($tm_pb_countdown_timer.length){$tm_pb_countdown_timer.each(function(){var timer=$(this);tm_countdown_timer_labels(timer);tm_countdown_timer(timer);setInterval(function(){tm_countdown_timer(timer);},1000);});}
if($tm_pb_tabs.length){$tm_pb_tabs.tm_pb_simple_slider({use_controls:false,use_arrows:false,slide:'.tm_pb_all_tabs > div',tabs_animation:true}).on('tm_hashchange',function(event){var params=event.params;var $the_tabs=$('#'+event.target.id);var active_tab=params[0];if(!$the_tabs.find('.tm_pb_tabs_controls li').eq(active_tab).hasClass('tm_pb_tab_active')){$the_tabs.find('.tm_pb_tabs_controls li').eq(active_tab).click();}});$tm_pb_tabs_li.click(function(){var $this_el=$(this),$tabs_container=$this_el.closest('.tm_pb_tabs').data('tm_pb_simple_slider');if($tabs_container.tm_animation_running)return false;$this_el.addClass('tm_pb_tab_active').siblings().removeClass('tm_pb_tab_active');$tabs_container.data('tm_pb_simple_slider').tm_slider_move_to($this_el.index());if($this_el.closest('.tm_pb_tabs').attr('id')){var tab_state=[];tab_state.push($this_el.closest('.tm_pb_tabs').attr('id'));tab_state.push($this_el.index());tab_state=tab_state.join(tm_hash_module_param_seperator);tm_set_hash(tab_state);}
return false;});}
if($tm_pb_map.length){google.maps.event.addDomListener(window,'load',function(){$tm_pb_map.each(function(){var $this_map_container=$(this),$this_map=$this_map_container.children('.tm_pb_map'),this_map_grayscale=$this_map_container.data('grayscale')||0,infowindow_active,marker_icon=$this_map.data('marker-icon')||[tm_pb_custom.builder_images_uri+'/marker.png',34,53,false],map_style=$this_map.data('map-style');if(this_map_grayscale!==0){this_map_grayscale='-'+this_map_grayscale.toString();}
$this_map_container.data('map',new google.maps.Map($this_map[0],{zoom:parseInt($this_map.data('zoom')),center:new google.maps.LatLng(parseFloat($this_map.data('center-lat')),parseFloat($this_map.data('center-lng'))),mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:$this_map.data('mouse-wheel')=='on'?true:false,panControlOptions:{position:$this_map_container.is('.tm_beneath_transparent_nav')?google.maps.ControlPosition.LEFT_BOTTOM:google.maps.ControlPosition.LEFT_TOP},zoomControlOptions:{position:$this_map_container.is('.tm_beneath_transparent_nav')?google.maps.ControlPosition.LEFT_BOTTOM:google.maps.ControlPosition.LEFT_TOP},styles:map_style}));$this_map_container.data('bounds',new google.maps.LatLngBounds());$this_map_container.find('.tm_pb_map_pin').each(function(){var $this_marker=$(this),position=new google.maps.LatLng(parseFloat($this_marker.data('lat')),parseFloat($this_marker.data('lng')));$this_map_container.data('bounds').extend(position);var marker=new google.maps.Marker({position:position,map:$this_map_container.data('map'),title:$this_marker.data('title'),icon:{url:marker_icon[0],size:new google.maps.Size(marker_icon[1],marker_icon[2]),anchor:new google.maps.Point(marker_icon[1]/2,marker_icon[2])},animation:google.maps.Animation.DROP});if($this_marker.find('.infowindow').length){var infowindow=new google.maps.InfoWindow({content:$this_marker.html()});google.maps.event.addListener($this_map_container.data('map'),'click',function(){infowindow.close();});google.maps.event.addListener(marker,'click',function(){if(infowindow_active){infowindow_active.close();}
infowindow_active=infowindow;infowindow.open($this_map_container.data('map'),marker);});}});setTimeout(function(){if(!$this_map_container.data('map').getBounds().contains($this_map_container.data('bounds').getNorthEast())||!$this_map_container.data('map').getBounds().contains($this_map_container.data('bounds').getSouthWest())){$this_map_container.data('map').fitBounds($this_map_container.data('bounds'));}},200);});});}
if($tm_pb_shop.length){$tm_pb_shop.each(function(){var $this_el=$(this),icon=$this_el.data('icon')||'';if(icon===''){return true;}
$this_el.find('.tm_overlay').attr('data-icon',icon).addClass('tm_pb_inline_icon');});}
if($tm_pb_circle_counter.length){window.tm_pb_circle_counter_init=function($the_counter,animate){if(0===$the_counter.width()){return;}
$the_counter.easyPieChart({animate:{duration:1800,enabled:true},size:0!==$the_counter.width()?$the_counter.width():10,barColor:$the_counter.data('bar-bg-color'),trackColor:$the_counter.data('color')||'#000000',trackAlpha:$the_counter.data('alpha')||'0.1',lineWidth:$the_counter.data('circle-width')||'5',size:$the_counter.data('circle-size')||'110',scaleColor:false,lineCap:$the_counter.data('bar-type')||'round',onStart:function(){$(this.el).find('.percent p').css({'visibility':'visible'});},onStep:function(from,to,percent){$(this.el).find('.percent-value').text(Math.round(parseInt(percent)));},onStop:function(from,to){$(this.el).find('.percent-value').text($(this.el).data('number-value'));}});}
window.tm_pb_reinit_circle_counters=function($tm_pb_circle_counter){$tm_pb_circle_counter.each(function(){var $the_counter=$(this);window.tm_pb_circle_counter_init($the_counter,false);$the_counter.on('containerWidthChanged',function(event){$the_counter=$(event.target);$the_counter.find('canvas').remove();$the_counter.removeData('easyPieChart');window.tm_pb_circle_counter_init($the_counter,true);});});}
window.tm_pb_reinit_circle_counters($tm_pb_circle_counter);}
if($tm_pb_number_counter.length){window.tm_pb_reinit_number_counters=function($tm_pb_number_counter){if($.fn.fitText){$tm_pb_number_counter.find('.percent').fitText(0.3);}
$tm_pb_number_counter.each(function(){var $this_counter=$(this);$this_counter.easyPieChart({animate:{duration:1800,enabled:true},size:0,trackColor:false,scaleColor:false,lineWidth:0,onStart:function(){$(this.el).find('.percent').css({'visibility':'visible'});},onStep:function(from,to,percent){if(percent!=to)
$(this.el).find('.percent-value').text(Math.round(parseInt(percent)));},onStop:function(from,to){$(this.el).find('.percent-value').text($(this.el).data('number-value'));}});});}
window.tm_pb_reinit_number_counters($tm_pb_number_counter);}
function tm_apply_parallax(){var $this=$(this),element_top=$this.offset().top,window_top=$tm_window.scrollTop(),y_pos=(((window_top+$tm_window.height())-element_top)*0.3),main_position;main_position='translate(0, '+y_pos+'px)';$this.find('.tm_parallax_bg').css({'-webkit-transform':main_position,'-moz-transform':main_position,'-ms-transform':main_position,'transform':main_position});}
function tm_parallax_set_height(){var $this=$(this),bg_height;bg_height=($tm_window.height()*0.3+$this.innerHeight());$this.find('.tm_parallax_bg').css({'height':bg_height});}
$('.tm_pb_toggle_title').click(function(){var $this_heading=$(this),$module=$this_heading.closest('.tm_pb_toggle'),$section=$module.parents('.tm_pb_section'),$content=$module.find('.tm_pb_toggle_content'),$accordion=$module.closest('.tm_pb_accordion'),is_accordion=$accordion.length,is_accordion_toggling=$accordion.hasClass('tm_pb_accordion_toggling'),$accordion_active_toggle;if(is_accordion){if($module.hasClass('tm_pb_toggle_open')||is_accordion_toggling){return false;}
$accordion.addClass('tm_pb_accordion_toggling');$accordion_active_toggle=$module.siblings('.tm_pb_toggle_open');}
if($content.is(':animated')){return;}
$content.slideToggle(700,function(){if($module.hasClass('tm_pb_toggle_close')){$module.removeClass('tm_pb_toggle_close').addClass('tm_pb_toggle_open');}else{$module.removeClass('tm_pb_toggle_open').addClass('tm_pb_toggle_close');}
if($section.hasClass('tm_pb_section_parallax')&&!$section.children().hasClass('tm_pb_parallax_css')){$.proxy(tm_parallax_set_height,$section)();}});if(is_accordion){$accordion_active_toggle.find('.tm_pb_toggle_content').slideToggle(700,function(){$accordion_active_toggle.removeClass('tm_pb_toggle_open').addClass('tm_pb_toggle_close');$accordion.removeClass('tm_pb_accordion_toggling');});}});var $tm_contact_container=$('.tm_pb_contact_form_container');if($tm_contact_container.length){$tm_contact_container.each(function(){var $this_contact_container=$(this),$tm_contact_form=$this_contact_container.find('form'),$tm_contact_submit=$this_contact_container.find('input.tm_pb_contact_submit'),$tm_inputs=$tm_contact_form.find('input[type=text],textarea'),tm_email_reg=/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,redirect_url=typeof $this_contact_container.data('redirect_url')!=='undefined'?$this_contact_container.data('redirect_url'):'';$tm_contact_form.on('submit',function(event){var $this_contact_form=$(this),$this_inputs=$this_contact_form.find('.tm_pb_contact_form_input, .tm_pb_contact_captcha'),this_tm_contact_error=false,$tm_contact_message=$this_contact_form.closest('.tm_pb_contact_form_container').find('.tm-pb-contact-message'),tm_message='',tm_fields_message='',$this_contact_container=$this_contact_form.closest('.tm_pb_contact_form_container'),$captcha_field=$this_contact_form.find('.tm_pb_contact_captcha'),form_unique_id=typeof $this_contact_container.data('form_unique_num')!=='undefined'?$this_contact_container.data('form_unique_num'):0,inputs_list=[];tm_message='<ul>';$this_inputs.removeClass('tm_contact_error');$this_inputs.each(function(){var $this_el=$(this),this_val=$this_el.val(),this_label=$this_el.siblings('label').text(),field_type=typeof $this_el.data('field_type')!=='undefined'?$this_el.data('field_type'):'text',required_mark=typeof $this_el.data('required_mark')!=='undefined'?$this_el.data('required_mark'):'not_required',original_id=typeof $this_el.data('original_id')!=='undefined'?$this_el.data('original_id'):'',field_name;if(typeof $this_el.attr('id')!=='undefined'){inputs_list.push({'field_id':$this_el.attr('id'),'original_id':original_id,'required_mark':required_mark,'field_type':field_type,'field_label':this_label});}
if('required'===required_mark&&(''===this_val||this_label===this_val||null===this_val)){$this_el.addClass('tm_contact_error');this_tm_contact_error=true;field_name=$this_el.data('original_title');if(!field_name){field_name=$this_el.attr('name');}
tm_fields_message+='<li>'+field_name+'</li>';}
if('email'===field_type&&''!==this_val&&this_label!==this_val&&!tm_email_reg.test(this_val)){$this_el.addClass('tm_contact_error');this_tm_contact_error=true;if(!tm_email_reg.test(this_val)){tm_message+='<li>'+tm_pb_custom.invalid+'</li>';}}});if($captcha_field.length&&''!==$captcha_field.val()){var first_digit=parseInt($captcha_field.data('first_digit')),second_digit=parseInt($captcha_field.data('second_digit'));if(parseInt($captcha_field.val())!==first_digit+second_digit){tm_message+='<li>'+tm_pb_custom.wrong_captcha+'</li>';this_tm_contact_error=true;first_digit=Math.floor((Math.random()*15)+1);second_digit=Math.floor((Math.random()*15)+1);$captcha_field.data('first_digit',first_digit);$captcha_field.data('second_digit',second_digit);$this_contact_form.find('.tm_pb_contact_captcha_question').empty().append(first_digit+' + '+second_digit);}}
if(!this_tm_contact_error){var $href=$(this).attr('action'),form_data=$(this).serializeArray();form_data.push({'name':'tm_pb_contact_email_fields_'+form_unique_id,'value':JSON.stringify(inputs_list)});$this_contact_container.fadeTo('fast',0.2).load($href+' #'+$this_contact_form.closest('.tm_pb_contact_form_container').attr('id'),form_data,function(responseText){if(''!==redirect_url&&!$(responseText).find('.tm_pb_contact_error_text').length){window.location.href=redirect_url;}
$this_contact_container.fadeTo('fast',1);});}
tm_message+='</ul>';if(''!==tm_fields_message){if(tm_message!='<ul></ul>'){tm_message='<p class="tm_normal_padding">'+tm_pb_custom.contact_error_message+'</p>'+tm_message;}
tm_fields_message='<ul>'+tm_fields_message+'</ul>';tm_fields_message='<p>'+tm_pb_custom.fill_message+'</p>'+tm_fields_message;tm_message=tm_fields_message+tm_message;}
if(tm_message!='<ul></ul>'){$tm_contact_message.html(tm_message);}
event.preventDefault();});});}
$('.tm_pb_video .tm_pb_video_overlay, .tm_pb_video_wrap .tm_pb_video_overlay').click(function(){var $this=$(this),$video_image=$this.closest('.tm_pb_video_overlay');$video_image.fadeTo(500,0,function(){var $image=$(this);$image.css('display','none');});return false;});function tm_pb_resize_section_video_bg($video){$element=typeof $video!=='undefined'?$video.closest('.tm_pb_section_video_bg'):$('.tm_pb_section_video_bg');$element.each(function(){var $this_el=$(this),ratio=(typeof $this_el.attr('data-ratio')!=='undefined')?$this_el.attr('data-ratio'):$this_el.find('video').attr('width')/$this_el.find('video').attr('height'),$video_elements=$this_el.find('.mejs-video, video, object').css('margin',0),$container=$this_el.closest('.tm_pb_section_video').length?$this_el.closest('.tm_pb_section_video'):$this_el.closest('.tm_pb_slides'),body_width=$container.width(),container_height=$container.innerHeight(),width,height;if(typeof $this_el.attr('data-ratio')=='undefined')
$this_el.attr('data-ratio',ratio);if(body_width/container_height<ratio){width=container_height*ratio;height=container_height;}else{width=body_width;height=body_width/ratio;}
$video_elements.width(width).height(height);});}
function tm_pb_center_video($video){$element=typeof $video!=='undefined'?$video:$('.tm_pb_section_video_bg .mejs-video');$element.each(function(){var $video_width=$(this).width()/2;var $video_width_negative=0-$video_width;$(this).css("margin-left",$video_width_negative);if(typeof $video!=='undefined'){if($video.closest('.tm_pb_slider').length&&!$video.closest('.tm_pb_first_video').length)
return false;}});}
function tm_fix_slider_height(){if(!$tm_pb_slider.length)return;$tm_pb_slider.each(function(){var $slide_section=$(this).parent('.tm_pb_section'),$slide=$(this).find('.tm_pb_slide'),$slide_container=$slide.find('.tm_pb_container'),max_height=0;if($slide_section.is('.tm_pb_section_first')){return true;}
$slide_container.css('min-height',0);$slide.each(function(){var $this_el=$(this),height=$this_el.innerHeight();if(max_height<height)
max_height=height;});$slide_container.css('min-height',max_height);});}
function tm_fix_nav_direction(){window_width=$(window).width();$('.nav li.tm-reverse-direction-nav').removeClass('tm-reverse-direction-nav');$('.nav li li ul').each(function(){var $dropdown=$(this),dropdown_width=$dropdown.width(),dropdown_offset=$dropdown.offset(),$parents=$dropdown.parents('.nav > li');if(dropdown_offset.left>(window_width-dropdown_width)){$parents.addClass('tm-reverse-direction-nav');}});}
tm_fix_nav_direction();tm_pb_form_placeholders_init($('.tm_pb_newsletter_form'));$('.tm_pb_fullwidth_menu ul.nav').each(function(i){i++;tm_duplicate_menu($(this),$(this).parents('.tm_pb_row').find('div .mobile_nav'),'mobile_menu'+i,'tm_mobile_menu');});window.tm_fix_testimonial_inner_width=function(){var window_width=$(window).width();if(window_width>767){$('.tm_pb_testimonial').each(function(){if(!$(this).is(':visible')){return;}
var $testimonial=$(this),testimonial_width=$testimonial.width(),$portrait=$testimonial.find('.tm_pb_testimonial_portrait'),portrait_width=$portrait.width(),$testimonial_inner=$testimonial.find('.tm_pb_testimonial_description_inner'),$outer_column=$testimonial.closest('.tm_pb_column'),testimonial_inner_width=testimonial_width,subtract=!($outer_column.hasClass('tm_pb_column_1_3')||$outer_column.hasClass('tm_pb_column_1_4')||$outer_column.hasClass('tm_pb_column_3_8'))?portrait_width+31:0;$testimonial_inner.width(testimonial_inner_width-subtract);});}else{$('.tm_pb_testimonial_description_inner').removeAttr('style');}}
window.tm_fix_testimonial_inner_width();window.tm_reinint_waypoint_modules=function(){if($.fn.waypoint){var $tm_pb_circle_counter=$('.tm_pb_circle_counter_bar'),$tm_pb_number_counter=$('.tm_pb_number_counter');$('.tm_pb_counter_container, .tm-waypoint').waypoint({offset:'75%',handler:function(){$(this.element).addClass('tm-animated');}});if($tm_pb_circle_counter.length){$tm_pb_circle_counter.each(function(){var $this_counter=$(this);if(!$this_counter.is(':visible')){return;}
$this_counter.waypoint({offset:'65%',handler:function(){$this_counter.data('easyPieChart').update($this_counter.data('number-value'));}});});}
if($tm_pb_number_counter.length){$tm_pb_number_counter.each(function(){var $this_counter=$(this);$this_counter.waypoint({offset:'75%',handler:function(){$this_counter.data('easyPieChart').update($this_counter.data('number-value'));}});});}}}
window.tm_calc_fullscreen_section=function(){var $tm_window=$(window),$body=$('body'),$wpadminbar=$('#wpadminbar'),tm_is_vertical_nav=$body.hasClass('tm_vertical_nav'),$this_section=$(this),this_section_index=$this_section.index('.tm_pb_fullwidth_header'),$header=$this_section.children('.tm_pb_fullwidth_header_container'),$header_content=$header.children('.header-content-container'),$header_image=$header.children('.header-image-container'),sectionHeight=$tm_window.height(),$wpadminbar=$('#wpadminbar'),$top_header=$('#top-header'),$main_header=$('#main-header'),tm_header_height,secondary_nav_height;secondary_nav_height=$top_header.length&&$top_header.is(':visible')?$top_header.innerHeight():0;tm_header_height=$main_header.length?$main_header.innerHeight()+secondary_nav_height:0;var calc_header_offset=($wpadminbar.length)?tm_header_height+$wpadminbar.innerHeight()-1:tm_header_height-1;if($body.hasClass('tm_vertical_nav')){if($tm_window.width()>=980&&$top_header.length){sectionHeight-=$top_header.height();}
if($wpadminbar.length){sectionHeight-=$wpadminbar.height();}}else{if($body.hasClass('tm_hide_nav')){if($wpadminbar.length){sectionHeight-=$wpadminbar.height();}
if($tm_window.width()<981&&!$body.hasClass('tm_transparent_nav')){sectionHeight-=$('#main-header').height();}}else{if($this_section.offset().top<=calc_header_offset+3){if(tm_is_vertical_nav){var $top_header=$('#top-header'),top_header_height=($top_header.length&&0===$this_section.index('.tm_pb_fullscreen'))?$top_header.height():0,wpadminbar_height=($wpadminbar.length&&0===$this_section.index('.tm_pb_fullscreen'))?$wpadminbar.height():0,calc_header_offset_vertical=wpadminbar_height+top_header_height;sectionHeight-=calc_header_offset_vertical;}else{sectionHeight-=calc_header_offset;}}}}
if($body.hasClass('tm_transparent_nav')&&$body.hasClass('tm_hide_nav')&&0===this_section_index){$this_section.css('padding-top','');}
$this_section.css('min-height',sectionHeight+'px');$header.css('min-height',sectionHeight+'px');if($header.hasClass('center')&&$header_content.hasClass('bottom')&&$header_image.hasClass('bottom')){$header.addClass('bottom-bottom');}
if($header.hasClass('center')&&$header_content.hasClass('center')&&$header_image.hasClass('center')){$header.addClass('center-center');}
if($header.hasClass('center')&&$header_content.hasClass('center')&&$header_image.hasClass('bottom')){$header.addClass('center-bottom');var contentHeight=sectionHeight-$header_image.outerHeight(true);if(contentHeight>0){$header_content.css('min-height',contentHeight+'px');}}
if($header.hasClass('center')&&$header_content.hasClass('bottom')&&$header_image.hasClass('center')){$header.addClass('bottom-center');}
if(($header.hasClass('left')||$header.hasClass('right'))&&!$header_content.length&&$header_image.length){$header.css('justify-content','flex-end');}
if($header.hasClass('center')&&$header_content.hasClass('bottom')&&!$header_image.length){$header_content.find('.header-content').css('margin-bottom',80+'px');}
if($header_content.hasClass('bottom')&&$header_image.hasClass('center')){$header_image.find('.header-image').css('margin-bottom',80+'px');$header_image.css('align-self','flex-end');}}
$(window).resize(function(){var window_width=$tm_window.width(),tm_container_css_width=$tm_container.css('width'),tm_container_width_in_pixel=(typeof tm_container_css_width!=='undefined')?tm_container_css_width.substr(-1,1)!=='%':'',tm_container_actual_width=(tm_container_width_in_pixel)?$tm_container.width():(($tm_container.width()/100)*window_width),containerWidthChanged=tm_container_width!==tm_container_actual_width;tm_pb_resize_section_video_bg();tm_pb_center_video();tm_fix_slider_height();tm_fix_nav_direction();$tm_pb_fullwidth_portfolio.each(function(){set_container_height=$(this).hasClass('tm_pb_fullwidth_portfolio_carousel')?true:false;set_fullwidth_portfolio_columns($(this),set_container_height);});if(containerWidthChanged){$('.container-width-change-notify').trigger('containerWidthChanged');setTimeout(function(){$tm_pb_filterable_portfolio.each(function(){set_filterable_grid_items($(this));});$tm_pb_gallery.each(function(){if($(this).hasClass('tm_pb_gallery_grid')){set_gallery_grid_items($(this));}});},100);tm_container_width=tm_container_actual_width;etRecalculateOffset=true;if($tm_pb_circle_counter.length){$tm_pb_circle_counter.each(function(){var $this_counter=$(this);if(!$this_counter.is(':visible')){return;}
$this_counter.data('easyPieChart').update($this_counter.data('number-value'));});}
if($tm_pb_countdown_timer.length){$tm_pb_countdown_timer.each(function(){var timer=$(this);tm_countdown_timer_labels(timer);});}}
window.tm_fix_testimonial_inner_width();tm_audio_module_set();});$(window).ready(function(){if($.fn.fitVids){$('.tm_pb_slide_video').fitVids();$('.tm_pb_module').fitVids({customSelector:"iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"});}
tm_fix_video_wmode('.fluid-width-video-wrapper');tm_fix_slider_height();});$(window).load(function(){tm_fix_fullscreen_section();$('section.tm_pb_fullscreen').each(function(){var $this_section=$(this);$.proxy(tm_calc_fullscreen_section,$this_section)();$tm_window.on('resize',$.proxy(tm_calc_fullscreen_section,$this_section));});$('.tm_pb_fullwidth_header_scroll a').click(function(event){event.preventDefault();var $this_section=$(this).parents('section'),is_next_fullscreen=$this_section.next().hasClass('tm_pb_fullscreen'),$wpadminbar=$('#wpadminbar'),wpadminbar_height=($wpadminbar.length&&!is_next_fullscreen)?$wpadminbar.height():0,main_header_height=is_next_fullscreen||!tm_is_fixed_nav?0:$main_header.height(),top_header_height=is_next_fullscreen||!tm_is_fixed_nav?0:$top_header.height(),section_bottom=$this_section.offset().top+$this_section.outerHeight(true)-(wpadminbar_height+top_header_height+main_header_height);if($this_section.length){$('html, body').animate({scrollTop:section_bottom},800);if(!$('#main-header').hasClass('tm-fixed-header')&&$('body').hasClass('tm_fixed_nav')&&$(window).width()>980){setTimeout(function(){var section_offset_top=$this_section.offset().top,section_height=$this_section.outerHeight(true),main_header_height=is_next_fullscreen?0:$main_header.height(),section_bottom=section_offset_top+section_height-(main_header_height+top_header_height+wpadminbar_height);$('html, body').animate({scrollTop:section_bottom},280,'linear');},780);}}});setTimeout(function(){$('.tm_pb_preload').removeClass('tm_pb_preload');},500);if($.fn.hashchange){$(window).hashchange(function(){var hash=window.location.hash.substring(1);process_tm_hashchange(hash);});$(window).hashchange();}
if($tm_pb_parallax.length&&!tm_is_mobile_device){$tm_pb_parallax.each(function(){if($(this).hasClass('tm_pb_parallax_css')){return;}
var $this_parent=$(this).parent();$.proxy(tm_parallax_set_height,$this_parent)();$.proxy(tm_apply_parallax,$this_parent)();$tm_window.on('scroll',$.proxy(tm_apply_parallax,$this_parent));$tm_window.on('resize',$.proxy(tm_parallax_set_height,$this_parent));$tm_window.on('resize',$.proxy(tm_apply_parallax,$this_parent));$this_parent.find('.tm-learn-more .heading-more').click(function(){setTimeout(function(){$.proxy(tm_parallax_set_height,$this_parent)();},300);});});}
tm_audio_module_set();window.tm_reinint_waypoint_modules();});if($('.tm_section_specialty').length){$('.tm_section_specialty').each(function(){var this_row=$(this).find('.tm_pb_row');this_row.find('>.tm_pb_column:not(.tm_pb_specialty_column)').addClass('tm_pb_column_single');});}
if($('.tm_pb_section_parallax').length&&$('.tm_pb_map').length){$('body').addClass('parallax-map-support');}
$('.tm_pb_widget_area '+tm_pb_custom.widget_search_selector).each(function(){var $search_wrap=$(this),$search_input_submit=$search_wrap.find('input[type="submit"]'),search_input_submit_text=$search_input_submit.attr('value'),$search_button=$search_wrap.find('button'),search_button_text=$search_button.text(),has_submit_button=$search_input_submit.length||$search_button.length?true:false,min_column_width=150;if(!$search_wrap.find('input[type="text"]').length&&!$search_wrap.find('input[type="search"]').length){return;}
if(!has_submit_button){$search_wrap.addClass('tm-no-submit-button');}
if($search_wrap.width()<150){$search_wrap.addClass('tm-narrow-wrapper');}
if($search_input_submit.length&&(typeof search_input_submit_text=='undefined'||search_input_submit_text==='')){$search_input_submit.remove();$search_wrap.addClass('tm-no-submit-button');}
if($search_button.length&&(typeof search_button_text=='undefined'||search_button_text==='')){$search_button.remove();$search_wrap.addClass('tm-no-submit-button');}});if($('.tm_pb_search').length){$('.tm_pb_search').each(function(){var $this_module=$(this),$input_field=$this_module.find('.tm_pb_s'),$button=$this_module.find('.tm_pb_searchsubmit'),input_padding=$this_module.hasClass('tm_pb_text_align_right')?'paddingLeft':'paddingRight',disabled_button=$this_module.hasClass('tm_pb_hide_search_button');if($button.innerHeight()>$input_field.innerHeight()){$input_field.height($button.innerHeight());}
if(!disabled_button){$input_field.css(input_padding,$button.innerWidth()+10);}});}
if($('.tm_pb_comments_module').length){$('.tm_pb_comments_module').each(function(){var $comments_module=$(this),$comments_module_button=$comments_module.find('.comment-reply-link');if($comments_module_button.length){$comments_module_button.addClass('tm_pb_button');if(typeof $comments_module.data('icon')!=='undefined'){$comments_module_button.attr('data-icon',$comments_module.data('icon'));$comments_module_button.addClass('tm_pb_custom_button_icon');}}});}
if($('.tm_pb_swiper')[0]){$('.tm_pb_swiper').each(function(){var $this=$(this),settings=$this.data('settings'),pagination=('on'===settings['pagination'])?true:false,navigateButton=('on'===settings['navigateButton'])?true:false,autoplay=('on'===settings['autoplay'])?3500:false,centeredSlides=('on'===settings['centeredSlides'])?true:false,spaceBetweenSlides=settings['spaceBetweenSlides']||0,slidesPerView=settings['slidesPerView'],swiperContainer=$('.swiper-container',$this),swiper=new Swiper(swiperContainer,{slidesPerView:+slidesPerView,autoplay:autoplay,centeredSlides:centeredSlides,mousewheelControl:false,paginationClickable:true,spaceBetween:+spaceBetweenSlides,speed:500,nextButton:$('.swiper-button-next',$this),prevButton:$('.swiper-button-prev',$this),pagination:$('.swiper-pagination',$this),onInit:function(){if(navigateButton){$('.swiper-button-next, .swiper-button-prev',$this).css({'display':'block'});}
if(!pagination){$('.swiper-pagination',$this).css({'display':'none'});}},breakpoints:{1200:{slidesPerView:Math.floor(slidesPerView*0.75),spaceBetween:Math.floor(spaceBetweenSlides*0.75)},992:{slidesPerView:Math.floor(slidesPerView*0.5),spaceBetween:Math.floor(spaceBetweenSlides*0.5)},769:{slidesPerView:(0!==Math.floor(slidesPerView*0.25))?Math.floor(slidesPerView*0.25):1},}});});$(window).on('load',loadHandler);function loadHandler(){$('.tm_pb_swiper').css({'opacity':'1'});}}});

(function () {
    'use strict';
    var $;
    /*===========================
    Swiper
    ===========================*/
    var Swiper = function (container, params) {
        if (!(this instanceof Swiper)) return new Swiper(container, params);
        var defaults = {
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            autoplay: false,
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            flip: {
                slideShadows : true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            parallax: false,
            scrollbar: null,
            scrollbarHide: true,
            scrollbarDraggable: false,
            scrollbarSnapOnRelease: false,
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelReleaseOnEdges: false,
            mousewheelInvert: false,
            mousewheelForceToAxis: false,
            mousewheelSensitivity: 1,
            hashnav: false,
            breakpoints: undefined,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0, // in px
            slidesOffsetAfter: 0, // in px
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            uniqueNavElements: true,
            pagination: null,
            paginationElement: 'span',
            paginationClickable: false,
            paginationHide: false,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
            resistance: true,
            resistanceRatio: 0.85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            lazyLoading: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: undefined,
            controlInverse: false,
            controlBy: 'slide', //or 'container'
            allowSwipeToPrev: true,
            allowSwipeToNext: true,
            swipeHandler: null, //'.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slidePrevClass: 'swiper-slide-prev',
            wrapperClass: 'swiper-wrapper',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            buttonDisabledClass: 'swiper-button-disabled',
            paginationCurrentClass: 'swiper-pagination-current',
            paginationTotalClass: 'swiper-pagination-total',
            paginationHiddenClass: 'swiper-pagination-hidden',
            paginationProgressbarClass: 'swiper-pagination-progressbar',
            observer: false,
            observeParents: false,
            a11y: false,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            runCallbacksOnInit: true
            /*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            */
        };
        var initialVirtualTranslate = params && params.virtualTranslate;
        params = params || {};
        var originalParams = {};
        for (var param in params) {
            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
                originalParams[param] = {};
                for (var deepParam in params[param]) {
                    originalParams[param][deepParam] = params[param][deepParam];
                }
            }
            else {
                originalParams[param] = params[param];
            }
        }
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
            else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
        var s = this;
        s.params = params;
        s.originalParams = originalParams;
        s.classNames = [];
        /*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
            $ = Dom7;
        }
        if (typeof $ === 'undefined') {
            if (typeof Dom7 === 'undefined') {
                $ = window.Dom7 || window.Zepto || window.jQuery;
            }
            else {
                $ = Dom7;
            }
            if (!$) return;
        }
        s.$ = $;
        /*=========================
          Breakpoints
          ===========================*/
        s.currentBreakpoint = undefined;
        s.getActiveBreakpoint = function () {
            if (!s.params.breakpoints) return false;
            var breakpoint = false;
            var points = [], point;
            for ( point in s.params.breakpoints ) {
                if (s.params.breakpoints.hasOwnProperty(point)) {
                    points.push(point);
                }
            }
            points.sort(function (a, b) {
                return parseInt(a, 10) > parseInt(b, 10);
            });
            for (var i = 0; i < points.length; i++) {
                point = points[i];
                if (point >= window.innerWidth && !breakpoint) {
                    breakpoint = point;
                }
            }
            return breakpoint || 'max';
        };
        s.setBreakpoint = function () {
            var breakpoint = s.getActiveBreakpoint();
            if (breakpoint && s.currentBreakpoint !== breakpoint) {
                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
                for ( var param in breakPointsParams ) {
                    s.params[param] = breakPointsParams[param];
                }
                s.currentBreakpoint = breakpoint;
                if(needsReLoop && s.destroyLoop) {
                    s.reLoop(true);
                }
            }
        };
        if (s.params.breakpoints) {
            s.setBreakpoint();
        }
        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/
        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1) {
            var swipers = [];
            s.container.each(function () {
                var container = this;
                swipers.push(new Swiper(this, params));
            });
            return swipers;
        }
        s.container[0].swiper = s;
        s.container.data('swiper', s);
        s.classNames.push('swiper-container-' + s.params.direction);
        if (s.params.freeMode) {
            s.classNames.push('swiper-container-free-mode');
        }
        if (!s.support.flexbox) {
            s.classNames.push('swiper-container-no-flexbox');
            s.params.slidesPerColumn = 1;
        }
        if (s.params.autoHeight) {
            s.classNames.push('swiper-container-autoheight');
        }
        if (s.params.parallax || s.params.watchSlidesVisibility) {
            s.params.watchSlidesProgress = true;
        }
        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
            if (s.support.transforms3d) {
                s.params.watchSlidesProgress = true;
                s.classNames.push('swiper-container-3d');
            }
            else {
                s.params.effect = 'slide';
            }
        }
        if (s.params.effect !== 'slide') {
            s.classNames.push('swiper-container-' + s.params.effect);
        }
        if (s.params.effect === 'cube') {
            s.params.resistanceRatio = 0;
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.centeredSlides = false;
            s.params.spaceBetween = 0;
            s.params.virtualTranslate = true;
            s.params.setWrapperSize = false;
        }
        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.watchSlidesProgress = true;
            s.params.spaceBetween = 0;
            s.params.setWrapperSize = false;
            if (typeof initialVirtualTranslate === 'undefined') {
                s.params.virtualTranslate = true;
            }
        }
        if (s.params.grabCursor && s.support.touch) {
            s.params.grabCursor = false;
        }
        s.wrapper = s.container.children('.' + s.params.wrapperClass);
        if (s.params.pagination) {
            s.paginationContainer = $(s.params.pagination);
            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
                s.paginationContainer = s.container.find(s.params.pagination);
            }
            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
                s.paginationContainer.addClass('swiper-pagination-clickable');
            }
            else {
                s.params.paginationClickable = false;
            }
            s.paginationContainer.addClass('swiper-pagination-' + s.params.paginationType);
        }
        if (s.params.nextButton || s.params.prevButton) {
            if (s.params.nextButton) {
                s.nextButton = $(s.params.nextButton);
                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                    s.nextButton = s.container.find(s.params.nextButton);
                }
            }
            if (s.params.prevButton) {
                s.prevButton = $(s.params.prevButton);
                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                    s.prevButton = s.container.find(s.params.prevButton);
                }
            }
        }
        s.isHorizontal = function () {
            return s.params.direction === 'horizontal';
        };
        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
            s.classNames.push('swiper-container-rtl');
        }
        if (s.rtl) {
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }
        if (s.params.slidesPerColumn > 1) {
            s.classNames.push('swiper-container-multirow');
        }
        if (s.device.android) {
            s.classNames.push('swiper-container-android');
        }
        s.container.addClass(s.classNames.join(' '));
        s.translate = 0;
        s.progress = 0;
        s.velocity = 0;
        /*=========================
          Locks, unlocks
          ===========================*/
        s.lockSwipeToNext = function () {
            s.params.allowSwipeToNext = false;
        };
        s.lockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = false;
        };
        s.lockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
        };
        s.unlockSwipeToNext = function () {
            s.params.allowSwipeToNext = true;
        };
        s.unlockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = true;
        };
        s.unlockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
        };
        /*=========================
          Round helper
          ===========================*/
        function round(a) {
            return Math.floor(a);
        }
        /*=========================
          Set grab cursor
          ===========================*/
        if (s.params.grabCursor) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = '-webkit-grab';
            s.container[0].style.cursor = '-moz-grab';
            s.container[0].style.cursor = 'grab';
        }
        /*=========================
          Update on Images Ready
          ===========================*/
        s.imagesToLoad = [];
        s.imagesLoaded = 0;
        s.loadImage = function (imgElement, src, srcset, checkForComplete, callback) {
            var image;
            function onReady () {
                if (callback) callback();
            }
            if (!imgElement.complete || !checkForComplete) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (srcset) {
                        image.srcset = srcset;
                    }
                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
            } else {//image already loaded...
                onReady();
            }
        };
        s.preloadImages = function () {
            s.imagesToLoad = s.container.find('img');
            function _onReady() {
                if (typeof s === 'undefined' || s === null) return;
                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
                if (s.imagesLoaded === s.imagesToLoad.length) {
                    if (s.params.updateOnImagesReady) s.update();
                    s.emit('onImagesReady', s);
                }
            }
            for (var i = 0; i < s.imagesToLoad.length; i++) {
                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), true, _onReady);
            }
        };
        /*=========================
          Autoplay
          ===========================*/
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;
        function autoplay() {
            s.autoplayTimeoutId = setTimeout(function () {
                if (s.params.loop) {
                    s.fixLoop();
                    s._slideNext();
                    s.emit('onAutoplay', s);
                }
                else {
                    if (!s.isEnd) {
                        s._slideNext();
                        s.emit('onAutoplay', s);
                    }
                    else {
                        if (!params.autoplayStopOnLast) {
                            s._slideTo(0);
                            s.emit('onAutoplay', s);
                        }
                        else {
                            s.stopAutoplay();
                        }
                    }
                }
            }, s.params.autoplay);
        }
        s.startAutoplay = function () {
            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
            if (!s.params.autoplay) return false;
            if (s.autoplaying) return false;
            s.autoplaying = true;
            s.emit('onAutoplayStart', s);
            autoplay();
        };
        s.stopAutoplay = function (internal) {
            if (!s.autoplayTimeoutId) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplaying = false;
            s.autoplayTimeoutId = undefined;
            s.emit('onAutoplayStop', s);
        };
        s.pauseAutoplay = function (speed) {
            if (s.autoplayPaused) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplayPaused = true;
            if (speed === 0) {
                s.autoplayPaused = false;
                autoplay();
            }
            else {
                s.wrapper.transitionEnd(function () {
                    if (!s) return;
                    s.autoplayPaused = false;
                    if (!s.autoplaying) {
                        s.stopAutoplay();
                    }
                    else {
                        autoplay();
                    }
                });
            }
        };
        /*=========================
          Min/Max Translate
          ===========================*/
        s.minTranslate = function () {
            return (-s.snapGrid[0]);
        };
        s.maxTranslate = function () {
            return (-s.snapGrid[s.snapGrid.length - 1]);
        };
        /*=========================
          Slider/slides sizes
          ===========================*/
        s.updateAutoHeight = function () {
            var slide = s.slides.eq(s.activeIndex)[0];
            if (typeof slide !== 'undefined') {
                var newHeight = slide.offsetHeight;
                if (newHeight) s.wrapper.css('height', newHeight + 'px');
            }
        };
        s.updateContainerSize = function () {
            var width, height;
            if (typeof s.params.width !== 'undefined') {
                width = s.params.width;
            }
            else {
                width = s.container[0].clientWidth;
            }
            if (typeof s.params.height !== 'undefined') {
                height = s.params.height;
            }
            else {
                height = s.container[0].clientHeight;
            }
            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
                return;
            }
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
            s.width = width;
            s.height = height;
            s.size = s.isHorizontal() ? s.width : s.height;
        };
        s.updateSlidesSize = function () {
            s.slides = s.wrapper.children('.' + s.params.slideClass);
            s.snapGrid = [];
            s.slidesGrid = [];
            s.slidesSizesGrid = [];
            var spaceBetween = s.params.spaceBetween,
                slidePosition = -s.params.slidesOffsetBefore,
                i,
                prevSlideSize = 0,
                index = 0;
            if (typeof s.size === 'undefined') return;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
            }
            s.virtualSize = -spaceBetween;
            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
            else s.slides.css({marginRight: '', marginBottom: ''});
            var slidesNumberEvenToRows;
            if (s.params.slidesPerColumn > 1) {
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;
                }
                else {
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }
                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                }
            }
            var slideSize;
            var slidesPerColumn = s.params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
            for (i = 0; i < s.slides.length; i++) {
                slideSize = 0;
                var slide = s.slides.eq(i);
                if (s.params.slidesPerColumn > 1) {
                    var newSlideOrderIndex;
                    var column, row;
                    if (s.params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
                            if (++row >= slidesPerColumn) {
                                row = 0;
                                column++;
                            }
                        }
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide
                            .css({
                                '-webkit-box-ordinal-group': newSlideOrderIndex,
                                '-moz-box-ordinal-group': newSlideOrderIndex,
                                '-ms-flex-order': newSlideOrderIndex,
                                '-webkit-order': newSlideOrderIndex,
                                'order': newSlideOrderIndex
                            });
                    }
                    else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide
                        .css({
                            'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                        })
                        .attr('data-swiper-column', column)
                        .attr('data-swiper-row', row);
                }
                if (slide.css('display') === 'none') continue;
                if (s.params.slidesPerView === 'auto') {
                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    if (s.params.roundLengths) slideSize = round(slideSize);
                }
                else {
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                    if (s.params.roundLengths) slideSize = round(slideSize);
                    if (s.isHorizontal()) {
                        s.slides[i].style.width = slideSize + 'px';
                    }
                    else {
                        s.slides[i].style.height = slideSize + 'px';
                    }
                }
                s.slides[i].swiperSlideSize = slideSize;
                s.slidesSizesGrid.push(slideSize);
                if (s.params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                }
                else {
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                s.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index ++;
            }
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
            var newSlidesGrid;
            if (
                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
            }
            if (!s.support.flexbox || s.params.setWrapperSize) {
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
            }
            if (s.params.slidesPerColumn > 1) {
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                if (s.params.centeredSlides) {
                    newSlidesGrid = [];
                    for (i = 0; i < s.snapGrid.length; i++) {
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                    }
                    s.snapGrid = newSlidesGrid;
                }
            }
            if (!s.params.centeredSlides) {
                newSlidesGrid = [];
                for (i = 0; i < s.snapGrid.length; i++) {
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
                        newSlidesGrid.push(s.snapGrid[i]);
                    }
                }
                s.snapGrid = newSlidesGrid;
                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
                    s.snapGrid.push(s.virtualSize - s.size);
                }
            }
            if (s.snapGrid.length === 0) s.snapGrid = [0];
            if (s.params.spaceBetween !== 0) {
                if (s.isHorizontal()) {
                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
                    else s.slides.css({marginRight: spaceBetween + 'px'});
                }
                else s.slides.css({marginBottom: spaceBetween + 'px'});
            }
            if (s.params.watchSlidesProgress) {
                s.updateSlidesOffset();
            }
        };
        s.updateSlidesOffset = function () {
            for (var i = 0; i < s.slides.length; i++) {
                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
            }
        };
        /*=========================
          Slider/slides progress
          ===========================*/
        s.updateSlidesProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            if (s.slides.length === 0) return;
            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
            var offsetCenter = -translate;
            if (s.rtl) offsetCenter = translate;
            s.slides.removeClass(s.params.slideVisibleClass);
            for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides[i];
                var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
                    var isVisible =
                        (slideBefore >= 0 && slideBefore < s.size) ||
                        (slideAfter > 0 && slideAfter <= s.size) ||
                        (slideBefore <= 0 && slideAfter >= s.size);
                    if (isVisible) {
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
                    }
                }
                slide.progress = s.rtl ? -slideProgress : slideProgress;
            }
        };
        s.updateProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            var wasBeginning = s.isBeginning;
            var wasEnd = s.isEnd;
            if (translatesDiff === 0) {
                s.progress = 0;
                s.isBeginning = s.isEnd = true;
            }
            else {
                s.progress = (translate - s.minTranslate()) / (translatesDiff);
                s.isBeginning = s.progress <= 0;
                s.isEnd = s.progress >= 1;
            }
            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
            s.emit('onProgress', s, s.progress);
        };
        s.updateActiveIndex = function () {
            var translate = s.rtl ? s.translate : -s.translate;
            var newActiveIndex, i, snapIndex;
            for (i = 0; i < s.slidesGrid.length; i ++) {
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;
                    }
                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                        newActiveIndex = i + 1;
                    }
                }
                else {
                    if (translate >= s.slidesGrid[i]) {
                        newActiveIndex = i;
                    }
                }
            }
            if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
            if (newActiveIndex === s.activeIndex) {
                return;
            }
            s.snapIndex = snapIndex;
            s.previousIndex = s.activeIndex;
            s.activeIndex = newActiveIndex;
            s.updateClasses();
        };
        /*=========================
          Classes
          ===========================*/
        s.updateClasses = function () {
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);
            activeSlide.addClass(s.params.slideActiveClass);
            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
            if (s.params.loop && nextSlide.length === 0) {
                s.slides.eq(0).addClass(s.params.slideNextClass);
            }
            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
            if (s.params.loop && prevSlide.length === 0) {
                s.slides.eq(-1).addClass(s.params.slidePrevClass);
            }
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var current,
                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                if (s.params.loop) {
                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                        current = current - (s.slides.length - s.loopedSlides * 2);
                    }
                    if (current > total - 1) current = current - total;
                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
                }
                else {
                    if (typeof s.snapIndex !== 'undefined') {
                        current = s.snapIndex;
                    }
                    else {
                        current = s.activeIndex || 0;
                    }
                }
                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
                    s.bullets.removeClass(s.params.bulletActiveClass);
                    if (s.paginationContainer.length > 1) {
                        s.bullets.each(function () {
                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
                        });
                    }
                    else {
                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
                }
                if (s.params.paginationType === 'progress') {
                    var scale = (current + 1) / total,
                        scaleX = scale,
                        scaleY = 1;
                    if (!s.isHorizontal()) {
                        scaleY = scale;
                        scaleX = 1;
                    }
                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
                }
                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
            if (!s.params.loop) {
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    if (s.isBeginning) {
                        s.prevButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
                    }
                    else {
                        s.prevButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
                    }
                }
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    if (s.isEnd) {
                        s.nextButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
                    }
                    else {
                        s.nextButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
                    }
                }
            }
        };
        /*=========================
          Pagination
          ===========================*/
        s.updatePagination = function () {
            if (!s.params.pagination) return;
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var paginationHTML = '';
                if (s.params.paginationType === 'bullets') {
                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                    for (var i = 0; i < numberOfBullets; i++) {
                        if (s.params.paginationBulletRender) {
                            paginationHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
                        }
                        else {
                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                        }
                    }
                    s.paginationContainer.html(paginationHTML);
                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                        s.a11y.initPagination();
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    if (s.params.paginationFractionRender) {
                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                    }
                    else {
                        paginationHTML =
                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
                            ' / ' +
                            '<span class="' + s.params.paginationTotalClass+'"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType === 'progress') {
                    if (s.params.paginationProgressRender) {
                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
                    }
                    else {
                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType !== 'custom') {
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        };
        /*=========================
          Common update method
          ===========================*/
        s.update = function (updateTranslate) {
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updateProgress();
            s.updatePagination();
            s.updateClasses();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            function forceSetTranslate() {
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            if (updateTranslate) {
                var translated, newTranslate;
                if (s.controller && s.controller.spline) {
                    s.controller.spline = undefined;
                }
                if (s.params.freeMode) {
                    forceSetTranslate();
                    if (s.params.autoHeight) {
                        s.updateAutoHeight();
                    }
                }
                else {
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
                    }
                    else {
                        translated = s.slideTo(s.activeIndex, 0, false, true);
                    }
                    if (!translated) {
                        forceSetTranslate();
                    }
                }
            }
            else if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
        };
        /*=========================
          Resize Handler
          ===========================*/
        s.onResize = function (forceUpdatePagination) {
            if (s.params.breakpoints) {
                s.setBreakpoint();
            }
            var allowSwipeToPrev = s.params.allowSwipeToPrev;
            var allowSwipeToNext = s.params.allowSwipeToNext;
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
            s.updateContainerSize();
            s.updateSlidesSize();
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.controller && s.controller.spline) {
                s.controller.spline = undefined;
            }
            var slideChangedBySlideTo = false;
            if (s.params.freeMode) {
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
            }
            else {
                s.updateClasses();
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
                }
                else {
                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
                }
            }
            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
                s.lazy.load();
            }
            s.params.allowSwipeToPrev = allowSwipeToPrev;
            s.params.allowSwipeToNext = allowSwipeToNext;
        };
        /*=========================
          Events
          ===========================*/
        var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
        if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
        else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        s.touchEvents = {
            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : desktopEvents[0],
            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
        };
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }
        s.initEvents = function (detach) {
            var actionDom = detach ? 'off' : 'on';
            var action = detach ? 'removeEventListener' : 'addEventListener';
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
            var target = s.support.touch ? touchEventsTarget : document;
            var moveCapture = s.params.nested ? true : false;
            if (s.browser.ie) {
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                target[action](s.touchEvents.end, s.onTouchEnd, false);
            }
            else {
                if (s.support.touch) {
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
                }
                if (params.simulateTouch && !s.device.ios && !s.device.android) {
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                    document[action]('mousemove', s.onTouchMove, moveCapture);
                    document[action]('mouseup', s.onTouchEnd, false);
                }
            }
            window[action]('resize', s.onResize);
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                s.nextButton[actionDom]('click', s.onClickNext);
                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                s.prevButton[actionDom]('click', s.onClickPrev);
                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.pagination && s.params.paginationClickable) {
                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }
            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };
        s.attachEvents = function () {
            s.initEvents();
        };
        s.detachEvents = function () {
            s.initEvents(true);
        };
        /*=========================
          Handle Clicks
          ===========================*/
        s.allowClick = true;
        s.preventClicks = function (e) {
            if (!s.allowClick) {
                if (s.params.preventClicks) e.preventDefault();
                if (s.params.preventClicksPropagation && s.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        };
        s.onClickNext = function (e) {
            e.preventDefault();
            if (s.isEnd && !s.params.loop) return;
            s.slideNext();
        };
        s.onClickPrev = function (e) {
            e.preventDefault();
            if (s.isBeginning && !s.params.loop) return;
            s.slidePrev();
        };
        s.onClickIndex = function (e) {
            e.preventDefault();
            var index = $(this).index() * s.params.slidesPerGroup;
            if (s.params.loop) index = index + s.loopedSlides;
            s.slideTo(index);
        };
        /*=========================
          Handle Touches
          ===========================*/
        function findElementInEvent(e, selector) {
            var el = $(e.target);
            if (!el.is(selector)) {
                if (typeof selector === 'string') {
                    el = el.parents(selector);
                }
                else if (selector.nodeType) {
                    var found;
                    el.parents().each(function (index, _el) {
                        if (_el === selector) found = selector;
                    });
                    if (!found) return undefined;
                    else return selector;
                }
            }
            if (el.length === 0) {
                return undefined;
            }
            return el[0];
        }
        s.updateClickedSlide = function (e) {
            var slide = findElementInEvent(e, '.' + s.params.slideClass);
            var slideFound = false;
            if (slide) {
                for (var i = 0; i < s.slides.length; i++) {
                    if (s.slides[i] === slide) slideFound = true;
                }
            }
            if (slide && slideFound) {
                s.clickedSlide = slide;
                s.clickedIndex = $(slide).index();
            }
            else {
                s.clickedSlide = undefined;
                s.clickedIndex = undefined;
                return;
            }
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                var slideToIndex = s.clickedIndex,
                    realIndex,
                    duplicatedSlides;
                if (s.params.loop) {
                    if (s.animating) return;
                    realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
                    if (s.params.centeredSlides) {
                        if ((slideToIndex < s.loopedSlides - s.params.slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView/2)) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                    else {
                        if (slideToIndex > s.slides.length - s.params.slidesPerView) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                }
                else {
                    s.slideTo(slideToIndex);
                }
            }
        };
        var isTouched,
            isMoved,
            allowTouchCallbacks,
            touchStartTime,
            isScrolling,
            currentTranslate,
            startTranslate,
            allowThresholdMove,
            formElements = 'input, select, textarea, button',
            lastClickTime = Date.now(), clickTimeout,
            velocities = [],
            allowMomentumBounce;
        s.animating = false;
        s.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
        };
        var isTouchEvent, startMoving;
        s.onTouchStart = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            isTouchEvent = e.type === 'touchstart';
            if (!isTouchEvent && 'which' in e && e.which === 3) return;
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                s.allowClick = true;
                return;
            }
            if (s.params.swipeHandler) {
                if (!findElementInEvent(e, s.params.swipeHandler)) return;
            }
            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                return;
            }
            isTouched = true;
            isMoved = false;
            allowTouchCallbacks = true;
            isScrolling = undefined;
            startMoving = undefined;
            s.touches.startX = startX;
            s.touches.startY = startY;
            touchStartTime = Date.now();
            s.allowClick = true;
            s.updateContainerSize();
            s.swipeDirection = undefined;
            if (s.params.threshold > 0) allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(formElements)) preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(formElements)) {
                    document.activeElement.blur();
                }
                if (preventDefault) {
                    e.preventDefault();
                }
            }
            s.emit('onTouchStart', s, e);
        };
        s.onTouchMove = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (isTouchEvent && e.type === 'mousemove') return;
            if (e.preventedByNestedSwiper) {
                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                return;
            }
            if (s.params.onlyExternal) {
                s.allowClick = false;
                if (isTouched) {
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();
                }
                return;
            }
            if (isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(formElements)) {
                    isMoved = true;
                    s.allowClick = false;
                    return;
                }
            }
            if (allowTouchCallbacks) {
                s.emit('onTouchMove', s, e);
            }
            if (e.targetTouches && e.targetTouches.length > 1) return;
            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
            if (typeof isScrolling === 'undefined') {
                var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
            }
            if (isScrolling) {
                s.emit('onTouchMoveOpposite', s, e);
            }
            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                    startMoving = true;
                }
            }
            if (!isTouched) return;
            if (isScrolling)  {
                isTouched = false;
                return;
            }
            if (!startMoving && s.browser.ieTouch) {
                return;
            }
            s.allowClick = false;
            s.emit('onSliderMove', s, e);
            e.preventDefault();
            if (s.params.touchMoveStopPropagation && !s.params.nested) {
                e.stopPropagation();
            }
            if (!isMoved) {
                if (params.loop) {
                    s.fixLoop();
                }
                startTranslate = s.getWrapperTranslate();
                s.setWrapperTransition(0);
                if (s.animating) {
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }
                if (s.params.autoplay && s.autoplaying) {
                    if (s.params.autoplayDisableOnInteraction) {
                        s.stopAutoplay();
                    }
                    else {
                        s.pauseAutoplay();
                    }
                }
                allowMomentumBounce = false;
                if (s.params.grabCursor) {
                    s.container[0].style.cursor = 'move';
                    s.container[0].style.cursor = '-webkit-grabbing';
                    s.container[0].style.cursor = '-moz-grabbin';
                    s.container[0].style.cursor = 'grabbing';
                }
            }
            isMoved = true;
            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
            diff = diff * s.params.touchRatio;
            if (s.rtl) diff = -diff;
            s.swipeDirection = diff > 0 ? 'prev' : 'next';
            currentTranslate = diff + startTranslate;
            var disableParentSwiper = true;
            if ((diff > 0 && currentTranslate > s.minTranslate())) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            }
            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }
            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            }
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.followFinger) return;
            if (s.params.threshold > 0) {
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        s.touches.startX = s.touches.currentX;
                        s.touches.startY = s.touches.currentY;
                        currentTranslate = startTranslate;
                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;
                    }
                }
                else {
                    currentTranslate = startTranslate;
                    return;
                }
            }
            if (s.params.freeMode || s.params.watchSlidesProgress) {
                s.updateActiveIndex();
            }
            if (s.params.freeMode) {
                if (velocities.length === 0) {
                    velocities.push({
                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                        time: touchStartTime
                    });
                }
                velocities.push({
                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
                    time: (new window.Date()).getTime()
                });
            }
            s.updateProgress(currentTranslate);
            s.setWrapperTranslate(currentTranslate);
        };
        s.onTouchEnd = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (allowTouchCallbacks) {
                s.emit('onTouchEnd', s, e);
            }
            allowTouchCallbacks = false;
            if (!isTouched) return;
            if (s.params.grabCursor && isMoved && isTouched) {
                s.container[0].style.cursor = 'move';
                s.container[0].style.cursor = '-webkit-grab';
                s.container[0].style.cursor = '-moz-grab';
                s.container[0].style.cursor = 'grab';
            }
            var touchEndTime = Date.now();
            var timeDiff = touchEndTime - touchStartTime;
            if (s.allowClick) {
                s.updateClickedSlide(e);
                s.emit('onTap', s, e);
                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(function () {
                        if (!s) return;
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                        }
                        s.emit('onClick', s, e);
                    }, 300);
                }
                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    s.emit('onDoubleTap', s, e);
                }
            }
            lastClickTime = Date.now();
            setTimeout(function () {
                if (s) s.allowClick = true;
            }, 0);
            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;
                return;
            }
            isTouched = isMoved = false;
            var currentPos;
            if (s.params.followFinger) {
                currentPos = s.rtl ? s.translate : -s.translate;
            }
            else {
                currentPos = -currentTranslate;
            }
            if (s.params.freeMode) {
                if (currentPos < -s.minTranslate()) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                else if (currentPos > -s.maxTranslate()) {
                    if (s.slides.length < s.snapGrid.length) {
                        s.slideTo(s.snapGrid.length - 1);
                    }
                    else {
                        s.slideTo(s.slides.length - 1);
                    }
                    return;
                }
                if (s.params.freeModeMomentum) {
                    if (velocities.length > 1) {
                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        s.velocity = distance / time;
                        s.velocity = s.velocity / 2;
                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                            s.velocity = 0;
                        }
                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                            s.velocity = 0;
                        }
                    } else {
                        s.velocity = 0;
                    }
                    velocities.length = 0;
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                    var momentumDistance = s.velocity * momentumDuration;
                    var newPosition = s.translate + momentumDistance;
                    if (s.rtl) newPosition = - newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                    if (newPosition < s.maxTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition + s.maxTranslate() < -bounceAmount) {
                                newPosition = s.maxTranslate() - bounceAmount;
                            }
                            afterBouncePosition = s.maxTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.maxTranslate();
                        }
                    }
                    else if (newPosition > s.minTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition - s.minTranslate() > bounceAmount) {
                                newPosition = s.minTranslate() + bounceAmount;
                            }
                            afterBouncePosition = s.minTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.minTranslate();
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        var j = 0,
                            nextSlide;
                        for (j = 0; j < s.snapGrid.length; j += 1) {
                            if (s.snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
                        }
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];
                        } else {
                            newPosition = s.snapGrid[nextSlide - 1];
                        }
                        if (!s.rtl) newPosition = - newPosition;
                    }
                    if (s.velocity !== 0) {
                        if (s.rtl) {
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                        }
                        else {
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        s.slideReset();
                        return;
                    }
                    if (s.params.freeModeMomentumBounce && doBounce) {
                        s.updateProgress(afterBouncePosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        s.animating = true;
                        s.wrapper.transitionEnd(function () {
                            if (!s || !allowMomentumBounce) return;
                            s.emit('onMomentumBounce', s);
                            s.setWrapperTransition(s.params.speed);
                            s.setWrapperTranslate(afterBouncePosition);
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        });
                    } else if (s.velocity) {
                        s.updateProgress(newPosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        if (!s.animating) {
                            s.animating = true;
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        }
                    } else {
                        s.updateProgress(newPosition);
                    }
                    s.updateActiveIndex();
                }
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                    s.updateProgress();
                    s.updateActiveIndex();
                }
                return;
            }
            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                    }
                }
                else {
                    if (currentPos >= s.slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                    }
                }
            }
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
            if (timeDiff > s.params.longSwipesMs) {
                if (!s.params.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
                }
                if (s.swipeDirection === 'prev') {
                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
                }
            }
            else {
                if (!s.params.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    s.slideTo(stopIndex + s.params.slidesPerGroup);
                }
                if (s.swipeDirection === 'prev') {
                    s.slideTo(stopIndex);
                }
            }
        };
        /*=========================
          Transitions
          ===========================*/
        s._slideTo = function (slideIndex, speed) {
            return s.slideTo(slideIndex, speed, true, true);
        };
        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (typeof slideIndex === 'undefined') slideIndex = 0;
            if (slideIndex < 0) slideIndex = 0;
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
            var translate = - s.snapGrid[s.snapIndex];
            if (s.params.autoplay && s.autoplaying) {
                if (internal || !s.params.autoplayDisableOnInteraction) {
                    s.pauseAutoplay(speed);
                }
                else {
                    s.stopAutoplay();
                }
            }
            s.updateProgress(translate);
            for (var i = 0; i < s.slidesGrid.length; i++) {
                if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                if ((s.activeIndex || 0) !== slideIndex ) return false;
            }
            if (typeof speed === 'undefined') speed = s.params.speed;
            s.previousIndex = s.activeIndex || 0;
            s.activeIndex = slideIndex;
            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
                s.updateClasses();
                if (s.params.effect !== 'slide') {
                    s.setWrapperTranslate(translate);
                }
                return false;
            }
            s.updateClasses();
            s.onTransitionStart(runCallbacks);
            if (speed === 0) {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(0);
                s.onTransitionEnd(runCallbacks);
            }
            else {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(speed);
                if (!s.animating) {
                    s.animating = true;
                    s.wrapper.transitionEnd(function () {
                        if (!s) return;
                        s.onTransitionEnd(runCallbacks);
                    });
                }
            }
            return true;
        };
        s.onTransitionStart = function (runCallbacks) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
            if (s.lazy) s.lazy.onTransitionStart();
            if (runCallbacks) {
                s.emit('onTransitionStart', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeStart', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextStart', s);
                    }
                    else {
                        s.emit('onSlidePrevStart', s);
                    }
                }
            }
        };
        s.onTransitionEnd = function (runCallbacks) {
            s.animating = false;
            s.setWrapperTransition(0);
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.lazy) s.lazy.onTransitionEnd();
            if (runCallbacks) {
                s.emit('onTransitionEnd', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeEnd', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextEnd', s);
                    }
                    else {
                        s.emit('onSlidePrevEnd', s);
                    }
                }
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.setHash();
            }
        };
        s.slideNext = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        };
        s._slideNext = function (speed) {
            return s.slideNext(true, speed, true);
        };
        s.slidePrev = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        };
        s._slidePrev = function (speed) {
            return s.slidePrev(true, speed, true);
        };
        s.slideReset = function (runCallbacks, speed, internal) {
            return s.slideTo(s.activeIndex, speed, runCallbacks);
        };
        /*=========================
          Translate/transition helpers
          ===========================*/
        s.setWrapperTransition = function (duration, byController) {
            s.wrapper.transition(duration);
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTransition(duration);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTransition(duration);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTransition(duration);
            }
            if (s.params.control && s.controller) {
                s.controller.setTransition(duration, byController);
            }
            s.emit('onSetTransition', s, duration);
        };
        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
            var x = 0, y = 0, z = 0;
            if (s.isHorizontal()) {
                x = s.rtl ? -translate : translate;
            }
            else {
                y = translate;
            }
            if (s.params.roundLengths) {
                x = round(x);
                y = round(y);
            }
            if (!s.params.virtualTranslate) {
                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
            }
            s.translate = s.isHorizontal() ? x : y;
            var progress;
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            if (translatesDiff === 0) {
                progress = 0;
            }
            else {
                progress = (translate - s.minTranslate()) / (translatesDiff);
            }
            if (progress !== s.progress) {
                s.updateProgress(translate);
            }
            if (updateActiveIndex) s.updateActiveIndex();
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTranslate(s.translate);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTranslate(s.translate);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTranslate(s.translate);
            }
            if (s.params.control && s.controller) {
                s.controller.setTranslate(s.translate, byController);
            }
            s.emit('onSetTranslate', s, s.translate);
        };
        s.getTranslate = function (el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;
            if (typeof axis === 'undefined') {
                axis = 'x';
            }
            if (s.params.virtualTranslate) {
                return s.rtl ? -s.translate : s.translate;
            }
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function(a){
                        return a.replace(',','.');
                    }).join(', ');
                }
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
            if (axis === 'x') {
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                else
                    curTransform = parseFloat(matrix[5]);
            }
            if (s.rtl && curTransform) curTransform = -curTransform;
            return curTransform || 0;
        };
        s.getWrapperTranslate = function (axis) {
            if (typeof axis === 'undefined') {
                axis = s.isHorizontal() ? 'x' : 'y';
            }
            return s.getTranslate(s.wrapper[0], axis);
        };
        /*=========================
          Observer
          ===========================*/
        s.observers = [];
        function initObserver(target, options) {
            options = options || {};
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    s.onResize(true);
                    s.emit('onObserverUpdate', s, mutation);
                });
            });
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
            s.observers.push(observer);
        }
        s.initObservers = function () {
            if (s.params.observeParents) {
                var containerParents = s.container.parents();
                for (var i = 0; i < containerParents.length; i++) {
                    initObserver(containerParents[i]);
                }
            }
            initObserver(s.container[0], {childList: false});
            initObserver(s.wrapper[0], {attributes: false});
        };
        s.disconnectObservers = function () {
            for (var i = 0; i < s.observers.length; i++) {
                s.observers[i].disconnect();
            }
            s.observers = [];
        };
        /*=========================
          Loop
          ===========================*/
        s.createLoop = function () {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            var slides = s.wrapper.children('.' + s.params.slideClass);
            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
            if (s.loopedSlides > slides.length) {
                s.loopedSlides = slides.length;
            }
            var prependSlides = [], appendSlides = [], i;
            slides.each(function (index, el) {
                var slide = $(this);
                if (index < s.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
        };
        s.destroyLoop = function () {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            s.slides.removeAttr('data-swiper-slide-index');
        };
        s.reLoop = function (updatePosition) {
            var oldIndex = s.activeIndex - s.loopedSlides;
            s.destroyLoop();
            s.createLoop();
            s.updateSlidesSize();
            if (updatePosition) {
                s.slideTo(oldIndex + s.loopedSlides, 0, false);
            }
        };
        s.fixLoop = function () {
            var newIndex;
            if (s.activeIndex < s.loopedSlides) {
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
        };
        /*=========================
          Append/Prepend/Remove Slides
          ===========================*/
        s.appendSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.append(slides[i]);
                }
            }
            else {
                s.wrapper.append(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
        };
        s.prependSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            var newActiveIndex = s.activeIndex + 1;
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.prepend(slides[i]);
                }
                newActiveIndex = s.activeIndex + slides.length;
            }
            else {
                s.wrapper.prepend(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            s.slideTo(newActiveIndex, 0, false);
        };
        s.removeSlide = function (slidesIndexes) {
            if (s.params.loop) {
                s.destroyLoop();
                s.slides = s.wrapper.children('.' + s.params.slideClass);
            }
            var newActiveIndex = s.activeIndex,
                indexToRemove;
            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
                for (var i = 0; i < slidesIndexes.length; i++) {
                    indexToRemove = slidesIndexes[i];
                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex--;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            else {
                indexToRemove = slidesIndexes;
                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex--;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            if (s.params.loop) {
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
            }
            else {
                s.slideTo(newActiveIndex, 0, false);
            }
        };
        s.removeAllSlides = function () {
            var slidesIndexes = [];
            for (var i = 0; i < s.slides.length; i++) {
                slidesIndexes.push(i);
            }
            s.removeSlide(slidesIndexes);
        };
        /*=========================
          Effects
          ===========================*/
        s.effects = {
            fade: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var offset = slide[0].swiperSlideOffset;
                        var tx = -offset;
                        if (!s.params.virtualTranslate) tx = tx - s.translate;
                        var ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = s.params.fade.crossFade ?
                                Math.max(1 - Math.abs(slide[0].progress), 0) :
                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
                        slide
                            .css({
                                opacity: slideOpacity
                            })
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            flip: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var progress = slide[0].progress;
                        if (s.params.flip.limitRotation) {
                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        }
                        var offset = slide[0].swiperSlideOffset;
                        var rotate = -180 * progress,
                            rotateY = rotate,
                            rotateX = 0,
                            tx = -offset,
                            ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (s.rtl) {
                            rotateY = -rotateY;
                        }
                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
                        if (s.params.flip.slideShadows) {
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                        slide
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.eq(s.activeIndex).transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            cube: {
                setTranslate: function () {
                    var wrapperRotate = 0, cubeShadow;
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.wrapper.append(cubeShadow);
                            }
                            cubeShadow.css({height: s.width + 'px'});
                        }
                        else {
                            cubeShadow = s.container.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.container.append(cubeShadow);
                            }
                        }
                    }
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var slideAngle = i * 90;
                        var round = Math.floor(slideAngle / 360);
                        if (s.rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        var tx = 0, ty = 0, tz = 0;
                        if (i % 4 === 0) {
                            tx = - round * 4 * s.size;
                            tz = 0;
                        }
                        else if ((i - 1) % 4 === 0) {
                            tx = 0;
                            tz = - round * 4 * s.size;
                        }
                        else if ((i - 2) % 4 === 0) {
                            tx = s.size + round * 4 * s.size;
                            tz = s.size;
                        }
                        else if ((i - 3) % 4 === 0) {
                            tx = - s.size;
                            tz = 3 * s.size + s.size * 4 * round;
                        }
                        if (s.rtl) {
                            tx = -tx;
                        }
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = i * 90 + progress * 90;
                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                        }
                        slide.transform(transform);
                        if (s.params.cube.slideShadows) {
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    s.wrapper.css({
                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                    });
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                        }
                        else {
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale,
                                scale2 = s.params.cube.shadowScale / multiplier,
                                offset = s.params.cube.shadowOffset;
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                        }
                    }
                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !s.isHorizontal()) {
                        s.container.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            },
            coverflow: {
                setTranslate: function () {
                    var transform = s.translate;
                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
                    var translate = s.params.coverflow.depth;
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideSize = s.slidesSizesGrid[i];
                        var slideOffset = slide[0].swiperSlideOffset;
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                        var translateZ = -translate * Math.abs(offsetMultiplier);
                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
                        slide.transform(slideTransform);
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (s.params.coverflow.slideShadows) {
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    if (s.browser.ie) {
                        var ws = s.wrapper[0].style;
                        ws.perspectiveOrigin = center + 'px 50%';
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }
            }
        };
        /*=========================
          Images Lazy Loading
          ===========================*/
        s.lazy = {
            initialImageLoaded: false,
            loadImageInSlide: function (index, loadInDuplicate) {
                if (typeof index === 'undefined') return;
                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
                if (s.slides.length === 0) return;
                var slide = s.slides.eq(index);
                var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
                if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
                    img = img.add(slide[0]);
                }
                if (img.length === 0) return;
                img.each(function () {
                    var _img = $(this);
                    _img.addClass('swiper-lazy-loading');
                    var background = _img.attr('data-background');
                    var src = _img.attr('data-src'),
                        srcset = _img.attr('data-srcset');
                    s.loadImage(_img[0], (src || background), srcset, false, function () {
                        if (background) {
                            _img.css('background-image', 'url("' + background + '")');
                            _img.removeAttr('data-background');
                        }
                        else {
                            if (srcset) {
                                _img.attr('srcset', srcset);
                                _img.removeAttr('data-srcset');
                            }
                            if (src) {
                                _img.attr('src', src);
                                _img.removeAttr('data-src');
                            }
                        }
                        _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');
                        slide.find('.swiper-lazy-preloader, .preloader').remove();
                        if (s.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                            if (slide.hasClass(s.params.slideDuplicateClass)) {
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);
                            }
                            else {
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
                    });
                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                });
            },
            load: function () {
                var i;
                if (s.params.watchSlidesVisibility) {
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                        s.lazy.loadImageInSlide($(this).index());
                    });
                }
                else {
                    if (s.params.slidesPerView > 1) {
                        for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        s.lazy.loadImageInSlide(s.activeIndex);
                    }
                }
                if (s.params.lazyLoadingInPrevNext) {
                    if (s.params.slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                        var amount = s.params.lazyLoadingInPrevNextAmount;
                        var spv = s.params.slidesPerView;
                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                        for (i = s.activeIndex + s.params.slidesPerView; i < maxIndex; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                        for (i = minIndex; i < s.activeIndex ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                    }
                }
            },
            onTransitionStart: function () {
                if (s.params.lazyLoading) {
                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                        s.lazy.load();
                    }
                }
            },
            onTransitionEnd: function () {
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                    s.lazy.load();
                }
            }
        };
        /*=========================
          Scrollbar
          ===========================*/
        s.scrollbar = {
            isTouched: false,
            setDragPosition: function (e) {
                var sb = s.scrollbar;
                var x = 0, y = 0;
                var translate;
                var pointerPosition = s.isHorizontal() ?
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
                var positionMin = -s.minTranslate() * sb.moveDivider;
                var positionMax = -s.maxTranslate() * sb.moveDivider;
                if (position < positionMin) {
                    position = positionMin;
                }
                else if (position > positionMax) {
                    position = positionMax;
                }
                position = -position / sb.moveDivider;
                s.updateProgress(position);
                s.setWrapperTranslate(position, true);
            },
            dragStart: function (e) {
                var sb = s.scrollbar;
                sb.isTouched = true;
                e.preventDefault();
                e.stopPropagation();
                sb.setDragPosition(e);
                clearTimeout(sb.dragTimeout);
                sb.track.transition(0);
                if (s.params.scrollbarHide) {
                    sb.track.css('opacity', 1);
                }
                s.wrapper.transition(100);
                sb.drag.transition(100);
                s.emit('onScrollbarDragStart', s);
            },
            dragMove: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                sb.setDragPosition(e);
                s.wrapper.transition(0);
                sb.track.transition(0);
                sb.drag.transition(0);
                s.emit('onScrollbarDragMove', s);
            },
            dragEnd: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                sb.isTouched = false;
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.dragTimeout);
                    sb.dragTimeout = setTimeout(function () {
                        sb.track.css('opacity', 0);
                        sb.track.transition(400);
                    }, 1000);
                }
                s.emit('onScrollbarDragEnd', s);
                if (s.params.scrollbarSnapOnRelease) {
                    s.slideReset();
                }
            },
            enableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).on(s.touchEvents.start, sb.dragStart);
                $(target).on(s.touchEvents.move, sb.dragMove);
                $(target).on(s.touchEvents.end, sb.dragEnd);
            },
            disableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).off(s.touchEvents.start, sb.dragStart);
                $(target).off(s.touchEvents.move, sb.dragMove);
                $(target).off(s.touchEvents.end, sb.dragEnd);
            },
            set: function () {
                if (!s.params.scrollbar) return;
                var sb = s.scrollbar;
                sb.track = $(s.params.scrollbar);
                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                    sb.track = s.container.find(s.params.scrollbar);
                }
                sb.drag = sb.track.find('.swiper-scrollbar-drag');
                if (sb.drag.length === 0) {
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                    sb.track.append(sb.drag);
                }
                sb.drag[0].style.width = '';
                sb.drag[0].style.height = '';
                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
                sb.divider = s.size / s.virtualSize;
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                sb.dragSize = sb.trackSize * sb.divider;
                if (s.isHorizontal()) {
                    sb.drag[0].style.width = sb.dragSize + 'px';
                }
                else {
                    sb.drag[0].style.height = sb.dragSize + 'px';
                }
                if (sb.divider >= 1) {
                    sb.track[0].style.display = 'none';
                }
                else {
                    sb.track[0].style.display = '';
                }
                if (s.params.scrollbarHide) {
                    sb.track[0].style.opacity = 0;
                }
            },
            setTranslate: function () {
                if (!s.params.scrollbar) return;
                var diff;
                var sb = s.scrollbar;
                var translate = s.translate || 0;
                var newPos;
                var newSize = sb.dragSize;
                newPos = (sb.trackSize - sb.dragSize) * s.progress;
                if (s.rtl && s.isHorizontal()) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = sb.dragSize - newPos;
                        newPos = 0;
                    }
                    else if (-newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize + newPos;
                    }
                }
                else {
                    if (newPos < 0) {
                        newSize = sb.dragSize + newPos;
                        newPos = 0;
                    }
                    else if (newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize - newPos;
                    }
                }
                if (s.isHorizontal()) {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                    }
                    else {
                        sb.drag.transform('translateX(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.width = newSize + 'px';
                }
                else {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                    }
                    else {
                        sb.drag.transform('translateY(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.height = newSize + 'px';
                }
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.timeout);
                    sb.track[0].style.opacity = 1;
                    sb.timeout = setTimeout(function () {
                        sb.track[0].style.opacity = 0;
                        sb.track.transition(400);
                    }, 1000);
                }
            },
            setTransition: function (duration) {
                if (!s.params.scrollbar) return;
                s.scrollbar.drag.transition(duration);
            }
        };
        /*=========================
          Controller
          ===========================*/
        s.controller = {
            LinearSpline: function (x, y) {
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                var i1, i3;
                var l = this.x.length;
                this.interpolate = function (x2) {
                    if (!x2) return 0;
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };
                var binarySearch = (function() {
                    var maxIndex, minIndex, guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1)
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        return maxIndex;
                    };
                })();
            },
            getInterpolateFunction: function(c){
                if(!s.controller.spline) s.controller.spline = s.params.loop ?
                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
            },
            setTranslate: function (translate, byController) {
               var controlled = s.params.control;
               var multiplier, controlledTranslate;
               function setControlledTranslate(c) {
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                    if (s.params.controlBy === 'slide') {
                        s.controller.getInterpolateFunction(c);
                        controlledTranslate = -s.controller.spline.interpolate(-translate);
                    }
                    if(!controlledTranslate || s.params.controlBy === 'container'){
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                    }
                    if (s.params.controlInverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }
                    c.updateProgress(controlledTranslate);
                    c.setWrapperTranslate(controlledTranslate, false, s);
                    c.updateActiveIndex();
               }
               if (s.isArray(controlled)) {
                   for (var i = 0; i < controlled.length; i++) {
                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                           setControlledTranslate(controlled[i]);
                       }
                   }
               }
               else if (controlled instanceof Swiper && byController !== controlled) {
                   setControlledTranslate(controlled);
               }
            },
            setTransition: function (duration, byController) {
                var controlled = s.params.control;
                var i;
                function setControlledTransition(c) {
                    c.setWrapperTransition(duration, s);
                    if (duration !== 0) {
                        c.onTransitionStart();
                        c.wrapper.transitionEnd(function(){
                            if (!controlled) return;
                            if (c.params.loop && s.params.controlBy === 'slide') {
                                c.fixLoop();
                            }
                            c.onTransitionEnd();
                        });
                    }
                }
                if (s.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                }
                else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }
        };
        /*=========================
          Hash Navigation
          ===========================*/
        s.hashnav = {
            init: function () {
                if (!s.params.hashnav) return;
                s.hashnav.initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (!hash) return;
                var speed = 0;
                for (var i = 0, length = s.slides.length; i < length; i++) {
                    var slide = s.slides.eq(i);
                    var slideHash = slide.attr('data-hash');
                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                        var index = slide.index();
                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                    }
                }
            },
            setHash: function () {
                if (!s.hashnav.initialized || !s.params.hashnav) return;
                document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
            }
        };
        /*=========================
          Keyboard Control
          ===========================*/
        function handleKeyboard(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var kc = e.keyCode || e.charCode;
            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
                    return;
                }
                var windowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = s.container.offset();
                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + s.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + s.height],
                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
                ];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                    ) {
                        inView = true;
                    }
                }
                if (!inView) return;
            }
            if (s.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
            }
            else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc === 40) s.slideNext();
                if (kc === 38) s.slidePrev();
            }
        }
        s.disableKeyboardControl = function () {
            s.params.keyboardControl = false;
            $(document).off('keydown', handleKeyboard);
        };
        s.enableKeyboardControl = function () {
            s.params.keyboardControl = true;
            $(document).on('keydown', handleKeyboard);
        };
        /*=========================
          Mousewheel Control
          ===========================*/
        s.mousewheel = {
            event: false,
            lastScrollTime: (new window.Date()).getTime()
        };
        if (s.params.mousewheelControl) {
            try {
                new window.WheelEvent('wheel');
                s.mousewheel.event = 'wheel';
            } catch (e) {
                if (window.WheelEvent || (s.container[0] && 'wheel' in s.container[0])) {
                    s.mousewheel.event = 'wheel';
                }
            }
            if (!s.mousewheel.event && window.WheelEvent) {
            }
            if (!s.mousewheel.event && document.onmousewheel !== undefined) {
                s.mousewheel.event = 'mousewheel';
            }
            if (!s.mousewheel.event) {
                s.mousewheel.event = 'DOMMouseScroll';
            }
        }
        function handleMousewheel(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var we = s.mousewheel.event;
            var delta = 0;
            var rtlFactor = s.rtl ? -1 : 1;
            if (we === 'mousewheel') {
                if (s.params.mousewheelForceToAxis) {
                    if (s.isHorizontal()) {
                        if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX * rtlFactor;
                        else return;
                    }
                    else {
                        if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
                        else return;
                    }
                }
                else {
                    delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? - e.wheelDeltaX * rtlFactor : - e.wheelDeltaY;
                }
            }
            else if (we === 'DOMMouseScroll') delta = -e.detail;
            else if (we === 'wheel') {
                if (s.params.mousewheelForceToAxis) {
                    if (s.isHorizontal()) {
                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX * rtlFactor;
                        else return;
                    }
                    else {
                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
                        else return;
                    }
                }
                else {
                    delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX * rtlFactor : - e.deltaY;
                }
            }
            if (delta === 0) return;
            if (s.params.mousewheelInvert) delta = -delta;
            if (!s.params.freeMode) {
                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                    else {
                        if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                }
                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
            }
            else {
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
                var wasBeginning = s.isBeginning,
                    wasEnd = s.isEnd;
                if (position >= s.minTranslate()) position = s.minTranslate();
                if (position <= s.maxTranslate()) position = s.maxTranslate();
                s.setWrapperTransition(0);
                s.setWrapperTranslate(position);
                s.updateProgress();
                s.updateActiveIndex();
                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                    s.updateClasses();
                }
                if (s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout);
                    s.mousewheel.timeout = setTimeout(function () {
                        s.slideReset();
                    }, 300);
                }
                else {
                    if (s.params.lazyLoading && s.lazy) {
                        s.lazy.load();
                    }
                }
                if (position === 0 || position === s.maxTranslate()) return;
            }
            if (s.params.autoplay) s.stopAutoplay();
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
        s.disableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            s.container.off(s.mousewheel.event, handleMousewheel);
            return true;
        };
        s.enableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            s.container.on(s.mousewheel.event, handleMousewheel);
            return true;
        };
        /*=========================
          Parallax
          ===========================*/
        function setParallaxTransform(el, progress) {
            el = $(el);
            var p, pX, pY;
            var rtlFactor = s.rtl ? -1 : 1;
            p = el.attr('data-swiper-parallax') || '0';
            pX = el.attr('data-swiper-parallax-x');
            pY = el.attr('data-swiper-parallax-y');
            if (pX || pY) {
                pX = pX || '0';
                pY = pY || '0';
            }
            else {
                if (s.isHorizontal()) {
                    pX = p;
                    pY = '0';
                }
                else {
                    pY = p;
                    pX = '0';
                }
            }
            if ((pX).indexOf('%') >= 0) {
                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
            }
            else {
                pX = pX * progress * rtlFactor + 'px' ;
            }
            if ((pY).indexOf('%') >= 0) {
                pY = parseInt(pY, 10) * progress + '%';
            }
            else {
                pY = pY * progress + 'px' ;
            }
            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }
        s.parallax = {
            setTranslate: function () {
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    setParallaxTransform(this, s.progress);
                });
                s.slides.each(function () {
                    var slide = $(this);
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                        setParallaxTransform(this, progress);
                    });
                });
            },
            setTransition: function (duration) {
                if (typeof duration === 'undefined') duration = s.params.speed;
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    var el = $(this);
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    el.transition(parallaxDuration);
                });
            }
        };
        /*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
        s._plugins = [];
        for (var plugin in s.plugins) {
            var p = s.plugins[plugin](s, s.params[plugin]);
            if (p) s._plugins.push(p);
        }
        s.callPlugins = function (eventName) {
            for (var i = 0; i < s._plugins.length; i++) {
                if (eventName in s._plugins[i]) {
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        };
        /*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
        function normalizeEventName (eventName) {
            if (eventName.indexOf('on') !== 0) {
                if (eventName[0] !== eventName[0].toUpperCase()) {
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                }
                else {
                    eventName = 'on' + eventName;
                }
            }
            return eventName;
        }
        s.emitterEventListeners = {
        };
        s.emit = function (eventName) {
            if (s.params[eventName]) {
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
            var i;
            if (s.emitterEventListeners[eventName]) {
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };
        s.on = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
            s.emitterEventListeners[eventName].push(handler);
            return s;
        };
        s.off = function (eventName, handler) {
            var i;
            eventName = normalizeEventName(eventName);
            if (typeof handler === 'undefined') {
                s.emitterEventListeners[eventName] = [];
                return s;
            }
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
            }
            return s;
        };
        s.once = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            var _handler = function () {
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                s.off(eventName, _handler);
            };
            s.on(eventName, _handler);
            return s;
        };
        s.a11y = {
            makeFocusable: function ($el) {
                $el.attr('tabIndex', '0');
                return $el;
            },
            addRole: function ($el, role) {
                $el.attr('role', role);
                return $el;
            },
            addLabel: function ($el, label) {
                $el.attr('aria-label', label);
                return $el;
            },
            disable: function ($el) {
                $el.attr('aria-disabled', true);
                return $el;
            },
            enable: function ($el) {
                $el.attr('aria-disabled', false);
                return $el;
            },
            onEnterKey: function (event) {
                if (event.keyCode !== 13) return;
                if ($(event.target).is(s.params.nextButton)) {
                    s.onClickNext(event);
                    if (s.isEnd) {
                        s.a11y.notify(s.params.lastSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.nextSlideMessage);
                    }
                }
                else if ($(event.target).is(s.params.prevButton)) {
                    s.onClickPrev(event);
                    if (s.isBeginning) {
                        s.a11y.notify(s.params.firstSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.prevSlideMessage);
                    }
                }
                if ($(event.target).is('.' + s.params.bulletClass)) {
                    $(event.target)[0].click();
                }
            },
            liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
            notify: function (message) {
                var notification = s.a11y.liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            },
            init: function () {
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    s.a11y.makeFocusable(s.nextButton);
                    s.a11y.addRole(s.nextButton, 'button');
                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
                }
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    s.a11y.makeFocusable(s.prevButton);
                    s.a11y.addRole(s.prevButton, 'button');
                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
                }
                $(s.container).append(s.a11y.liveRegion);
            },
            initPagination: function () {
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                    s.bullets.each(function () {
                        var bullet = $(this);
                        s.a11y.makeFocusable(bullet);
                        s.a11y.addRole(bullet, 'button');
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });
                }
            },
            destroy: function () {
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
            }
        };
        /*=========================
          Init/Destroy
          ===========================*/
        s.init = function () {
            if (s.params.loop) s.createLoop();
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.enableDraggable();
                }
            }
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                if (!s.params.loop) s.updateProgress();
                s.effects[s.params.effect].setTranslate();
            }
            if (s.params.loop) {
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
            }
            else {
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                if (s.params.initialSlide === 0) {
                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                    if (s.lazy && s.params.lazyLoading) {
                        s.lazy.load();
                        s.lazy.initialImageLoaded = true;
                    }
                }
            }
            s.attachEvents();
            if (s.params.observer && s.support.observer) {
                s.initObservers();
            }
            if (s.params.preloadImages && !s.params.lazyLoading) {
                s.preloadImages();
            }
            if (s.params.autoplay) {
                s.startAutoplay();
            }
            if (s.params.keyboardControl) {
                if (s.enableKeyboardControl) s.enableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.enableMousewheelControl) s.enableMousewheelControl();
            }
            if (s.params.hashnav) {
                if (s.hashnav) s.hashnav.init();
            }
            if (s.params.a11y && s.a11y) s.a11y.init();
            s.emit('onInit', s);
        };
        s.cleanupStyles = function () {
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
            s.wrapper.removeAttr('style');
            if (s.slides && s.slides.length) {
                s.slides
                    .removeClass([
                      s.params.slideVisibleClass,
                      s.params.slideActiveClass,
                      s.params.slideNextClass,
                      s.params.slidePrevClass
                    ].join(' '))
                    .removeAttr('style')
                    .removeAttr('data-swiper-column')
                    .removeAttr('data-swiper-row');
            }
            if (s.paginationContainer && s.paginationContainer.length) {
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
            }
            if (s.bullets && s.bullets.length) {
                s.bullets.removeClass(s.params.bulletActiveClass);
            }
            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.scrollbar && s.scrollbar) {
                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
            }
        };
        s.destroy = function (deleteInstance, cleanupStyles) {
            s.detachEvents();
            s.stopAutoplay();
            if (s.params.scrollbar && s.scrollbar) {
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.disableDraggable();
                }
            }
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (cleanupStyles) {
                s.cleanupStyles();
            }
            s.disconnectObservers();
            if (s.params.keyboardControl) {
                if (s.disableKeyboardControl) s.disableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.disableMousewheelControl) s.disableMousewheelControl();
            }
            if (s.params.a11y && s.a11y) s.a11y.destroy();
            s.emit('onDestroy');
            if (deleteInstance !== false) s = null;
        };
        s.init();
        return s;
    };
    /*==================================================
        Prototype
    ====================================================*/
    Swiper.prototype = {
        isSafari: (function () {
            var ua = navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function (arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        /*==================================================
        Browser
        ====================================================*/
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
        },
        /*==================================================
        Devices
        ====================================================*/
        device: (function () {
            var ua = navigator.userAgent;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: ipad || iphone || ipod,
                android: android
            };
        })(),
        /*==================================================
        Feature Detection
        ====================================================*/
        support: {
            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
            })(),
            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
                var div = document.createElement('div').style;
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            })(),
            flexbox: (function () {
                var div = document.createElement('div').style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i] in div) return true;
                }
            })(),
            observer: (function () {
                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
            })()
        },
        /*==================================================
        Plugins
        ====================================================*/
        plugins: {}
    };
    /*===========================
     Get Dom libraries
     ===========================*/
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
    for (var i = 0; i < swiperDomPlugins.length; i++) {
    	if (window[swiperDomPlugins[i]]) {
    		addLibraryPlugin(window[swiperDomPlugins[i]]);
    	}
    }
    var domLib;
    if (typeof Dom7 === 'undefined') {
    	domLib = window.Dom7 || window.Zepto || window.jQuery;
    }
    else {
    	domLib = Dom7;
    }
    /*===========================
    Add .swiper plugin from Dom libraries
    ===========================*/
    function addLibraryPlugin(lib) {
        lib.fn.swiper = function (params) {
            var firstInstance;
            lib(this).each(function () {
                var s = new Swiper(this, params);
                if (!firstInstance) firstInstance = s;
            });
            return firstInstance;
        };
    }
    if (domLib) {
        if (!('transitionEnd' in domLib.fn)) {
            domLib.fn.transitionEnd = function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            };
        }
        if (!('transform' in domLib.fn)) {
            domLib.fn.transform = function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            };
        }
        if (!('transition' in domLib.fn)) {
            domLib.fn.transition = function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            };
        }
    }
    window.Swiper = Swiper;
})();
/*===========================
Swiper AMD Export
===========================*/
if (typeof(module) !== 'undefined')
{
    module.exports = window.Swiper;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Swiper;
    });
}
;
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/
(function($){$.fn.fitText=function(kompressor,options){var compressor=kompressor||1,settings=$.extend({'minFontSize':Number.NEGATIVE_INFINITY,'maxFontSize':$(this).css('font-size')},options);return this.each(function(){var $this=$(this);var resizer=function(){$this.css('font-size',Math.max(Math.min($this.width()/(compressor*10),parseFloat(settings.maxFontSize)),parseFloat(settings.minFontSize)));};resizer();$(window).on('resize.fittext orientationchange.fittext',resizer);});};})(jQuery);
!function(a){a.fn.hoverIntent=function(e,t,n){var o,r,v,i,u={interval:100,sensitivity:6,timeout:0};u="object"==typeof e?a.extend(u,e):a.isFunction(t)?a.extend(u,{over:e,out:t,selector:n}):a.extend(u,{over:e,out:e,selector:t});function s(e){o=e.pageX,r=e.pageY}function h(e){var t=a.extend({},e),n=this;n.hoverIntent_t&&(n.hoverIntent_t=clearTimeout(n.hoverIntent_t)),"mouseenter"===e.type?(v=t.pageX,i=t.pageY,a(n).on("mousemove.hoverIntent",s),n.hoverIntent_s||(n.hoverIntent_t=setTimeout(function(){I(t,n)},u.interval))):(a(n).off("mousemove.hoverIntent",s),n.hoverIntent_s&&(n.hoverIntent_t=setTimeout(function(){!function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=!1,u.out.apply(t,[e])}(t,n)},u.timeout)))}var I=function(e,t){if(t.hoverIntent_t=clearTimeout(t.hoverIntent_t),Math.sqrt((v-o)*(v-o)+(i-r)*(i-r))<u.sensitivity)return a(t).off("mousemove.hoverIntent",s),t.hoverIntent_s=!0,u.over.apply(t,[e]);v=o,i=r,t.hoverIntent_t=setTimeout(function(){I(e,t)},u.interval)};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},u.selector)}}(jQuery);
!function(n){n.fn.UItoTop=function(o){var e={text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1200,easingType:"linear"},t=n.extend(e,o),i="#"+t.containerID,a="#"+t.containerHoverID;n("body").append('<a href="#" id="'+t.containerID+'"><span>'+t.text+"</span></a>"),n(i).hide().on("click.UItoTop",function(){return n("html, body").animate({scrollTop:0},t.scrollSpeed,t.easingType),n("#"+t.containerHoverID,this).stop().animate({opacity:0},t.inDelay,t.easingType),!1}).hover(function(){n(a,this).stop().animate({opacity:1},600,"linear")},function(){n(a,this).stop().animate({opacity:0},700,"linear")}),n(window).scroll(function(){var o=n(window).scrollTop();"undefined"==typeof document.body.style.maxHeight&&n(i).css({position:"absolute",top:o+n(window).height()-50}),o>t.min?n(i).fadeIn(t.inDelay):n(i).fadeOut(t.Outdelay)})}}(jQuery);!function(t){t.fn.stickUp=function(e){function o(){a=parseInt(n.offset().top),d=parseInt(n.css("margin-top")),u=parseInt(n.outerHeight(!0)),c.pseudo&&(t('<div class="pseudoStickyBlock"></div>').insertAfter(n),i=t(".pseudoStickyBlock"),i.css({position:"relative",display:"block"})),c.active&&s(),n.addClass("stuckMenu")}function s(){p.on("scroll.stickUp",function(){r=t(this).scrollTop(),S=r>k?"down":"up",k=r,0!=h.length?correctionValue=h.outerHeight(!0):correctionValue=0,f=parseInt(l.scrollTop()),a-correctionValue<f?(n.addClass("isStuck"),v.addClass("isStuck"),c.pseudo?(n.css({position:"fixed",top:correctionValue}),i.css({height:u})):n.css({position:"fixed",top:correctionValue})):(n.removeClass("isStuck"),v.removeClass("isStuck"),c.pseudo?(n.css({position:"relative",top:0}),i.css({height:0})):n.css({position:"absolute",top:0}))}).trigger("scroll.stickUp"),p.on("resize",function(){n.hasClass("isStuck")?a!=parseInt(i.offset().top)&&(a=parseInt(i.offset().top)):a!=parseInt(n.offset().top)&&(a=parseInt(n.offset().top))})}var c={correctionSelector:".correctionSelector",listenSelector:".listenSelector",active:!1,pseudo:!0};t.extend(c,e);var i,r,n=t(this),l=t(window),p=t(document),a=0,u=0,d=0,f=0,k=0,S="",h=t(c.correctionSelector),v=t(c.listenSelector);0!=n.length&&o()}}(jQuery);!function(e,t){function n(t){var n,i,r=this;n={id:"",href:"",title:"&middot;&middot;&middot;",children:{},templates:{},container:null},i=e.extend(n,t),r.id=i.id,r.href=i.href,r.title=i.title,r.children=i.children,r.templates=i.templates,r.$container=i.container,r.node=null,r.attachedNode=null,r.options={},r.visible=!0}var i={menu:'<li class="%1$s"><a href="%2$s">%3$s</a>%4$s</li>',child_wrap:"<ul>%s</ul>",child:'<li class="%1$s" id="%5$s"><a href="%2$s">%3$s</a><ul class="sub-menu">%4$s</ul></li>'};n.prototype.set=function(e){if(!1==e instanceof n)throw new Error("Invalid argument type");return this.children[e.id]=e,this},n.prototype.push=function(e){return this.set(e)},n.prototype.get=function(e){var t=null;return this.map(e,function(e,n){return t=n,n}),t},n.prototype.map=function(e,t,n){var i={id:e},r=this;return"string"!=typeof e&&(i=e),n=n||this.children,0>=n.length?i:(Object.keys(n).forEach(function(e){child=n[e],i.id===child.id?n[i.id]=t(child):child.children&&0<Object.keys(child.children).length&&(i=r.map(i,t,child.children))}),i)},n.prototype.has=function(e){return t!==this.children[e]},n.prototype.isVisible=function(){return this.visible},n.prototype.forEach=function(e){return this.children.forEach(e)},n.prototype.countVisibleAttachedNodes=function(){var t=this,n=-1;return Object.keys(t.children).forEach(function(i){e(t.children[i].getAttachedNode()).attr("hidden")||n++}),n},n.prototype.countVisibleNodes=function(){var t,n=this,i=0;return Object.keys(n.children).forEach(function(r){t=n.children[r],e(t.getNode()).attr("hidden")||i++}),i},n.prototype.countVisible=function(){var e=this,t=0;return Object.keys(e.children).forEach(function(n){e.children[n].isVisible()&&t++}),t},n.prototype.getNode=function(){return this.node},n.prototype.getAttachedNode=function(){return this.attachedNode},n.prototype.setNode=function(e){this.node=e},n.prototype.attachNode=function(e){this.attachedNode=e},n.prototype.setOptions=function(e){return this.options=e,this},n.prototype.getOptions=function(){return this.options},n.prototype.render=function(){function t(e,n,i){var r=e.replace(new RegExp("\\%"+n+"\\$s","g"),i);return pipes={replace:function(e,n){return t(r,e,n),pipes},get:function(){return r}},pipes}function n(e,i,r){var o="",a=Object.keys(i.children);return r=r||!1,a.forEach(function(e){o+=n("super-guacamole__menu__child",i.children[e])}),t(r?d:c,1,e+" menu-item"+(0<a.length?" menu-item-has-children":"")).replace(2,i.href).replace(3,i.title).replace(4,0<a.length?o:"").replace(5,i.id).get().replace('<ul class="sub-menu"></ul>',"")}function i(e){var t="";return Object.keys(e).forEach(function(i){t+=n("super-guacamole__menu",e[i])}),t}var r,o=this,c=o.templates.menu,d=o.templates.child,a=o.$container;o.options.$menu;return 0<a.length&&(a.append(i([o])),a.find(".super-guacamole__menu__child").each(function(){$current_el=e(this),id=e(this).attr("id"),r=a.find("#"+id.replace("sg-","")),0===r.length&&(r=a.find("."+id.replace("sg-",""))),0<r.length&&o.map(id,function(e){return e.attachNode(r),e.setNode($current_el),e})})),this},n.extract=function(t){function i(e){var t="",n=null,i=/menu\-item\-[0-9]+/i;return e.attr("class").split(" ").forEach(function(e){n=i.exec(e),null!==n&&(t=n[0])}),t}var r,o,c,d,a={};return t.each(function(t,u){r=e(u),o=r.find("a:first"),menuId=r.attr("id"),"undefined"==typeof menuId&&(menuId=i(r)),c=new n({id:"sg-"+menuId,href:o.attr("href"),title:o.get(0).childNodes[0].data}),c.attachNode(r),-1<r.children(".sub-menu").length&&(subMenu=n.extract(r.children(".sub-menu").children(".menu-item")),Object.keys(subMenu).forEach(function(e){d=subMenu[e],c.set(d)})),a[c.id]=c}),a},n.prototype.attachedNodesFit=function(){var t,n,i=this,r=0,o=0,c=e(e(".header-container > .container").length>0?".header-container > .container":".header-container > div"),d=i.$container.outerWidth(!0)-i.$container.find(".super-guacamole__menu").outerWidth(!0)-(parseInt(c.css("padding-left"),10)+parseInt(c.css("padding-right"),10))/2;return Object.keys(i.children).forEach(function(r){n=i.children[r],$attachedNode=e(n.getAttachedNode()),t=e(n.getNode()),$attachedNode.removeAttr("hidden"),t.attr("hidden",!0)}),Object.keys(i.children).forEach(function(c){n=n=i.children[c],$attachedNode=e(n.getAttachedNode()),t=e(n.getNode()),o=$attachedNode.outerWidth(!0),o>0&&$attachedNode.data("width",o),r+=$attachedNode.data("width"),r>d&&($attachedNode.attr("hidden",!0),t.removeAttr("hidden"))}),!0},n.prototype.menuFit=function(t){var n,i=this,r={removeAttr:function(e,t){return e.removeAttr(t)},attr:function(e,t){return e.attr(t,!0)}},o="removeAttr",c=i.options.threshold||768;return t=t||!1,0===i.countVisibleNodes()&&(o="attr"),e(window).width()<=c-1&&(o="attr",Object.keys(i.children).forEach(function(t){n=i.children[t],$attachedNode=e(n.getAttachedNode()),$node=e(n.getNode()),$attachedNode.removeAttr("hidden"),$node.attr("hidden",!0)})),t||r[o](i.$container.find(".super-guacamole__menu"),"hidden"),"removeAttr"===o},n.prototype.watch=function(t){function n(){r.attachedNodesFit(),r.menuFit()}function i(e){var t;return function(i){function r(){n(),timeout=null}t&&clearTimeout(t),t=setTimeout(r,e)}}var r=this;return(t=t||!1)?(n(),r):(e(window).on("resize",i(10)),e(window).on("orientationchange",i(10)),r)},e.fn.superGuacamole=function(t){var r,o,c,d,a=e(this),u=a.find("#main-menu");r={threshold:544,minChildren:3,childrenFilter:"li",menuTitle:"&middot;&middot;&middot;",menuUrl:"#",templates:i},o=e.extend(r,t),c=u.children(o.childrenFilter+":not(.super-guacamole__menu):not(.super-guacamole__menu__child)"),d=new n({title:o.menuTitle,href:o.menuUrl,templates:o.templates,children:n.extract(c),container:u}),o.$menu=u,d.setOptions(o).render().watch(!0).watch()}}(jQuery);(function($){"use strict";CherryJsCore.utilites.namespace('theme_script');CherryJsCore.theme_script={init:function(){if(CherryJsCore.status.is_ready){this.document_ready_render();}else{CherryJsCore.variable.$document.on('ready',this.document_ready_render.bind(this));}
if(CherryJsCore.status.on_load){this.window_load_render();}else{CherryJsCore.variable.$window.on('load',this.window_load_render.bind(this));}},document_ready_render:function(){this.smart_slider_init(this);this.swiper_carousel_init(this);this.post_formats_custom_init(this);this.navbar_init(this);this.subscribe_init(this);this.main_menu(this,$('.main-navigation'));this.mega_menu(this);this.to_top_init(this);this.playlist_slider_widget_init(this);this.news_smart_box_init(this);this.header_search(this);this.mobile_menu(this);this.vertical_menu_init(this);this.add_project_inline_style(this);this.anchor_navigation(this);this.anchor_scrolling_navigation(this);this.ofi_init(this);},window_load_render:function(){this.page_preloader_init(this);},anchor_navigation:function(self){$('.page-template-landing div:not(.woocommerce-tabs) a[href*=#]:not([href=#])').on('click',function(){if(location.pathname.replace(/^\//,'')===this.pathname.replace(/^\//,'')||location.hostname===this.hostname){var target=$(this.hash),targetLink=this.hash,menuHeight=$('#main-menu').outerHeight(true);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:target.offset().top-menuHeight},1000);return false;}}});},anchor_scrolling_navigation:function(self){var $document=$(document),top=null,changed=false,currentHash=null,sections=null,timeout=null,interval=null,menuHeight=$('#main-menu').outerHeight(true),$sections=$('.tm_pb_anchor');sections=getSections();$(window).on('scroll.cherry_anchor_navigation',function(){var newTop=$document.scrollTop();changed=newTop!=top;if(changed){top=newTop;}});$(window).on('resize.cherry_anchor_navigation',function(){sections=getSections();});function getSections(){sections=$.map($sections,function(event){var $event=$(event),position=$event.position();return{top:position.top-menuHeight,bottom:position.top+$event.outerHeight(true)-menuHeight,hash:$event.attr('id')};});return sections;}
function iteration(){var sectionsLength=sections.length,section,scrollTop;while(section=sections[--sectionsLength]){if(section.top>=top||section.bottom<=top){continue;}
if(currentHash==section.hash){break;}
currentHash=section.hash;history.pushState(null,null,'#'+section.hash);}}
timeout=setTimeout(function(){interval=setInterval(iteration,250);},250);},smart_slider_init:function(self){$('.itideas-smartslider').each(function(){var slider=$(this),sliderId=slider.data('id'),sliderWidth=slider.data('width'),sliderHeight=slider.data('height'),sliderOrientation=slider.data('orientation'),slideDistance=slider.data('slide-distance'),slideDuration=slider.data('slide-duration'),sliderFade=slider.data('slide-fade'),sliderNavigation=slider.data('navigation'),sliderFadeNavigation=slider.data('fade-navigation'),sliderPagination=slider.data('pagination'),sliderAutoplay=slider.data('autoplay'),sliderFullScreen=slider.data('fullscreen'),sliderShuffle=slider.data('shuffle'),sliderLoop=slider.data('loop'),sliderThumbnailsArrows=slider.data('thumbnails-arrows'),sliderThumbnailsPosition=slider.data('thumbnails-position'),sliderThumbnailsWidth=slider.data('thumbnails-width'),sliderThumbnailsHeight=slider.data('thumbnails-height');if($('.smart-slider__items','#'+sliderId).length>0){$('#'+sliderId).sliderPro({width:sliderWidth,height:sliderHeight,orientation:sliderOrientation,slideDistance:slideDistance,slideAnimationDuration:slideDuration,fade:sliderFade,arrows:sliderNavigation,fadeArrows:sliderFadeNavigation,buttons:sliderPagination,autoplay:sliderAutoplay,fullScreen:sliderFullScreen,shuffle:sliderShuffle,loop:sliderLoop,waitForLayers:false,thumbnailArrows:sliderThumbnailsArrows,thumbnailsPosition:sliderThumbnailsPosition,thumbnailWidth:sliderThumbnailsWidth,thumbnailHeight:sliderThumbnailsHeight,init:function(){$(this).resize();},sliderResize:function(event){var thisSlider=$('#'+sliderId),slides=$('.sp-slide',thisSlider);slides.each(function(){if($('.sp-title a',this).width()>$(this).width()){$(this).addClass('text-wrapped');}else{$(this).removeClass('text-wrapped');}});},breakpoints:{991:{height:parseFloat(sliderHeight)*0.75},767:{height:parseFloat(sliderHeight)*0.5,thumbnailsPosition:('top'===this.thumbnailsPosition)?'top':'bottom',thumbnailHeight:parseFloat(sliderThumbnailsHeight)*0.75,thumbnailWidth:parseFloat(sliderThumbnailsWidth)*0.75}}});}});},swiper_carousel_init:function(self){jQuery('.itideas-carousel').each(function(){var swiper=null,uniqId=jQuery(this).data('uniq-id'),slidesPerView=parseFloat(jQuery(this).data('slides-per-view')),slidesPerGroup=parseFloat(jQuery(this).data('slides-per-group')),slidesPerColumn=parseFloat(jQuery(this).data('slides-per-column')),spaceBetweenSlides=parseFloat(jQuery(this).data('space-between-slides')),durationSpeed=parseFloat(jQuery(this).data('duration-speed')),swiperLoop=jQuery(this).data('swiper-loop'),freeMode=jQuery(this).data('free-mode'),grabCursor=jQuery(this).data('grab-cursor'),mouseWheel=jQuery(this).data('mouse-wheel'),breakpointsSettings={1199:{slidesPerView:Math.floor(slidesPerView*0.75),spaceBetween:Math.floor(spaceBetweenSlides*0.75)},991:{slidesPerView:Math.floor(slidesPerView*0.5),spaceBetween:Math.floor(spaceBetweenSlides*0.5)},767:{slidesPerView:(0!==Math.floor(slidesPerView*0.25))?Math.floor(slidesPerView*0.25):1}};if(1==slidesPerView){breakpointsSettings={}}
var swiper=new Swiper('#'+uniqId,{slidesPerView:slidesPerView,slidesPerGroup:slidesPerGroup,slidesPerColumn:slidesPerColumn,spaceBetween:spaceBetweenSlides,speed:durationSpeed,loop:swiperLoop,freeMode:freeMode,grabCursor:grabCursor,mousewheelControl:mouseWheel,paginationClickable:true,nextButton:'#'+uniqId+'-next',prevButton:'#'+uniqId+'-prev',pagination:'#'+uniqId+'-pagination',onInit:function(){$('#'+uniqId+'-next').css({'display':'block'});$('#'+uniqId+'-prev').css({'display':'block'});},breakpoints:breakpointsSettings});});},post_formats_custom_init:function(self){CherryJsCore.variable.$document.on('cherry-post-formats-custom-init',function(event){if('slider'!==event.object){return;}
var uniqId='#'+event.item.attr('id'),swiper=new Swiper(uniqId,{pagination:uniqId+' .swiper-pagination',paginationClickable:true,nextButton:uniqId+' .swiper-button-next',prevButton:uniqId+' .swiper-button-prev',spaceBetween:0,onInit:function(){$(uniqId+' .swiper-button-next').css({'display':'block'});$(uniqId+' .swiper-button-prev').css({'display':'block'});}});event.item.data('initalized',true);});var items=[];$('.mini-gallery .post-thumbnail__link').on('click',function(event){event.preventDefault();$(this).parents('.mini-gallery').find('.post-gallery__slides > a[href]').each(function(){items.push({src:$(this).attr('href'),type:'image'});});$.magnificPopup.open({items:items,gallery:{enabled:true}});});},navbar_init:function(self){$(window).load(function(){var $layout=window.itideas.labels.header_layout,$navbar=('style-3'===$layout||'style-7'===$layout)?$('.vertical-menu-toggle'):$('#main-menu');if(!$.isFunction(jQuery.fn.stickUp)||undefined===window.itideas.stickUp||!$navbar.length){return!1;}
$navbar.stickUp({correctionSelector:'#wpadminbar',listenSelector:'.listenSelector',pseudo:true,active:true});CherryJsCore.variable.$document.trigger('scroll.stickUp');});},subscribe_init:function(self){CherryJsCore.variable.$document.on('click','.subscribe-block__submit',function(event){event.preventDefault();var $this=$(this),form=$this.parents('form'),nonce=form.find('input[name="nonce"]').val(),mail_input=form.find('input[name="subscribe-mail"]'),mail=mail_input.val(),error=form.find('.subscribe-block__error'),success=form.find('.subscribe-block__success'),hidden='hidden';if(''===mail){mail_input.addClass('error');return!1;}
if($this.hasClass('processing')){return!1;}
$this.addClass('processing');error.empty();mail_input.removeClass('error');if(!error.hasClass(hidden)){error.addClass(hidden);}
if(!success.hasClass(hidden)){success.addClass(hidden);}
$.ajax({url:itideas.ajaxurl,type:'post',dataType:'json',data:{action:'itideas_subscribe',mail:mail,nonce:nonce},error:function(){$this.removeClass('processing');}}).done(function(response){$this.removeClass('processing');if(true===response.success){success.removeClass(hidden);mail_input.val('');return 1;}
error.removeClass(hidden).html(response.data.message);mail_input.addClass('error');return!1;});});},isMegaMenuEnabled:function(){if(undefined===window.itideas.megaMenu){return false;}
if(true===window.itideas.megaMenu.isActive&&'main'==window.itideas.megaMenu.location){return true;}
return false;},main_menu:function(self,$mainNavigation){if(self.isMegaMenuEnabled()){}
var transitionend='transitionend oTransitionEnd webkitTransitionEnd',moreMenuContent='&middot;&middot;&middot;',imgurl='',srcset='',hasimg=false,hasicon=false,hasprop=Object.prototype.hasOwnProperty,$menuToggle=$('.main-menu-toggle[aria-controls="main-menu"]',$mainNavigation),liWithChildren='li.menu-item-has-children, li.page_item_has_children',$body=$('body'),$parentNode,menuItem,subMenu,index=-1,$layout=window.itideas.labels.header_layout;if(hasprop.call(window,'itideas')&&hasprop.call(window.itideas,'more_button_options')&&hasprop.call(window.itideas.more_button_options,'more_button_type')){switch(window.itideas.more_button_options.more_button_type){case'image':imgurl=window.itideas.more_button_options.more_button_image_url;if(window.itideas.more_button_options.retina_more_button_image_url){srcset=' srcset="'+window.itideas.more_button_options.retina_more_button_image_url+' 2x"';}
moreMenuContent='<img src="'+imgurl+'"'+srcset+' alt="'+moreMenuContent+'">';hasimg=true;break;case'icon':moreMenuContent='<i class="fa '+window.itideas.more_button_options.more_button_icon+'"></i>';hasicon=true;break;case'text':default:moreMenuContent=window.itideas.more_button_options.more_button_text||moreMenuContent;hasimg=false;hasicon=false;break;}}
if('style-3'!==$layout&&'style-7'!==$layout){$mainNavigation.superGuacamole({threshold:768,minChildren:3,childrenFilter:'.menu-item',menuTitle:moreMenuContent,menuUrl:'#',templates:{menu:'<li id="%5$s" class="%1$s'+(hasimg?' super-guacamole__menu-with-image':'')+
(hasicon?' super-guacamole__menu-with-icon':'')+'"><a href="%2$s">%3$s</a><ul class="sub-menu">%4$s</ul></li>',child_wrap:'<ul class="%1$s">%2$s</ul>',child:'<li id="%5$s" class="%1$s"><a href="%2$s">%3$s</a><ul class="sub-menu">%4$s</ul></li>'}});}
function hideSubMenu(menuItem,$event){var subMenus=menuItem.find('.sub-menu'),subMenu=menuItem.children('.sub-menu').first();menuItem.removeData('index').removeClass('menu-hover');subMenu.addClass('in-transition');subMenus.one(transitionend,function(){subMenus.removeClass('in-transition');});}
function handleMenuItemHover($event){if($('html').hasClass('mobile-menu-active')){return;}
menuItem=$($event.target).parents('.menu-item');subMenu=menuItem.children('.sub-menu').first();var subMenus=menuItem.find('.sub-menu');if(!menuItem.hasClass('menu-item-has-children')){menuItem=$event.target.tagName==='LI'?$($event.target):$($event.target).parents().filter('.menu-item');}
switch($event.type){case'mouseenter':case'mouseover':if(0<subMenu.length){var maxWidth=$body.outerWidth(true),subMenuOffset=subMenu.offset().left+subMenu.outerWidth(true);menuItem.addClass('menu-hover');subMenu.addClass('in-transition');if(maxWidth<=subMenuOffset){subMenu.addClass('left-side');subMenu.find('.sub-menu').addClass('left-side');}else if(0>subMenu.offset().left){subMenu.removeClass('left-side');subMenu.find('.sub-menu').removeClass('left-side');}
subMenus.one(transitionend,function(){subMenus.removeClass('in-transition');});}
break;case'mouseleave':case'mouseout':hideSubMenu(menuItem,$event);break;}}
CherryJsCore.variable.$window.on('orientationchange resize',function(){if($('html').hasClass('mobile-menu-active')){return;}
$mainNavigation.find('.menu-item').removeClass('menu-hover');$mainNavigation.find('.sub-menu.left-side').removeClass('left-side');});$(liWithChildren).hoverIntent({over:function(){},out:function(){},timeout:300,selector:'.menu-item'});$mainNavigation.on('mouseenter mouseover mouseleave mouseout','.menu-item',handleMenuItemHover);function doubleClickMenu($jqEvent){$parentNode=$(this);if($('html').hasClass('mobile-menu-active')){return true;}
var menuIndex=$parentNode.index();if(menuIndex!==parseInt($parentNode.data('index'),10)){$jqEvent.preventDefault();}
$parentNode.data('index',menuIndex);}
if('ontouchend'in window){$(liWithChildren,$mainNavigation).on('click',doubleClickMenu);CherryJsCore.variable.$document.on('touchend',function($jqEvent){if(!$('html').hasClass('mobile-menu-active')){$parentNode=$($jqEvent.target).parents().filter('.menu-item:first');if($parentNode.hasClass('menu-hover')===false){hideSubMenu($parentNode,$jqEvent);index=$parentNode.data('index');if(index){$parentNode.data('index',parseInt(index,10)-1);}}}});}
$menuToggle.on('click',function($event){$event.preventDefault();$mainNavigation.toggleClass('toggled');});},mega_menu:function(self){function megaMenuSubMenuToggled(){$(this).toggleClass('active');}
$('.mega-menu-mobile-arrow').on('click',megaMenuSubMenuToggled);},mobile_menu:function(self){var $mainNavigation=$('.main-navigation'),$menuToggle=$('.main-menu-toggle[aria-controls="main-menu"]');$mainNavigation.find('li.menu-item-has-children > a').append('<span class="sub-menu-toggle"></span>');function debounce(threshold,callback){var timeout;return function debounced($event){function delayed(){callback.call(this,$event);timeout=null;}
if(timeout){clearTimeout(timeout);}
timeout=setTimeout(delayed,threshold);};}
function resizeHandler($event){var $window=CherryJsCore.variable.$window,width=$window.outerWidth(true);if(768<=width){$mainNavigation.removeClass('mobile-menu');}else{$mainNavigation.addClass('mobile-menu');}}
function toggleSubMenuHandler($event){$event.preventDefault();$(this).toggleClass('active');$(this).parents().filter('li:first').toggleClass('sub-menu-open');}
function toggleMenuHandler($event){var $toggle=$('.sub-menu-toggle');if(!$event.isDefaultPrevented()){$event.preventDefault();}
setTimeout(function(){if(!$mainNavigation.hasClass('animate')){$mainNavigation.addClass('animate');}
$mainNavigation.toggleClass('show');$('html').toggleClass('mobile-menu-active');},10);$menuToggle.toggleClass('toggled');$menuToggle.attr('aria-expanded',!$menuToggle.hasClass('toggled'));if($toggle.hasClass('active')){$toggle.removeClass('active');$mainNavigation.find('.sub-menu-open').removeClass('sub-menu-open');}}
resizeHandler();CherryJsCore.variable.$window.on('resize orientationchange',debounce(500,resizeHandler));$('.sub-menu-toggle',$mainNavigation).on('click',toggleSubMenuHandler);$menuToggle.on('click',toggleMenuHandler);},page_preloader_init:function(self){if($('.page-preloader-cover')[0]){$('.page-preloader-cover').delay(500).fadeTo(500,0,function(){$(this).remove();});}},to_top_init:function(self){if($.isFunction(jQuery.fn.UItoTop)&&undefined!==window.itideas.toTop){$().UItoTop({text:itideas.labels.totop_button,scrollSpeed:600});}},ofi_init:function(self){if($('body').hasClass('ie')&&'undefined'!==typeof objectFitImages){objectFitImages();}},playlist_slider_widget_init:function(self){$('.widget-playlist-slider .playlist-slider').each(function(){var $this=$(this),settings=$this.data('settings'),breakpoints=JSON.parse(settings.breakpoints);$this.sliderPro({autoplay:false,width:settings['width'],height:parseInt(settings['height']),orientation:'vertical',waitForLayers:false,touchSwipe:false,updateHash:false,arrows:settings['arrows'],buttons:settings['buttons'],thumbnailArrows:settings['thumbnailArrows'],thumbnailsPosition:settings['thumbnailsPosition'],thumbnailPointer:true,thumbnailWidth:settings['thumbnailWidth'],thumbnailHeight:settings['thumbnailHeight'],breakpoints:breakpoints,init:function(){$this.resize().fadeTo(0,1);},gotoSlideComplete:function(event){var prevSlide=$('.sp-slide',$this).eq(event.previousIndex),iframe=prevSlide.find('iframe'),html5Video=prevSlide.find('video');if(iframe[0]){var iframeSrc=iframe.attr('src');iframe.attr('src',iframeSrc);}else if(html5Video[0]){html5Video[0].stop();}}});});},news_smart_box_init:function(self){jQuery('.news-smart-box__instance').each(function(){var uniqId=$(this).data('uniq-id'),instanceSettings=$(this).data('instance-settings'),instance=$('#'+uniqId),$termItem=$('.news-smart-box__navigation-terms-list-item',instance),$currentTerm=$('.news-smart-box__navigation-title',instance),$listContainer=$('.news-smart-box__wrapper',instance),$ajaxPreloader=$('.nsb-spinner',instance),$termsList=$('.news-smart-box__navigation-terms-list',instance),$menuToggle=$('.menu-toggle',instance),ajaxGetNewInstance=null,ajaxGetNewInstanceSuccess=true,showNewItems=null;$termItem.each(function(){var slug=$(this).data('slug');if('category'===instanceSettings.terms_type){if(slug===instanceSettings.current_category){$(this).addClass('is-active');}}else{if(slug===instanceSettings.current_tag){$(this).addClass('is-active');}}});$menuToggle.on('click',function($jqEvent){$jqEvent.preventDefault();$menuToggle.toggleClass('news-smart-box__navigation-toggle--open');$termsList.toggleClass('news-smart-box__navigation-terms-list--open');});$termItem.on('click',function(){var slug=$(this).data('slug'),data={action:'new_smart_box_instance',value_slug:slug,instance_settings:instanceSettings},currentTermName=$(this).text(),counter=0;if(!$(this).hasClass('is-active')){$termItem.removeClass('is-active');$(this).addClass('is-active');}
$currentTerm.html(currentTermName);if(ajaxGetNewInstance!==null){ajaxGetNewInstance.abort();}
ajaxGetNewInstance=$.ajax({type:'GET',url:itideas.ajaxurl,data:data,cache:false,beforeSend:function(){ajaxGetNewInstanceSuccess=false;$ajaxPreloader.css({'display':'block'}).fadeTo(300,1);},success:function(response){ajaxGetNewInstanceSuccess=true;$ajaxPreloader.fadeTo(300,0,function(){$(this).css({'display':'none'});});$('.news-smart-box__listing',$listContainer).html(response);counter=0;$('.news-smart-box__item-inner',$listContainer).addClass('animate-cycle-show');$('.news-smart-box__item',$listContainer).each(function(){showItem($(this),100*parseInt(counter)+200);counter++;})}});});var showItem=function(itemList,delay){var timeOutInterval=setTimeout(function(){$('.news-smart-box__item-inner',itemList).removeClass('animate-cycle-show');},delay);}});},header_search:function(self){var $header=$('.site-header'),$searchToggle=$('.search-form__toggle, .search-form__close',$header),$headerSearch=$('.header-search',$header),$searchInput=$('.search-form__field',$headerSearch),searchHandler=function(event){$header.toggleClass('search-active');if($header.hasClass('search-active')){$searchInput.focus();}},removeActiveClass=function(event){if($(event.target).closest($searchToggle).length||$(event.target).closest($headerSearch).length){return;}
if($header.hasClass('search-active')){$header.removeClass('search-active');}
event.stopPropagation();};$searchToggle.on('click',searchHandler);CherryJsCore.variable.$document.on('click',removeActiveClass);},vertical_menu_init:function(self){var $mainNavigation=$('.main-navigation.vertical-menu'),$mainMenu=$('.menu',$mainNavigation),$back=$('.back',$mainNavigation),$close=$('.close',$mainNavigation),currentTranslate=parseInt($mainMenu.css('transform')),isAnimate=false,offset=300;resizeHandler();CherryJsCore.variable.$window.on('resize',resizeHandler);function resizeHandler(event){var $window=CherryJsCore.variable.$window,width=$window.outerWidth(true);if(768>width){$mainNavigation.removeClass('vertical-menu');$('.vertical-menu-toggle').off('click.open',openHandler);$('.menu-item-has-children > a',$mainNavigation).off('click.active',clickHandler);$back.off('click.back',backHandler);$close.off('click.close',closeHandler);$mainMenu.removeClass('scroll');$('.main-navigation .menu').css('transform','translateX(0)');}else{$mainNavigation.addClass('vertical-menu');$('.vertical-menu-toggle').on('click.open',openHandler);$('.menu-item-has-children > a',$mainNavigation).on('click.active',clickHandler);$back.on('click.back',backHandler);$close.on('click.close',closeHandler);$mainMenu.addClass('scroll');}}
$('.menu-item-has-children',$mainNavigation).each(function(){var $li=$(this),$link=$('>a',$li),linkText=$link.html(),linkHref=$link[0].cloneNode(true),$subMenu=$('> .sub-menu',$li);$subMenu.prepend('<li class="parent-title"><a href="'+linkHref+'">'+linkText+'</a></li>');});function openHandler(event){$(this).toggleClass('toggled');if($mainNavigation.hasClass('menu-open')){closeHandler();return false;}
$mainNavigation.toggleClass('menu-open');}
function backHandler(event){var currentTranslate=parseInt(($mainMenu.css('transform').replace(/,/g,"")).split(" ")[4]),translate=currentTranslate+offset,$active=$('.active',$mainMenu),$lastActive=$($active[$active.length-1]);if(isAnimate){return false;}
if(currentTranslate<0){isAnimate=true;$mainMenu.css('transform','translateX('+translate+'px)');if(translate>=0){translate=0;$(this).addClass('hide');$close.removeClass('hide');}
setTimeout(function(){$lastActive.removeClass('active');$lastActive.siblings().toggleClass('hide');$('>a',$lastActive).removeClass('hide');$lastActive.parent().addClass('scroll');isAnimate=false;},250);}
return false;}
function closeHandler(event){if(!isAnimate){$('.active',$mainMenu).removeClass('active');$('.hide',$mainMenu).removeClass('hide');$('.close.hide',$mainNavigation).removeClass('hide');$back.addClass('hide');$mainNavigation.removeClass('menu-open');$mainMenu.css('transform','translateX(0)');}
$('.vertical-menu-toggle').removeClass('toggled');return false;}
function clickHandler(event){var $_target=$(event.currentTarget),$mainMenu=$_target.closest('.menu'),deep=$_target.parents('ul').length,translate=deep*offset;$mainMenu.css('transform','translateX('+-translate+'px)');setTimeout(function(){$_target.parent().addClass('active');$_target.parent().siblings().toggleClass('hide');$_target.parents('.active').find('> a').addClass('hide');$_target.siblings('ul').addClass('scroll');$_target.parents('ul').removeClass('scroll');},250);$back.removeClass('hide');$close.addClass('hide');return false;}},add_project_inline_style:function(self){var $projectGridContainer=$('.projects-container.grid-layout'),$projectJustifiedContainer=$('.projects-container.justified-layout'),$projectGridTermsContainer=$('.projects-terms-container.grid-layout'),$projectContainer=$('.projects-container'),addInlineStyle=function(){var $this=$(this),$projectsSettings=$this.data('settings'),$projectItemIndent=Math.ceil(+$projectsSettings['item-margin']);$this.css({'margin-left':-$projectItemIndent/2+'px','margin-right':-$projectItemIndent/2+'px'});},addTemplateClass=function(){var $this=$(this),$projectsSettings=$this.data('settings'),$projectsTemplate=$projectsSettings['template'];if($projectsTemplate){$this.addClass($projectsTemplate.replace('.','-'));}};$projectGridContainer.each(addInlineStyle);$projectJustifiedContainer.each(addInlineStyle);$projectGridTermsContainer.each(addInlineStyle);$projectContainer.each(addTemplateClass);}};CherryJsCore.theme_script.init();}(jQuery));
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);
(function(f,e){function g(h){f.fn.cycle.debug&&a(h)}function a(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function l(a,b,o){var c=f(a).data("cycle.opts"),e=!!a.cyclePause;e&&c.paused?c.paused(a,c,b,o):!e&&c.resumed&&c.resumed(a,c,b,o)}function j(h,b,c){function j(b,d,h){if(!b&&!0===d){b=f(h).data("cycle.opts");if(!b)return a("options not found, can not resume"),!1;h.cycleTimeout&&(clearTimeout(h.cycleTimeout),h.cycleTimeout=0);r(b.elements,b,1,
!b.backwards)}}h.cycleStop===e&&(h.cycleStop=0);if(b===e||null===b)b={};if(b.constructor==String)switch(b){case "destroy":case "stop":c=f(h).data("cycle.opts");if(!c)return!1;h.cycleStop++;h.cycleTimeout&&clearTimeout(h.cycleTimeout);h.cycleTimeout=0;c.elements&&f(c.elements).stop();f(h).removeData("cycle.opts");if("destroy"==b){b=c;b.next&&f(b.next).unbind(b.prevNextEvent);b.prev&&f(b.prev).unbind(b.prevNextEvent);if(b.pager||b.pagerAnchorBuilder)f.each(b.pagerAnchors||[],function(){this.unbind().remove()});
b.pagerAnchors=null;f(h).unbind("mouseenter.cycle mouseleave.cycle");b.destroy&&b.destroy(b)}return!1;case "toggle":return h.cyclePause=1===h.cyclePause?0:1,j(h.cyclePause,c,h),l(h),!1;case "pause":return h.cyclePause=1,l(h),!1;case "resume":return h.cyclePause=0,j(!1,c,h),l(h),!1;case "prev":case "next":c=f(h).data("cycle.opts");if(!c)return a('options not found, "prev/next" ignored'),!1;f.fn.cycle[b](c);return!1;default:b={fx:b}}else if(b.constructor==Number){var p=b,b=f(h).data("cycle.opts");if(!b)return a("options not found, can not advance slide"),
!1;if(0>p||p>=b.elements.length)return a("invalid slide index: "+p),!1;b.nextSlide=p;h.cycleTimeout&&(clearTimeout(h.cycleTimeout),h.cycleTimeout=0);"string"==typeof c&&(b.oneTimeFx=c);r(b.elements,b,1,p>=b.currSlide);return!1}return b}function c(a,b){if(!f.support.opacity&&b.cleartype&&a.style.filter)try{a.style.removeAttribute("filter")}catch(c){}}function u(h,b,o,j,p){var i,d=f.extend({},f.fn.cycle.defaults,j||{},f.metadata?h.metadata():f.meta?h.data():{}),k=f.isFunction(h.data)?h.data(d.metaAttr):
null;k&&(d=f.extend(d,k));d.autostop&&(d.countdown=d.autostopCount||o.length);var u=h[0];h.data("cycle.opts",d);d.$cont=h;d.stopCount=u.cycleStop;d.elements=o;d.before=d.before?[d.before]:[];d.after=d.after?[d.after]:[];!f.support.opacity&&d.cleartype&&d.after.push(function(){c(this,d)});d.continuous&&d.after.push(function(){r(o,d,0,!d.backwards)});var s=d;s.original={before:[],after:[]};s.original.cssBefore=f.extend({},s.cssBefore);s.original.cssAfter=f.extend({},s.cssAfter);s.original.animIn=f.extend({},
s.animIn);s.original.animOut=f.extend({},s.animOut);f.each(s.before,function(){s.original.before.push(this)});f.each(s.after,function(){s.original.after.push(this)});!f.support.opacity&&(d.cleartype&&!d.cleartypeNoBg)&&B(b);"static"==h.css("position")&&h.css("position","relative");d.width&&h.width(d.width);d.height&&"auto"!=d.height&&h.height(d.height);d.startingSlide!==e?(d.startingSlide=parseInt(d.startingSlide,10),d.startingSlide>=o.length||0>d.startSlide?d.startingSlide=0:i=!0):d.startingSlide=
d.backwards?o.length-1:0;if(d.random){d.randomMap=[];for(k=0;k<o.length;k++)d.randomMap.push(k);d.randomMap.sort(function(){return Math.random()-0.5});if(i)for(i=0;i<o.length;i++)d.startingSlide==d.randomMap[i]&&(d.randomIndex=i);else d.randomIndex=1,d.startingSlide=d.randomMap[1]}else d.startingSlide>=o.length&&(d.startingSlide=0);d.currSlide=d.startingSlide||0;var t=d.startingSlide;b.css({position:"absolute",top:0,left:0}).hide().each(function(b){b=d.backwards?t?b<=t?o.length+(b-t):t-b:o.length-
b:t?b>=t?o.length-(b-t):t-b:o.length-b;f(this).css("z-index",b)});f(o[t]).css("opacity",1).show();c(o[t],d);d.fit&&(d.aspect?b.each(function(){var b=f(this),a=d.aspect===true?b.width()/b.height():d.aspect;if(d.width&&b.width()!=d.width){b.width(d.width);b.height(d.width/a)}if(d.height&&b.height()<d.height){b.height(d.height);b.width(d.height*a)}}):(d.width&&b.width(d.width),d.height&&"auto"!=d.height&&b.height(d.height)));d.center&&(!d.fit||d.aspect)&&b.each(function(){var b=f(this);b.css({"margin-left":d.width?
(d.width-b.width())/2+"px":0,"margin-top":d.height?(d.height-b.height())/2+"px":0})});d.center&&(!d.fit&&!d.slideResize)&&b.each(function(){var b=f(this);b.css({"margin-left":d.width?(d.width-b.width())/2+"px":0,"margin-top":d.height?(d.height-b.height())/2+"px":0})});if(d.containerResize&&!h.innerHeight()){for(var n=k=i=0;n<o.length;n++){var w=f(o[n]),y=w[0],z=w.outerWidth(),A=w.outerHeight();z||(z=y.offsetWidth||y.width||w.attr("width"));A||(A=y.offsetHeight||y.height||w.attr("height"));i=z>i?z:
i;k=A>k?A:k}0<i&&0<k&&h.css({width:i+"px",height:k+"px"})}var C=!1;d.pause&&h.bind("mouseenter.cycle",function(){C=true;this.cyclePause++;l(u,true)}).bind("mouseleave.cycle",function(){C&&this.cyclePause--;l(u,true)});var q;a:{i=d;n=f.fn.cycle.transitions;if(0<i.fx.indexOf(",")){i.multiFx=!0;i.fxs=i.fx.replace(/\s*/g,"").split(",");for(q=0;q<i.fxs.length;q++)if(w=i.fxs[q],k=n[w],!k||!n.hasOwnProperty(w)||!f.isFunction(k))a("discarding unknown transition: ",w),i.fxs.splice(q,1),q--;if(!i.fxs.length){a("No valid transitions named; slideshow terminating.");
q=!1;break a}}else if("all"==i.fx)for(q in i.multiFx=!0,i.fxs=[],n)n.hasOwnProperty(q)&&(k=n[q],n.hasOwnProperty(q)&&f.isFunction(k)&&i.fxs.push(q));if(i.multiFx&&i.randomizeEffects){k=Math.floor(20*Math.random())+30;for(q=0;q<k;q++)n=Math.floor(Math.random()*i.fxs.length),i.fxs.push(i.fxs.splice(n,1)[0]);g("randomized fx sequence: ",i.fxs)}q=!0}if(!1===q)return!1;var D=!1;j.requeueAttempts=j.requeueAttempts||0;b.each(function(){var b=f(this);this.cycleH=d.fit&&d.height?d.height:b.height()||this.offsetHeight||
this.height||b.attr("height")||0;this.cycleW=d.fit&&d.width?d.width:b.width()||this.offsetWidth||this.width||b.attr("width")||0;if(b.is("img")){var b=f.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete,h=f.browser.opera&&(this.cycleW==42&&this.cycleH==19||this.cycleW==37&&this.cycleH==17)&&!this.complete,c=this.cycleH===0&&this.cycleW===0&&!this.complete;if(f.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete||b||h||c){if(p.s&&d.requeueOnImageNotLoaded&&++j.requeueAttempts<
100){a(j.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){f(p.s,p.c).cycle(j)},d.requeueTimeout);D=true;return false}a("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}return true});if(D)return!1;d.cssBefore=d.cssBefore||{};d.cssAfter=d.cssAfter||{};d.cssFirst=d.cssFirst||{};d.animIn=d.animIn||{};d.animOut=d.animOut||{};b.not(":eq("+t+")").css(d.cssBefore);f(b[t]).css(d.cssFirst);if(d.timeout){d.timeout=
parseInt(d.timeout,10);d.speed.constructor==String&&(d.speed=f.fx.speeds[d.speed]||parseInt(d.speed,10));d.sync||(d.speed/=2);for(q="none"==d.fx?0:"shuffle"==d.fx?500:250;d.timeout-d.speed<q;)d.timeout+=d.speed}d.easing&&(d.easeIn=d.easeOut=d.easing);d.speedIn||(d.speedIn=d.speed);d.speedOut||(d.speedOut=d.speed);d.slideCount=o.length;d.currSlide=d.lastSlide=t;d.random?(++d.randomIndex==o.length&&(d.randomIndex=0),d.nextSlide=d.randomMap[d.randomIndex]):d.nextSlide=d.backwards?0===d.startingSlide?
o.length-1:d.startingSlide-1:d.startingSlide>=o.length-1?0:d.startingSlide+1;if(!d.multiFx)if(q=f.fn.cycle.transitions[d.fx],f.isFunction(q))q(h,b,d);else if("custom"!=d.fx&&!d.multiFx)return a("unknown transition: "+d.fx,"; slideshow terminating"),!1;h=b[t];d.skipInitializationCallbacks||(d.before.length&&d.before[0].apply(h,[h,h,d,!0]),d.after.length&&d.after[0].apply(h,[h,h,d,!0]));d.next&&f(d.next).bind(d.prevNextEvent,function(){return v(d,1)});d.prev&&f(d.prev).bind(d.prevNextEvent,function(){return v(d,
0)});if(d.pager||d.pagerAnchorBuilder){var x=d,E=f(x.pager);f.each(o,function(b,a){f.fn.cycle.createPagerAnchor(b,a,E,o,x)});x.updateActivePagerLink(x.pager,x.startingSlide,x.activePagerClass)}var m=d;m.addSlide=function(b,a){var d=f(b),h=d[0];m.autostopCount||m.countdown++;o[a?"unshift":"push"](h);if(m.els)m.els[a?"unshift":"push"](h);m.slideCount=o.length;if(m.random){m.randomMap.push(m.slideCount-1);m.randomMap.sort(function(){return Math.random()-0.5})}d.css("position","absolute");d[a?"prependTo":
"appendTo"](m.$cont);if(a){m.currSlide++;m.nextSlide++}!f.support.opacity&&(m.cleartype&&!m.cleartypeNoBg)&&B(d);m.fit&&m.width&&d.width(m.width);m.fit&&(m.height&&m.height!="auto")&&d.height(m.height);h.cycleH=m.fit&&m.height?m.height:d.height();h.cycleW=m.fit&&m.width?m.width:d.width();d.css(m.cssBefore);(m.pager||m.pagerAnchorBuilder)&&f.fn.cycle.createPagerAnchor(o.length-1,h,f(m.pager),o,m);if(f.isFunction(m.onAddSlide))m.onAddSlide(d);else d.hide()};return d}function r(a,b,c,j){function l(){var d=
0;b.timeout&&!b.continuous?(d=n(a[b.currSlide],a[b.nextSlide],b,j),"shuffle"==b.fx&&(d-=b.speedOut)):b.continuous&&i.cyclePause&&(d=10);0<d&&(i.cycleTimeout=setTimeout(function(){r(a,b,0,!b.backwards)},d))}var i=b.$cont[0],d=a[b.currSlide],k=a[b.nextSlide];c&&(b.busy&&b.manualTrump)&&(g("manualTrump in go(), stopping active transition"),f(a).stop(!0,!0),b.busy=0,clearTimeout(i.cycleTimeout));if(b.busy)g("transition active, ignoring new tx request");else if(!(i.cycleStop!=b.stopCount||0===i.cycleTimeout&&
!c))if(!c&&!i.cyclePause&&!b.bounce&&(b.autostop&&0>=--b.countdown||b.nowrap&&!b.random&&b.nextSlide<b.currSlide))b.end&&b.end(b);else{var u=!1;if((c||!i.cyclePause)&&b.nextSlide!=b.currSlide){var u=!0,s=b.fx;d.cycleH=d.cycleH||f(d).height();d.cycleW=d.cycleW||f(d).width();k.cycleH=k.cycleH||f(k).height();k.cycleW=k.cycleW||f(k).width();if(b.multiFx){if(j&&(b.lastFx===e||++b.lastFx>=b.fxs.length))b.lastFx=0;else if(!j&&(b.lastFx===e||0>--b.lastFx))b.lastFx=b.fxs.length-1;s=b.fxs[b.lastFx]}b.oneTimeFx&&
(s=b.oneTimeFx,b.oneTimeFx=null);f.fn.cycle.resetState(b,s);b.before.length&&f.each(b.before,function(a,f){i.cycleStop==b.stopCount&&f.apply(k,[d,k,b,j])});var t=function(){b.busy=0;f.each(b.after,function(a,f){i.cycleStop==b.stopCount&&f.apply(k,[d,k,b,j])});i.cycleStop||l()};g("tx firing("+s+"); currSlide: "+b.currSlide+"; nextSlide: "+b.nextSlide);b.busy=1;if(b.fxFn)b.fxFn(d,k,b,t,j,c&&b.fastOnEvent);else if(f.isFunction(f.fn.cycle[b.fx]))f.fn.cycle[b.fx](d,k,b,t,j,c&&b.fastOnEvent);else f.fn.cycle.custom(d,
k,b,t,j,c&&b.fastOnEvent)}else l();if(u||b.nextSlide==b.currSlide)if(b.lastSlide=b.currSlide,b.random){if(b.currSlide=b.nextSlide,++b.randomIndex==a.length&&(b.randomIndex=0,b.randomMap.sort(function(){return Math.random()-0.5})),b.nextSlide=b.randomMap[b.randomIndex],b.nextSlide==b.currSlide)b.nextSlide=b.currSlide==b.slideCount-1?0:b.currSlide+1}else b.backwards?(c=0>b.nextSlide-1)&&b.bounce?(b.backwards=!b.backwards,b.nextSlide=1,b.currSlide=0):(b.nextSlide=c?a.length-1:b.nextSlide-1,b.currSlide=
c?0:b.nextSlide+1):(c=b.nextSlide+1==a.length)&&b.bounce?(b.backwards=!b.backwards,b.nextSlide=a.length-2,b.currSlide=a.length-1):(b.nextSlide=c?0:b.nextSlide+1,b.currSlide=c?a.length-1:b.nextSlide-1);u&&b.pager&&b.updateActivePagerLink(b.pager,b.currSlide,b.activePagerClass)}}function n(a,b,f,c){if(f.timeoutFn){for(a=f.timeoutFn.call(a,a,b,f,c);"none"!=f.fx&&250>a-f.speed;)a+=f.speed;g("calculated timeout: "+a+"; speed: "+f.speed);if(!1!==a)return a}return f.timeout}function v(a,b){var c=b?1:-1,
j=a.elements,e=a.$cont[0],l=e.cycleTimeout;l&&(clearTimeout(l),e.cycleTimeout=0);if(a.random&&0>c)a.randomIndex--,-2==--a.randomIndex?a.randomIndex=j.length-2:-1==a.randomIndex&&(a.randomIndex=j.length-1),a.nextSlide=a.randomMap[a.randomIndex];else if(a.random)a.nextSlide=a.randomMap[a.randomIndex];else if(a.nextSlide=a.currSlide+c,0>a.nextSlide){if(a.nowrap)return!1;a.nextSlide=j.length-1}else if(a.nextSlide>=j.length){if(a.nowrap)return!1;a.nextSlide=0}e=a.onPrevNextEvent||a.prevNextClick;f.isFunction(e)&&
e(0<c,a.nextSlide,j[a.nextSlide]);r(j,a,1,b);return!1}function B(a){function b(a){a=parseInt(a,10).toString(16);return 2>a.length?"0"+a:a}function c(a){for(;a&&"html"!=a.nodeName.toLowerCase();a=a.parentNode){var h=f.css(a,"background-color");if(h&&0<=h.indexOf("rgb"))return a=h.match(/\d+/g),"#"+b(a[0])+b(a[1])+b(a[2]);if(h&&"transparent"!=h)return h}return"#ffffff"}g("applying clearType background-color hack");a.each(function(){f(this).css("background-color",c(this))})}f.support===e&&(f.support=
{opacity:!f.browser.msie});f.expr[":"].paused=function(a){return a.cyclePause};f.fn.cycle=function(c,b){var e={s:this.selector,c:this.context};if(this.length===0&&c!="stop"){if(!f.isReady&&e.s){a("DOM not ready, queuing slideshow");f(function(){f(e.s,e.c).cycle(c,b)});return this}a("terminating; zero elements found by selector"+(f.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var l=j(this,c,b);if(l!==false){l.updateActivePagerLink=l.updateActivePagerLink||f.fn.cycle.updateActivePagerLink;
this.cycleTimeout&&clearTimeout(this.cycleTimeout);this.cycleStop=this.cycleTimeout=this.cyclePause=0;var p=f(this),i=l.slideExpr?f(l.slideExpr,this):p.children(),d=i.get();if(d.length<2)a("terminating; too few slides: "+d.length);else{var k=u(p,i,d,l,e);if(k!==false)if(p=k.continuous?10:n(d[k.currSlide],d[k.nextSlide],k,!k.backwards)){p=p+(k.delay||0);p<10&&(p=10);g("first timeout: "+p);this.cycleTimeout=setTimeout(function(){r(d,k,0,!l.backwards)},p)}}}})};f.fn.cycle.resetState=function(a,b){b=
b||a.fx;a.before=[];a.after=[];a.cssBefore=f.extend({},a.original.cssBefore);a.cssAfter=f.extend({},a.original.cssAfter);a.animIn=f.extend({},a.original.animIn);a.animOut=f.extend({},a.original.animOut);a.fxFn=null;f.each(a.original.before,function(){a.before.push(this)});f.each(a.original.after,function(){a.after.push(this)});var c=f.fn.cycle.transitions[b];f.isFunction(c)&&c(a.$cont,f(a.elements),a)};f.fn.cycle.updateActivePagerLink=function(a,b,c){f(a).each(function(){f(this).children().removeClass(c).eq(b).addClass(c)})};
f.fn.cycle.next=function(a){v(a,1)};f.fn.cycle.prev=function(a){v(a,0)};f.fn.cycle.createPagerAnchor=function(a,b,c,j,e){if(f.isFunction(e.pagerAnchorBuilder)){b=e.pagerAnchorBuilder(a,b);g("pagerAnchorBuilder("+a+", el) returned: "+b)}else b='<a href="#">'+(a+1)+"</a>";if(b){var i=f(b);if(i.parents("body").length===0){var d=[];if(c.length>1){c.each(function(){var a=i.clone(true);f(this).append(a);d.push(a[0])});i=f(d)}else i.appendTo(c)}e.pagerAnchors=e.pagerAnchors||[];e.pagerAnchors.push(i);c=
function(b){b.preventDefault();e.nextSlide=a;var b=e.$cont[0],d=b.cycleTimeout;if(d){clearTimeout(d);b.cycleTimeout=0}b=e.onPagerEvent||e.pagerClick;f.isFunction(b)&&b(e.nextSlide,j[e.nextSlide]);r(j,e,1,e.currSlide<a)};/mouseenter|mouseover/i.test(e.pagerEvent)?i.hover(c,function(){}):i.bind(e.pagerEvent,c);!/^click/.test(e.pagerEvent)&&!e.allowPagerClickBubble&&i.bind("click.cycle",function(){return false});var k=e.$cont[0],n=false;e.pauseOnPagerHover&&i.hover(function(){n=true;k.cyclePause++;l(k,
true,true)},function(){n&&k.cyclePause--;l(k,true,true)})}};f.fn.cycle.hopsFromLast=function(a,b){var f=a.lastSlide,c=a.currSlide;return b?c>f?c-f:a.slideCount-f:c<f?f-c:f+a.slideCount-c};f.fn.cycle.commonReset=function(a,b,c,e,j,l){f(c.elements).not(a).hide();if(typeof c.cssBefore.opacity=="undefined")c.cssBefore.opacity=1;c.cssBefore.display="block";if(c.slideResize&&e!==false&&b.cycleW>0)c.cssBefore.width=b.cycleW;if(c.slideResize&&j!==false&&b.cycleH>0)c.cssBefore.height=b.cycleH;c.cssAfter=c.cssAfter||
{};c.cssAfter.display="none";f(a).css("zIndex",c.slideCount+(l===true?1:0));f(b).css("zIndex",c.slideCount+(l===true?0:1))};f.fn.cycle.custom=function(a,b,c,e,j,l){var d=f(a),k=f(b),g=c.speedIn,a=c.speedOut,n=c.easeIn,b=c.easeOut;k.css(c.cssBefore);if(l){g=typeof l=="number"?a=l:a=1;n=b=null}var u=function(){k.animate(c.animIn,g,n,function(){e()})};d.animate(c.animOut,a,b,function(){d.css(c.cssAfter);c.sync||u()});c.sync&&u()};f.fn.cycle.transitions={fade:function(a,b,c){b.not(":eq("+c.currSlide+
")").css("opacity",0);c.before.push(function(a,b,c){f.fn.cycle.commonReset(a,b,c);c.cssBefore.opacity=0});c.animIn={opacity:1};c.animOut={opacity:0};c.cssBefore={top:0,left:0}}};f.fn.cycle.ver=function(){return"2.9999.5"};f.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:!1,animIn:null,animOut:null,aspect:!1,autostop:0,autostopCount:0,backwards:!1,before:null,center:null,cleartype:!f.support.opacity,cleartypeNoBg:!1,containerResize:1,continuous:0,cssAfter:null,cssBefore:null,
delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:!0,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:!0,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:!1,slideExpr:null,slideResize:1,speed:1E3,speedIn:null,speedOut:null,
startingSlide:e,sync:1,timeout:4E3,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery);
(function(f){f.fn.cycle.transitions.none=function(e,g,a){a.fxFn=function(a,e,c,g){f(e).show();f(a).hide();g()}};f.fn.cycle.transitions.fadeout=function(e,g,a){g.not(":eq("+a.currSlide+")").css({display:"block",opacity:1});a.before.push(function(a,e,c,g,r,n){f(a).css("zIndex",c.slideCount+(!0!==n?1:0));f(e).css("zIndex",c.slideCount+(!0!==n?0:1))});a.animIn.opacity=1;a.animOut.opacity=0;a.cssBefore.opacity=1;a.cssBefore.display="block";a.cssAfter.zIndex=0};f.fn.cycle.transitions.scrollUp=function(e,
g,a){e.css("overflow","hidden");a.before.push(f.fn.cycle.commonReset);e=e.height();a.cssBefore.top=e;a.cssBefore.left=0;a.cssFirst.top=0;a.animIn.top=0;a.animOut.top=-e};f.fn.cycle.transitions.scrollDown=function(e,g,a){e.css("overflow","hidden");a.before.push(f.fn.cycle.commonReset);e=e.height();a.cssFirst.top=0;a.cssBefore.top=-e;a.cssBefore.left=0;a.animIn.top=0;a.animOut.top=e};f.fn.cycle.transitions.scrollLeft=function(e,g,a){e.css("overflow","hidden");a.before.push(f.fn.cycle.commonReset);e=
e.width();a.cssFirst.left=0;a.cssBefore.left=e;a.cssBefore.top=0;a.animIn.left=0;a.animOut.left=0-e};f.fn.cycle.transitions.scrollRight=function(e,g,a){e.css("overflow","hidden");a.before.push(f.fn.cycle.commonReset);e=e.width();a.cssFirst.left=0;a.cssBefore.left=-e;a.cssBefore.top=0;a.animIn.left=0;a.animOut.left=e};f.fn.cycle.transitions.scrollHorz=function(e,g,a){e.css("overflow","hidden").width();a.before.push(function(a,e,c,g){c.rev&&(g=!g);f.fn.cycle.commonReset(a,e,c);c.cssBefore.left=g?e.cycleW-
1:1-e.cycleW;c.animOut.left=g?-a.cycleW:a.cycleW});a.cssFirst.left=0;a.cssBefore.top=0;a.animIn.left=0;a.animOut.top=0};f.fn.cycle.transitions.scrollVert=function(e,g,a){e.css("overflow","hidden");a.before.push(function(a,e,c,g){c.rev&&(g=!g);f.fn.cycle.commonReset(a,e,c);c.cssBefore.top=g?1-e.cycleH:e.cycleH-1;c.animOut.top=g?a.cycleH:-a.cycleH});a.cssFirst.top=0;a.cssBefore.left=0;a.animIn.top=0;a.animOut.left=0};f.fn.cycle.transitions.slideX=function(e,g,a){a.before.push(function(a,e,c){f(c.elements).not(a).hide();
f.fn.cycle.commonReset(a,e,c,!1,!0);c.animIn.width=e.cycleW});a.cssBefore.left=0;a.cssBefore.top=0;a.cssBefore.width=0;a.animIn.width="show";a.animOut.width=0};f.fn.cycle.transitions.slideY=function(e,g,a){a.before.push(function(a,e,c){f(c.elements).not(a).hide();f.fn.cycle.commonReset(a,e,c,!0,!1);c.animIn.height=e.cycleH});a.cssBefore.left=0;a.cssBefore.top=0;a.cssBefore.height=0;a.animIn.height="show";a.animOut.height=0};f.fn.cycle.transitions.shuffle=function(e,g,a){e=e.css("overflow","visible").width();
g.css({left:0,top:0});a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!0,!0,!0)});a.speedAdjusted||(a.speed/=2,a.speedAdjusted=!0);a.random=0;a.shuffle=a.shuffle||{left:-e,top:15};a.els=[];for(e=0;e<g.length;e++)a.els.push(g[e]);for(e=0;e<a.currSlide;e++)a.els.push(a.els.shift());a.fxFn=function(a,e,c,g,r){c.rev&&(r=!r);var n=r?f(a):f(e);f(e).css(c.cssBefore);var v=c.slideCount;n.animate(c.shuffle,c.speedIn,c.easeIn,function(){for(var e=f.fn.cycle.hopsFromLast(c,r),j=0;j<e;j++)r?c.els.push(c.els.shift()):
c.els.unshift(c.els.pop());if(r){e=0;for(j=c.els.length;e<j;e++)f(c.els[e]).css("z-index",j-e+v)}else{e=f(a).css("z-index");n.css("z-index",parseInt(e,10)+1+v)}n.animate({left:0,top:0},c.speedOut,c.easeOut,function(){f(r?this:a).hide();g&&g()})})};f.extend(a.cssBefore,{display:"block",opacity:1,top:0,left:0})};f.fn.cycle.transitions.turnUp=function(e,g,a){a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!0,!1);c.cssBefore.top=e.cycleH;c.animIn.height=e.cycleH;c.animOut.width=e.cycleW});
a.cssFirst.top=0;a.cssBefore.left=0;a.cssBefore.height=0;a.animIn.top=0;a.animOut.height=0};f.fn.cycle.transitions.turnDown=function(e,g,a){a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!0,!1);c.animIn.height=e.cycleH;c.animOut.top=a.cycleH});a.cssFirst.top=0;a.cssBefore.left=0;a.cssBefore.top=0;a.cssBefore.height=0;a.animOut.height=0};f.fn.cycle.transitions.turnLeft=function(e,g,a){a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!1,!0);c.cssBefore.left=e.cycleW;c.animIn.width=
e.cycleW});a.cssBefore.top=0;a.cssBefore.width=0;a.animIn.left=0;a.animOut.width=0};f.fn.cycle.transitions.turnRight=function(e,g,a){a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!1,!0);c.animIn.width=e.cycleW;c.animOut.left=a.cycleW});f.extend(a.cssBefore,{top:0,left:0,width:0});a.animIn.left=0;a.animOut.width=0};f.fn.cycle.transitions.zoom=function(e,g,a){a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!1,!1,!0);c.cssBefore.top=e.cycleH/2;c.cssBefore.left=e.cycleW/2;f.extend(c.animIn,
{top:0,left:0,width:e.cycleW,height:e.cycleH});f.extend(c.animOut,{width:0,height:0,top:a.cycleH/2,left:a.cycleW/2})});a.cssFirst.top=0;a.cssFirst.left=0;a.cssBefore.width=0;a.cssBefore.height=0};f.fn.cycle.transitions.fadeZoom=function(e,g,a){a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!1,!1);c.cssBefore.left=e.cycleW/2;c.cssBefore.top=e.cycleH/2;f.extend(c.animIn,{top:0,left:0,width:e.cycleW,height:e.cycleH})});a.cssBefore.width=0;a.cssBefore.height=0;a.animOut.opacity=0};f.fn.cycle.transitions.blindX=
function(e,g,a){e=e.css("overflow","hidden").width();a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c);c.animIn.width=e.cycleW;c.animOut.left=a.cycleW});a.cssBefore.left=e;a.cssBefore.top=0;a.animIn.left=0;a.animOut.left=e};f.fn.cycle.transitions.blindY=function(e,g,a){e=e.css("overflow","hidden").height();a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c);c.animIn.height=e.cycleH;c.animOut.top=a.cycleH});a.cssBefore.top=e;a.cssBefore.left=0;a.animIn.top=0;a.animOut.top=e};f.fn.cycle.transitions.blindZ=
function(e,g,a){g=e.css("overflow","hidden").height();e=e.width();a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c);c.animIn.height=e.cycleH;c.animOut.top=a.cycleH});a.cssBefore.top=g;a.cssBefore.left=e;a.animIn.top=0;a.animIn.left=0;a.animOut.top=g;a.animOut.left=e};f.fn.cycle.transitions.growX=function(e,g,a){a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!1,!0);c.cssBefore.left=this.cycleW/2;c.animIn.left=0;c.animIn.width=this.cycleW;c.animOut.left=0});a.cssBefore.top=0;a.cssBefore.width=
0};f.fn.cycle.transitions.growY=function(e,g,a){a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!0,!1);c.cssBefore.top=this.cycleH/2;c.animIn.top=0;c.animIn.height=this.cycleH;c.animOut.top=0});a.cssBefore.height=0;a.cssBefore.left=0};f.fn.cycle.transitions.curtainX=function(e,g,a){a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!1,!0,!0);c.cssBefore.left=e.cycleW/2;c.animIn.left=0;c.animIn.width=this.cycleW;c.animOut.left=a.cycleW/2;c.animOut.width=0});a.cssBefore.top=0;a.cssBefore.width=
0};f.fn.cycle.transitions.curtainY=function(e,g,a){a.before.push(function(a,e,c){f.fn.cycle.commonReset(a,e,c,!0,!1,!0);c.cssBefore.top=e.cycleH/2;c.animIn.top=0;c.animIn.height=e.cycleH;c.animOut.top=a.cycleH/2;c.animOut.height=0});a.cssBefore.height=0;a.cssBefore.left=0};f.fn.cycle.transitions.cover=function(e,g,a){var l=a.direction||"left",j=e.css("overflow","hidden").width(),c=e.height();a.before.push(function(a,e,g){f.fn.cycle.commonReset(a,e,g);"right"==l?g.cssBefore.left=-j:"up"==l?g.cssBefore.top=
c:"down"==l?g.cssBefore.top=-c:g.cssBefore.left=j});a.animIn.left=0;a.animIn.top=0;a.cssBefore.top=0;a.cssBefore.left=0};f.fn.cycle.transitions.uncover=function(e,g,a){var l=a.direction||"left",j=e.css("overflow","hidden").width(),c=e.height();a.before.push(function(a,e,g){f.fn.cycle.commonReset(a,e,g,!0,!0,!0);"right"==l?g.animOut.left=j:"up"==l?g.animOut.top=-c:"down"==l?g.animOut.top=c:g.animOut.left=-j});a.animIn.left=0;a.animIn.top=0;a.cssBefore.top=0;a.cssBefore.left=0};f.fn.cycle.transitions.toss=
function(e,g,a){var l=e.css("overflow","visible").width(),j=e.height();a.before.push(function(a,e,g){f.fn.cycle.commonReset(a,e,g,!0,!0,!0);!g.animOut.left&&!g.animOut.top?f.extend(g.animOut,{left:2*l,top:-j/2,opacity:0}):g.animOut.opacity=0});a.cssBefore.left=0;a.cssBefore.top=0;a.animIn.left=0};f.fn.cycle.transitions.wipe=function(e,g,a){var l=e.css("overflow","hidden").width(),j=e.height();a.cssBefore=a.cssBefore||{};var c;a.clip&&(/l2r/.test(a.clip)?c="rect(0px 0px "+j+"px 0px)":/r2l/.test(a.clip)?
c="rect(0px "+l+"px "+j+"px "+l+"px)":/t2b/.test(a.clip)?c="rect(0px "+l+"px 0px 0px)":/b2t/.test(a.clip)?c="rect("+j+"px "+l+"px "+j+"px 0px)":/zoom/.test(a.clip)&&(e=parseInt(j/2,10),g=parseInt(l/2,10),c="rect("+e+"px "+g+"px "+e+"px "+g+"px)"));a.cssBefore.clip=a.cssBefore.clip||c||"rect(0px 0px 0px 0px)";var e=a.cssBefore.clip.match(/(\d+)/g),u=parseInt(e[0],10),r=parseInt(e[1],10),n=parseInt(e[2],10),v=parseInt(e[3],10);a.before.push(function(a,c,b){if(a!=c){var e=f(a),g=f(c);f.fn.cycle.commonReset(a,
c,b,true,true,false);b.cssAfter.display="block";var p=1,i=parseInt(b.speedIn/13,10)-1;(function k(){var a=u?u-parseInt(p*(u/i),10):0,b=v?v-parseInt(p*(v/i),10):0,c=n<j?n+parseInt(p*((j-n)/i||1),10):j,f=r<l?r+parseInt(p*((l-r)/i||1),10):l;g.css({clip:"rect("+a+"px "+f+"px "+c+"px "+b+"px)"});p++<=i?setTimeout(k,13):e.css("display","none")})()}});f.extend(a.cssBefore,{display:"block",opacity:1,top:0,left:0});a.animIn={left:0};a.animOut={left:0}}})(jQuery);
jQuery(document).ready(function(){if(navigator.doNotTrack!='yes'&&navigator.doNotTrack!=1&&window.doNotTrack!=1&&navigator.msDoNotTrack!=1&&jQuery('div.follow-button').length){window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return t;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));};jQuery('.rotatingtweets').each(function(){var rotate_id="#"+this.id,rotate_class="."+this.id,rotate_timeout=jQuery(this).data('cycle-timeout'),rotate_fx=jQuery(this).data('cycle-fx'),rotate_speed=jQuery(this).data('cycle-speed'),rotate_pager=jQuery(this).data('cycle-pager'),rotate_pager_template=jQuery(this).data('cycle-pager-template'),rotate_wp_debug=jQuery(this).hasClass('wp_debug');if(rotate_timeout===undefined){var rotate_id_split=rotate_id.split('_');rotate_timeout=rotate_id_split[1];rotate_fx=rotate_id_split[2];rotate_speed=rotate_id_split[3];}
if(typeof console==="undefined"||typeof console.log==="undefined"){rotate_wp_debug=false;}
if(rotate_fx==null){rotate_fx='scrollUp'};var rt_height_px='auto';var rt_parent=jQuery(rotate_id).parent(),rt_grandparent=jQuery(rotate_id).parent().parent();var rt_target_container_width=Math.min(rt_parent.innerWidth()-parseFloat(rt_parent.css('padding-left'))-parseFloat(rt_parent.css('padding-right')),rt_grandparent.innerWidth()-parseFloat(rt_grandparent.css('padding-left'))-parseFloat(rt_grandparent.css('padding-right'))-parseFloat(rt_parent.css('padding-left'))-parseFloat(rt_parent.css('padding-right'))-parseFloat(rt_parent.css('margin-left'))-parseFloat(rt_parent.css('margin-right')));var rt_target_width=rt_target_container_width-parseFloat(jQuery(this).css('padding-left'))-parseFloat(jQuery(this).css('padding-right'))-parseFloat(jQuery(this).css('margin-left'))-parseFloat(jQuery(this).css('margin-right'))-parseFloat(jQuery(this).css('border-left'))-parseFloat(jQuery(this).css('border-right'));var rt_fit=1;if(rt_target_width==null){rt_fit=0;}
if(rotate_wp_debug){console.log('============================');console.log('self_width = '+jQuery(rotate_id).innerWidth());console.log('parent_width = '+rt_parent.innerWidth());console.log('grandparent_width = '+rt_grandparent.innerWidth());console.log('rt_target_container_width = '+rt_target_container_width);console.log('rt_target_width = '+rt_target_width);console.log('rotate_timeout = '+rotate_timeout);console.log('rotate_speed = '+rotate_speed);console.log('rotate_fx = '+rotate_fx);console.log('rotate_pager = '+rotate_pager);console.log('rotate_pager_template = '+rotate_pager_template);}
var rotate_vars={pause:1,height:rt_height_px,timeout:rotate_timeout,cleartypeNoBg:true,width:rt_target_width,prev:rotate_class+'_rtw_prev',next:rotate_class+'_rtw_next',fx:rotate_fx,fit:rt_fit,speed:rotate_speed}
if(rotate_timeout>0){rotate_vars.timeout=rotate_timeout;}else{rotate_vars.continuous=true;rotate_vars.easing='linear';}
if(typeof rotate_pager!=="undefined"){rotate_vars.pager=rotate_id+'_rtw_pager';if(typeof rotate_pager_template!=="undefined"){rotate_vars.pagerAnchorBuilder=function(idx,slide){return rotate_pager_template;}}}
if(rotate_wp_debug){console.log(rotate_vars);}
jQuery(rotate_id).cycle(rotate_vars);var rt_height=jQuery(rotate_id).height();if(rotate_wp_debug){console.log('Initial height: '+rt_height);}
if(rt_height<1){var rt_children_id=rotate_id+' .rotatingtweet';var rt_height=0;jQuery(rt_children_id).each(function(){var rt_tweet_height=jQuery(this).height();if(rt_tweet_height>rt_height){rt_height=rt_tweet_height;}});rt_height=rt_height+20;rt_height_px=rt_height+'px';rotate_vars.height=rt_height_px;if(rotate_wp_debug){console.log('Resetting height to rt_height_px '+rt_height_px);}
jQuery(rotate_id).cycle('destroy');jQuery(rotate_id).cycle(rotate_vars);}
var rt_children_id=rotate_id+' .rtw_info';var rt_icon_id=rotate_id+' .rtw_wide_icon a img';var rt_block_id=rotate_id+' .rtw_wide_block';var rt_official_num=jQuery(rt_children_id).length;var rt_children_meta_id=rotate_id+' .rtw_meta';if(rt_official_num>0){if(jQuery(rt_icon_id).length>0){if(rotate_wp_debug){console.log('Adjusting widths for \'Official Twitter Version 2\'');console.log('- Width of Rotating Tweets container: '+jQuery(this).width());console.log('- Width of the icon container: '+jQuery(rt_icon_id).show().width());};var rt_icon_width=0;jQuery(rt_icon_id).each(function(){newiconsize=jQuery(this).width();if(newiconsize>rt_icon_width){rt_icon_width=newiconsize;}});if(rotate_wp_debug){console.log('- Width of the icon: '+rt_icon_width);};if(rt_icon_width>0){jQuery(rt_block_id).css('padding-left',(rt_icon_width+10)+'px');}}
if(rotate_wp_debug){console.log('Now check for \'padding-left\'');console.log('- leftpadding - text : '+jQuery(rt_block_id).css('padding-left')+' and value: '+parseFloat(jQuery(rt_block_id).css('padding-left')));};var rt_max_width=jQuery(rotate_id).width();if(typeof jQuery(rt_block_id).css('padding-left')!='undefined'){rt_max_width=rt_max_width-parseFloat(jQuery(rt_block_id).css('padding-left'))-1;if(rotate_wp_debug){console.log('- Padding is not undefined');};}else if(rotate_wp_debug){console.log('- Padding IS undefined - leave width unchanged');}
if(rotate_wp_debug){console.log('- rt_max_width: '+rt_max_width);};jQuery(rt_children_id).width(rt_max_width);jQuery(rt_children_meta_id).width(rt_max_width);};var rt_resize_width_old_parent=rt_parent.innerWidth(),rt_resize_width_old_grandparent=rt_grandparent.innerWidth(),rt_resize_width_new_parent=rt_resize_width_old_parent,rt_resize_width_new_grandparent=rt_resize_width_old_grandparent,rt_resize_parent_change=0,rt_resize_grandparent_change=0;var rt_resize_target_width=jQuery(rotate_id).width(),rt_resize_target_main=jQuery(rotate_id+' .rtw_main').width(),rt_resize_target_tweet=jQuery(rotate_id+' .rotatingtweet').width(),rt_resize_target_meta=jQuery(rotate_id+' .rtw_meta').width();jQuery(window).resize(function(){if(rotate_wp_debug){console.log("== Window Resize Detected ==");}
rt_parent=jQuery(rotate_id).parent();rt_grandparent=rt_parent.parent();rt_resize_width_new_parent=rt_parent.innerWidth();rt_resize_width_new_grandparent=rt_grandparent.innerWidth();rt_resize_parent_change=rt_resize_width_new_parent-rt_resize_width_old_parent;rt_resize_grandparent_change=rt_resize_width_new_grandparent-rt_resize_width_old_grandparent;rt_resize_change=rt_resize_parent_change;if(rt_resize_change==0){rt_resize_change=rt_resize_grandparent_change;}
if(rotate_wp_debug){console.log('Parent change: '+rt_resize_parent_change);console.log('Grandparent change: '+rt_resize_grandparent_change);console.log('Old box width: '+rt_resize_target_width);console.log('New target width: '+(rt_resize_target_width+rt_resize_change));console.log('rt_max_width: '+(rt_resize_target_width+rt_resize_change));}
if(rt_max_width==null){rt_max_width=rt_resize_target_tweet;}
if(rt_resize_change!=0){var rt_oldheight=0;var rt_oldcontainerheight=jQuery(rotate_id).height();jQuery(rotate_id+' .rotatingtweet').height('auto');jQuery(rotate_id+' .rotatingtweet').each(function(){var rt_test_height=jQuery(this).height();if(rotate_wp_debug){console.log('Old tweet height: '+rt_test_height);}
if(rt_test_height>rt_oldheight){rt_oldheight=rt_test_height;};});if(rotate_wp_debug){console.log('Old container height: '+rt_oldcontainerheight);console.log('Old height: '+rt_oldheight);}
var rt_old_box_height=jQuery(rotate_id).height();if(rotate_wp_debug){console.log('Old container height'+rt_old_box_height)}
jQuery(rt_children_id).width(rt_max_width+rt_resize_change);jQuery(rt_children_meta_id).width(rt_max_width+rt_resize_change);jQuery(rotate_id+' .rtw_main').width(rt_resize_target_main+rt_resize_change);jQuery(rotate_id+' .rotatingtweet').width(rt_resize_target_tweet+rt_resize_change);jQuery(rotate_id+' .rtw_meta').width(rt_resize_target_meta+rt_resize_change);jQuery(rotate_id).width(rt_resize_target_width+rt_resize_change);rt_resize_target_width=rt_resize_target_width+rt_resize_change;rt_resize_target_main=rt_resize_target_main+rt_resize_change;rt_resize_target_tweet=rt_resize_target_tweet+rt_resize_change;rt_max_width=rt_max_width+rt_resize_change;rt_resize_target_meta=rt_resize_target_meta+rt_resize_change;rt_resize_width_old_parent=rt_parent.innerWidth();rt_resize_width_old_grandparent=rt_grandparent.innerWidth();var rt_newheight=0;jQuery(rotate_id+' .rotatingtweet').height('auto');jQuery(rotate_id+' .rotatingtweet').each(function(){var rt_test_height=jQuery(this).height();if(rotate_wp_debug){console.log('New tweet height: '+rt_test_height);}
if(rt_test_height>rt_newheight){rt_newheight=rt_test_height;};});if(rotate_wp_debug){console.log('New height: '+rt_newheight);}
if(rt_newheight>0){jQuery(rotate_id).height(Math.max(rt_oldcontainerheight+rt_newheight-rt_oldheight,rt_newheight));}}});});jQuery('.rtw_intents a').hover(function(){var rtw_src=jQuery(this).find('img').attr('src');var clearOutHovers=/_hover.png$/;jQuery(this).find('img').attr('src',rtw_src.replace(clearOutHovers,".png"));var rtw_src=jQuery(this).find('img').attr('src');var srcReplacePattern=/.png$/;jQuery(this).find('img').attr('src',rtw_src.replace(srcReplacePattern,"_hover.png"));},function(){var rtw_src=jQuery(this).find('img').attr('src');var clearOutHovers=/_hover.png/;jQuery(this).find('img').attr('src',rtw_src.replace(clearOutHovers,".png"));});jQuery('.rtw_wide .rtw_intents').hide();jQuery('.rtw_expand').show();jQuery('.rotatingtweets').has('.rtw_wide').hover(function(){jQuery(this).find('.rtw_intents').show();},function(){jQuery(this).find('.rtw_intents').hide();});});