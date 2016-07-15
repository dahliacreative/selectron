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
          icon = child.data('icon'),
          classes = child.attr('class');

          var optionGroup = $('<li/>', {
            class: 'selectron__option-group',
            text: content
          })
          .addClass(classes);

          if(icon) {
            var image = $('<img/>', { src: icon, class: 'selectron__icon' });
            optionGroup.prepend(image);
          }

      self.options.append(optionGroup);
      groupOptions.each(function() {
        var groupOption = $(this);
        self.options.append(self.createOption(groupOption, true));
      });
    } else {
      self.options.append(self.createOption(child, false));
    }
  });

  var firstOption = this.options.find('.selectron__option:first-child');
  firstOption.addClass('selectron__option--is-hovered');
  this.placeholderExists = firstOption.data('value') === '';
  if(!this.isOpen) {
    this.updateTrigger();
  }
};
