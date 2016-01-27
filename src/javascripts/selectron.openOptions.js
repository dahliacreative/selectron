// --------------------------------------------------------------------------
// Open Options
// --------------------------------------------------------------------------
Selectron.prototype.openOptions = function() {
  if(!this.isDisabled) {
    this.options.addClass('selectron__options--is-open');
    this.trigger.addClass('selectron__trigger--is-open');
    this.isOpen = true;
  }
}
