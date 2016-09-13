  // --------------------------------------------------------------------------
  // Update Selection
  // --------------------------------------------------------------------------
  Selectron.prototype.updateSelection = function(selected) {
    var value = selected.data('value');
    selected.addClass('selectron__option--is-selected').siblings().removeClass('selectron__option--is-selected');
    this.updateTrigger();
    this.select.val(value).trigger('change');
    if(this.search) {
      this.search.val('');
      this.options.empty();
      this.populateOptions();
    } else if(this.isOpen) {
      this.closeOptions();
      this.trigger.focus();
    }
  };
