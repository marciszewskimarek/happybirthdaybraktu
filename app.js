var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

video.loop = true;

function myFunction() {
  if (video.muted) {
    // video.play();
    video.muted = false;
    
    btn.innerHTML = "Sound On";
  } else {
    video.muted = true;
    // video.pause();
    btn.innerHTML = "Sound Off";
  }
}

function loop()
{
    console.log("loop()");
    video.currentTime = 0;
    video.play();
}