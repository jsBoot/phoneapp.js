PhoneApp.use('PhoneApp.types.Object');
PhoneApp.pack('PhoneApp', function(/*api*/) {
  'use strict';

  this.CollectionView = this.View.extend({
    content: null,
    itemViewClass: Pa.View,
    _childTemplate: null,
    _domTree: null,
    _replaceTree: null,

    init: function() {
      PhoneApp.CollectionView._super('init', this);
      this._replaceTree = {};
    },

    didInsertElement: function() {
      if (!this.content)
        return;

      if (this.content.content.length)
        this._domController(0, this.content.content, []);

      this._domController = this._domController.bind(this);
      this.content.content.addArrayObserver(this._domController);

      this.addObserver('content', function(key, old, newArray) {
        old.content.removeArrayObserver(this._domController);
        newArray.content.addArrayObserver(this._domController);
      });
    },

    _domController: function(index, added, removed) {
      var childNodes = this.element.children;

      added.forEach(function(item, addedIndex) {
        var realIndex = index + addedIndex;
        var viewClass;

        if (realIndex in this._replaceTree) {
          viewClass = this._replaceTree[realIndex];
          delete this._replaceTree[realIndex];
        } else {
          viewClass = this.itemViewClass.create({
            tagName: 'li'
          });
          viewClass._compiledTpl = this._childTemplate;
          viewClass.controller = this.controller;
          viewClass.content = item;
        }
        this.insertChildAt(viewClass, realIndex);
      }, this);

      removed.forEach(function(item) {
        var node = childNodes[index];
        if (!node) {
          console.error('Collection trying to remove a dom node that does not exists', index, item);
          return;
        }

        var nextPosition = this.content.content.indexOf(item);
        if (nextPosition == -1) {
          this._childViews[index].destroy();
        } else {
          this._replaceTree[nextPosition] = this._childViews.removeAt(index)[0];
        }

      }, this);
    },

    willDestroyElement: function () {
        this.content.content.removeArrayObserver(this._domController);
    }
  });
});
