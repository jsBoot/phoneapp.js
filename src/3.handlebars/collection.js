(function() {
  'use strict';

  Handlebars.registerHelper('collection', function(path, options) {
    if (arguments.length == 1) {
      options = path;
      path = Pa.CollectionView;
    }



    var overload = {};
    var currentView = null;
    var newView;


    var bindToView = null;


    currentView = this.view;

    if (!currentView.isView)
      throw new Error('currentView is not a view :)');

    if (options.fn)
      overload._childTemplate = options.fn;

    Object.keys(options.hash).forEach(function(k) {
      overload[k] = options.hash[k];
    });

    if (!overload.controller)
      overload.controller = this.controller;

    if (!path.apply)
      throw new Error('collection view is already instantiated');

    if (overload.bindToView) {
      bindToView = overload.bindToView;
      delete overload.bindToView;
    }

    newView = path.create(overload);

    if (bindToView) {
      console.log('*****', bindToView, currentView.elementId, newView);
      currentView.set(bindToView, newView);
    }
     
    currentView.appendChild(newView);

    return new Handlebars.SafeString(newView.renderWrapper().outerHTML);
  });

})();
