// --------------------------------------------------------------------------
// Toggle Options
// --------------------------------------------------------------------------
Selectron.prototype.toggleOptions = function(e) {
  e.stopPropagation();
  if(!this.isDisabled) {
    this.options.toggleClass('selectron__options--is-open');
    this.isOpen = this.trigger.toggleClass('selectron__trigger--is-open').hasClass('selectron__trigger--is-open');
  } 
};
