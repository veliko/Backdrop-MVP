var app = angular.module('MVP', [
  'backdrop.sc_widget',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/sc_widget/widget.html',
      controller: 'scCtrl'
    })
});