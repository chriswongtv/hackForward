angular.module('HackForward', [
  'ngRoute',
  'mobile-angular-ui',
  'HackForward.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});