Selectron.prototype.createOption = function(selectOption, isInGroup) {
  var value = selectOption.val(),
      content = selectOption.text(),
      isDisabled = selectOption.prop('disabled'),
      isSelected = selectOption.prop('selected'),
      option = $('<li class="selectron__option" data-value="' + value + '">' + content + '</li>'),
      self = this;

  option
    .toggleClass('selectron__option--is-disabled', isDisabled)
    .toggleClass('selectron__option--is-selected', isSelected)
    .toggleClass('selectron__option--optgroup', isInGroup);

  option.on({
    'click': function() {
      self.updateSelection($(this));
    },
    'mouseenter': function() {
      self.updateHover($(this))
    }
  });

  return option;
}
