define([
  'jQuery',
  'Underscore',
  'Backbone',
  'text!templates/portfolio.html'
], function($, _, Backbone, portfolioTemplate){

  var portfolioView = Backbone.View.extend({
    el: $("#contents"),
    render: function(){
      this.el.html(portfolioTemplate);
    }
  });
  return new portfolioView;
});
