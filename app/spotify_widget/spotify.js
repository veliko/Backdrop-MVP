var spotifyModule = angular.module('backdrop.spotify_widget', [])

.controller('spotifyCtrl', function($scope, $window, $location, $sce, SharedProperties){

  // spotify get data
  var spotifyApi = new SpotifyWebApi();   
  $scope.query = "chillout"; 
  $scope.trackUrl = $sce.trustAsResourceUrl("https://embed.spotify.com/?uri=spotify:track:5bMCH61d8FH9RIBs15kVTM");


  // helper function to get songs
  $scope.getSongs = function(){
    
    switch ($scope.api) {
      case "SoundCloud": SharedProperties.setQuery($scope.query); $location.path( "SoundCloud" ); break;
      case "YouTube": SharedProperties.setQuery($scope.query); $location.path( "YouTube" ); break;
      case "Spotify": break;
    }

    if ($scope.query !== "") {
      spotifyApi.searchTracks($scope.query)
        .then(function(data) {
          $scope.trackSearchResults = data;
          $scope.trackUrl=$sce.trustAsResourceUrl("https://embed.spotify.com/?uri=" + data.tracks.items[0].uri)
          $scope.query = "";
          $scope.$apply();
        }, function(err) {
          console.error(err);
        });
    }
  };

  // get initial set of songs
  $scope.getSongs();

  // fuunctin which loads clicked song into spotify player
  $scope.play = function(track){
    $scope.trackUrl = $sce.trustAsResourceUrl("https://embed.spotify.com/?uri=" + track.uri);
  };

});
