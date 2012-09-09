define([
  'jQuery',
  'Underscore',
  'Backbone',
  'text!templates/travel.html'
], function($, _, Backbone, travelTemplate){

  var travelView = Backbone.View.extend({
    el: $("#contents"),
    render: function(){
      this.el.html(travelTemplate);
    }
  });
  return new travelView;
});
