angular.module('HackForward', [
  'ngRoute',
  'mobile-angular-ui',
  'HackForward.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
  $routeProvider.when('/hackathons', {templateUrl:'home.html',  reloadOnSearch: false});
  $routeProvider.when('/pitches', {templateUrl:'pitches.html',  reloadOnSearch: false});
  $routeProvider.when('/pitch', {templateUrl:'pitchDetail.html',  reloadOnSearch: false});
  $routeProvider.when('/live', {templateUrl:'live.html',  reloadOnSearch: false});
});