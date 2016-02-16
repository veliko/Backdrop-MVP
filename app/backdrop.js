var app = angular.module('MVP', [
  'backdrop.sp_widget',
  'ngRoute'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/spotify_widget/widget.html',
      controller: 'spCtrl'
    })
});