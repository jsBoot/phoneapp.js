PhoneApp.use('PhoneApp.types.Object');
PhoneApp.pack('PhoneApp', function(/*api*/) {
  'use strict';

  this.CollectionView = this.View.extend({
    content: null,
    _childTemplate: null,
    _domTree: null,
    _replaceTree: null,

    init: function() {
      PhoneApp.CollectionView._super('init', this);
      this._replaceTree = {};
      this.content.limit = Infinity;
    },

    didInsertElement: function() {
      if (!this.content)
        return;

      if (this.content.content.length)
        this._domController(0, this.content.content, []);

      this.content.content.addArrayObserver(this._domController.bind(this));

      this.addObserver('content', function(key, old, newArray) {
        old.content.removeArrayObserver(this._domController);
        newArray.content.addArrayObserver(this._domController);
      });
    },

    _triggerRendering: function() {
      var nodes = this._domTree.childNodes;
      var i;

      var maxLength = this.element.children.length;

      var start = this._boundingIndex.start;
      var max = this._boundingIndex.end;

      if ((start + max - 1) > nodes.length)
        max = nodes.length - start;


      for (i = start; i < max; i++) {
        var newNode = nodes[i].cloneNode(true);
        if (i >= maxLength)
          this.element.appendChild(newNode);
        else
          this.element.replaceChild(newNode, this.element.children[i]);
      }

      //delete extra nodes
      for (i = maxLength - 1; i >= max - start; i--) {
        this.element.removeChild(this.element.children[i]);
      }

    },

    _domController: function(index, added, removed) {
      var childNodes = this.element.childNodes;

      added.forEach(function(item, addedIndex) {
        var realIndex = index + addedIndex;
        var viewClass;

        if (realIndex in this._replaceTree) {
          viewClass = this._replaceTree[realIndex];
          delete this._replaceTree[realIndex];
        } else {
          viewClass = Pa.View.create({
            tagName: 'li'
          });
          viewClass._compiledTpl = this._childTemplate;
          viewClass.controller = this.controller;
          viewClass.content = item;
        }

        this.insertChildAt(viewClass, index);
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
    }
  });
});
