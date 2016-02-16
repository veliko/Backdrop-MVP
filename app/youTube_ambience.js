window.player = {};
var thunder = [];

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-placeholder', {
      width: 600,
      height: 400,
      videoId: 'a96_r--pOxE',
      playerVars: {
          color: 'white',
          autoplay: true
      },
      events: {
        onReady: initialize 
      }
  });
}

function initialize(){
  window.player.setVolume(10);
  
  $("#up").on('click', function(){
    player.setVolume(player.getVolume()+5);
  });
  
  $("#down").on('click', function(){
    player.setVolume(player.getVolume()-5);
  });
  
  $("#play").on('click', function(){
    player.playVideo();
  });
  
  $("#pause").on('click', function(){
    player.pauseVideo();
  });
  
  $("select").on('change', function(){
    var option = $( "select option:selected" ).text();
    console.log(option);
    switch (option) {
      case "Star Wars: Coruscant Penthouse": player.loadVideoById('D24_zcoiTj0'); break;
      case "Sith Imperial Capital Dromund Kaas": player.loadVideoById('a96_r--pOxE'); break;
      case "Heavy Rain": player.loadVideoById('V9Xu6mkacg8'); break;
      case "Thunderstorm": player.loadVideoById('t3v4ZO9iTg8'); break;
      case "Crackling Fire": player.loadVideoById('4gSrHPBMC8w'); break;
    }
  });
}