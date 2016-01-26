// --------------------------------------------------------------------------
// Register Events
// --------------------------------------------------------------------------
Selectron.prototype.registerEvents = function() {
  var self = this;

  $(document).on('click', function(e) {
    self.toggleOptions(e, self);
  });

  this.trigger.on({
    'click': function(e) {
      self.toggleOptions(e);
    },
    'keyup': function(e) {
      self.handleKeyStrokes(e);
    },
    'keydown': function(e) {
      e.preventDefault();
    },
    'blur': function() {
      self.closeOptions();
    }
  });

  this.select.on({
    'selectron.update': function() {
      this.options.empty();
      this.populateOptions();
    },
    'change': function() {
      this.updateValue($(this).val());
    }
  });

  this.options.on({
    'mouseenter': function() {
      self.optionsAreHovered = true;
    },
    'mouseleave': function() {
      self.optionsAreHovered = false;
    }
  });
};
