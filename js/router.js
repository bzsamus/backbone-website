// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/topnav',
  'views/home',
  'views/portfolio',
  'views/footer',
  'views/bio',
  'views/resume',
  'views/travel'
], function($, _, Backbone, topNavView, mainHomeView, portfolioView, footerView, bioView, resumeView, travelView ){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/portfolio/*actions': 'showPortfolio', 
      '/about/': 'showBio',
      '/resume/': 'showResume',
      '/travel': 'showTravel',
      // Default
      '*actions': 'defaultAction'
    },
    showPortfolio: function(actions){
      topNavView.render('portfolio');
      portfolioView.render();
      footerView.render();
    },
    showBio: function(){
      topNavView.render('about');
      bioView.render();
      footerView.render()
    },
    showResume: function(){
      topNavView.render('resume');
      resumeView.render();
      footerView.render()
    },
    showTravel: function(){
      topNavView.render('travel');
      travelView.render();
      footerView.render();
    },
    defaultAction: function(actions){
      // We have no matching route, lets display the home page 
      topNavView.render('lab');
      mainHomeView.render();
      footerView.render();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
