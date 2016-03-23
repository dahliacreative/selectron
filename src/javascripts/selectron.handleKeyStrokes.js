// --------------------------------------------------------------------------
// Handle Keystrokes
// --------------------------------------------------------------------------
Selectron.prototype.handleKeyStrokes = function(e) {
  var hovered = this.options.find('.selectron__option--is-hovered'),
      enterKeyPressed = e.which === 13,
      spaceKeyPressed = e.which === 32,
      upArrowKeyPressed = e.which === 38,
      downArrowKeyPressed = e.which === 40,
      escapeKeyPressed = e.which === 27,
      alphaNumbericKeyPressed = (e.which >= 48 && e.which <= 57) || (e.which >= 65 && e.which <= 90) || e.which === 8,
      self = this;

  if(!this.isOpen && (upArrowKeyPressed || downArrowKeyPressed || enterKeyPressed)) {
    return false;
  }

  if(escapeKeyPressed || enterKeyPressed) {
    this.closeOptions();
    if(enterKeyPressed) {
      this.updateSelection(hovered);
    }
  }

  if(spaceKeyPressed) {
    if(this.searchTerm === "") {
      if(!this.isOpen) {
        this.openOptions();
        return;
      } else {
        this.closeOptions();
        this.updateSelection(hovered);
      }
    }
  }

  if(upArrowKeyPressed || downArrowKeyPressed) {
    var nextElement;

    if(downArrowKeyPressed) {
        nextElement = hovered.is(':last-child') ? this.options.find('.selectron__option:first-child') : hovered.next();
        if(nextElement.hasClass('selectron__option-group')) {
          nextElement = nextElement.next();
        }
    } else if(upArrowKeyPressed) {
        nextElement = hovered.is(':first-child') ? this.options.find('.selectron__option:last-child') : hovered.prev();
        if(nextElement.hasClass('selectron__option-group')) {
          nextElement = nextElement.prev();
        }
    }

    this.updateHover(nextElement);
    this.updateScrollPosition(nextElement);
  }

  if((alphaNumbericKeyPressed || spaceKeyPressed) && !this.search) {
    clearTimeout(this.searchTimeout);
    
    this.searchTimeout = setTimeout(function() {
      self.clearSearchTerm();
    }, 500);
    this.searchTerm += String.fromCharCode(e.which).toLowerCase();
    optCount = this.options.find('li').length + 1;
    for(var i = 1; i < optCount; i ++) {
      var current = this.options.find('.selectron__option:nth-child(' + i + ')'),
          text = current.text().toLowerCase();
      if(text.indexOf(this.searchTerm) >= 0 && !this.placeholderExists || text.indexOf(this.searchTerm) >= 0 && this.placeholderExists && !current.is(':first-child')) {
        current.addClass('selectron__option--is-hovered').siblings().removeClass('selectron__option--is-hovered');
        if(!this.isOpen) {
          this.updateSelection(hovered);
        }
        return;
      }
    }
  }
};
