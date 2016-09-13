  // --------------------------------------------------------------------------
  // Update Hover
  // --------------------------------------------------------------------------
  Selectron.prototype.updateHover = function(hovered) {
    hovered.addClass('selectron__option--is-hovered').siblings().removeClass('selectron__option--is-hovered');
  };
