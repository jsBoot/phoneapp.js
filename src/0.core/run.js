PhoneApp.pack('PhoneApp', function() {
  /*global requestAnimationFrame:true*/
  'use strict';

  var animLoopFunction;

  var animLoop = function(render, element) {
    var running, lastFrame = Date.now();
    var loop = function(now) {
      if (running !== false) {
        requestAnimationFrame(loop, element);
        running = render(now - lastFrame, now);
        lastFrame = now;
      }
    };
    loop(Date.now());
  };

  var Run = function(delay, callback) {
    var ref = null;

    this.start = function() {
      callback();
      ref = window.setInterval(callback, delay);
    };

    this.stop = function() {
      window.clearInterval(ref);
    };
  };

  this.Run = Run;

  var renderQueue = [];
  var hook = [];
  var isLoopRunning = false;

  var _ensureLoopRunning = function (){
    if (isLoopRunning)
      return;
    isLoopRunning = true;
    animLoop(animLoopFunction);
  };

  this.renderLoop = {
    add: function(view, operation, callback) {
      renderQueue.push({
        view: view, operation: operation, callback: callback
      });
      _ensureLoopRunning();
    },
    schedule: function(callback, scope, extra) {
      if (!callback)
        return;
      
      renderQueue.push({
        view: scope, operation: 'schedule', callback: callback, extra: extra
      });
      _ensureLoopRunning();
    },
    registerHook: function(callback, scope, extra) {
      if (!callback)
        return;

      hook.push({
        callback: callback, scope: scope, extra: extra
      });
      _ensureLoopRunning();
    },

    removeHook: function(callback) {
      hook = hook.filter(function(c) {
        return (callback != c.callback);
      });
    },

    stop: function() {
      console.warn('deprecated method PhoneApp.renderLoop.stop');
    },

    start: function() {
      console.warn('deprecated method PhoneApp.renderLoop.start');
    }
  };

  animLoopFunction = function(deltaT/*, now*/) {
    if (deltaT > 160)
      return;
    var item = renderQueue.shift();
    var v;
    var pending = [];
    while (item) {
      v = item.view;

      if (item.operation == 'schedule') {
        item.callback.apply(v, item.extra);
        item = renderQueue.shift();
        continue;
      }

      var domNode = document.getElementById(v.elementId);

      if (item.operation == 'render') {
        if (!domNode) {
          pending.push(item);
          item = renderQueue.shift();
          continue;
        }
        v.render(domNode);
      }else if (item.operation == 'destroy' && domNode) {
        v.element.parentNode.removeChild(v.element);
      }

      if (item.callback)
        // window.setTimeout(function(){
        item.callback.call(v, item.operation);
      item = renderQueue.shift();
    }

    hook.forEach(function(h) {
      h.callback.apply(h.scope, h.extra);
    });
    renderQueue = pending;

    isLoopRunning = !!(pending.length || hook.length);
    return isLoopRunning;
  };

  this.renderLoop.start();

});
