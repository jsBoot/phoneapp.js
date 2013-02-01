(function() {
  /*jshint camelcase:false*/
  /*global Handlebars:true*/
  'use strict';

  Handlebars.registerHelper('view', function(path, options) {
    if (!path)
      throw new Error('Unknown view');


    var overload = {};
    var currentView = null;
    var bindToView = null;


    currentView = this.view;

    if (!currentView.isView)
      throw new Error('currentView is not a view :)');

    if (options.fn)
      overload.template = options.fn;

    Object.keys(options.hash).forEach(function(k) {
      overload[k] = options.hash[k];
    });

    if (!overload.controller)
      overload.controller = this.controller;


    if (overload.bindToView) {
      bindToView = overload.bindToView;
      delete overload.bindToView;
    }


    var newView = path.create(overload);
    //XXX clear bindToView when destroying newView
    if (bindToView)
      currentView.set(bindToView, newView);

    
    currentView.appendChild(newView);

    return new Handlebars.SafeString(newView.renderWrapper().outerHTML);
  });

})();
