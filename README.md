# Beachtimer
Getting a video from youtube of a timer then syncing with a button press.

Timify.js contains the logic to press the button and seek the correct time on the video. It achieves this by pausing the video for one second, in that one second it seeks the correct timestamp, and plays. The one second is enough for a decent buffer for loadtime, but it can be changed with the buffer variable. 

Clock.js is the logic for the clock to show the time for a sanity check.

YoutubePlayer.js I got from the docs for the youtube API. I tried messing with some of it to track when the video was "ready" but it created more problems than solved...I still think that is where to get an EXACT seek is possible. 
