// --------------------------------------------------------------------------
// Update Hover
// --------------------------------------------------------------------------
Selectron.prototype.updateHover = function(hovered) {
  var listHeight = this.options.height(),
      optionTop = hovered.position().top,
      optionHeight = hovered.outerHeight(),
      scrollPosition = this.options.scrollTop();

  hovered.addClass('selectron__option--is-hovered').siblings().removeClass('selectron__option--is-hovered');

  if(hovered.is(':first-child')) {
      this.options.scrollTop(0);
  } else if(hovered.is(':last-child')) {
      this.options.scrollTop(this.options[0].scrollHeight);
  } else if(optionTop > (listHeight - optionHeight)) {
      this.options.scrollTop(optionTop + (scrollPosition - (listHeight - optionHeight)));
  } else if(optionTop < optionHeight) {
      this.options.scrollTop(optionTop + scrollPosition);
  }
}
