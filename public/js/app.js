angular
  .module('portfolio', ['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){

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

    $locationProvider.html5Mode(true);
  }]);
