define([
  'jQuery',
  'Underscore',
  'Backbone',
  'text!templates/topnav.html'
], function($, _, Backbone, topNavTemplate){

  var topNavView = Backbone.View.extend({
    el: $("#topnav"),
    render: function(nav){
      var data = { navName: nav };
      var template = _.template(topNavTemplate, data);
      this.el.html(template);
    }
  });
  return new topNavView;
});
