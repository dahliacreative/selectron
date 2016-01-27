// --------------------------------------------------------------------------
// Update Value
// --------------------------------------------------------------------------
Selectron.prototype.updateValue = function(value) {
  this.options.find('[data-value="' + value + '"]').addClass('selectron__option--is-selected').siblings().removeClass('selectron__option--is-selected');
  this.updateTrigger();
}