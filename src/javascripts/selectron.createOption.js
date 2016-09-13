  // --------------------------------------------------------------------------
  // Create option
  // --------------------------------------------------------------------------
  Selectron.prototype.createOption = function(selectOption, isInGroup) {
    var value = selectOption.val(),
        content = selectOption.text(),
        classes = selectOption.attr('class'),
        isDisabled = selectOption.prop('disabled'),
        isHidden = selectOption.is('[hidden]'),
        isSelected = selectOption.prop('selected'),
        icon = selectOption.data('icon'),
        self = this;

    var option = $('<li/>', {
      'class': 'selectron__option', 
      'data-value': value, 
      'text': content 
    });

    if(icon) {
      var image = $('<img/>', { src: icon, class: 'selectron__icon' });
      option.prepend(image);
    }

    option
      .addClass(classes)
      .toggleClass('selectron__option--is-disabled', isDisabled)
      .toggleClass('selectron__option--hidden', isHidden)
      .toggleClass('selectron__option--is-selected', isSelected)
      .toggleClass('selectron__option--optgroup', isInGroup);

    option.on({
      'click': function() {
        self.updateSelection($(this));
      },
      'mouseenter': function() {
        self.updateHover($(this));
      }
    });

    return option;
  };
