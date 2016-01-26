// --------------------------------------------------------------------------
// Build the DOM
// --------------------------------------------------------------------------
Selectron.prototype.build = function() {
  this.wrapper = $('<div class="selectron"/>');

  this.select
    .removeClass('selectron selectron--dark')
    .addClass('selectron__select');

  this.wrapper
    .toggleClass('selectron--dark', this.darkTheme)
    .toggleClass('selectron--disabled', this.isDisabled)
    .toggleClass('selectron--is-touch', this.isTouch);

  this.select.replaceWith(this.wrapper);

  if(this.isTouch) {
    this.wrapper.append(this.select);
  } else {
    this.searchTerm = '';
    this.trigger = $('<button class="selectron__trigger">');
    this.options = $('<ul class="selectron__options"/>');
    this.wrapper.append(this.select, this.trigger, this.options);
    this.registerEvents();
    this.populateOptions();
  }
};
