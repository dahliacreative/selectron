// --------------------------------------------------------------------------
// Close options
// --------------------------------------------------------------------------
Selectron.prototype.closeOptions = function() {
  if(!this.optionsAreHovered) {
    this.options.removeClass('selectron__options--is-open selectron__options--is-overflowing');
    this.trigger.removeClass('selectron__trigger--is-open selectron__trigger--is-overflowing');
    this.isOpen = false;
  }
}
