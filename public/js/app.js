angular
  .module('portfolio', ['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html'
    });

    $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: '/views/about.html'
    });

    $stateProvider
    .state('projects', {
      url: '/projects',
      templateUrl: '/views/projects.html'
    });
  }])
