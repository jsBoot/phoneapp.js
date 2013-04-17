'use strict';(function(){this.Pa=this.Em=this.Ember=this.PhoneApp={K:function(){},TEMPLATES:Handlebars.templates||{},ENV:{HANDLEBARS_EXPOSE_OBJECTS:[]}}}).apply(this);
(function(b){var g=[],e,c=[],i,a=function(){e&&(g.push(e),e=null);if(i){if(!i.name)throw Error('NEED_A_NAME: Trying to bind "something" without any name');c.push(i);i=null}},h=function(d,a,c){a.split(".").forEach(function(f){if(!d||!(f in d))if(c)return d=void 0;else throw Error("MISSING: Trying to require something that doesn't exist"+a);d=d[f]});return d},f=function(d,a){var c={};a.split(".").forEach(function(a){c.o=d;c.k=a;a in d||(d[a]={});d=d[a]});return c},d=function(){a();var d=g,f=c;g=[];
c=[];var e={};f.forEach(function(d){if(d.name in e)throw Error("ALREADY_DEFINED: You are shadowing "+e[d.name]+" with "+d+" for name "+d.name);e[d.name]=d.value});d.forEach(function(d){if(d.name in e)throw Error("ALREADY_DEFINED: You are shadowing name "+d.name);e[d.name]=h(b,d.module,d.optional)});return e};this.use=function(d,c){a();e={module:d,name:d.split(".").pop(),optional:c};return this};this.add=function(d,c){if(d===void 0&&!c)throw Error("UNDEFINED: Requesting something local that is undefined");
a();i={value:d};return this};this.as=function(d){if(e)e.name=d;else if(i)i.name=d;a()};this.pack=function(a,c){var h=d(),e=f(b,a);(h=c.apply(e.o[e.k],[h]))&&(e.o[e.k]=h)};this.run=function(a){var c=d();a.apply({},[c])}}).apply(PhoneApp,[window]);
PhoneApp.pack("PhoneApp.types",function(){var b=0,g={};this.Object=function(){this.__class__="[PhoneApp.Object]"};this.Object.prototype.toString=function(){return this.__class__};var e=function(d,a,c){var f,b=true,h,e,n;c.__property__.forEach(function(k){var p=i(this,k)||i(window,k);if(p){e=p.shift();n=p.shift();var s=g[this.__id__];e.addObserver(n,function(g,i,p){h=[void 0,e,n,p];if(s[a]){var k=f,q=c.apply(d,h);k!=q&&(f=q,s[a].forEach(function(c){window.setTimeout(function(){c.collapse&&d[a]!==q||
c.apply(d,[a,k,q])},1)}))}else b=true})}else console.error("Trying to property non-existent",k)},d);Object.defineProperty(d,a,{enumerable:true,configurable:true,get:function(){b&&(b=false,h||(h=[void 0,e,n,e&&e[n]]),f=c.apply(this,h));return f},set:function(d){h?h[0]=d:h=[d,e,n];f=c.apply(this,h);h[0]=void 0;return f}})},c=/[A-Za-z0-9]Binding$/;this.Object.create=this.Object.prototype.create=function(d){d=new (this.extend(d));g[d.__id__=b++]={};var a=[],f;for(f in d)a.push(f);a.forEach(function(d){var a=
this[d];a&&(c.test(d)?(PhoneApp.Binding.bind(this,d.substr(0,d.length-7),a),this.hasOwnProperty(d)?delete this[d]:delete Object.getPrototypeOf(this)[d]):(a.hasOwnProperty("__observes__")&&a.__observes__.forEach(function(d){var c=i(this,d)||i(window,d);if(c){var f=c.shift(),h=c.shift();if(!("addObserver"in f))throw Error("NOT_OBSERVABLE: "+f);f.addObserver(h,function(){a.apply(f,[f,h])})}else console.error("Trying to observe non existent",d)},this),a.hasOwnProperty("__property__")&&e(this,d,a)))},
d);d.init();return d};this.Object._super=this.Object.prototype._super=function(d,a,c){return this.prototype[d].apply(a||this,c)};this.Object.extend=this.Object.prototype.extend=function(d){var d=d||{},a;a=d.constructor!=Function?function(){Object.keys(d).forEach(function(a){this[a]=d[a]},this)}:d;a.prototype=new this;a.extend=this.extend;a.create=this.create;a._super=this._super;return a};this.Object.prototype.init=function(){};this.Object.prototype.addObserver=function(d,a,c){d in g[this.__id__]||
(g[this.__id__][d]=[]);d=g[this.__id__][d];if(d.indexOf(a)==-1)a.collapse=c===void 0||c,d.push(a)};this.Object.prototype.removeObserver=function(d,a){if(d in g[this.__id__]){var c=g[this.__id__][d],f=c.indexOf(a);f!=-1&&c.splice(f,1)}};this.Object.prototype.set=function(d,c){var f=a(this,d),h=f.shift(),d=f.shift(),b=h[d];c!==b&&(h[d]=c,(g[h.__id__][d]||[]).forEach(function(a){window.setTimeout(function(){a.collapse&&h[d]!==c||a.apply(h,[d,b,c])},1)}))};this.Object.prototype.destroy=function(){delete g[this.__id__];
for(var d in this)delete this[d]};this.Object.isExtensionOf=function(d,a){return d&&d.prototype&&d.prototype instanceof a};var i=function(d,a){for(var c=a.split(".");d&&c.length>1;)d=d[c.shift()];d&&!(c[c.length-1]in d)&&(d=null);return d?[d,c.shift()]:void 0},a=function(d,a){for(var c=a.split("."),f;c.length>1;)f=c.shift(),f in d||(d[f]={}),d=d[f];return[d,c.shift()]};PhoneApp.get=this.Object.prototype.get=function(a){(a=i(this,a)||i(window,a))&&(a=a.shift()[a.pop()]);return a};var h,f;PhoneApp.Binding=
{oneWay:function(a){return function(a,d,c,f){return f}.property(a)},bothWays:function(a){return function(a,d,c,f){if(a===void 0)return f;d.set(c,a);return a}.property(a)},from:function(a){h=a;return this},to:function(a){f=a;return this},connect:function(a){this.bind(a,f,h);f=h=void 0},bind:function(a,c,f){e(a,c,this.bothWays(f))}};Function.prototype.observes=function(){this.__observes__=Array.prototype.slice.call(arguments);return this};Function.prototype.property=function(){this.__property__=Array.prototype.slice.call(arguments);
return this}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp.types",function(b){Array.prototype.replace=function(c,b,a){var h;a===void 0&&(a=[]);if(!a||a.constructor!=Array)a=[a];h=a.map(function(a){return a});h.unshift(b);h.unshift(c);var f=Array.prototype.splice.apply(this,h);"__hashcache__"in this&&this.__hashcache__.forEach(function(d){window.setTimeout(function(){d.apply(this,[c,a,f])}.bind(this),1)},this);return f};Array.prototype.popObject=function(){return this.replace(this.length-1,1)};Array.prototype.pushObject=function(c){return this.replace(this.length,
0,c)};Array.prototype.shiftObject=function(){return this.replace(0,1)};Array.prototype.unshiftObject=function(c){return this.replace(0,0,c)};Array.prototype.removeObject=function(c){c=this.indexOf(c);if(c!=-1)return this.replace(c,1)};Array.prototype.insertAt=function(c,b){return this.replace(c,0,b)};Array.prototype.removeAt=function(c){return this.replace(c,1)};Array.prototype.clear=function(){return this.replace(0,this.length)};Array.prototype.removeArrayObserver=function(c){"__hashcache__"in this&&
(c=this.__hashcache__.indexOf(c),c!=-1&&this.__hashcache__.splice(c,1))};Array.prototype.addArrayObserver=function(c){if(!("__hashcache__"in this))this.__hashcache__=[];this.__hashcache__.push(c)};var g=function(c,b,a){if(b!=a){var h=c[b],h=c.replace(a,1,h);c.replace(b,1,h)}},e=function(c,b,a,h){if(!(a>=h)){g(c,a,Math.floor((a+h)/2));var f,d=a;for(f=a+1;f<=h;f++)b(c[f],c[a])<0&&g(c,++d,f);g(c,a,d);e(c,b,a,d-1);e(c,b,d+1,h)}};Array.prototype.quickSort=function(c){e(this,c,0,this.length-1);return this};
this.ArrayController=b.Object.extend({length:0,init:function(){b.Object._super("init",this);var c=false,e=false,a=false,h=false,f=[],d=function(){return true},g=function(a){return a},o=function(a,d){return a<d?-1:a==d?0:1},j=Infinity,l=function(c,b,k){k.forEach(function(d){d=e.indexOf(d,c);d!=-1&&(e.splice(d,1),d=a.splice(d,1).pop(),d=h.indexOf(d),h.splice(d,1),d<f.length&&f.replace(d,1))});b.forEach(function(b){if(d(b)){e.splice(c,0,b);b=g(b);a.splice(c,0,b);var k=0;h.some(function(a,d){o(b,a)>=
0&&(k=d+1);return o(b,a)<0});h.splice(k,0,b);k<=f.length&&k<j&&f.replace(k,0,b)}});f.length>j&&f.replace(j,f.length-j);j!=Infinity&&f.length<j&&f.length<h.length&&f.replace(f.length,0,h.slice(f.length,j));this.set("length",f.length)}.bind(this);this.destroy=function(){c.removeArrayObserver(l);h=a=e=c=false;this.set("length",0);f.clear()};Object.defineProperty(this,"original",{get:function(){return c}});var m=false;if(this.sort!==void 0)o=this.sort;if(this.filter!==void 0)d=this.filter;if(this.map!==
void 0)g=this.map;if(this.limit!==void 0)j=this.limit;if(this.content!==void 0)c=this.content,m=true;Object.defineProperty(this,"content",{enumerable:true,get:function(){return f},set:function(b){c&&c.removeArrayObserver(l);c=b;c.addArrayObserver(l);e=c.filter(d);a=e.map(g);h=Array.from(a);h.quickSort(o);f.clear();h.some(function(a){f.pushObject(a);return f.length==j});this.set("length",f.length)}});Object.defineProperty(this,"filter",{get:function(){return d},set:function(b){d=b;c&&(e=c.filter(d),
a=e.map(g),h=Array.from(a),h.quickSort(o),f.clear(),h.some(function(a){f.pushObject(a);return f.length==j}),this.set("length",f.length))}});Object.defineProperty(this,"map",{get:function(){return g},set:function(d){g=d;c&&(a=e.map(g),h=Array.from(a),h.quickSort(o),f.clear(),h.some(function(a){f.pushObject(a);return f.length==j}),this.set("length",f.length))}});Object.defineProperty(this,"sort",{get:function(){return o},set:function(a){o=a;c&&(h.quickSort(o),f.clear(),h.some(function(a){f.pushObject(a);
return f.length==j}),this.set("length",f.length))}});Object.defineProperty(this,"limit",{get:function(){return j},set:function(a){j=a;c&&(f.length>j?f.replace(j,f.length-j):f.replace.apply(f,[f.length,0,h.slice(f.length,j)]),this.set("length",f.length))}});if(m)this.content=c}})});PhoneApp.add(Error).as("NativeError");
PhoneApp.pack("PhoneApp.types",function(b){this.Error=function(g,e){var c=b.NativeError.apply(this,[e]);if(!(this==window||this===void 0))if(this.message=c.message,this.stack=c.stack,this.name=g,!this.stack)this.stack=typeof printStackTrace!="undefined"?printStackTrace():[]};Object.getOwnPropertyNames(b.NativeError.prototype).forEach(function(g){g!="constructor"&&(this.Error.prototype[g]=b.NativeError.prototype[g])},this);"NOT_IMPLEMENTED,UNSPECIFIED,NOT_INITIALIZED,WRONG_ARGUMENTS,UNSUPPORTED,NATURAL_BORN_CRASH".split(",").forEach(function(b,
e){this.Error[b]=this.Error.prototype[b]=e},this);this.Error.prototype.toString=function(){return this.name+": "+this.message+"\nStack: "+(typeof this.stack=="array"?this.stack.join("\n"):this.stack)}});PhoneApp.use("PhoneApp.types.Error");
PhoneApp.pack("PhoneApp.service",function(b){this.Error=function(g,e,c){b.Error.apply(this,arguments);this.details=c};this.Error.prototype=Object.create(b.Error.prototype);"OPENING_FAILED,SEND_FAILED,FAILED_UID,MEANINGLESS_DATA,BAD_REQUEST,MISSING,BAD_REQUEST,UNAUTHORIZED,INVALID_SIGNATURE,WRONG_CREDENTIALS,SHOULD_NOT_HAPPEN,SERVICE_UNAVAILABLE,UNAUTHORIZED,UNSPECIFIED".split(",").forEach(function(b){this[b]=this.prototype[b]=b},this.Error)});PhoneApp.add(XMLHttpRequest).as("XMLHttpRequest");PhoneApp.use("PhoneApp.service.Error");
PhoneApp.pack("PhoneApp.service",function(b){var g=typeof File!="undefined"&&typeof Blob!="undefined";this.SimpleClient=function(){var c,e="",a="",h="",f=b.XMLHttpRequest;this.configure=function(d){if(d.host)c=d.host;if(d.port)e=d.port;d.scheme&&(h=d.scheme+":");if(d.version)a=d.version;if(d.backend)f=d.backend};Object.defineProperty(this,"Backend",{get:function(){return f}});this.url=function(d){var f=h+"//"+c+(e?":"+e:"")+(a?"/"+a:"");d.service&&(f+="/"+d.service);d.id&&(f+="/"+encodeURIComponent(d.id));
d.command&&(f+="/"+d.command);d.additional&&(f+="/"+d.additional.map(encodeURIComponent).join("/"));if(!d.params)d.params={};var b=[];Object.keys(d.params).forEach(function(a){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d.params[a]))});b.length&&(f+="?"+b.join("&"));return f}};var e=function(){var c=this.inner,e=this.options.onfailure,a=this.options.onsuccess;if(c)if(c.readyState==c.FAILED_OPENING)this.inner=this.engine=this.options.onsuccess=this.options.onfailure=c.onreadystatechange=null,
this.error=new b.Error(b.Error.UNAUTHORIZED,"Not authorized to access this",this),e&&e(this.error);else{if(c.readyState==c.DONE){var h=this.engine;this.inner=this.engine=this.options.onsuccess=this.options.onfailure=c.onreadystatechange=null;try{if(c.responseText)this.data=JSON.parse(c.responseText)}catch(f){try{this.data=(new DOMParser).parseFromString(c.responseText,"application/xml")}catch(d){this.data=c.responseText,this.error=new b.Error(b.Error.MEANINGLESS_DATA,"WHAT? ALBATROS?",this)}}switch(c.status){case 200:case 201:break;
case 308:this.options.url=c.getResponseHeader("Location");h.query(h.GET,this.options,this.headers);return;case 400:this.error=new b.Error(b.Error.BAD_REQUEST,"Bad request!",this);break;case 401:this.error=c.getResponseHeader("WWW-Authenticate")?new b.Error(b.Error.WRONG_CREDENTIALS,"Wrong street cred",this):new b.Error(b.Error.INVALID_SIGNATURE,"Invalid singing",this);break;case 402:case 403:case 405:case 501:this.error=new b.Error(b.Error.UNAUTHORIZED,"Not authorized to access this",this);break;
case 404:this.error=new b.Error(b.Error.MISSING,"Missing resource",this);break;case 406:case 411:case 412:case 413:case 414:case 415:case 416:case 417:this.error=new b.Error(b.Error.SHOULD_NOT_HAPPEN,"Should never happen",this);break;case 500:case 503:this.error=new b.Error(b.Error.SERVICE_UNAVAILABLE,"Server is down",this);break;case 0:this.error=new b.Error(b.Error.UNAUTHORIZED,"Not authorized to access this",this);break;default:this.error=new b.Error(b.Error.UNSPECIFIED,"WTF?",this)}if(this.error)throw e&&
e(this.error),this.error;a&&a(this.data)}}else console.warn("BAD SHIT HAPPENED!")};this.SimpleClient.prototype.query=function(c,i,a){var h=new this.Backend,c=c||this.GET,f=i.url||this.url(i);a||(a={});if(!a.Accept)a.Accept="application/json";var d={options:i,method:c,headers:a,error:null,data:{},exception:null};h.onreadystatechange=e.bind(d);try{h.open(c,f,true)}catch(t){d.exception=t.toString();d.error=new b.Error(b.Error.OPENING_FAILED,"Failed opening likely bogus request",d);if(i.onfailure)i.onfailure(d.error);
throw d.error;}f=i.payload;if(c==this.POST&&(a["Content-Type"]||(a["Content-Type"]=g&&(f instanceof File||f instanceof Blob)?f.type:"application/json"),a["Content-Type"]=="application/json"))try{f=JSON.stringify(f)}catch(o){a["Content-Type"]="application/octet-stream"}Object.keys(a).forEach(function(d){h.setRequestHeader(d,a[d])});try{h.send(f)}catch(j){d.exception=j.toString();d.error=new b.Error(b.Error.SEND_FAILED,"Failed sending. Bogus payload?",d);if(i.onfailure)i.onfailure(d.error);throw d.error;
}d.inner=h;d.engine=this};this.SimpleClient.HEAD=this.SimpleClient.prototype.HEAD="HEAD";this.SimpleClient.GET=this.SimpleClient.prototype.GET="GET";this.SimpleClient.POST=this.SimpleClient.prototype.POST="POST";this.SimpleClient.PATCH=this.SimpleClient.prototype.PATCH="PATCH";this.SimpleClient.PUT=this.SimpleClient.prototype.PUT="PUT";this.SimpleClient.DELETE=this.SimpleClient.prototype.DELETE="DELETE"});
PhoneApp.pack("PhoneApp",function(){var b,g=true,e=function(a,c){var f,d=Date.now(),b=function(e){f!==false&&(requestAnimationFrame(b,c),f=a(e-d,e),d=e)};b()};this.Run=function(a,c){var f=null;this.start=function(){c();f=window.setInterval(c,a)};this.stop=function(){window.clearInterval(f)}};var c=[],i=[];this.renderLoop={add:function(a,b,f){c.push({view:a,operation:b,callback:f})},schedule:function(a,b,f){c.push({view:b,operation:"schedule",callback:a,extra:f})},registerHook:function(a,c,f){i.push({callback:a,
scope:c,extra:f})},removeHook:function(a){i=i.filter(function(c){return a!=c.callback})},stop:function(){g=false},start:function(){g=true;e(b)}};b=function(a){if(!(a>160)){for(var a=c.shift(),b,f=[];a;){b=a.view;if(a.operation=="schedule")a.callback.apply(b,a.extra);else{var d=document.getElementById(b.elementId);if(a.operation=="render"){if(!d){f.push(a);a=c.shift();continue}b.render(d)}else a.operation=="destroy"&&d&&b.element.parentNode.removeChild(b.element);a.callback&&a.callback.call(b,a.operation)}a=
c.shift()}i.forEach(function(a){a.callback.apply(a.scope,a.extra)});c=f;return g}};this.renderLoop.start()});PhoneApp.pack("PhoneApp.types",function(){var b={};String.prototype.dasherize=function(){return!this.length?"":b[this]||(b[this]=this.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())};String.prototype.replaceAt=function(b,e){return this.substr(0,b)+e+this.substr(b+e.length)}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(b){this.Application=b.Object.extend({rootElement:$("body").get(0),ready:PhoneApp.K,autoHideSplash:false,device:b.Object.create({states:{BACKGROUND:"background",RUNNING:"running"},state:null,isIphone:false,isIpad:false,isRetina:false,isAndroid:false,isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)}.property()}),network:b.Object.create({types:window.Connection||{},states:{ONLINE:"online",OFFLINE:"offline"},type:null,state:null}),
hideSplash:function(){this.device.isMobile&&navigator.splashscreen.hide&&navigator.splashscreen.hide()},showSplash:function(){this.device.isMobile&&navigator.splashscreen.show&&navigator.splashscreen.show()},onDeviceReady:function(){var b;$(this.rootElement).empty();this.rootView.controller=this.rootController;this.rootView.appendTo(this.rootElement);window.devicePixelRatio>1&&this.device.set("isRetina",true);this.device.isMobile&&(window.KeyboardToolbarRemover&&cordova.require("cordova/plugin/keyboard_toolbar_remover").hide(),
this.autoHideSplash&&this.hideSplash(),window.device&&(b=window.device.platform.toLowerCase(),b.indexOf("iphone")!==-1?this.device.set("isIphone",true):b.indexOf("ipad")!==-1?this.device.set("isIpad",true):b.indexOf("android")!=-1&&this.device.set("isAndroid",true),(new PhoneApp.Run(1E3,function(){navigator.connection.type==window.Connection.NONE&&this.network.set("state",this.network.states.OFFLINE);navigator.connection.type!=this.networkType&&this.network.set("type",navigator.connection.type)}.bind(this))).start()));
this.router&&this.router.transitionTo&&this.router.transitionTo("index")},bindPhoneGapEvents:function(){document.addEventListener("deviceready",function(){this.onDeviceReady();this.ready()}.bind(this),false);document.addEventListener("pause",function(){this.device.set("state",this.device.states.BACKGROUND);this.onPause()}.bind(this),false);document.addEventListener("resume",function(){this.device.set("state",this.device.states.RUNNING);this.onResume()}.bind(this),false);document.addEventListener("online",
function(){this.network.set("state",this.network.states.ONLINE)}.bind(this),false);document.addEventListener("offline",function(){this.network.set("state",this.network.states.OFFLINE)}.bind(this),false)},initialize:function(){if(this.device.isMobile)this.bindPhoneGapEvents();else this.onDeviceReady()}})});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(b){var g=function(b,c){var i=b.split("."),a=[];Object.keys(i).forEach(function(h){var f=i[h];if(!(h==i.length-1&&f=="index"))if(f in c)c=c[f],a.push({path:f,route:c});else throw Error("unknown path "+b);});c.index&&c.index.redirectsTo&&a.push.apply(a,g(c.index.redirectsTo,c));return a};this.Route=b.Object.extend({_childs:{},route:null,enter:PhoneApp.K,leave:PhoneApp.K,redirectsTo:null,connectOutlets:PhoneApp.K,parentRoot:null,setup:PhoneApp.K,init:function(){Pa.Route._super("init",
this);this.setup&&this.setup();for(var e in this)if(b.Object.isExtensionOf(this[e],Pa.Route))this[e]=this[e].create(),this[e].parentRoot=this,this._childs[e]=this[e]},toString:function(){return"PhoneApp.Route"}});this.Router=b.Object.extend({enableLogging:false,root:PhoneApp.Route,currentPath:"",controllers:{},leaveHook:PhoneApp.K,enterHook:PhoneApp.K,connectOutletsHook:PhoneApp.K,init:function(){Pa.Router._super("init",this);this.root=this.root.create()}});this.Router.toString=this.Router.prototype.toString=
function(){return"PhoneApp.Router"};this.Router.prototype.transitionTo=function(b,c){var i=g(b,this.root),a=i.length-1,h="root",f=[];this.currentPath&&(f=g(this.currentPath,this.root));var d;i.forEach(function(b,e){h+="."+b.path;d=f.shift();if(!(d&&b.path==d.path)){if(d){for(var g=f.pop();g;)g.route.leave&&g.route.leave(this),this.leaveHook(g.route),g=f.pop();d.route.leave&&d.route.leave(this);this.leaveHook(d.route)}b.route.enter(this,c);this.enterHook(b.route,c);e==a&&(this.set("currentPath",h.replace("root.",
"")),this.set("currentRoute",b.route),b.route.connectOutlets(this,c),this.connectOutletsHook(b.route,c))}},this)}});PhoneApp.use("PhoneApp.types.Object");PhoneApp.pack("PhoneApp",function(b){this.Controller=b.Object.extend({isController:true,content:null,connectOutlet:function(b){var e=b.viewClass,c=b.controller||this,i=b.context||null,b=b.outletName||"view";c&&i&&c.set("content",i);e=e.create();e.set("controller",c);this.set(b,e)},removeOutlet:function(b){this.set(b,null)}})});
PhoneApp.pack("PhoneApp",function(){var b=0;this.Metamorph=function(g,e,c){this.id=++b;this.startNodeId="metamorph-"+this.id+"-start";this.endNodeId="metamorph-"+this.id+"-end";var i=function(a,c,b){var a=document.getElementById(this.startNodeId),d=document.getElementById(this.endNodeId);if(!a||!d)throw Error("Miss Metamorph hooks");var e=a.nextSibling;PhoneApp.renderLoop.schedule(function(){if(b.isView){var a=b?b.render():document.createTextNode("");if(b)b._parentView=g,g._childViews.push(b),b.willInsertElement();
e==d?d.parentNode.insertBefore(a,d):e.parentNode.replaceChild(a,e);b&&b.didInsertElement();c&&c.isView&&c.destroy()}else e==d?d.parentNode.insertBefore(d,document.createTextNode(b||"")):e.textContent=b||""})}.bind(this);e.addObserver(c,i);this.renderWrapper=function(){return'<script id="'+this.startNodeId+'"><\/script>'+(e.get(c)||" ")+'<script id="'+this.endNodeId+'"><\/script>'};this.destroy=function(){e.removeObserver(c,i)}}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(b){var g=0,e=0,c=function(a){var a=a.split(":"),b=a[0],c="",d,e,g=b.split("."),i=g.pop(),g=g.join(".");a.length>1&&(d=a[1],a.length===3&&(e=a[2]),c=":"+d,e&&(c+=":"+e));return{path:b,property:i,parent:g,classNames:c,className:d===""?void 0:d,falsyClassName:e}},i=function(a,b,c){a&&(c?a.setAttribute(b,c):a.removeAttribute(b))};this.View=b.Object.extend({template:null,templateName:null,controller:null,classNames:null,attributeBindings:null,classNameBindings:null,attributes:null,
willInsertElement:PhoneApp.K,didInsertElement:PhoneApp.K,willDestroyElement:PhoneApp.K,isView:true,tagName:"div",element:null,elementId:null,_parentView:null,_childViews:null,_compiledTpl:null,_isDestroying:false,_meta_observers:null,_metamorphs:null,init:function(){PhoneApp.View._super("init",this);this.elementId="phoneapp"+this.__id__;PhoneApp.View.views[this.elementId]=this;this._childViews=[];if(!this.attributeBindings)this.attributeBindings=[];if(this.classNameBindings){if(typeof this.classNameBindings==
"string")this.classNameBindings=this.classNameBindings.split(/\s+/)}else this.classNameBindings=[];if(this.classNames){if(typeof this.classNames=="string")this.classNames=this.classNames.split(" ")}else this.classNames=[];if(!this.attributes)this.attributes=[];this._meta_observers=[];this._metamorphs=[];var a=null;if(this.template)a=this.template;else if(this.templateName&&(a=PhoneApp.TEMPLATES[this.templateName],!a))throw Error("unknown template : "+this.templateName);this._compiledTpl=a||PhoneApp.K},
context:function(){var a=this.controller;if(!a&&this._parentView&&this._parentView.controller)a=this._parentView.controller;var b={};PhoneApp.ENV.HANDLEBARS_EXPOSE_OBJECTS.forEach(function(a){b[a]=window[a]});b.controller=a;b.view=this;return b}.property("controller"),$:function(a){return a?$(this.element).find(a):$(this.element)},appendTo:function(a){this.willInsertElement();var b=this.render();$(b).appendTo(a);this.didInsertElement()},insertChildAt:function(a,b){var c=!!a.element;c||a.willInsertElement();
PhoneApp.renderLoop.schedule(function(){this.element.insertBefore(a.element||a.render(),this.element.children[b]);c||a.didInsertElement()},this);a._parentView=this;this._childViews.insertAt(b,a);return a},appendChild:function(a){a.willInsertElement();PhoneApp.renderLoop.add(a,"render",function(){this.didInsertElement()});a._parentView=this;this._childViews.push(a);return a},rerender:function(){this._metamorphs.forEach(function(a){a.destroy()});return Pa.renderLoop.schedule(function(){this.render(this.element)},
this)},renderWrapper:function(){var a=[],b="",c;this.attributeBindings.forEach(function(b){var c=b;b.indexOf(":")>-1&&(b=b.split(":"),c=b.pop(),b=b.pop());a.push({attribute:b,value:c})},this);b=this.classNames.join(" ");this.classNameBindings&&a.push({attribute:"class",value:this.classNameBindings});a=this._computeAttributesBindings(a);b&&(a["class"]+=" "+b);c=document.createElement(this.tagName);this.attributes.forEach(function(a){a&&(a=a.split("="),c.setAttribute(a.shift(),a.shift()))});Object.keys(a).forEach(function(b){a[b]&&
c.setAttribute(b,a[b])});c.setAttribute("id",this.elementId);return c},render:function(a){if(this._isDestroying)throw Error("Trying to render a destroyed view");a||(a=this.renderWrapper());this.element=a;this.element.innerHTML=this._compiledTpl(this.context)||"";return this.element},_computeAttributesBindings:function(a,b){var f={"class":"",style:""},d=this;a.forEach(function(a){var e=a.attribute,a=a.value,g=b?'[data-phoneapp-binding="'+b+'"]':null,l;if(e=="class")typeof a=="string"&&(a=a.split(/\s+/)),
a.forEach(function(a){var b=c(a);if(b.parent.indexOf("view")===0)b.parent=b.parent.replace(/view(.)?/,""),b.path=b.path.replace(/view(.)?/,""),a=b.path;!b.path&&b.className?f["class"]+=" "+b.className:(b.parent=b.parent?this.get(b.parent):this,a=function(a,c,e,h){if(!d._isDestroying){!l&&!h&&(l=!g?d.element:d.element.querySelector(g));l&&(f["class"]=l.getAttribute("class")||"");a=typeof e;if(a=="boolean"||a=="number"){if(!b.className)b.className=b.property.dasherize();f["class"]=f["class"].replace(b.className,
"").replace(b.falsyClassName,"");e?f["class"]+=" "+b.className:b.falsyClassName&&(f["class"]+=" "+b.falsyClassName)}else a=="string"&&(f["class"]=f["class"].replace(c,e));h||Pa.renderLoop.schedule(i,d,[l,"class",f["class"]])}},a(b.property,"",this.get(b.path),true),this._meta_observers.push({parent:b.parent,property:b.property,callback:a}),b.parent.addObserver(b.property,a))},this);else if(e=="style")typeof a=="string"&&(a=a.split(/\s+/)),a.forEach(function(a){var b=c(a);b.styleName=b.className;b.styleValue=
b.falsyClassName;b.isBinding=b.styleValue.indexOf("{{this}}")!=-1;!b.path&&!b.isBinding?f.style+=" "+b.styleName+":"+b.styleValue:(b.parent=b.parent?this.get(b.parent):this,a=function(a,c,e,h){if(!d._isDestroying){!l&&!h&&(l=!g?d.element:d.element.querySelector(g));if(l)f.style=l.getAttribute("style");var k={};(f.style||"").split(";").forEach(function(a){a&&(a=a.split(":"),k[a.shift().trim()]=a.shift())});e?k[b.styleName.trim()]=b.styleValue.replace("{{this}}",e):delete k[b.styleName.trim()];f.style=
"";Object.keys(k).forEach(function(a){f.style+=a+":"+k[a]+";"});h||Pa.renderLoop.schedule(i,d,[l,"style",f.style])}},a(b.property,"",this.get(b.path),true),this._meta_observers.push({parent:b.parent,property:b.property,callback:a}),b.parent.addObserver(b.property,a))},this);else{var m=a.split("."),r=m.pop(),m=m.join("."),n;m.indexOf("view")===0&&(m=m.replace(/view(.)?/,""),a=a.replace(/view(.)?/,""));m=m?this.get(m):this;n=function(a,b,c,h){!d._isDestroying&&f[e]!=c&&(f[e]=c,h||(l||(l=!g?d.element:
d.element.querySelector(g)),Pa.renderLoop.schedule(i,d,[l,e,f[e]])))};n(r,"",this.get(a),true);this._meta_observers.push({parent:m,property:r,callback:n});m.addObserver(r,n)}},this);return f},_addAction:function(a,b,c,d){var g=++e;$(this.element).on(a,'[data-phoneapp-action="'+g+'"]',function(a){a.context=c;b.call(d,a)}.bind(this));return"data-phoneapp-action="+g},_addAttributeBindings:function(a){var b=++g,c;c=this._computeAttributesBindings(a,b);var d="data-phoneapp-binding="+b;Object.keys(c).forEach(function(a){c[a]&&
(d+=" "+a+'="'+c[a]+'"')});return d},_addMetamorph:function(a,b){var c=new PhoneApp.Metamorph(this,a,b);this._metamorphs.push(c);return c},destroy:function(){this.willDestroyElement();this._isDestroying=true;this._meta_observers.forEach(function(a){a.parent.removeObserver(a.property,a.callback)});this._metamorphs.forEach(function(a){a.destroy()});this._parentView&&!this._parentView._isDestroying&&this._parentView._childViews.removeObject(this);this.$().off();this._parentView&&this._parentView._isDestroying?
this._destroyElement():PhoneApp.renderLoop.add(this,"destroy",this._destroyElement)},_destroyElement:function(){delete PhoneApp.View.views[this.elementId];this._childViews.forEach(function(a){a.destroy()});PhoneApp.View._super("destroy",this)}});this.View.views={}});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(){this.CollectionView=this.View.extend({content:null,itemViewClass:Pa.View,_childTemplate:null,_domTree:null,_replaceTree:null,init:function(){PhoneApp.CollectionView._super("init",this);this._replaceTree={}},didInsertElement:function(){if(this.content)this.content.content.length&&this._domController(0,this.content.content,[]),this._domController=this._domController.bind(this),this.content.content.addArrayObserver(this._domController),this.addObserver("content",function(b,
g,e){g.content.removeArrayObserver(this._domController);e.content.addArrayObserver(this._domController)})},_domController:function(b,g,e){g.forEach(function(c,e){var a=b+e,g;a in this._replaceTree?(g=this._replaceTree[a],delete this._replaceTree[a]):(g=this.itemViewClass.create({tagName:"li"}),g._compiledTpl=this._childTemplate,g.controller=this.controller,g.content=c);this.insertChildAt(g,a)},this);e.forEach(function(c){c=this.content.content.indexOf(c);c==-1?this._childViews[b].destroy():this._replaceTree[c]=
this._childViews.removeAt(b)[0]},this)},willDestroyElement:function(){this.content&&this.content.content&&this.content.content.removeArrayObserver(this._domController)}})});PhoneApp.use("PhoneApp.types.Object");
PhoneApp.pack("PhoneApp",function(){var b=function(b,c,g){for(var b=b.children,a,h=0;h<b.length;h++){a=b[h];var f=c;a=a.style;a.webkitTransitionDuration=a.MozTransitionDuration=a.msTransitionDuration=a.OTransitionDuration=a.transitionDuration=g+"ms";a.MozTransform=a.webkitTransform="translate3d(0,"+f+"px,0)";a.msTransform=a.OTransform="translateX("+f+"px)"}},g=function(b){for(var c=b.scrollTop,g=b.children,a=function(){this.style.webkitTransition="-webkit-transform 0s ease-out";this.style.webkitTransform=
"translate3d(0,0,0)";b.scrollTop=0;this.removeEventListener("webkitTransitionEnd",a)},h=0;h<g.length;h++)g[h].style.webkitTransition="-webkit-transform 300ms ease-out",g[h].addEventListener("webkitTransitionEnd",a,false),g[h].style.webkitTransform="translate3d(0, "+c+"px,0)"};this.ScrollableView=this.View.extend({offsetPullToRefresh:50,isScrolling:false,isLoading:false,scrollableSeclector:".scrollable",didInsertElement:function(){var e=this.element.querySelector(this.scrollableSeclector),c=e.querySelector(".pull-to-refresh");
b(e,0,0);document.addEventListener("taptotop",this.scrollToTop);this.$().on("touchmove",function(b){if(!(b.touches.length>1||b.scale&&b.scale!==1))return Pa.renderLoop.schedule(function(){var a=e.scrollTop;if(a>=0||this.isLoading)return true;a<=-this.offsetPullToRefresh?$(c).addClass("drop-to-refresh"):$(c).removeClass("drop-to-refresh");this.set("isActivated",true)},this),true}.bind(this));this.$().on("touchend",function(){if(!this.isActivated||this.isLoading)return true;Pa.renderLoop.schedule(function(){var g=
e.scrollTop;if(g>=0)return true;$(c).removeClass("drop-to-refresh");if(g>-this.offsetPullToRefresh)return true;c.style.webkitTransitionDuration=0;b(e,this.offsetPullToRefresh,200);$(c).addClass("loading");this.set("isActivated",false);this.set("isLoading",true)},this)}.bind(this));this.addObserver("isLoading",function(){this.isLoading||(b(e,0,0),$(c).removeClass("loading"))}.bind(this))},scrollToTop:function(){g(this.element)},willDestroyElement:function(){this.$().off();document.removeEventListener("taptotop",
this.scrollToTop)}})});
(function(){window.Swipe=function(b,g){if(!b)return null;this.options=g||{};this.speed=this.options.speed||300;this.callback=this.options.callback||function(){};this.foldedPosition=this.options.foldedPosition||85;this.lockSlide=this.isSliding=this.activated=false;this.element=b;this.setup();this.element.addEventListener&&(this.element.addEventListener("touchstart",this,false),this.element.addEventListener("touchmove",this,false),this.element.addEventListener("touchend",this,false),this.element.addEventListener("touchcancel",
this,false),this.element.addEventListener("webkitTransitionEnd",this,false),this.element.addEventListener("msTransitionEnd",this,false),this.element.addEventListener("oTransitionEnd",this,false),this.element.addEventListener("transitionend",this,false),window.addEventListener("resize",this,false))};window.Swipe.prototype={setup:function(){this.width=Math.ceil("getBoundingClientRect"in this.element?this.element.getBoundingClientRect().width:this.element.offsetWidth);if(this.width===0&&typeof window.getComputedStyle===
"function")this.width=window.getComputedStyle(this.element,null).width.replace("px","");if(!this.width)return null;var b=this.element.style.visibility;this.element.style.visibility="hidden";var g=this.speed;this.speed=0;this.slide();this.speed=g;this.element.style.visibility=b},activate:function(b){this.activated=b;this.slide()},slide:function(){var b=this.element.style;b.webkitTransitionDuration=b.MozTransitionDuration=b.msTransitionDuration=b.OTransitionDuration=b.transitionDuration=this.speed+
"ms";var g=this.activated?0:this.foldedPosition*this.width/100;b.MozTransform=b.webkitTransform="translate3d("+g+"px,0,0)";b.msTransform=b.OTransform="translateX("+g+"px)"},handleEvent:function(b){switch(b.type){case "touchstart":this.onTouchStart(b);break;case "touchmove":this.onTouchMove(b);break;case "touchcancel":case "touchend":this.onTouchEnd(b);break;case "webkitTransitionEnd":case "msTransitionEnd":case "oTransitionEnd":case "transitionend":this.transitionEnd(b);break;case "resize":this.setup()}},
transitionEnd:function(b){this.callback(b)},onTouchStart:function(b){if(!this.lockSlide)this.start={pageX:b.touches[0].pageX,pageY:b.touches[0].pageY,time:Number(new Date),position:this.activated?0:this.foldedPosition*this.width/100},this.isScrolling=void 0,this.direction=0,this.locked=void 0,this.deltaX=0,this.element.style.MozTransitionDuration=this.element.style.webkitTransitionDuration=0},onTouchMove:function(b){if(!this.lockSlide&&!(b.touches.length>1||b.scale&&b.scale!==1)){this.deltaX=b.touches[0].pageX-
this.start.pageX+this.start.position;if(this.direction===0)this.direction=b.touches[0].pageX-this.start.pageX<0?1:2;if(typeof this.isScrolling=="undefined")this.isScrolling=!!(this.isScrolling||Math.abs(this.deltaX)<Math.abs(b.touches[0].pageY-this.start.pageY));if(this.locked===void 0)this.locked=this.direction==1&&this.deltaX<0||this.direction==2&&this.deltaX>this.width;if(!this.isScrolling&&!this.locked){var g=this.deltaX*100/this.width;if(g<80&&!this.activated&&this.direction==1)this.activated=
true;else if(g>20&&this.activated&&this.direction==2)this.activated=false;if(g>-5&&g<this.foldedPosition+5)this.element.style.MozTransform=this.element.style.webkitTransform="translate3d("+(this.deltaX<0?0:this.deltaX)+"px,0,0)",this.isSliding=true;b.stopPropagation();b.stopImmediatePropagation&&b.stopImmediatePropagation();b.preventDefault();return false}}},onTouchEnd:function(b){if(!this.lockSlide)this.locked=void 0,this.direction=0,(this.isScrolling=void 0)||this.slide(),this.isSliding&&(b.stopPropagation(),
b.stopImmediatePropagation&&b.stopImmediatePropagation(),b.preventDefault()),this.isSliding=false}}})();
(function(){Handlebars.registerHelper("action",function(b,g,e){var d;var a;var c=null;!e&&g.hash&&(e=g,g=this);if(typeof b=="string"){var c=b.split("."),i=c[0]||"";i==="view"?(c.shift(),b=this.view.get(c.join(".")),c.pop(),a=(c=c.join("."))?this.view.get(c):this.view,c=a):i=="controller"?(c.shift(),b=this.controller.get(c.join(".")),c.pop(),d=(c=c.join("."))?this.controller.get(c):this.controller,c=d):(b=Pa.get(b),c.pop(),c=Pa.get(c.join(".")))}return new Handlebars.SafeString(this.view._addAction(e.hash.on,
b,g,c))})})();(function(){Handlebars.registerHelper("bindAttr",function(b){var g=[];Object.keys(b.hash).forEach(function(e){g.push({attribute:e,value:b.hash[e]})});return new Handlebars.SafeString(this.view._addAttributeBindings(g))});Handlebars.registerHelper("bind",function(b){var a;var g=this.view,e=b.split("."),b=e.pop();e.indexOf("view")==0&&e.shift();a=(e=e.join("."))?g.get(e):g,e=a;g=this.view._addMetamorph(e,b);return new Handlebars.SafeString(g.renderWrapper())})})();
(function(){Handlebars.registerHelper("collection",function(b,g){if(arguments.length==1)g=b,b=Pa.CollectionView;var e={},c=null,i,a=null,c=this.view;if(!c.isView)throw Error("currentView is not a view :)");if(g.fn)e._childTemplate=g.fn;Object.keys(g.hash).forEach(function(a){e[a]=g.hash[a]});if(!e.controller)e.controller=this.controller;if(!b.apply)throw Error("collection view is already instantiated");if(e.bindToView)a=e.bindToView,delete e.bindToView;i=b.create(e);a&&c.set(a,i);c.appendChild(i);
return new Handlebars.SafeString(i.renderWrapper().outerHTML)})})();(function(){Handlebars.registerHelper("outlet",function(b,g){var e="view";typeof b=="string"&&(e=b);if(b.fn||g&&g.fn)throw Error("Outlet can not be a block");var c=null,c=this.view;if(!c.isView)throw Error("currentView is not a view :)");this.controller.set("view",null);e=c._addMetamorph(this.controller,e);return new Handlebars.SafeString(e.renderWrapper())})})();
(function(){Handlebars.registerHelper("view",function(b,g){if(!b)throw Error("Unknown view");var e={},c=null,i=null,c=this.view;if(!c.isView)throw Error("currentView is not a view :)");if(g.fn)e.template=g.fn;Object.keys(g.hash).forEach(function(a){e[a]=g.hash[a]});if(!e.controller)e.controller=this.controller;if(e.bindToView)i=e.bindToView,delete e.bindToView;var a=b.create(e);i&&c.set(i,a);c.appendChild(a);return new Handlebars.SafeString(a.renderWrapper().outerHTML)})})();
