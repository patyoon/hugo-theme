(function($) {
  'use strict';

  $(document).ready(function() {
    $('.blog-dropdown-toggle').on('click', function(e) {
      e.preventDefault();
      var $dropdown = $(this).siblings('.blog-category-dropdown');
      $dropdown.slideToggle(200);
      $(this).find('.blog-dropdown-arrow').toggleClass('open');
    });
  });
})(jQuery);
