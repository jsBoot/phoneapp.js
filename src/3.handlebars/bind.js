(function() {
  'use strict';

  Handlebars.registerHelper('bindAttr', function(options) {
    var params = [];

    Object.keys(options.hash).forEach(function(name) {
      params.push({attribute: name, value: options.hash[name]});
    });
    return new Handlebars.SafeString(this.view._addAttributeBindings(params));

  });

  Handlebars.registerHelper('bind', function(path) {
    var view = this.view;

    var infos = path.split('.');
    var property = infos.pop();

    if (infos.indexOf('view') == 0)
      infos.shift();

    var parent = infos.join('.');
    parent = parent ? view.get(parent) : view;

    var m = this.view._addMetamorph(parent, property);
    return new Handlebars.SafeString(m.renderWrapper());
  });
})();
