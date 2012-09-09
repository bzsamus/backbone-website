define(['order!libs/jquery/jquery-min', 'order!libs/underscore/underscore-min', 'order!libs/backbone/backbone-min', 'order!libs/bootstrap/bootstrap.min', 'order!libs/masonry/masonry.min', 'order!libs/imagesloaded/imagesloaded.min','order!libs/spreadsheet/google-spreadsheet'],
function(){
  return {
    Backbone: Backbone.noConflict(),
    _: _.noConflict(),
    $: jQuery.noConflict(),
    bootstrap: $
  };
});
