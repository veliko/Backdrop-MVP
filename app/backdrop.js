var app = angular.module('MVP', [
  'backdrop.spotify_widget',
  'backdrop.soundCloud_widget',
  'ngRoute'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/spotify_widget/widget.html',
      controller: 'spotifyCtrl'
    })
    .when('/soundCloud', {
      templateUrl: 'app/soundCloud_widget/widget.html',
      controller: 'soundCloudCtrl'
    })
});