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
      if(this.opts.search) {
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
      this.wrapper.append(this.trigger, this.search, this.options);
      this.isOpen = false;
      this.registerEvents();
      this.populateOptions();
    }
  };
