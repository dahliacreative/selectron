// --------------------------------------------------------------------------
// Build the DOM
// --------------------------------------------------------------------------
Selectron.prototype.build = function() {
  var wrapperClasses = this.select.attr('class');
  this.wrapper = $('<div/>', { 'class': 'selectron' });
  this.wrapper
    .addClass(wrapperClasses)
    .toggleClass('selectron--disabled', this.isDisabled)
    .toggleClass('selectron--is-touch', this.isTouch);

  this.select
    .removeAttr('class')
    .addClass('selectron__select');

  this.select.replaceWith(this.wrapper);

  if(this.isTouch) {
    this.wrapper.append(this.select);
  } else {
    if(this.options.search) {
      this.search = $('<input/>', { 
        'type': 'text',
        'class': 'selectron__search' ,
        'placeholder': 'Search'
      });
      this.noResults = $('<li/>', {
        'class': 'selectron__no-results',
        'text': this.select.data('no-results-text') || 'Sorry there are no matching results'
      });
    }
    this.searchTerm = '';
    this.trigger = $('<button/>', { 'class': 'selectron__trigger', 'type': 'button' });
    this.options = $('<ul/>', { 'class': 'selectron__options' });
    this.wrapper.append(this.select, this.trigger, this.search, this.options);
    this.registerEvents();
    this.populateOptions();
  }
};
