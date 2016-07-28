// --------------------------------------------------------------------------
// Toggle Options
// --------------------------------------------------------------------------
Selectron.prototype.toggleOptions = function(e) {
  e.stopPropagation();
  if(!this.isDisabled) {

    var win = $(window),
        optionsBottom = this.options.offset().top + this.options.height(),
        scrollPosition = win.scrollTop(),
        windowHeight = win.height(),
        isOverflowing = optionsBottom > (windowHeight + scrollPosition),
        selected = this.options.find('.selectron__option--is-selected');

    selected.toggleClass('selectron__option--is-hovered');

    this.options
      .toggleClass('selectron__options--is-open')
      .toggleClass('selectron__options--is-overflowing', isOverflowing);

    this.trigger.toggleClass('selectron__trigger--is-open')
      .toggleClass('selectron__trigger--is-overflowing', isOverflowing);

    if(this.search) {
      this.search.toggleClass('selectron__search--is-open')
        .toggleClass('selectron__search--is-overflowing', isOverflowing);
    }

    if(!this.isOpen && this.search) {
      this.search.focus();
    }

    this.isOpen = this.trigger.hasClass('selectron__trigger--is-open');
  } 
};
