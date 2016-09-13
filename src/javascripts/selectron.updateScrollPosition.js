  // --------------------------------------------------------------------------
  // Update Scroll Position
  // --------------------------------------------------------------------------
  Selectron.prototype.updateScrollPosition = function(hovered) {
    var listHeight = this.options.height(),
        optionTop = hovered.position().top,
        optionHeight = hovered.outerHeight(),
        scrollPosition = this.options.scrollTop();
    if(hovered.is(':first-child')) {
        this.options.scrollTop(0);
    } else if(hovered.is(':last-child')) {
        this.options.scrollTop(this.options[0].scrollHeight);
    } else if(((optionTop + optionHeight) - scrollPosition) > (listHeight)) {
        this.options.scrollTop(optionTop - (listHeight - optionHeight));
    } else if((optionTop - scrollPosition) < 0) {
      this.options.scrollTop(optionTop);
    } 
  };
