angular.module('backdrop.sc_widget', [])

.controller('scCtrl', function($scope, $window, $location, $sce){

  // spotify get data
  var spotifyApi = new SpotifyWebApi();    

  $scope.query = "hello";
  $scope.trackUrl = $sce.trustAsResourceUrl("https://embed.spotify.com/?uri=spotify:track:5bMCH61d8FH9RIBs15kVTM");
  // helper function to get songs
  $scope.getSongs = function(){
    spotifyApi.searchTracks($scope.query)
      .then(function(data) {
        $scope.trackSearchResults = data;
        $scope.$apply();
        $scope.query = "";
        console.log('Spotify search results:', $scope.trackSearchResults);
      }, function(err) {
        console.error(err);
      });
  };

  // get initial set of songs
  $scope.trackSearchResults = [];
  $scope.getSongs();

  $scope.play = function(track){
    $scope.trackUrl = $sce.trustAsResourceUrl("https://embed.spotify.com/?uri=" + track.uri);
    setTimeout(function(){
      $('#iframe').click(function(){
        console.log('triggered click on iframe');
      });
    }, 0);
  };

  // create youTube player
  var onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };

});
