// --------------------------------------------------------------------------
// Populate Options
// --------------------------------------------------------------------------
Selectron.prototype.populateOptions = function() {
  var self = this,
      selectCildren = self.select.children();

  selectCildren.each(function() {
    var child = $(this),
        isOptGroup = child.is('optgroup');

    if(isOptGroup) {
      var groupOptions = child.children(),
          content = child.attr('label'),
          optionGroup = $('<li class="selectron__option-group">' + content + '</li>');

      self.options.append(optionGroup);
      groupOptions.each(function() {
        var groupOption = $(this);
        self.options.append(self.createOption(groupOption, true));
      });
    } else {
      self.options.append(self.createOption(child, false));
    }
  });

  var firstOption = this.options.find('.selectron__option:first');
  firstOption.addClass('selectron__option--is-hovered');
  this.placeholderExists = firstOption.data('value') === '';

  this.updateTrigger();
};
