define([
  'jQuery',
  'Underscore',
  'Backbone',
  'text!templates/footer.html'
], function($, _, Backbone, footerTemplate){

  var footerView = Backbone.View.extend({
    el: $("#footer"),
    render: function(){
      this.el.html(footerTemplate);
    }
  });
  return new footerView;
});
