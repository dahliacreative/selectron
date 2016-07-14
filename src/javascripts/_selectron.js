// --------------------------------------------------------------------------
//            _           _                   
//   ___  ___| | ___  ___| |_ _ __ ___  _ __  
//  / __|/ _ \ |/ _ \/ __| __| '__/ _ \| '_ \ 
//  \__ \  __/ |  __/ (__| |_| | | (_) | | | |
//  |___/\___|_|\___|\___|\__|_|  \___/|_| |_|
//
// --------------------------------------------------------------------------
//  Version: 2.0.0
//   Author: Simon Sturgess
//  Website: dahliacreative.github.io/selectron
//     Docs: dahliacreative.github.io/selectron/docs
//     Repo: github.com/dahliacreative/selectron
//   Issues: github.com/dahliacreative/selectron/issues
// --------------------------------------------------------------------------

(function(window, $) {

  $.fn.selectron = function(options) {
    return this.each(function() {
      new Selectron($(this), options).build();
    });
  };

})(window, jQuery);

// --------------------------------------------------------------------------
// Selectron Constructor
// --------------------------------------------------------------------------
var Selectron = function(select, options) {
  if(select.hasClass('selectron__select') || select[0].tagName !== 'SELECT') {
    return;
  }
  this.opts = $.extend({}, options);
  this.isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
  this.isDisabled = select.prop('disabled');
  this.select = select;
  if(select[0].hasAttribute('data-search')) {
    this.opts.search = select.data('search');
  }
};
