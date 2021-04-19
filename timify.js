function timify(){
    var timeNow = Date.now()
    var dateObj = new Date()
    var min = dateObj.getMinutes()*60
    var sec = dateObj.getSeconds();
    //get the time that we want
    var timeWanted = min+sec
    //loadPlayer to Loadtime, 
    var buffer = 1 //in seconds
    player.pauseVideo();
    player.seekTo(timeWanted+buffer)

    setTimeout(()=>{
        player.playVideo();
    },buffer*1000)
    

  }
  