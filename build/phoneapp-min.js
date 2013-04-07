'use strict';(function(){this.Pa=this.Em=this.Ember=this.PhoneApp={K:function(){},TEMPLATES:Handlebars.templates||{},ENV:{HANDLEBARS_EXPOSE_OBJECTS:[]}}}).apply(this);
(function(a){var g=[],f,d=[],i,b=function(){f&&(g.push(f),f=null);if(i){if(!i.name)throw Error('NEED_A_NAME: Trying to bind "something" without any name');d.push(i);i=null}},h=function(c,b,d){b.split(".").forEach(function(e){if(!c||!(e in c))if(d)return c=void 0;else throw Error("MISSING: Trying to require something that doesn't exist"+b);c=c[e]});return c},e=function(c,b){var d={};b.split(".").forEach(function(b){d.o=c;d.k=b;b in c||(c[b]={});c=c[b]});return d},c=function(){b();var c=g,e=d;g=[];
d=[];var i={};e.forEach(function(c){if(c.name in i)throw Error("ALREADY_DEFINED: You are shadowing "+i[c.name]+" with "+c+" for name "+c.name);i[c.name]=c.value});c.forEach(function(c){if(c.name in i)throw Error("ALREADY_DEFINED: You are shadowing name "+c.name);i[c.name]=h(a,c.module,c.optional)});return i};this.use=function(c,d){b();f={module:c,name:c.split(".").pop(),optional:d};return this};this.add=function(c,d){if(c===void 0&&!d)throw Error("UNDEFINED: Requesting something local that is undefined");
b();i={value:c};return this};this.as=function(c){if(f)f.name=c;else if(i)i.name=c;b()};this.pack=function(b,d){var h=c(),i=e(a,b);(h=d.apply(i.o[i.k],[h]))&&(i.o[i.k]=h)};this.run=function(b){var d=c();b.apply({},[d])}}).apply(PhoneApp,[window]);
PhoneApp.pack("PhoneApp.types",function(){var a=0,g={};this.Object=function(){this.__class__="[PhoneApp.Object]"};this.Object.prototype.toString=function(){return this.__class__};var f=function(c,b,d){var e,a=true,h,f,n;d.__property__.forEach(function(k){var p=i(this,k)||i(window,k);if(p){f=p.shift();n=p.shift();var s=g[this.__id__];f.addObserver(n,function(i,g,p){h=[void 0,f,n,p];if(s[b]){var k=e,q=d.apply(c,h);k!=q&&(e=q,s[b].forEach(function(d){window.setTimeout(function(){d.collapse&&c[b]!==q||
d.apply(c,[b,k,q])},1)}))}else a=true})}else console.error("Trying to property non-existent",k)},c);Object.defineProperty(c,b,{enumerable:true,configurable:true,get:function(){a&&(a=false,h||(h=[void 0,f,n,f&&f[n]]),e=d.apply(this,h));return e},set:function(c){h?h[0]=c:h=[c,f,n];e=d.apply(this,h);h[0]=void 0;return e}})},d=/[A-Za-z0-9]Binding$/;this.Object.create=this.Object.prototype.create=function(c){c=new (this.extend(c));g[c.__id__=a++]={};var b=[],e;for(e in c)b.push(e);b.forEach(function(c){var b=
this[c];b&&(d.test(c)?(PhoneApp.Binding.bind(this,c.substr(0,c.length-7),b),this.hasOwnProperty(c)?delete this[c]:delete Object.getPrototypeOf(this)[c]):(b.hasOwnProperty("__observes__")&&b.__observes__.forEach(function(c){var d=i(this,c)||i(window,c);if(d){var e=d.shift(),h=d.shift();if(!("addObserver"in e))throw Error("NOT_OBSERVABLE: "+e);e.addObserver(h,function(){b.apply(e,[e,h])})}else console.error("Trying to observe non existent",c)},this),b.hasOwnProperty("__property__")&&f(this,c,b)))},
c);c.init();return c};this.Object._super=this.Object.prototype._super=function(c,b,d){return this.prototype[c].apply(b||this,d)};this.Object.extend=this.Object.prototype.extend=function(c){var c=c||{},b;b=c.constructor!=Function?function(){Object.keys(c).forEach(function(b){this[b]=c[b]},this)}:c;b.prototype=new this;b.extend=this.extend;b.create=this.create;b._super=this._super;return b};this.Object.prototype.init=function(){};this.Object.prototype.addObserver=function(c,b,d){c in g[this.__id__]||
(g[this.__id__][c]=[]);c=g[this.__id__][c];if(c.indexOf(b)==-1)b.collapse=d===void 0||d,c.push(b)};this.Object.prototype.removeObserver=function(c,b){if(c in g[this.__id__]){var d=g[this.__id__][c],e=d.indexOf(b);e!=-1&&d.splice(e,1)}};this.Object.prototype.set=function(c,d){var e=b(this,c),h=e.shift(),c=e.shift(),a=h[c];d!==a&&(h[c]=d,(g[h.__id__][c]||[]).forEach(function(b){window.setTimeout(function(){b.collapse&&h[c]!==d||b.apply(h,[c,a,d])},1)}))};this.Object.prototype.destroy=function(){delete g[this.__id__];
for(var c in this)delete this[c]};this.Object.isExtensionOf=function(c,b){return c&&c.prototype&&c.prototype instanceof b};var i=function(c,b){for(var d=b.split(".");c&&d.length>1;)c=c[d.shift()];c&&!(d[d.length-1]in c)&&(c=null);return c?[c,d.shift()]:void 0},b=function(c,b){for(var d=b.split("."),e;d.length>1;)e=d.shift(),e in c||(c[e]={}),c=c[e];return[c,d.shift()]};PhoneApp.get=this.Object.prototype.get=function(c){(c=i(this,c)||i(window,c))&&(c=c.shift()[c.pop()]);return c};var h,e;PhoneApp.Binding=
{oneWay:function(c){return function(c,b,d,e){return e}.property(c)},bothWays:function(c){return function(c,b,d,e){if(c===void 0)return e;b.set(d,c);return c}.property(c)},from:function(c){h=c;return this},to:function(c){e=c;return this},connect:function(c){this.bind(c,e,h);e=h=void 0},bind:function(c,b,d){f(c,b,this.bothWays(d))}};Function.prototype.observes=function(){this.__observes__=Array.prototype.slice.call(arguments);return this};Function.prototype.property=function(){this.__property__=Array.prototype.slice.call(arguments);
return this}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp.types",function(a){Array.prototype.replace=function(d,a,b){var h;b===void 0&&(b=[]);if(!b||b.constructor!=Array)b=[b];h=b.map(function(c){return c});h.unshift(a);h.unshift(d);var e=Array.prototype.splice.apply(this,h);"__hashcache__"in this&&this.__hashcache__.forEach(function(c){window.setTimeout(function(){c.apply(this,[d,b,e])}.bind(this),1)},this);return e};Array.prototype.popObject=function(){return this.replace(this.length-1,1)};Array.prototype.pushObject=function(d){return this.replace(this.length,
0,d)};Array.prototype.shiftObject=function(){return this.replace(0,1)};Array.prototype.unshiftObject=function(d){return this.replace(0,0,d)};Array.prototype.removeObject=function(d){d=this.indexOf(d);if(d!=-1)return this.replace(d,1)};Array.prototype.insertAt=function(d,a){return this.replace(d,0,a)};Array.prototype.removeAt=function(d){return this.replace(d,1)};Array.prototype.clear=function(){return this.replace(0,this.length)};Array.prototype.removeArrayObserver=function(d){"__hashcache__"in this&&
(d=this.__hashcache__.indexOf(d),d!=-1&&this.__hashcache__.splice(d,1))};Array.prototype.addArrayObserver=function(d){if(!("__hashcache__"in this))this.__hashcache__=[];this.__hashcache__.push(d)};var g=function(d,a,b){if(a!=b){var h=d[a],h=d.replace(b,1,h);d.replace(a,1,h)}},f=function(d,a,b,h){if(!(b>=h)){g(d,b,Math.floor((b+h)/2));var e,c=b;for(e=b+1;e<=h;e++)a(d[e],d[b])<0&&g(d,++c,e);g(d,b,c);f(d,a,b,c-1);f(d,a,c+1,h)}};Array.prototype.quickSort=function(d){f(this,d,0,this.length-1);return this};
this.ArrayController=a.Object.extend({length:0,init:function(){a.Object._super("init",this);var d=false,f=false,b=false,h=false,e=[],c=function(){return true},g=function(c){return c},o=function(c,b){return c<b?-1:c==b?0:1},j=Infinity,l=function(d,a,k){k.forEach(function(c){c=f.indexOf(c,d);c!=-1&&(f.splice(c,1),c=b.splice(c,1).pop(),c=h.indexOf(c),h.splice(c,1),c<e.length&&e.replace(c,1))});a.forEach(function(a){if(c(a)){f.splice(d,0,a);a=g(a);b.splice(d,0,a);var k=0;h.some(function(c,b){o(a,c)>=
0&&(k=b+1);return o(a,c)<0});h.splice(k,0,a);k<=e.length&&k<j&&e.replace(k,0,a)}});e.length>j&&e.replace(j,e.length-j);j!=Infinity&&e.length<j&&e.length<h.length&&e.replace(e.length,0,h.slice(e.length,j));this.set("length",e.length)}.bind(this);this.destroy=function(){d.removeArrayObserver(l);h=b=f=d=false;this.set("length",0);e.clear()};Object.defineProperty(this,"original",{get:function(){return d}});var m=false;if(this.sort!==void 0)o=this.sort;if(this.filter!==void 0)c=this.filter;if(this.map!==
void 0)g=this.map;if(this.limit!==void 0)j=this.limit;if(this.content!==void 0)d=this.content,m=true;Object.defineProperty(this,"content",{enumerable:true,get:function(){return e},set:function(a){d&&d.removeArrayObserver(l);d=a;d.addArrayObserver(l);f=d.filter(c);b=f.map(g);h=Array.from(b);h.quickSort(o);e.clear();h.some(function(c){e.pushObject(c);return e.length==j});this.set("length",e.length)}});Object.defineProperty(this,"filter",{get:function(){return c},set:function(a){c=a;d&&(f=d.filter(c),
b=f.map(g),h=Array.from(b),h.quickSort(o),e.clear(),h.some(function(c){e.pushObject(c);return e.length==j}),this.set("length",e.length))}});Object.defineProperty(this,"map",{get:function(){return g},set:function(c){g=c;d&&(b=f.map(g),h=Array.from(b),h.quickSort(o),e.clear(),h.some(function(c){e.pushObject(c);return e.length==j}),this.set("length",e.length))}});Object.defineProperty(this,"sort",{get:function(){return o},set:function(c){o=c;d&&(h.quickSort(o),e.clear(),h.some(function(c){e.pushObject(c);
return e.length==j}),this.set("length",e.length))}});Object.defineProperty(this,"limit",{get:function(){return j},set:function(c){j=c;d&&(e.length>j?e.replace(j,e.length-j):e.replace.apply(e,[e.length,0,h.slice(e.length,j)]),this.set("length",e.length))}});if(m)this.content=d}})});PhoneApp.add(Error).as("NativeError");
PhoneApp.pack("PhoneApp.types",function(a){this.Error=function(g,f){var d=a.NativeError.apply(this,[f]);if(!(this==window||this===void 0))if(this.message=d.message,this.stack=d.stack,this.name=g,!this.stack)this.stack=printStackTrace()};Object.getOwnPropertyNames(a.NativeError.prototype).forEach(function(g){g!="constructor"&&(this.Error.prototype[g]=a.NativeError.prototype[g])},this);"NOT_IMPLEMENTED,UNSPECIFIED,NOT_INITIALIZED,WRONG_ARGUMENTS,UNSUPPORTED,NATURAL_BORN_CRASH".split(",").forEach(function(a,
f){this.Error[a]=this.Error.prototype[a]=f},this);this.Error.prototype.toString=function(){return this.name+": "+this.message+"\nStack: "+(typeof this.stack=="array"?this.stack.join("\n"):this.stack)}});PhoneApp.use("PhoneApp.types.Error");
PhoneApp.pack("PhoneApp.service",function(a){this.Error=function(g,f,d){a.Error.apply(this,arguments);this.details=d};this.Error.prototype=Object.create(a.Error.prototype);"OPENING_FAILED,SEND_FAILED,FAILED_UID,MEANINGLESS_DATA,BAD_REQUEST,MISSING,BAD_REQUEST,UNAUTHORIZED,INVALID_SIGNATURE,WRONG_CREDENTIALS,SHOULD_NOT_HAPPEN,SERVICE_UNAVAILABLE,UNAUTHORIZED,UNSPECIFIED".split(",").forEach(function(a){this[a]=this.prototype[a]=a},this.Error)});PhoneApp.add(XMLHttpRequest).as("XMLHttpRequest");PhoneApp.use("PhoneApp.service.Error");
PhoneApp.pack("PhoneApp.service",function(a){var g=typeof File!="undefined"&&typeof Blob!="undefined";this.SimpleClient=function(){var d,f="",b="",h="",e=a.XMLHttpRequest;this.configure=function(c){if(c.host)d=c.host;if(c.port)f=c.port;c.scheme&&(h=c.scheme+":");if(c.version)b=c.version;if(c.backend)e=c.backend};Object.defineProperty(this,"Backend",{get:function(){return e}});this.url=function(c){var e=h+"//"+d+(f?":"+f:"")+(b?"/"+b:"");c.service&&(e+="/"+c.service);c.id&&(e+="/"+encodeURIComponent(c.id));
c.command&&(e+="/"+c.command);c.additional&&(e+="/"+c.additional.map(encodeURIComponent).join("/"));if(!c.params)c.params={};var a=[];Object.keys(c.params).forEach(function(b){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c.params[b]))});a.length&&(e+="?"+a.join("&"));return e}};var f=function(){var d=this.inner,f=this.options.onfailure,b=this.options.onsuccess;if(d)if(d.readyState==d.FAILED_OPENING)this.inner=this.engine=this.options.onsuccess=this.options.onfailure=d.onreadystatechange=null,
this.error=new a.Error(a.Error.UNAUTHORIZED,"Not authorized to access this",this),f&&f(this.error);else{if(d.readyState==d.DONE){var h=this.engine;this.inner=this.engine=this.options.onsuccess=this.options.onfailure=d.onreadystatechange=null;try{if(d.responseText)this.data=JSON.parse(d.responseText)}catch(e){try{this.data=(new DOMParser).parseFromString(d.responseText,"application/xml")}catch(c){this.data=d.responseText,this.error=new a.Error(a.Error.MEANINGLESS_DATA,"WHAT? ALBATROS?",this)}}switch(d.status){case 200:case 201:break;
case 308:this.options.url=d.getResponseHeader("Location");h.query(h.GET,this.options,this.headers);return;case 400:this.error=new a.Error(a.Error.BAD_REQUEST,"Bad request!",this);break;case 401:this.error=d.getResponseHeader("WWW-Authenticate")?new a.Error(a.Error.WRONG_CREDENTIALS,"Wrong street cred",this):new a.Error(a.Error.INVALID_SIGNATURE,"Invalid singing",this);break;case 402:case 403:case 405:case 501:this.error=new a.Error(a.Error.UNAUTHORIZED,"Not authorized to access this",this);break;
case 404:this.error=new a.Error(a.Error.MISSING,"Missing resource",this);break;case 406:case 411:case 412:case 413:case 414:case 415:case 416:case 417:this.error=new a.Error(a.Error.SHOULD_NOT_HAPPEN,"Should never happen",this);break;case 500:case 503:this.error=new a.Error(a.Error.SERVICE_UNAVAILABLE,"Server is down",this);break;case 0:this.error=new a.Error(a.Error.UNAUTHORIZED,"Not authorized to access this",this);break;default:this.error=new a.Error(a.Error.UNSPECIFIED,"WTF?",this)}if(this.error)throw f&&
f(this.error),this.error;b&&b(this.data)}}else console.warn("BAD SHIT HAPPENED!")};this.SimpleClient.prototype.query=function(d,i,b){var h=new this.Backend,d=d||this.GET,e=i.url||this.url(i);b||(b={});if(!b.Accept)b.Accept="application/json";var c={options:i,method:d,headers:b,error:null,data:{},exception:null};h.onreadystatechange=f.bind(c);try{h.open(d,e,true)}catch(t){c.exception=t.toString();c.error=new a.Error(a.Error.OPENING_FAILED,"Failed opening likely bogus request",c);if(i.onfailure)i.onfailure(c.error);
throw c.error;}e=i.payload;if(d==this.POST&&(b["Content-Type"]||(b["Content-Type"]=g&&(e instanceof File||e instanceof Blob)?e.type:"application/json"),b["Content-Type"]=="application/json"))try{e=JSON.stringify(e)}catch(o){b["Content-Type"]="application/octet-stream"}Object.keys(b).forEach(function(c){h.setRequestHeader(c,b[c])});try{h.send(e)}catch(j){c.exception=j.toString();c.error=new a.Error(a.Error.SEND_FAILED,"Failed sending. Bogus payload?",c);if(i.onfailure)i.onfailure(c.error);throw c.error;
}c.inner=h;c.engine=this};this.SimpleClient.HEAD=this.SimpleClient.prototype.HEAD="HEAD";this.SimpleClient.GET=this.SimpleClient.prototype.GET="GET";this.SimpleClient.POST=this.SimpleClient.prototype.POST="POST";this.SimpleClient.PATCH=this.SimpleClient.prototype.PATCH="PATCH";this.SimpleClient.PUT=this.SimpleClient.prototype.PUT="PUT";this.SimpleClient.DELETE=this.SimpleClient.prototype.DELETE="DELETE"});
PhoneApp.pack("PhoneApp",function(){var a,g=true,f=function(b,d){var e,c=Date.now(),a=function(f){e!==false&&(requestAnimationFrame(a,d),e=b(f-c,f),c=f)};a()};this.Run=function(b,d){var e=null;this.start=function(){e=window.setInterval(d,b)};this.stop=function(){window.clearInterval(e)}};var d=[],i=[];this.renderLoop={add:function(b,a,e){d.push({view:b,operation:a,callback:e})},schedule:function(b,a,e){d.push({view:a,operation:"schedule",callback:b,extra:e})},registerHook:function(b,d,e){i.push({callback:b,
scope:d,extra:e})},removeHook:function(b){i=i.filter(function(d){return b!=d.callback})},stop:function(){g=false},start:function(){g=true;f(a)}};a=function(b){if(!(b>160)){for(var b=d.shift(),a,e=[];b;){a=b.view;if(b.operation=="schedule")b.callback.apply(a,b.extra);else{var c=document.getElementById(a.elementId);if(b.operation=="render"){if(!c){e.push(b);b=d.shift();continue}a.render(c)}else b.operation=="destroy"&&c&&a.element.parentNode.removeChild(a.element);b.callback&&b.callback.call(a,b.operation)}b=
d.shift()}i.forEach(function(c){c.callback.apply(c.scope,c.extra)});d=e;return g}};this.renderLoop.start()});PhoneApp.pack("PhoneApp.types",function(){var a={};String.prototype.dasherize=function(){return!this.length?"":a[this]||(a[this]=this.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())};String.prototype.replaceAt=function(a,f){return this.substr(0,a)+f+this.substr(a+f.length)}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(a){this.Application=a.Object.extend({rootElement:$("body").get(0),ready:PhoneApp.K,autoHideSplash:false,device:a.Object.create({states:{BACKGROUND:"background",RUNNING:"running"},state:null,isIphone:false,isIpad:false,isRetina:false,isAndroid:false,isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)}.property()}),network:a.Object.create({types:window.Connection||{},states:{ONLINE:"online",OFFLINE:"offline"},type:null,state:null}),
hideSplash:function(){this.device.isMobile&&navigator.splashscreen.hide&&navigator.splashscreen.hide()},showSplash:function(){this.device.isMobile&&navigator.splashscreen.show&&navigator.splashscreen.show()},onDeviceReady:function(){var a;$(this.rootElement).empty();this.rootView.controller=this.rootController;this.rootView.appendTo(this.rootElement);window.devicePixelRatio>1&&this.device.set("isRetina",true);this.device.isMobile&&(window.KeyboardToolbarRemover&&cordova.require("cordova/plugin/keyboard_toolbar_remover").hide(),
this.autoHideSplash&&this.hideSplash(),window.device&&(a=window.device.platform.toLowerCase(),a.indexOf("iphone")!==-1?this.device.set("isIphone",true):a.indexOf("ipad")!==-1?this.device.set("isIpad",true):a.indexOf("android")!=-1&&this.device.set("isAndroid",true),(new PhoneApp.Run(1E3,function(){navigator.connection.type==window.Connection.NONE&&this.network.set("state",this.network.states.OFFLINE);navigator.connection.type!=this.networkType&&this.network.set("type",navigator.connection.type)}.bind(this))).start()));
this.router.transitionTo("index")},bindPhoneGapEvents:function(){document.addEventListener("deviceready",function(){this.onDeviceReady();this.ready()}.bind(this),false);document.addEventListener("pause",function(){this.device.set("state",this.device.states.BACKGROUND);this.onPause()}.bind(this),false);document.addEventListener("resume",function(){this.device.set("state",this.device.states.RUNNING);this.onResume()}.bind(this),false);document.addEventListener("online",function(){this.network.set("state",
this.network.states.ONLINE)}.bind(this),false);document.addEventListener("offline",function(){this.network.set("state",this.network.states.OFFLINE)}.bind(this),false)},initialize:function(){if(this.device.isMobile)this.bindPhoneGapEvents();else this.onDeviceReady()}})});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(a){var g=function(a,d){var i=a.split("."),b=[];Object.keys(i).forEach(function(h){var e=i[h];if(!(h==i.length-1&&e=="index"))if(e in d)d=d[e],b.push({path:e,route:d});else throw Error("unknown path "+a);});d.index&&d.index.redirectsTo&&b.push.apply(b,g(d.index.redirectsTo,d));return b};this.Route=a.Object.extend({_childs:{},route:null,enter:PhoneApp.K,leave:PhoneApp.K,redirectsTo:null,connectOutlets:PhoneApp.K,parentRoot:null,setup:PhoneApp.K,init:function(){Pa.Route._super("init",
this);this.setup&&this.setup();for(var f in this)if(a.Object.isExtensionOf(this[f],Pa.Route))this[f]=this[f].create(),this[f].parentRoot=this,this._childs[f]=this[f]},toString:function(){return"PhoneApp.Route"}});this.Router=a.Object.extend({enableLogging:false,root:PhoneApp.Route,currentPath:"",controllers:{},leaveHook:PhoneApp.K,enterHook:PhoneApp.K,connectOutletsHook:PhoneApp.K,init:function(){Pa.Router._super("init",this);this.root=this.root.create()}});this.Router.toString=this.Router.prototype.toString=
function(){return"PhoneApp.Router"};this.Router.prototype.transitionTo=function(a,d){var i=g(a,this.root),b=i.length-1,h="root",e=[];this.currentPath&&(e=g(this.currentPath,this.root));var c;i.forEach(function(a,f){h+="."+a.path;c=e.shift();if(!(c&&a.path==c.path)){if(c){for(var g=e.pop();g;)g.route.leave&&g.route.leave(this),this.leaveHook(g.route),g=e.pop();c.route.leave&&c.route.leave(this);this.leaveHook(c.route)}a.route.enter(this,d);this.enterHook(a.route,d);f==b&&(this.set("currentPath",h.replace("root.",
"")),this.set("currentRoute",a.route),a.route.connectOutlets(this,d),this.connectOutletsHook(a.route,d))}},this)}});PhoneApp.use("PhoneApp.types.Object");PhoneApp.pack("PhoneApp",function(a){this.Controller=a.Object.extend({isController:true,content:null,connectOutlet:function(a){var f=a.viewClass,d=a.controller||this,i=a.context||null,a=a.outletName||"view";d&&i&&d.set("content",i);f=f.create();f.set("controller",d);this.set(a,f)},removeOutlet:function(a){this.set(a,null)}})});
PhoneApp.pack("PhoneApp",function(){var a=0;this.Metamorph=function(g,f,d){this.id=++a;this.startNodeId="metamorph-"+this.id+"-start";this.endNodeId="metamorph-"+this.id+"-end";var i=function(b,a,d){var b=document.getElementById(this.startNodeId),c=document.getElementById(this.endNodeId);if(!b||!c)throw Error("Miss Metamorph hooks");var f=b.nextSibling;PhoneApp.renderLoop.schedule(function(){if(d.isView){var b=d?d.render():document.createTextNode("");if(d)d._parentView=g,g._childViews.push(d),d.willInsertElement();
f==c?c.parentNode.insertBefore(b,c):f.parentNode.replaceChild(b,f);d&&d.didInsertElement();a&&a.isView&&a.destroy()}else f==c?c.parentNode.insertBefore(c,document.createTextNode(d||"")):f.textContent=d||""})}.bind(this);f.addObserver(d,i);this.renderWrapper=function(){return'<script id="'+this.startNodeId+'"><\/script>'+(f.get(d)||" ")+'<script id="'+this.endNodeId+'"><\/script>'};this.destroy=function(){f.removeObserver(d,i)}}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(a){var g=0,f=0,d=function(b){var b=b.split(":"),d=b[0],a="",c,f,g=d.split("."),i=g.pop(),g=g.join(".");b.length>1&&(c=b[1],b.length===3&&(f=b[2]),a=":"+c,f&&(a+=":"+f));return{path:d,property:i,parent:g,classNames:a,className:c===""?void 0:c,falsyClassName:f}},i=function(b,d,a){b&&(a?b.setAttribute(d,a):b.removeAttribute(d))};this.View=a.Object.extend({template:null,templateName:null,controller:null,classNames:null,attributeBindings:null,classNameBindings:null,attributes:null,
willInsertElement:PhoneApp.K,didInsertElement:PhoneApp.K,willDestroyElement:PhoneApp.K,isView:true,tagName:"div",element:null,elementId:null,_parentView:null,_childViews:null,_compiledTpl:null,_isDestroying:false,_meta_observers:null,_metamorphs:null,init:function(){PhoneApp.View._super("init",this);this.elementId="phoneapp"+this.__id__;PhoneApp.View.views[this.elementId]=this;this._childViews=[];if(!this.attributeBindings)this.attributeBindings=[];if(this.classNameBindings){if(typeof this.classNameBindings==
"string")this.classNameBindings=this.classNameBindings.split(/\s+/)}else this.classNameBindings=[];if(this.classNames){if(typeof this.classNames=="string")this.classNames=this.classNames.split(" ")}else this.classNames=[];if(!this.attributes)this.attributes=[];this._meta_observers=[];this._metamorphs=[];var b=null;if(this.template)b=this.template;else if(this.templateName&&(b=PhoneApp.TEMPLATES[this.templateName],!b))throw Error("unknown template : "+this.templateName);this._compiledTpl=b||PhoneApp.K},
context:function(){var b=this.controller;if(!b&&this._parentView&&this._parentView.controller)b=this._parentView.controller;var d={};PhoneApp.ENV.HANDLEBARS_EXPOSE_OBJECTS.forEach(function(b){d[b]=window[b]});d.controller=b;d.view=this;return d}.property("controller"),$:function(b){return b?$(this.element).find(b):$(this.element)},appendTo:function(b){this.willInsertElement();var d=this.render();$(d).appendTo(b);this.didInsertElement()},insertChildAt:function(b,d){var a=!!b.element;a||b.willInsertElement();
PhoneApp.renderLoop.schedule(function(){this.element.insertBefore(b.element||b.render(),this.element.children[d]);a||b.didInsertElement()},this);b._parentView=this;this._childViews.insertAt(d,b);return b},appendChild:function(b){b.willInsertElement();PhoneApp.renderLoop.add(b,"render",function(){this.didInsertElement()});b._parentView=this;this._childViews.push(b);return b},rerender:function(){this._metamorphs.forEach(function(b){b.destroy()});return Pa.renderLoop.schedule(function(){this.render(this.element)},
this)},renderWrapper:function(){var b=[],d="",a;this.attributeBindings.forEach(function(c){var d=c;c.indexOf(":")>-1&&(c=c.split(":"),d=c.pop(),c=c.pop());b.push({attribute:c,value:d})},this);d=this.classNames.join(" ");this.classNameBindings&&b.push({attribute:"class",value:this.classNameBindings});b=this._computeAttributesBindings(b);d&&(b["class"]+=" "+d);a=document.createElement(this.tagName);this.attributes.forEach(function(c){c&&(c=c.split("="),a.setAttribute(c.shift(),c.shift()))});Object.keys(b).forEach(function(c){b[c]&&
a.setAttribute(c,b[c])});a.setAttribute("id",this.elementId);return a},render:function(b){if(this._isDestroying)throw Error("Trying to render a destroyed view");b||(b=this.renderWrapper());this.element=b;this.element.innerHTML=this._compiledTpl(this.context)||"";return this.element},_computeAttributesBindings:function(b,a){var e={"class":"",style:""},c=this;b.forEach(function(b){var f=b.attribute,b=b.value,g=a?'[data-phoneapp-binding="'+a+'"]':null,l;if(f=="class")typeof b=="string"&&(b=b.split(/\s+/)),
b.forEach(function(b){var a=d(b);if(a.parent.indexOf("view")===0)a.parent=a.parent.replace(/view(.)?/,""),a.path=a.path.replace(/view(.)?/,""),b=a.path;!a.path&&a.className?e["class"]+=" "+a.className:(a.parent=a.parent?this.get(a.parent):this,b=function(b,d,f,h){if(!c._isDestroying){!l&&!h&&(l=!g?c.element:c.element.querySelector(g));l&&(e["class"]=l.getAttribute("class")||"");b=typeof f;if(b=="boolean"||b=="number"){if(!a.className)a.className=a.property.dasherize();e["class"]=e["class"].replace(a.className,
"").replace(a.falsyClassName,"");f?e["class"]+=" "+a.className:a.falsyClassName&&(e["class"]+=" "+a.falsyClassName)}else b=="string"&&(e["class"]=e["class"].replace(d,f));h||Pa.renderLoop.schedule(i,c,[l,"class",e["class"]])}},b(a.property,"",this.get(a.path),true),this._meta_observers.push({parent:a.parent,property:a.property,callback:b}),a.parent.addObserver(a.property,b))},this);else if(f=="style")typeof b=="string"&&(b=b.split(/\s+/)),b.forEach(function(b){var a=d(b);a.styleName=a.className;a.styleValue=
a.falsyClassName;a.isBinding=a.styleValue.indexOf("{{this}}")!=-1;!a.path&&!a.isBinding?e.style+=" "+a.styleName+":"+a.styleValue:(a.parent=a.parent?this.get(a.parent):this,b=function(b,d,f,h){if(!c._isDestroying){!l&&!h&&(l=!g?c.element:c.element.querySelector(g));if(l)e.style=l.getAttribute("style");var k={};(e.style||"").split(";").forEach(function(b){b&&(b=b.split(":"),k[b.shift().trim()]=b.shift())});f?k[a.styleName.trim()]=a.styleValue.replace("{{this}}",f):delete k[a.styleName.trim()];e.style=
"";Object.keys(k).forEach(function(b){e.style+=b+":"+k[b]+";"});h||Pa.renderLoop.schedule(i,c,[l,"style",e.style])}},b(a.property,"",this.get(a.path),true),this._meta_observers.push({parent:a.parent,property:a.property,callback:b}),a.parent.addObserver(a.property,b))},this);else{var m=b.split("."),r=m.pop(),m=m.join("."),n;m.indexOf("view")===0&&(m=m.replace(/view(.)?/,""),b=b.replace(/view(.)?/,""));m=m?this.get(m):this;n=function(b,a,d,h){!c._isDestroying&&e[f]!=d&&(e[f]=d,h||(l||(l=!g?c.element:
c.element.querySelector(g)),Pa.renderLoop.schedule(i,c,[l,f,e[f]])))};n(r,"",this.get(b),true);this._meta_observers.push({parent:m,property:r,callback:n});m.addObserver(r,n)}},this);return e},_addAction:function(b,a,d,c){var g=++f;$(this.element).on(b,'[data-phoneapp-action="'+g+'"]',function(b){b.context=d;a.call(c,b)}.bind(this));return"data-phoneapp-action="+g},_addAttributeBindings:function(b){var a=++g,d;d=this._computeAttributesBindings(b,a);var c="data-phoneapp-binding="+a;Object.keys(d).forEach(function(b){d[b]&&
(c+=" "+b+'="'+d[b]+'"')});return c},_addMetamorph:function(b,a){var d=new PhoneApp.Metamorph(this,b,a);this._metamorphs.push(d);return d},destroy:function(){this.willDestroyElement();this._isDestroying=true;this._meta_observers.forEach(function(b){b.parent.removeObserver(b.property,b.callback)});this._metamorphs.forEach(function(b){b.destroy()});this._parentView&&!this._parentView._isDestroying&&this._parentView._childViews.removeObject(this);this.$().off();this._parentView&&this._parentView._isDestroying?
this._destroyElement():PhoneApp.renderLoop.add(this,"destroy",this._destroyElement)},_destroyElement:function(){delete PhoneApp.View.views[this.elementId];this._childViews.forEach(function(b){b.destroy()});PhoneApp.View._super("destroy",this)}});this.View.views={}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(){this.CollectionView=this.View.extend({content:null,itemViewClass:Pa.View,_childTemplate:null,_domTree:null,_replaceTree:null,init:function(){PhoneApp.CollectionView._super("init",this);this._replaceTree={}},didInsertElement:function(){if(this.content)this.content.content.length&&this._domController(0,this.content.content,[]),this._domController=this._domController.bind(this),this.content.content.addArrayObserver(this._domController),this.addObserver("content",function(a,
g,f){g.content.removeArrayObserver(this._domController);f.content.addArrayObserver(this._domController)})},_domController:function(a,g,f){var d=this.element.children;g.forEach(function(d,b){var f=a+b,e;f in this._replaceTree?(e=this._replaceTree[f],delete this._replaceTree[f]):(e=this.itemViewClass.create({tagName:"li"}),e._compiledTpl=this._childTemplate,e.controller=this.controller,e.content=d);this.insertChildAt(e,f)},this);f.forEach(function(f){d[a]?(f=this.content.content.indexOf(f),f==-1?this._childViews[a].destroy():
this._replaceTree[f]=this._childViews.removeAt(a)[0]):console.error("Collection trying to remove a dom node that does not exists",a,f)},this)},willDestroyElement:function(){this.content&&this.content.content&&this.content.content.removeArrayObserver(this._domController)}})});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(){var a=function(a,d,g){for(var a=a.children,b,h=0;h<a.length;h++){b=a[h];var e=d;b=b.style;b.webkitTransitionDuration=b.MozTransitionDuration=b.msTransitionDuration=b.OTransitionDuration=b.transitionDuration=g+"ms";b.MozTransform=b.webkitTransform="translate3d(0,"+e+"px,0)";b.msTransform=b.OTransform="translateX("+e+"px)"}},g=function(a){for(var d=a.scrollTop,g=a.children,b=function(){this.style.webkitTransition="-webkit-transform 0s ease-out";this.style.webkitTransform=
"translate3d(0,0,0)";a.scrollTop=0;this.removeEventListener("webkitTransitionEnd",b)},h=0;h<g.length;h++)g[h].style.webkitTransition="-webkit-transform 300ms ease-out",g[h].addEventListener("webkitTransitionEnd",b,false),g[h].style.webkitTransform="translate3d(0, "+d+"px,0)"};this.ScrollableView=this.View.extend({offsetPullToRefresh:50,isScrolling:false,isLoading:false,scrollableSeclector:".scrollable",didInsertElement:function(){var f=this.element.querySelector(this.scrollableSeclector),d=f.querySelector(".pull-to-refresh");
a(f,0,0);document.addEventListener("taptotop",this.scrollToTop);this.$().on("touchmove",function(a){if(!(a.touches.length>1||a.scale&&a.scale!==1))return Pa.renderLoop.schedule(function(){var a=f.scrollTop;if(a>=0||this.isLoading)return true;a<=-this.offsetPullToRefresh?$(d).addClass("drop-to-refresh"):$(d).removeClass("drop-to-refresh");this.set("isActivated",true)},this),true}.bind(this));this.$().on("touchend",function(){if(!this.isActivated||this.isLoading)return true;Pa.renderLoop.schedule(function(){var g=
f.scrollTop;if(g>=0)return true;$(d).removeClass("drop-to-refresh");if(g>-this.offsetPullToRefresh)return true;d.style.webkitTransitionDuration=0;a(this.element,this.offsetPullToRefresh,200);$(d).addClass("loading");this.set("isActivated",false);this.set("isLoading",true);window.setTimeout(function(){this.set("isLoading",false);a(this.element,0,0);$(d).removeClass("loading")}.bind(this),2E3)},this)}.bind(this))},scrollToTop:function(){g(this.element)},willDestroyElement:function(){this.$().off();
document.removeEventListener("taptotop",this.scrollToTop)}})});
(function(){window.Swipe=function(a,g){if(!a)return null;this.options=g||{};this.speed=this.options.speed||300;this.callback=this.options.callback||function(){};this.foldedPosition=this.options.foldedPosition||85;this.lockSlide=this.isSliding=this.activated=false;this.element=a;this.setup();this.element.addEventListener&&(this.element.addEventListener("touchstart",this,false),this.element.addEventListener("touchmove",this,false),this.element.addEventListener("touchend",this,false),this.element.addEventListener("touchcancel",
this,false),this.element.addEventListener("webkitTransitionEnd",this,false),this.element.addEventListener("msTransitionEnd",this,false),this.element.addEventListener("oTransitionEnd",this,false),this.element.addEventListener("transitionend",this,false),window.addEventListener("resize",this,false))};window.Swipe.prototype={setup:function(){this.width=Math.ceil("getBoundingClientRect"in this.element?this.element.getBoundingClientRect().width:this.element.offsetWidth);if(this.width===0&&typeof window.getComputedStyle===
"function")this.width=window.getComputedStyle(this.element,null).width.replace("px","");if(!this.width)return null;var a=this.element.style.visibility;this.element.style.visibility="hidden";var g=this.speed;this.speed=0;this.slide();this.speed=g;this.element.style.visibility=a},activate:function(a){this.activated=a;this.slide()},slide:function(){var a=this.element.style;a.webkitTransitionDuration=a.MozTransitionDuration=a.msTransitionDuration=a.OTransitionDuration=a.transitionDuration=this.speed+
"ms";var g=this.activated?0:this.foldedPosition*this.width/100;a.MozTransform=a.webkitTransform="translate3d("+g+"px,0,0)";a.msTransform=a.OTransform="translateX("+g+"px)"},handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchcancel":case "touchend":this.onTouchEnd(a);break;case "webkitTransitionEnd":case "msTransitionEnd":case "oTransitionEnd":case "transitionend":this.transitionEnd(a);break;case "resize":this.setup()}},
transitionEnd:function(a){this.callback(a)},onTouchStart:function(a){if(!this.lockSlide)this.start={pageX:a.touches[0].pageX,pageY:a.touches[0].pageY,time:Number(new Date),position:this.activated?0:this.foldedPosition*this.width/100},this.isScrolling=void 0,this.direction=0,this.locked=void 0,this.deltaX=0,this.element.style.MozTransitionDuration=this.element.style.webkitTransitionDuration=0},onTouchMove:function(a){if(!this.lockSlide&&!(a.touches.length>1||a.scale&&a.scale!==1)){this.deltaX=a.touches[0].pageX-
this.start.pageX+this.start.position;if(this.direction===0)this.direction=a.touches[0].pageX-this.start.pageX<0?1:2;if(typeof this.isScrolling=="undefined")this.isScrolling=!!(this.isScrolling||Math.abs(this.deltaX)<Math.abs(a.touches[0].pageY-this.start.pageY));if(this.locked===void 0)this.locked=this.direction==1&&this.deltaX<0||this.direction==2&&this.deltaX>this.width;if(!this.isScrolling&&!this.locked){var g=this.deltaX*100/this.width;if(g<80&&!this.activated&&this.direction==1)this.activated=
true;else if(g>20&&this.activated&&this.direction==2)this.activated=false;if(g>-5&&g<this.foldedPosition+5)this.element.style.MozTransform=this.element.style.webkitTransform="translate3d("+(this.deltaX<0?0:this.deltaX)+"px,0,0)",this.isSliding=true;a.stopPropagation();a.stopImmediatePropagation();a.preventDefault();return false}}},onTouchEnd:function(a){if(!this.lockSlide)this.locked=void 0,this.direction=0,(this.isScrolling=void 0)||this.slide(),this.isSliding&&(a.stopPropagation(),a.stopImmediatePropagation(),
a.preventDefault()),this.isSliding=false}}})();
(function(){Handlebars.registerHelper("action",function(a,g,f){var c;var b;var d=null;!f&&g.hash&&(f=g,g=this);if(typeof a=="string"){var d=a.split("."),i=d[0]||"";i==="view"?(d.shift(),a=this.view.get(d.join(".")),d.pop(),b=(d=d.join("."))?this.view.get(d):this.view,d=b):i=="controller"?(d.shift(),a=this.controller.get(d.join(".")),d.pop(),c=(d=d.join("."))?this.controller.get(d):this.controller,d=c):(a=Pa.get(a),d.pop(),d=Pa.get(d.join(".")))}return new Handlebars.SafeString(this.view._addAction(f.hash.on,a,
g,d))})})();(function(){Handlebars.registerHelper("bindAttr",function(a){var g=[];Object.keys(a.hash).forEach(function(f){g.push({attribute:f,value:a.hash[f]})});return new Handlebars.SafeString(this.view._addAttributeBindings(g))});Handlebars.registerHelper("bind",function(a){var b;var g=this.view,f=a.split("."),a=f.pop();f.indexOf("view")==0&&f.shift();b=(f=f.join("."))?g.get(f):g,f=b;g=this.view._addMetamorph(f,a);return new Handlebars.SafeString(g.renderWrapper())})})();
(function(){Handlebars.registerHelper("collection",function(a,g){if(arguments.length==1)g=a,a=Pa.CollectionView;var f={},d=null,i,b=null,d=this.view;if(!d.isView)throw Error("currentView is not a view :)");if(g.fn)f._childTemplate=g.fn;Object.keys(g.hash).forEach(function(a){f[a]=g.hash[a]});if(!f.controller)f.controller=this.controller;if(!a.apply)throw Error("collection view is already instantiated");if(f.bindToView)b=f.bindToView,delete f.bindToView;i=a.create(f);b&&d.set(b,i);d.appendChild(i);
return new Handlebars.SafeString(i.renderWrapper().outerHTML)})})();(function(){Handlebars.registerHelper("outlet",function(a,g){var f="view";typeof a=="string"&&(f=a);if(a.fn||g&&g.fn)throw Error("Outlet can not be a block");var d=null,d=this.view;if(!d.isView)throw Error("currentView is not a view :)");this.controller.set("view",null);f=d._addMetamorph(this.controller,f);return new Handlebars.SafeString(f.renderWrapper())})})();
(function(){Handlebars.registerHelper("view",function(a,g){if(!a)throw Error("Unknown view");var f={},d=null,i=null,d=this.view;if(!d.isView)throw Error("currentView is not a view :)");if(g.fn)f.template=g.fn;Object.keys(g.hash).forEach(function(a){f[a]=g.hash[a]});if(!f.controller)f.controller=this.controller;if(f.bindToView)i=f.bindToView,delete f.bindToView;var b=a.create(f);i&&d.set(i,b);d.appendChild(b);return new Handlebars.SafeString(b.renderWrapper().outerHTML)})})();
