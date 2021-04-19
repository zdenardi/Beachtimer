var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'b96TnabpVyo',
    playerVars: {
      'autoplay': 1,
      'mute': 1 // N.B. here the mute settings.
      },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  console.log("Loaded")
  console.log(player.getVideoLoadedFraction())
  if(player.getVideoLoadedFraction = 0){
      event.target.playVideo();
  }
  
}

function onPlayerStateChange(event){
  console.log("Changed!")
}
function stopVideo() {
player.stopVideo();
}


function checkLoaded(){
  if(player.getPlayerState = 5){
      console.log("ready!")
  }
      repeater(1000,'checkLoaded()')
  }
