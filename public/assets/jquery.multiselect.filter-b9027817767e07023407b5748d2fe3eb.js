/* jshint forin:true, noarg:true, noempty:true, eqeqeq:true, boss:true, undef:true, curly:true, browser:true, jquery:true */
/*
 * jQuery MultiSelect UI Widget Filtering Plugin 1.4
 * Copyright (c) 2011 Eric Hynds
 *
 * http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/
 *
 * Depends:
 *   - jQuery UI MultiSelect widget
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
*/
(function(a){var b=/[\-\[\]{}()*+?.,\\\^$|#\s]/g;a.widget("ech.multiselectfilter",{options:{label:"Filter:",width:null,placeholder:"Enter keywords",autoReset:!1},_create:function(){var b=this,c=this.options,d=this.instance=a(this.element).data("multiselect"),e=this.header=d.menu.find(".ui-multiselect-header").addClass("ui-multiselect-hasfilter"),f=this.wrapper=a('<div class="ui-multiselect-filter">'+(c.label.length?c.label:"")+'<input placeholder="'+c.placeholder+'" type="search"'+(/\d/.test(c.width)?'style="width:'+c.width+'px"':"")+" /></div>").prependTo(this.header);this.inputs=d.menu.find('input[type="checkbox"], input[type="radio"]'),this.input=f.find("input").bind({keydown:function(a){a.which===13&&a.preventDefault()},keyup:a.proxy(b._handler,b),click:a.proxy(b._handler,b)}),this.updateCache(),d._toggleChecked=function(c,d){var e=d&&d.length?d:this.labels.find("input"),f=this,g=b.instance._isOpen?":disabled, :hidden":":disabled";e=e.not(g).each(this._toggleState("checked",c)),this.update();var h=e.map(function(){return this.value}).get();this.element.find("option").filter(function(){!this.disabled&&a.inArray(this.value,h)>-1&&f._toggleState("selected",c).call(this)})};var g=a(document).bind("multiselectrefresh",function(){b.updateCache(),b._handler()});this.options.autoReset&&g.bind("multiselectclose",a.proxy(this._reset,this))},_handler:function(c){var d=a.trim(this.input[0].value.toLowerCase()),e=this.rows,f=this.inputs,g=this.cache;if(!d)e.show();else{e.hide();var h=new RegExp(d.replace(b,"\\$&"),"gi");this._trigger("filter",c,a.map(g,function(a,b){return a.search(h)!==-1?(e.eq(b).show(),f.get(b)):null}))}this.instance.menu.find(".ui-multiselect-optgroup-label").each(function(){var b=a(this),c=b.nextUntil(".ui-multiselect-optgroup-label").filter(function(){return a.css(this,"display")!=="none"}).length;b[c?"show":"hide"]()})},_reset:function(){this.input.val("").trigger("keyup")},updateCache:function(){this.rows=this.instance.menu.find(".ui-multiselect-checkboxes li:not(.ui-multiselect-optgroup-label)"),this.cache=this.element.children().map(function(){var b=a(this);return this.tagName.toLowerCase()==="optgroup"&&(b=b.children()),b.map(function(){return this.innerHTML.toLowerCase()}).get()}).get()},widget:function(){return this.wrapper},destroy:function(){a.Widget.prototype.destroy.call(this),this.input.val("").trigger("keyup"),this.wrapper.remove()}})})(jQuery);