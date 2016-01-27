// --------------------------------------------------------------------------
// Close options
// --------------------------------------------------------------------------
Selectron.prototype.closeOptions = function() {
  if(!this.optionsAreHovered) {
    this.options.removeClass('selectron__options--is-open');
    this.trigger.removeClass('selectron__trigger--is-open');
    this.isOpen = false;
  }
}
