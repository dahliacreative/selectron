// --------------------------------------------------------------------------
// Filter Options
// --------------------------------------------------------------------------
Selectron.prototype.filterOptions = function(e) {
  
  var searchTerm = this.search.val().toLowerCase(),
      options = this.select.find('option:not([value=""])'),
      matchedItems = 0;

  this.options.empty();
  if(searchTerm === '') {
    this.populateOptions();
    return;
  }

  for (var i = 0; i < options.length; i++) {
    var option = $(options[i]),
        text = option.text().toLowerCase(),
        matches = text.indexOf(searchTerm) > -1;

    if(matches) {
      this.options.append(this.createOption(option));
      matchedItems ++;
    }
  }

  if(matchedItems < 1) {
    this.options.append(this.noResults);
  } else {
    var firstOption = this.options.find('.selectron__option:first-child');
    firstOption.addClass('selectron__option--is-hovered');
    this.noResults.remove();
  }
}
