define([
  'jQuery',
  'Underscore',
  'Backbone',
  'text!templates/resume.html'
], function($, _, Backbone, resumeTemplate){

  var resumeView = Backbone.View.extend({
    el: $("#contents"),
    render: function(){
      this.el.html(resumeTemplate);
    }
  });
  return new resumeView;
});
