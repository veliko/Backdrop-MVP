var soundCloudModule = angular.module('backdrop.soundCloud_widget', [])
  .controller('soundCloudCtrl', function($scope, $location, $sce, SharedProperties) {

    var client_id = '39b75ad74b79654260a694714bfed5e5';
    SC.initialize({
      client_id: client_id
    });
    
    $scope.getSongs = function(){
      
      switch ($scope.api) {
        case "SoundCloud": break;
        case "YouTube": SharedProperties.setQuery($scope.query); $location.path( "YouTube" ); break;
        case "Spotify": SharedProperties.setQuery($scope.query); $location.path( "/" ); break;;
      }

      if ($scope.query !== "") {
        
        SC.get("/tracks/75868018", {}, function(data){
        });

        SC.get('/tracks', {
          q: $scope.query
        }).then(function(data) {
          $scope.trackSearchResults = data;
          console.log($scope.trackSearchResults);
          $scope.trackUrl = $sce.trustAsResourceUrl("http://api.soundcloud.com/tracks/" + data[0].id + "/stream?client_id=" + client_id);
          $('#soundCloud_player').attr('src', $scope.trackUrl);
          $scope.query = "";
          $scope.$apply();
        });

      }
    };
    
    $scope.query = SharedProperties.getQuery() || "chillout"; 
    $scope.getSongs();




  });