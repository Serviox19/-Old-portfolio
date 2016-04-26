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
    .state('skills', {
      url: '/skills',
      templateUrl: '/views/skills.html'
    });

    $stateProvider
    .state('projects', {
      url: '/projects',
      templateUrl: '/views/projects.html'
    });
  }])
