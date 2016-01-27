// --------------------------------------------------------------------------
// Open Options
// --------------------------------------------------------------------------
Selectron.prototype.openOptions = function() {
  if(!this.isDisabled) {
    var win = $(window),
        optionsBottom = this.options.offset().top + this.options.height(),
        scrollPosition = win.scrollTop(),
        windowHeight = win.height(),
        isOverflowing = optionsBottom > (windowHeight - scrollPosition);

    this.options
      .addClass('selectron__options--is-open')
      .toggleClass('selectron__options--is-overflowing', isOverflowing);

    this.trigger
      .addClass('selectron__trigger--is-open')
      .toggleClass('selectron__trigger--is-overflowing', isOverflowing);

    this.isOpen = true;
  }
}
