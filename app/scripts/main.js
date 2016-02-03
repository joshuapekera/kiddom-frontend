//

$('.navbar-collapse').on('shown.bs.collapse', function() {
    $(".glyph-flip").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
  });

$('.navbar-collapse').on('hidden.bs.collapse', function() {
    $(".glyph-flip").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
  });
