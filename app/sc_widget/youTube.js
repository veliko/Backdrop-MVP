window.player = {};
var thunder = [];

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-placeholder', {
      width: 600,
      height: 400,
      videoId: 'B05q5eRDKEw',
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
  $("#coruscant").on('click', function(){
    player.loadVideoById('D24_zcoiTj0');
  });
  $("#dromund").on('click', function(){
    player.loadVideoById('a96_r--pOxE');
  });
}