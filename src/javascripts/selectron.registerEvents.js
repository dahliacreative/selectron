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
        if((!self.search || !self.triggerIsHovered) && self.isOpen) {
          self.closeOptions();
        }
      },
      'mouseenter': function() {
        self.triggerIsHovered = true;
      },
      'mouseleave': function() {
        self.triggerIsHovered = false;
      }
    });

    this.select.on({
      'selectron.update': function() {
        self.options.empty();
        self.populateOptions();
        self.isDisabled = self.select.prop('disabled');
        self.wrapper.toggleClass('selectron--disabled', self.isDisabled);
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
      }
    });

    if(this.search) {
      this.search.on({
        'keydown': function(e) {
          var upArrowKeyPressed = e.which === 38,
              downArrowKeyPressed = e.which === 40;

          if(downArrowKeyPressed || upArrowKeyPressed) {
            e.preventDefault();
          }
        },
        'keyup': function(e) {
          var upArrowKeyPressed = e.which === 38,
              downArrowKeyPressed = e.which === 40,
              leftArrowKeyPress = e.which === 37,
              rightArrowKeyPress = e.which === 39,
              enterKeyPressed = e.which === 13,
              escapeKeyPressed = e.which === 27;

          if(escapeKeyPressed && self.isOpen) {
            self.closeOptions();
            return false;
          }

          if(downArrowKeyPressed || upArrowKeyPressed || leftArrowKeyPress || rightArrowKeyPress || enterKeyPressed) {
            self.handleKeyStrokes(e);
          } else {
            self.filterOptions(e);
          }
        },
        'blur': function() {
          self.closeOptions(true);
        }
      });
    }
  };
