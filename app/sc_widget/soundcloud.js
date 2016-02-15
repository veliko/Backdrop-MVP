angular.module('backdrop.sc_widget', [])

.controller('scCtrl', function($scope, $window, $location, $sce){

  // intialize soundcloud widget  
  SC.initialize({
    client_id: '39b75ad74b79654260a694714bfed5e5',
  });

  $scope.trackSearchResults = [];

  // create url
  $scope.trackID = 6109158;

  // helper function to get songs
  $scope.getSongs = function(){
    SC.get('/tracks', {
        q: $scope.query
      })
      .then(function(tracks) {
        $scope.trackSearchResults = tracks;
        console.log($scope.trackSearchResults);
      });
    $scope.query = "";
  };

  // helper function to construct url and pass on to player
  var makeSongUrl = function(songID) {
    var url = "http://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" 
            + songID 
            + "&show_artwork=false&liking=false&sharing=false&auto_play=false";
    return $sce.trustAsResourceUrl(url);
  };

  $scope.trackUrl = makeSongUrl($scope.trackID);

  // instantiate player
  $(document).ready(function() {
    var widget = SC.Widget(document.getElementById('soundcloud_widget'));
    widget.bind(SC.Widget.Events.READY, function() {
      console.log('Ready...');
    });
  });

});
