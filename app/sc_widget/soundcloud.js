angular.module('backdrop.sc_widget', [])

.controller('scCtrl', function($scope, $window, $location, $sce){


  // spotify get data
  var spotifyApi = new SpotifyWebApi();    

  $scope.trackSearchResults = [];

  // create url
  $scope.trackID = 6109158;

  // helper function to get songs
  $scope.getSongs = function(){
    spotifyApi.searchTracks($scope.query)
      .then(function(data) {
        console.log('Spotify search results:', data);
      }, function(err) {
        console.error(err);
      });
  };

});
