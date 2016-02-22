// --------------------------------------------------------------------------
// Handle Keystrokes
// --------------------------------------------------------------------------
Selectron.prototype.filterOptions = function(e) {
  
  this.handleKeyStrokes(e);
  var searchTerm = this.search.val().toLowerCase(),
      options = this.options.children(':not(".selectron__no-results")'),
      matchedItems = 0;

  for (var i = 0; i < options.length; i++) {
    var option = $(options[i]),
        text = option.text().toLowerCase(),
        matches = text.indexOf(searchTerm) > -1;

    option.toggle(matches);
    if(matches) {
      matchedItems ++;
    }
  }

  if(matchedItems < 1) {
    this.options.append(this.noResults);
  } else {
    this.noResults.remove();
  }
}
