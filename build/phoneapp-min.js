'use strict';(function(){this.Pa=this.Em=this.Ember=this.PhoneApp={K:function(){},TEMPLATES:Handlebars.templates||{},ENV:{HANDLEBARS_EXPOSE_OBJECTS:[]}}}).apply(this);
(function(b){var g=[],d,a=[],i,f=function(){d&&(g.push(d),d=null);if(i){if(!i.name)throw Error('NEED_A_NAME: Trying to bind "something" without any name');a.push(i);i=null}},h=function(c,a,f){a.split(".").forEach(function(e){if(!c||!(e in c))if(f)return c=void 0;else throw Error("MISSING: Trying to require something that doesn't exist"+a);c=c[e]});return c},e=function(c,a){var f={};a.split(".").forEach(function(a){f.o=c;f.k=a;a in c||(c[a]={});c=c[a]});return f},c=function(){f();var c=g,e=a;g=[];
a=[];var d={};e.forEach(function(c){if(c.name in d)throw Error("ALREADY_DEFINED: You are shadowing "+d[c.name]+" with "+c+" for name "+c.name);d[c.name]=c.value});c.forEach(function(c){if(c.name in d)throw Error("ALREADY_DEFINED: You are shadowing name "+c.name);d[c.name]=h(b,c.module,c.optional)});return d};this.use=function(c,a){f();d={module:c,name:c.split(".").pop(),optional:a};return this};this.add=function(c,a){if(c===void 0&&!a)throw Error("UNDEFINED: Requesting something local that is undefined");
f();i={value:c};return this};this.as=function(c){if(d)d.name=c;else if(i)i.name=c;f()};this.pack=function(a,f){var d=c(),i=e(b,a);(d=f.apply(i.o[i.k],[d]))&&(i.o[i.k]=d)};this.run=function(a){var f=c();a.apply({},[f])}}).apply(PhoneApp,[window]);
PhoneApp.pack("PhoneApp.types",function(){var b=0,g={};this.Object=function(){this.__class__="[PhoneApp.Object]"};this.Object.prototype.toString=function(){return this.__class__};var d=function(c,a,f){var e,b=true,d,h,n;f.__property__.forEach(function(k){var p=i(this,k)||i(window,k);if(p){h=p.shift();n=p.shift();var s=g[this.__id__];h.addObserver(n,function(i,g,p){d=[void 0,h,n,p];if(s[a]){var k=e,q=f.apply(c,d);k!=q&&(e=q,s[a].forEach(function(f){window.setTimeout(function(){f.collapse&&c[a]!==q||
f.apply(c,[a,k,q])},1)}))}else b=true})}else console.error("Trying to property non-existent",k)},c);Object.defineProperty(c,a,{enumerable:true,configurable:true,get:function(){b&&(b=false,d||(d=[void 0,h,n,h&&h[n]]),e=f.apply(this,d));return e},set:function(c){d?d[0]=c:d=[c,h,n];e=f.apply(this,d);d[0]=void 0;return e}})},a=/[A-Za-z0-9]Binding$/;this.Object.create=this.Object.prototype.create=function(c){c=new (this.extend(c));g[c.__id__=b++]={};var f=[],e;for(e in c)f.push(e);f.forEach(function(c){var f=
this[c];f&&(a.test(c)?(PhoneApp.Binding.bind(this,c.substr(0,c.length-7),f),this.hasOwnProperty(c)?delete this[c]:delete Object.getPrototypeOf(this)[c]):(f.hasOwnProperty("__observes__")&&f.__observes__.forEach(function(c){var a=i(this,c)||i(window,c);if(a){var e=a.shift(),d=a.shift();if(!("addObserver"in e))throw Error("NOT_OBSERVABLE: "+e);e.addObserver(d,function(){f.apply(e,[e,d])})}else console.error("Trying to observe non existent",c)},this),f.hasOwnProperty("__property__")&&d(this,c,f)))},
c);c.init();return c};this.Object._super=this.Object.prototype._super=function(c,a,f){return this.prototype[c].apply(a||this,f)};this.Object.extend=this.Object.prototype.extend=function(c){var c=c||{},a;a=c.constructor!=Function?function(){Object.keys(c).forEach(function(a){this[a]=c[a]},this)}:c;a.prototype=new this;a.extend=this.extend;a.create=this.create;a._super=this._super;return a};this.Object.prototype.init=function(){};this.Object.prototype.addObserver=function(c,a,f){c in g[this.__id__]||
(g[this.__id__][c]=[]);c=g[this.__id__][c];if(c.indexOf(a)==-1)a.collapse=f===void 0||f,c.push(a)};this.Object.prototype.removeObserver=function(c,a){if(c in g[this.__id__]){var f=g[this.__id__][c],e=f.indexOf(a);e!=-1&&f.splice(e,1)}};this.Object.prototype.set=function(c,a){var e=f(this,c),d=e.shift(),c=e.shift(),b=d[c];a!==b&&(d[c]=a,(g[d.__id__][c]||[]).forEach(function(f){window.setTimeout(function(){f.collapse&&d[c]!==a||f.apply(d,[c,b,a])},1)}))};this.Object.prototype.destroy=function(){delete g[this.__id__];
for(var c in this)delete this[c]};this.Object.isExtensionOf=function(c,a){return c&&c.prototype&&c.prototype instanceof a};var i=function(c,a){for(var f=a.split(".");c&&f.length>1;)c=c[f.shift()];c&&!(f[f.length-1]in c)&&(c=null);return c?[c,f.shift()]:void 0},f=function(c,a){for(var f=a.split("."),e;f.length>1;)e=f.shift(),e in c||(c[e]={}),c=c[e];return[c,f.shift()]};PhoneApp.get=this.Object.prototype.get=function(c){(c=i(this,c)||i(window,c))&&(c=c.shift()[c.pop()]);return c};var h,e;PhoneApp.Binding=
{oneWay:function(c){return function(c,a,f,e){return e}.property(c)},bothWays:function(c){return function(c,a,f,e){if(c===void 0)return e;a.set(f,c);return c}.property(c)},from:function(c){h=c;return this},to:function(c){e=c;return this},connect:function(c){this.bind(c,e,h);e=h=void 0},bind:function(c,a,f){d(c,a,this.bothWays(f))}};Function.prototype.observes=function(){this.__observes__=Array.prototype.slice.call(arguments);return this};Function.prototype.property=function(){this.__property__=Array.prototype.slice.call(arguments);
return this}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp.types",function(b){Array.prototype.replace=function(a,d,f){var b;f===void 0&&(f=[]);if(!f||f.constructor!=Array)f=[f];b=f.map(function(c){return c});b.unshift(d);b.unshift(a);var e=Array.prototype.splice.apply(this,b);"__hashcache__"in this&&this.__hashcache__.forEach(function(c){window.setTimeout(function(){c.apply(this,[a,f,e])}.bind(this),1)},this);return e};Array.prototype.popObject=function(){return this.replace(this.length-1,1)};Array.prototype.pushObject=function(a){return this.replace(this.length,
0,a)};Array.prototype.shiftObject=function(){return this.replace(0,1)};Array.prototype.unshiftObject=function(a){return this.replace(0,0,a)};Array.prototype.removeObject=function(a){a=this.indexOf(a);if(a!=-1)return this.replace(a,1)};Array.prototype.insertAt=function(a,d){return this.replace(a,0,d)};Array.prototype.removeAt=function(a){return this.replace(a,1)};Array.prototype.clear=function(){return this.replace(0,this.length)};Array.prototype.removeArrayObserver=function(a){"__hashcache__"in this&&
(a=this.__hashcache__.indexOf(a),a!=-1&&this.__hashcache__.splice(a,1))};Array.prototype.addArrayObserver=function(a){if(!("__hashcache__"in this))this.__hashcache__=[];this.__hashcache__.push(a)};var g=function(a,d,f){if(d!=f){var b=a[d],b=a.replace(f,1,b);a.replace(d,1,b)}},d=function(a,b,f,h){if(!(f>=h)){g(a,f,Math.floor((f+h)/2));var e,c=f;for(e=f+1;e<=h;e++)b(a[e],a[f])<0&&g(a,++c,e);g(a,f,c);d(a,b,f,c-1);d(a,b,c+1,h)}};Array.prototype.quickSort=function(a){d(this,a,0,this.length-1);return this};
this.ArrayController=b.Object.extend({length:0,init:function(){b.Object._super("init",this);var a=false,d=false,f=false,h=false,e=[],c=function(){return true},g=function(c){return c},o=function(c,a){return c<a?-1:c==a?0:1},j=Infinity,l=function(a,b,k){k.forEach(function(c){c=d.indexOf(c,a);c!=-1&&(d.splice(c,1),c=f.splice(c,1).pop(),c=h.indexOf(c),h.splice(c,1),c<e.length&&e.replace(c,1))});b.forEach(function(b){if(c(b)){d.splice(a,0,b);b=g(b);f.splice(a,0,b);var k=0;h.some(function(c,a){o(b,c)>=
0&&(k=a+1);return o(b,c)<0});h.splice(k,0,b);k<=e.length&&k<j&&e.replace(k,0,b)}});e.length>j&&e.replace(j,e.length-j);j!=Infinity&&e.length<j&&e.length<h.length&&e.replace(e.length,0,h.slice(e.length,j));this.set("length",e.length)}.bind(this);this.destroy=function(){a.removeArrayObserver(l);h=f=d=a=false;this.set("length",0);e.clear()};Object.defineProperty(this,"original",{get:function(){return a}});var m=false;if(this.sort!==void 0)o=this.sort;if(this.filter!==void 0)c=this.filter;if(this.map!==
void 0)g=this.map;if(this.limit!==void 0)j=this.limit;if(this.content!==void 0)a=this.content,m=true;Object.defineProperty(this,"content",{enumerable:true,get:function(){return e},set:function(b){a&&a.removeArrayObserver(l);a=b;a.addArrayObserver(l);d=a.filter(c);f=d.map(g);h=Array.from(f);h.quickSort(o);e.clear();h.some(function(c){e.pushObject(c);return e.length==j});this.set("length",e.length)}});Object.defineProperty(this,"filter",{get:function(){return c},set:function(b){c=b;a&&(d=a.filter(c),
f=d.map(g),h=Array.from(f),h.quickSort(o),e.clear(),h.some(function(c){e.pushObject(c);return e.length==j}),this.set("length",e.length))}});Object.defineProperty(this,"map",{get:function(){return g},set:function(c){g=c;a&&(f=d.map(g),h=Array.from(f),h.quickSort(o),e.clear(),h.some(function(c){e.pushObject(c);return e.length==j}),this.set("length",e.length))}});Object.defineProperty(this,"sort",{get:function(){return o},set:function(c){o=c;a&&(h.quickSort(o),e.clear(),h.some(function(c){e.pushObject(c);
return e.length==j}),this.set("length",e.length))}});Object.defineProperty(this,"limit",{get:function(){return j},set:function(c){j=c;a&&(e.length>j?e.replace(j,e.length-j):e.replace.apply(e,[e.length,0,h.slice(e.length,j)]),this.set("length",e.length))}});if(m)this.content=a}})});PhoneApp.add(Error).as("NativeError");
PhoneApp.pack("PhoneApp.types",function(b){this.Error=function(g,d){var a=b.NativeError.apply(this,[d]);if(!(this==window||this===void 0))if(this.message=a.message,this.stack=a.stack,this.name=g,!this.stack)this.stack=printStackTrace()};Object.getOwnPropertyNames(b.NativeError.prototype).forEach(function(g){g!="constructor"&&(this.Error.prototype[g]=b.NativeError.prototype[g])},this);"NOT_IMPLEMENTED,UNSPECIFIED,NOT_INITIALIZED,WRONG_ARGUMENTS,UNSUPPORTED,NATURAL_BORN_CRASH".split(",").forEach(function(b,
d){this.Error[b]=this.Error.prototype[b]=d},this);this.Error.prototype.toString=function(){return this.name+": "+this.message+"\nStack: "+(typeof this.stack=="array"?this.stack.join("\n"):this.stack)}});PhoneApp.use("PhoneApp.types.Error");
PhoneApp.pack("PhoneApp.service",function(b){this.Error=function(g,d,a){b.Error.apply(this,arguments);this.details=a};this.Error.prototype=Object.create(b.Error.prototype);"OPENING_FAILED,SEND_FAILED,FAILED_UID,MEANINGLESS_DATA,BAD_REQUEST,MISSING,BAD_REQUEST,UNAUTHORIZED,INVALID_SIGNATURE,WRONG_CREDENTIALS,SHOULD_NOT_HAPPEN,SERVICE_UNAVAILABLE,UNAUTHORIZED,UNSPECIFIED".split(",").forEach(function(b){this[b]=this.prototype[b]=b},this.Error)});PhoneApp.add(XMLHttpRequest).as("XMLHttpRequest");PhoneApp.use("PhoneApp.service.Error");
PhoneApp.pack("PhoneApp.service",function(b){var g=typeof File!="undefined"&&typeof Blob!="undefined";this.SimpleClient=function(){var a,d="",f="",h="",e=b.XMLHttpRequest;this.configure=function(c){if(c.host)a=c.host;if(c.port)d=c.port;c.scheme&&(h=c.scheme+":");if(c.version)f=c.version;if(c.backend)e=c.backend};Object.defineProperty(this,"Backend",{get:function(){return e}});this.url=function(c){var b=h+"//"+a+(d?":"+d:"")+(f?"/"+f:"");c.service&&(b+="/"+c.service);c.id&&(b+="/"+encodeURIComponent(c.id));
c.command&&(b+="/"+c.command);c.additional&&(b+="/"+c.additional.map(encodeURIComponent).join("/"));if(!c.params)c.params={};var e=[];Object.keys(c.params).forEach(function(a){e.push(encodeURIComponent(a)+"="+encodeURIComponent(c.params[a]))});e.length&&(b+="?"+e.join("&"));return b}};var d=function(){var a=this.inner,d=this.options.onfailure,f=this.options.onsuccess;if(a)if(a.readyState==a.FAILED_OPENING)this.inner=this.engine=this.options.onsuccess=this.options.onfailure=a.onreadystatechange=null,
this.error=new b.Error(b.Error.UNAUTHORIZED,"Not authorized to access this",this),d&&d(this.error);else{if(a.readyState==a.DONE){var h=this.engine;this.inner=this.engine=this.options.onsuccess=this.options.onfailure=a.onreadystatechange=null;try{if(a.responseText)this.data=JSON.parse(a.responseText)}catch(e){try{this.data=(new DOMParser).parseFromString(a.responseText,"application/xml")}catch(c){this.data=a.responseText,this.error=new b.Error(b.Error.MEANINGLESS_DATA,"WHAT? ALBATROS?",this)}}switch(a.status){case 200:case 201:break;
case 308:this.options.url=a.getResponseHeader("Location");h.query(h.GET,this.options,this.headers);return;case 400:this.error=new b.Error(b.Error.BAD_REQUEST,"Bad request!",this);break;case 401:this.error=a.getResponseHeader("WWW-Authenticate")?new b.Error(b.Error.WRONG_CREDENTIALS,"Wrong street cred",this):new b.Error(b.Error.INVALID_SIGNATURE,"Invalid singing",this);break;case 402:case 403:case 405:case 501:this.error=new b.Error(b.Error.UNAUTHORIZED,"Not authorized to access this",this);break;
case 404:this.error=new b.Error(b.Error.MISSING,"Missing resource",this);break;case 406:case 411:case 412:case 413:case 414:case 415:case 416:case 417:this.error=new b.Error(b.Error.SHOULD_NOT_HAPPEN,"Should never happen",this);break;case 500:case 503:this.error=new b.Error(b.Error.SERVICE_UNAVAILABLE,"Server is down",this);break;case 0:this.error=new b.Error(b.Error.UNAUTHORIZED,"Not authorized to access this",this);break;default:this.error=new b.Error(b.Error.UNSPECIFIED,"WTF?",this)}if(this.error)throw d&&
d(this.error),this.error;f&&f(this.data)}}else console.warn("BAD SHIT HAPPENED!")};this.SimpleClient.prototype.query=function(a,i,f){var h=new this.Backend,a=a||this.GET,e=i.url||this.url(i);f||(f={});if(!f.Accept)f.Accept="application/json";var c={options:i,method:a,headers:f,error:null,data:{},exception:null};h.onreadystatechange=d.bind(c);try{h.open(a,e,true)}catch(t){c.exception=t.toString();c.error=new b.Error(b.Error.OPENING_FAILED,"Failed opening likely bogus request",c);if(i.onfailure)i.onfailure(c.error);
throw c.error;}e=i.payload;if(a==this.POST&&(f["Content-Type"]||(f["Content-Type"]=g&&(e instanceof File||e instanceof Blob)?e.type:"application/json"),f["Content-Type"]=="application/json"))try{e=JSON.stringify(e)}catch(o){f["Content-Type"]="application/octet-stream"}Object.keys(f).forEach(function(c){h.setRequestHeader(c,f[c])});try{h.send(e)}catch(j){c.exception=j.toString();c.error=new b.Error(b.Error.SEND_FAILED,"Failed sending. Bogus payload?",c);if(i.onfailure)i.onfailure(c.error);throw c.error;
}c.inner=h;c.engine=this};this.SimpleClient.HEAD=this.SimpleClient.prototype.HEAD="HEAD";this.SimpleClient.GET=this.SimpleClient.prototype.GET="GET";this.SimpleClient.POST=this.SimpleClient.prototype.POST="POST";this.SimpleClient.PATCH=this.SimpleClient.prototype.PATCH="PATCH";this.SimpleClient.PUT=this.SimpleClient.prototype.PUT="PUT";this.SimpleClient.DELETE=this.SimpleClient.prototype.DELETE="DELETE"});
PhoneApp.pack("PhoneApp",function(){this.Run=function(b,a){var g=null;this.start=function(){g=window.setInterval(a,b)};this.stop=function(){window.clearInterval(g)}};var b=[],g=[];this.renderLoop={add:function(d,a,g){b.push({view:d,operation:a,callback:g})},schedule:function(d,a,g){b.push({view:a,operation:"schedule",callback:d,extra:g})},hook:function(b){g.indexOf(b)==-1&&g.push(b)}};(function(b,a){var g,f=Date.now(),h=function(e){g!==false&&(requestAnimationFrame(h,a),g=b(e-f,e),f=e)};h()})(function(d){if(!(d>
160)){for(var d=b.shift(),a,i=[];d;){a=d.view;if(d.operation=="schedule")d.callback.apply(a,d.extra);else{var f=document.getElementById(a.elementId);if(d.operation=="render"){if(!f){i.push(d);d=b.shift();continue}a.render(f)}else d.operation=="destroy"&&f&&a.element.parentNode.removeChild(a.element);d.callback&&d.callback.call(a,d.operation)}d=b.shift()}g.forEach(function(a){a()});b=i;return true}})});
PhoneApp.pack("PhoneApp.types",function(){var b={};String.prototype.dasherize=function(){return!this.length?"":b[this]||(b[this]=this.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())};String.prototype.replaceAt=function(b,d){return this.substr(0,b)+d+this.substr(b+d.length)}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(b){this.Application=b.Object.extend({rootElement:$("body").get(0),ready:PhoneApp.K,autoHideSplash:false,device:b.Object.create({states:{BACKGROUND:"background",RUNNING:"running"},state:null,isIphone:false,isIpad:false,isRetina:false,isAndroid:false,isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)}.property()}),network:b.Object.create({types:window.Connection||{},states:{ONLINE:"online",OFFLINE:"offline"},type:null,state:null}),
hideSplash:function(){this.device.isMobile&&navigator.splashscreen.hide&&navigator.splashscreen.hide()},onDeviceReady:function(){var b;$(this.rootElement).empty();this.rootView.controller=this.rootController;this.rootView.appendTo(this.rootElement);window.devicePixelRatio>1&&this.device.set("isRetina",true);this.device.isMobile&&(window.KeyboardToolbarRemover&&cordova.require("cordova/plugin/keyboard_toolbar_remover").hide(),this.autoHideSplash&&this.hideSplash(),window.device&&(b=window.device.platform.toLowerCase(),
b.indexOf("iphone")!==-1?this.device.set("isIphone",true):b.indexOf("ipad")!==-1?this.device.set("isIpad",true):b.indexOf("android")!=-1&&this.device.set("isAndroid",true),(new PhoneApp.Run(1E3,function(){navigator.connection.type==window.Connection.NONE&&this.network.set("state",this.network.states.OFFLINE);navigator.connection.type!=this.networkType&&this.network.set("type",navigator.connection.type)}.bind(this))).start()));this.router.transitionTo("index")},bindPhoneGapEvents:function(){document.addEventListener("deviceready",
function(){this.onDeviceReady();this.ready()}.bind(this),false);document.addEventListener("pause",function(){this.device.set("state",this.device.states.BACKGROUND);this.onPause()}.bind(this),false);document.addEventListener("resume",function(){this.device.set("state",this.device.states.RUNNING);this.onResume()}.bind(this),false);document.addEventListener("online",function(){this.network.set("state",this.network.states.ONLINE)}.bind(this),false);document.addEventListener("offline",function(){this.network.set("state",
this.network.states.OFFLINE)}.bind(this),false)},initialize:function(){if(this.device.isMobile)this.bindPhoneGapEvents();else this.onDeviceReady()}})});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(b){var g=function(b,a){var i=b.split("."),f=[];Object.keys(i).forEach(function(h){var e=i[h];if(!(h==i.length-1&&e=="index"))if(e in a)a=a[e],f.push({path:e,route:a});else throw Error("unknown path "+b);});a.index&&a.index.redirectsTo&&f.push.apply(f,g(a.index.redirectsTo,a));return f};this.Route=b.Object.extend({_childs:{},route:null,enter:PhoneApp.K,leave:PhoneApp.K,redirectsTo:null,connectOutlets:PhoneApp.K,parentRoot:null,setup:PhoneApp.K,init:function(){Pa.Route._super("init",
this);this.setup&&this.setup();for(var d in this)if(b.Object.isExtensionOf(this[d],Pa.Route))this[d]=this[d].create(),this[d].parentRoot=this,this._childs[d]=this[d]},toString:function(){return"PhoneApp.Route"}});this.Router=b.Object.extend({enableLogging:false,root:PhoneApp.Route,currentPath:"",controllers:{},leaveHook:PhoneApp.K,enterHook:PhoneApp.K,connectOutletsHook:PhoneApp.K,init:function(){Pa.Router._super("init",this);this.root=this.root.create()}});this.Router.toString=this.Router.prototype.toString=
function(){return"PhoneApp.Router"};this.Router.prototype.transitionTo=function(b,a){var i=g(b,this.root),f=i.length-1,h="root",e=[];this.currentPath&&(e=g(this.currentPath,this.root));var c;i.forEach(function(b,d){h+="."+b.path;c=e.shift();if(!(c&&b.path==c.path)){if(c){for(var g=e.pop();g;)g.route.leave&&g.route.leave(this),this.leaveHook(g.route),g=e.pop();c.route.leave&&c.route.leave(this);this.leaveHook(c.route)}b.route.enter(this,a);this.enterHook(b.route,a);d==f&&(this.set("currentPath",h.replace("root.",
"")),this.set("currentRoute",b.route),b.route.connectOutlets(this,a),this.connectOutletsHook(b.route,a))}},this)}});PhoneApp.use("PhoneApp.types.Object");PhoneApp.pack("PhoneApp",function(b){this.Controller=b.Object.extend({isController:true,content:null,connectOutlet:function(b){var d=b.viewClass,a=b.controller||this,i=b.context||null,b=b.outletName||"view";a&&i&&a.set("content",i);d=d.create();d.set("controller",a);this.set(b,d)},removeOutlet:function(b){this.set(b,null)}})});
PhoneApp.pack("PhoneApp",function(){var b=0;this.Metamorph=function(g,d,a){this.id=++b;this.startNodeId="metamorph-"+this.id+"-start";this.endNodeId="metamorph-"+this.id+"-end";var i=function(a,b,e){var a=document.getElementById(this.startNodeId),c=document.getElementById(this.endNodeId);if(!a||!c)throw Error("Miss Metamorph hooks");var d=a.nextSibling;PhoneApp.renderLoop.schedule(function(){if(e.isView){var a=e?e.render():document.createTextNode("");if(e)e._parentView=g,g._childViews.push(e),e.willInsertElement();
d==c?c.parentNode.insertBefore(a,c):d.parentNode.replaceChild(a,d);e&&e.didInsertElement();b&&b.isView&&b.destroy()}else d==c?c.parentNode.insertBefore(c,document.createTextNode(e||"")):d.textContent=e||""})}.bind(this);d.addObserver(a,i);this.renderWrapper=function(){return'<script id="'+this.startNodeId+'"><\/script>'+(d.get(a)||" ")+'<script id="'+this.endNodeId+'"><\/script>'};this.destroy=function(){d.removeObserver(a,i)}}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(b){var g=0,d=0,a=function(a){var a=a.split(":"),b=a[0],e="",c,d,g=b.split("."),i=g.pop(),g=g.join(".");a.length>1&&(c=a[1],a.length===3&&(d=a[2]),e=":"+c,d&&(e+=":"+d));return{path:b,property:i,parent:g,classNames:e,className:c===""?void 0:c,falsyClassName:d}},i=function(a,b,d){a&&(d?a.setAttribute(b,d):a.removeAttribute(b))};this.View=b.Object.extend({template:null,templateName:null,controller:null,classNames:null,attributeBindings:null,classNameBindings:null,attributes:null,
willInsertElement:PhoneApp.K,didInsertElement:PhoneApp.K,willDestroyElement:PhoneApp.K,isView:true,tagName:"div",element:null,elementId:null,_parentView:null,_childViews:null,_compiledTpl:null,_isDestroying:false,_meta_observers:null,_metamorphs:null,init:function(){PhoneApp.View._super("init",this);this.elementId="phoneapp"+this.__id__;PhoneApp.View.views[this.elementId]=this;this._childViews=[];if(!this.attributeBindings)this.attributeBindings=[];if(this.classNameBindings){if(typeof this.classNameBindings==
"string")this.classNameBindings=this.classNameBindings.split(/\s+/)}else this.classNameBindings=[];if(this.classNames){if(typeof this.classNames=="string")this.classNames=this.classNames.split(" ")}else this.classNames=[];if(!this.attributes)this.attributes=[];this._meta_observers=[];this._metamorphs=[];var a=null;if(this.template)a=this.template;else if(this.templateName&&(a=PhoneApp.TEMPLATES[this.templateName],!a))throw Error("unknown template : "+this.templateName);this._compiledTpl=a||PhoneApp.K},
context:function(){var a=this.controller;if(!a&&this._parentView&&this._parentView.controller)a=this._parentView.controller;var b={};PhoneApp.ENV.HANDLEBARS_EXPOSE_OBJECTS.forEach(function(a){b[a]=window[a]});b.controller=a;b.view=this;return b}.property("controller"),$:function(a){return a?$(this.element).find(a):$(this.element)},appendTo:function(a){this.willInsertElement();var b=this.render();$(b).appendTo(a);this.didInsertElement()},insertChildAt:function(a,b){a.willInsertElement();PhoneApp.renderLoop.schedule(function(){this.element.insertBefore(a.element||
a.render(),this.element.children[b]);a.didInsertElement()},this);a._parentView=this;this._childViews.push(a);return a},appendChild:function(a){a.willInsertElement();PhoneApp.renderLoop.add(a,"render",function(){this.didInsertElement()});a._parentView=this;this._childViews.push(a);return a},rerender:function(){this._metamorphs.forEach(function(a){a.destroy()});return Pa.renderLoop.schedule(function(){this.render(this.element)},this)},renderWrapper:function(){var a=[],b="",d;this.attributeBindings.forEach(function(c){var b=
c;c.indexOf(":")>-1&&(c=c.split(":"),b=c.pop(),c=c.pop());a.push({attribute:c,value:b})},this);b=this.classNames.join(" ");this.classNameBindings&&a.push({attribute:"class",value:this.classNameBindings});a=this._computeAttributesBindings(a);b&&(a["class"]+=" "+b);d=document.createElement(this.tagName);this.attributes.forEach(function(a){a&&(a=a.split("="),d.setAttribute(a.shift(),a.shift()))});Object.keys(a).forEach(function(c){a[c]&&d.setAttribute(c,a[c])});d.setAttribute("id",this.elementId);return d},
render:function(a){if(this._isDestroying)throw Error("Trying to render a destroyed view");a||(a=this.renderWrapper());this.element=a;this.element.innerHTML=this._compiledTpl(this.context)||"";return this.element},_computeAttributesBindings:function(b,d){var e={"class":"",style:""},c=this;b.forEach(function(b){var f=b.attribute,b=b.value,g=d?'[data-phoneapp-binding="'+d+'"]':null,l;if(f=="class")typeof b=="string"&&(b=b.split(/\s+/)),b.forEach(function(b){var d=a(b);if(d.parent.indexOf("view")===0)d.parent=
d.parent.replace("view.",""),d.path=d.path.replace("view.",""),b=d.path;!d.path&&d.className?e["class"]+=" "+d.className:(d.parent=d.parent?this.get(d.parent):this,b=function(a,b,f,h){if(!c._isDestroying){!l&&!h&&(l=!g?c.element:c.element.querySelector(g));l&&(e["class"]=l.getAttribute("class")||"");a=typeof f;if(a=="boolean"||a=="number"){if(!d.className)d.className=d.property.dasherize();e["class"]=e["class"].replace(d.className,"").replace(d.falsyClassName,"");f?e["class"]+=" "+d.className:d.falsyClassName&&
(e["class"]+=" "+d.falsyClassName)}else a=="string"&&(e["class"]=e["class"].replace(b,f));h||Pa.renderLoop.schedule(i,c,[l,"class",e["class"]])}},b(d.property,"",this.get(d.path),true),this._meta_observers.push({parent:d.parent,property:d.property,callback:b}),d.parent.addObserver(d.property,b))},this);else if(f=="style")typeof b=="string"&&(b=b.split(/\s+/)),b.forEach(function(b){var d=a(b);d.styleName=d.className;d.styleValue=d.falsyClassName;d.isBinding=d.styleValue.indexOf("{{this}}")!=-1;!d.path&&
!d.isBinding?e.style+=" "+d.styleName+":"+d.styleValue:(d.parent=d.parent?this.get(d.parent):this,b=function(a,b,f,h){if(!c._isDestroying){!l&&!h&&(l=!g?c.element:c.element.querySelector(g));if(l)e.style=l.getAttribute("style");var k={};(e.style||"").split(";").forEach(function(a){a&&(a=a.split(":"),k[a.shift().trim()]=a.shift())});f?k[d.styleName.trim()]=d.styleValue.replace("{{this}}",f):delete k[d.styleName.trim()];e.style="";Object.keys(k).forEach(function(a){e.style+=a+":"+k[a]+";"});h||Pa.renderLoop.schedule(i,
c,[l,"style",e.style])}},b(d.property,"",this.get(d.path),true),this._meta_observers.push({parent:d.parent,property:d.property,callback:b}),d.parent.addObserver(d.property,b))},this);else{var m=b.split("."),r=m.pop(),m=m.join("."),n;m.indexOf("view")===0&&(m=m.replace("view.",""),b=b.replace("view.",""));m=m?this.get(m):this;n=function(a,b,d,h){!c._isDestroying&&e[f]!=d&&(e[f]=d,h||(l||(l=!g?c.element:c.element.querySelector(g)),Pa.renderLoop.schedule(i,c,[l,f,e[f]])))};n(r,"",this.get(b),true);this._meta_observers.push({parent:m,
property:r,callback:n});m.addObserver(r,n)}},this);return e},_addAction:function(a,b,e,c){var g=++d;$(this.element).on(a,'[data-phoneapp-action="'+g+'"]',function(a){a.context=e;b.call(c,a)}.bind(this));return"data-phoneapp-action="+g},_addAttributeBindings:function(a){var b=++g,d;d=this._computeAttributesBindings(a,b);var c="data-phoneapp-binding="+b;Object.keys(d).forEach(function(a){d[a]&&(c+=" "+a+'="'+d[a]+'"')});return c},_addMetamorph:function(a,b){var d=new PhoneApp.Metamorph(this,a,b);this._metamorphs.push(d);
return d},destroy:function(){this.willDestroyElement();this._isDestroying=true;this._meta_observers.forEach(function(a){a.parent.removeObserver(a.property,a.callback)});this._metamorphs.forEach(function(a){a.destroy()});this._parentView&&!this._parentView._isDestroying&&this._parentView._childViews.removeObject(this);this.$().off();this._parentView&&this._parentView._isDestroying?this._destroyElement():PhoneApp.renderLoop.add(this,"destroy",this._destroyElement)},_destroyElement:function(){delete PhoneApp.View.views[this.elementId];
this._childViews.forEach(function(a){a.destroy()});PhoneApp.View._super("destroy",this)}});this.View.views={}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(){this.CollectionView=this.View.extend({content:null,itemViewClass:Pa.View,_childTemplate:null,_domTree:null,_replaceTree:null,init:function(){PhoneApp.CollectionView._super("init",this);this._replaceTree={}},didInsertElement:function(){if(this.content)this.content.content.length&&this._domController(0,this.content.content,[]),this._domController=this._domController.bind(this),this.content.content.addArrayObserver(this._domController),this.addObserver("content",function(b,
g,d){g.content.removeArrayObserver(this._domController);d.content.addArrayObserver(this._domController)})},_domController:function(b,g,d){var a=this.element.children;g.forEach(function(a,d){var g=b+d,e;g in this._replaceTree?(e=this._replaceTree[g],delete this._replaceTree[g]):(e=this.itemViewClass.create({tagName:"li"}),e._compiledTpl=this._childTemplate,e.controller=this.controller,e.content=a);this.insertChildAt(e,g)},this);d.forEach(function(d){a[b]?(d=this.content.content.indexOf(d),d==-1?this._childViews[b].destroy():
this._replaceTree[d]=this._childViews.removeAt(b)[0]):console.error("Collection trying to remove a dom node that does not exists",b,d)},this)},willDestroyElement:function(){this.content.content.removeArrayObserver(this._domController)}})});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(){var b=function(b,a,g){for(var b=b.children,f,h=0;h<b.length;h++){f=b[h];var e=a;f=f.style;f.webkitTransitionDuration=f.MozTransitionDuration=f.msTransitionDuration=f.OTransitionDuration=f.transitionDuration=g+"ms";f.MozTransform=f.webkitTransform="translate3d(0,"+e+"px,0)";f.msTransform=f.OTransform="translateX("+e+"px)"}},g=function(b){for(var a=b.scrollTop,g=b.children,f=function(){this.style.webkitTransition="-webkit-transform 0s ease-out";this.style.webkitTransform=
"translate3d(0,0,0)";b.scrollTop=0;this.removeEventListener("webkitTransitionEnd",f)},h=0;h<g.length;h++)g[h].style.webkitTransition="-webkit-transform 300ms ease-out",g[h].addEventListener("webkitTransitionEnd",f,false),g[h].style.webkitTransform="translate3d(0, "+a+"px,0)"};this.ScrollableView=this.View.extend({offsetPullToRefresh:50,isScrolling:false,isLoading:false,didInsertElement:function(){var d=this.element,a=d.querySelector(".pull-to-refresh");b(d,0,0);document.addEventListener("taptotop",
this.scrollToTop);this.$().on("touchmove",function(b){if(!(b.touches.length>1||b.scale&&b.scale!==1))return Pa.renderLoop.schedule(function(){var b=d.scrollTop;if(b>=0||this.isLoading)return true;b<=-this.offsetPullToRefresh?$(a).addClass("drop-to-refresh"):$(a).removeClass("drop-to-refresh");this.set("isActivated",true)},this),true}.bind(this));this.$().on("touchend",function(){if(!this.isActivated||this.isLoading)return true;Pa.renderLoop.schedule(function(){var g=d.scrollTop;if(g>=0)return true;
$(a).removeClass("drop-to-refresh");if(g>-this.offsetPullToRefresh)return true;a.style.webkitTransitionDuration=0;b(this.element,this.offsetPullToRefresh,200);$(a).addClass("loading");this.set("isActivated",false);this.set("isLoading",true);window.setTimeout(function(){this.set("isLoading",false);b(this.element,0,0);$(a).removeClass("loading")}.bind(this),2E3)},this)}.bind(this))},scrollToTop:function(){g(this.element)},willDestroyElement:function(){this.$().off();document.removeEventListener("taptotop",
this.scrollToTop)}})});
(function(){window.Swipe=function(b,g){if(!b)return null;this.options=g||{};this.speed=this.options.speed||300;this.callback=this.options.callback||function(){};this.foldedPosition=this.options.foldedPosition||85;this.lockSlide=this.isSliding=this.activated=false;this.element=b;this.setup();this.element.addEventListener&&(this.element.addEventListener("touchstart",this,false),this.element.addEventListener("touchmove",this,false),this.element.addEventListener("touchend",this,false),this.element.addEventListener("touchcancel",
this,false),this.element.addEventListener("webkitTransitionEnd",this,false),this.element.addEventListener("msTransitionEnd",this,false),this.element.addEventListener("oTransitionEnd",this,false),this.element.addEventListener("transitionend",this,false),window.addEventListener("resize",this,false))};window.Swipe.prototype={setup:function(){this.width=Math.ceil("getBoundingClientRect"in this.element?this.element.getBoundingClientRect().width:this.element.offsetWidth);if(this.width===0&&typeof window.getComputedStyle===
"function")this.width=window.getComputedStyle(this.element,null).width.replace("px","");if(!this.width)return null;var b=this.element.style.visibility;this.element.style.visibility="hidden";var g=this.speed;this.speed=0;this.slide();this.speed=g;this.element.style.visibility=b},activate:function(b){this.activated=b;this.slide()},slide:function(){var b=this.element.style;b.webkitTransitionDuration=b.MozTransitionDuration=b.msTransitionDuration=b.OTransitionDuration=b.transitionDuration=this.speed+
"ms";var g=this.activated?0:this.foldedPosition*this.width/100;b.MozTransform=b.webkitTransform="translate3d("+g+"px,0,0)";b.msTransform=b.OTransform="translateX("+g+"px)"},handleEvent:function(b){switch(b.type){case "touchstart":this.onTouchStart(b);break;case "touchmove":this.onTouchMove(b);break;case "touchcancel":case "touchend":this.onTouchEnd(b);break;case "webkitTransitionEnd":case "msTransitionEnd":case "oTransitionEnd":case "transitionend":this.transitionEnd(b);break;case "resize":this.setup()}},
transitionEnd:function(b){this.callback(b)},onTouchStart:function(b){if(!this.lockSlide)this.start={pageX:b.touches[0].pageX,pageY:b.touches[0].pageY,time:Number(new Date),position:this.activated?0:this.foldedPosition*this.width/100},this.isScrolling=void 0,this.direction=0,this.locked=void 0,this.deltaX=0,this.element.style.MozTransitionDuration=this.element.style.webkitTransitionDuration=0},onTouchMove:function(b){if(!this.lockSlide&&!(b.touches.length>1||b.scale&&b.scale!==1)){this.deltaX=b.touches[0].pageX-
this.start.pageX+this.start.position;if(this.direction===0)this.direction=b.touches[0].pageX-this.start.pageX<0?1:2;if(typeof this.isScrolling=="undefined")this.isScrolling=!!(this.isScrolling||Math.abs(this.deltaX)<Math.abs(b.touches[0].pageY-this.start.pageY));if(this.locked===void 0)this.locked=this.direction==1&&this.deltaX<0||this.direction==2&&this.deltaX>this.width;if(!this.isScrolling&&!this.locked){var g=this.deltaX*100/this.width;if(g<80&&!this.activated&&this.direction==1)this.activated=
true;else if(g>20&&this.activated&&this.direction==2)this.activated=false;if(g>-5&&g<this.foldedPosition+5)this.element.style.MozTransform=this.element.style.webkitTransform="translate3d("+(this.deltaX<0?0:this.deltaX)+"px,0,0)",this.isSliding=true;b.stopPropagation();b.stopImmediatePropagation();b.preventDefault();return false}}},onTouchEnd:function(b){if(!this.lockSlide)this.locked=void 0,this.direction=0,(this.isScrolling=void 0)||this.slide(),this.isSliding&&(b.stopPropagation(),b.stopImmediatePropagation(),
b.preventDefault()),this.isSliding=false}}})();
(function(){Handlebars.registerHelper("action",function(b,g,d){var e;var c;var a=null;!d&&g.hash&&(d=g,g=this);if(typeof b=="string"){var a=b.split("."),i=a[0]||"";i==="view"?(a.shift(),b=this.view.get(a.join(".")),a.pop(),c=(a=a.join("."))?this.view.get(a):this.view,a=c):i=="controller"?(a.shift(),b=this.controller.get(a.join(".")),a.pop(),e=(a=a.join("."))?this.controller.get(a):this.controller,a=e):(b=Pa.get(b),a.pop(),a=Pa.get(a.join(".")))}return new Handlebars.SafeString(this.view._addAction(d.hash.on,b,
g,a))})})();(function(){Handlebars.registerHelper("bindAttr",function(b){var g=[];Object.keys(b.hash).forEach(function(d){g.push({attribute:d,value:b.hash[d]})});return new Handlebars.SafeString(this.view._addAttributeBindings(g))});Handlebars.registerHelper("bind",function(b){var a;var g=this.view,d=b.split("."),b=d.pop();d.indexOf("view")==0&&d.shift();a=(d=d.join("."))?g.get(d):g,d=a;g=this.view._addMetamorph(d,b);return new Handlebars.SafeString(g.renderWrapper())})})();
(function(){Handlebars.registerHelper("collection",function(b,g){if(arguments.length==1)g=b,b=Pa.CollectionView;var d={},a=null,i,f=null,a=this.view;if(!a.isView)throw Error("currentView is not a view :)");if(g.fn)d._childTemplate=g.fn;Object.keys(g.hash).forEach(function(a){d[a]=g.hash[a]});if(!d.controller)d.controller=this.controller;if(!b.apply)throw Error("collection view is already instantiated");if(d.bindToView)f=d.bindToView,delete d.bindToView;i=b.create(d);f&&a.set(f,i);a.appendChild(i);
return new Handlebars.SafeString(i.renderWrapper().outerHTML)})})();(function(){Handlebars.registerHelper("outlet",function(b,g){var d="view";typeof b=="string"&&(d=b);if(b.fn||g&&g.fn)throw Error("Outlet can not be a block");var a=null,a=this.view;if(!a.isView)throw Error("currentView is not a view :)");this.controller.set("view",null);d=a._addMetamorph(this.controller,d);return new Handlebars.SafeString(d.renderWrapper())})})();
(function(){Handlebars.registerHelper("view",function(b,g){if(!b)throw Error("Unknown view");var d={},a=null,i=null,a=this.view;if(!a.isView)throw Error("currentView is not a view :)");if(g.fn)d.template=g.fn;Object.keys(g.hash).forEach(function(a){d[a]=g.hash[a]});if(!d.controller)d.controller=this.controller;if(d.bindToView)i=d.bindToView,delete d.bindToView;var f=b.create(d);i&&a.set(i,f);a.appendChild(f);return new Handlebars.SafeString(f.renderWrapper().outerHTML)})})();
