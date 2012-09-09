define([
  'jQuery',
  'Underscore',
  'Backbone',
  'text!templates/bio.html'
], function($, _, Backbone, bioTemplate){

  var bioView = Backbone.View.extend({
    el: $("#contents"),
    render: function(){
      this.el.html(bioTemplate);
    }
  });
  return new bioView;
});
