// --------------------------------------------------------------------------
// Update Trigger
// --------------------------------------------------------------------------
Selectron.prototype.updateTrigger = function() {
  var selected = this.options.find('.selectron__option--is-selected'),
      content = selected.text(),
      value = selected.data('value'),
      isPlaceholder = value === "" ? true : false;

  this.trigger.html(content);
  this.trigger.toggleClass('selectron__trigger--is-filled', !isPlaceholder);
  this.optionsAreHovered = false;
  if(this.isOpen) {
    this.closeOptions();
    this.trigger.focus();
  }
};

