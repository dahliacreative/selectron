// --------------------------------------------------------------------------
// Close options
// --------------------------------------------------------------------------
Selectron.prototype.closeOptions = function(search) {
  if(!this.optionsAreHovered) {
    if(!search || (search === true && !this.triggerIsHovered)) {
      var hovered = this.options.find('.selectron__option--is-hovered');
      hovered.removeClass('selectron__option--is-hovered');
      this.options.removeClass('selectron__options--is-open selectron__options--is-overflowing');
      this.trigger.removeClass('selectron__trigger--is-open selectron__trigger--is-overflowing');
      if(this.search) {
        this.search.removeClass('selectron__search--is-open selectron__search--is-overflowing');
      }
      this.isOpen = false;
    }
  }
};
