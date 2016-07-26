// --------------------------------------------------------------------------
// Register Events
// --------------------------------------------------------------------------
Selectron.prototype.registerEvents = function() {
  var self = this;

  this.trigger.on({
    'click': function(e) {
      $(this).focus();
      self.toggleOptions(e);
    },
    'keyup': function(e) {
      self.handleKeyStrokes(e);
    },
    'keydown': function(e) {
      var tabKeyPressed = e.which === 9;
      if(!tabKeyPressed) {
        e.preventDefault();
      }
    },
    'blur': function() {
      if(!$(this).is(':hover')) {
        self.closeOptions();
      }
    }
  });

  this.select.on({
    'selectron.update': function() {
      self.options.empty();
      self.populateOptions();
    },
    'selectron.change': function() {
      self.updateValue($(this).val());
    }
  });

  this.options.on({
    'mouseenter': function() {
      self.optionsAreHovered = true;
    },
    'mouseleave': function() {
      self.optionsAreHovered = false;
      self.options.find('.selectron__option--is-hovered').removeClass('selectron__option--is-hovered');
    }
  });
};
