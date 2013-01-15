(function() {
  'use strict';
  Handlebars.registerHelper('action', function(path, context, options) {
    var scope = null;

    if (!options && context.hash) {
      options = context;
      context = this;
    }

    if (typeof(path) == 'string') {
      var infos = path.split('.');
      var first = infos[0] || '';

      if (first === 'view') {
        infos.shift();
        path = this.view.get(infos.join('.'));
        infos.pop();
        infos = infos.join('.');
        scope = infos ? this.view.get(infos) : this.view;
      } else if (first == 'controller') {
        infos.shift();
        path = this.controller.get(infos.join('.'));
        infos.pop();
        infos = infos.join('.');
        scope = infos ? this.controller.get(infos) : this.controller;
      } else {
        path = Pa.get(path);
        infos.pop();
        scope = Pa.get(infos.join('.'));
      }
    }

    return new Handlebars.SafeString(
        this.view._addAction(options.hash.on, path, context, scope)
    );
  });

})();
