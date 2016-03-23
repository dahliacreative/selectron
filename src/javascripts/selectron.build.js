// --------------------------------------------------------------------------
// Build the DOM
// --------------------------------------------------------------------------
Selectron.prototype.build = function() {
  var wrapperClasses = this.select.attr('class');

  this.select
    .removeAttr('class')
    .addClass('selectron__select')
    .wrap('<div class="selectron"/>');

  this.wrapper = this.select.parent('.selectron');
  this.wrapper
    .addClass(wrapperClasses)
    .toggleClass('selectron--disabled', this.isDisabled)
    .toggleClass('selectron--is-touch', this.isTouch);

  if(!this.isTouch) {
    this.searchTerm = '';
    this.trigger = $('<button/>', { 'class': 'selectron__trigger', 'type': 'button' });
    this.options = $('<ul/>', { 'class': 'selectron__options' });
    this.wrapper.append(this.trigger, this.options);
    this.registerEvents();
    this.populateOptions();
  }
};
