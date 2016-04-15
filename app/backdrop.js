var app = angular.module('MVP', [
  'backdrop.spotify_widget',
  'backdrop.soundCloud_widget',
  'backdrop.youTube_widget',
  'backdrop.util',
  'ngRoute'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/spotify_widget/widget.html',
      controller: 'spotifyCtrl'
    })
    .when('/SoundCloud', {
      templateUrl: 'app/soundcloud_widget/widget.html',
      controller: 'soundCloudCtrl'
    })
    .when('/YouTube', {
      templateUrl: 'app/youtube_widget/widget.html',
      controller: 'youTubeCtrl'
    })
})

.service("SharedProperties", function () {
  var _query = null;

  return {
      getQuery: function () {
        return _query;
      },

      setQuery: function(user) {
        _query = user;
      }
  }
});