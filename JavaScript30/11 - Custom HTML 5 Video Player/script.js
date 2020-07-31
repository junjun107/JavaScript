// Get elements 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullScreen')

// Build functions 
function togglePlay() {
  if(video.paused) {
    video.play();
  }else {
    video.pause();
  }
}

function updateButton(){
const icon = this.paused? '►': '❚ ❚';
toggle.textContent = icon;
}

function skip() {
  //understand how much is going to be skipped look at HTML Data set 
  //console.log(this.dataset);
  video.currentTime += parseInt(this.dataset.skip) //skip in datasest is a string
}

function handleRangeUpdate() { //
  video[this.name] = this.value
  //console.log(this.value)
  //console.log(this.name)
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) *100; //propertiy on video
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e) { //mouse move progress bar
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime
  //console.log(e)
}
function toggleFullScreen() {
  if(document.fullscreenElement) {
    document.exitFullscreen()
  }else {
    video.requestFullscreen();
    }
  }

   // Hook up the event listener 
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener('timeupdate', handleProgress);

fullScreen.addEventListener('click',toggleFullScreen)

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button =>button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change' , handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove' , handleRangeUpdate))

let mousedown  = false; 
progress.addEventListener('click' , scrub)
progress.addEventListener('mousemove' , (e) => mousedown && scrub(e))
progress.addEventListener('mousedown' , () => mousedown = true)
progress.addEventListener('mouseup' , () => mousedown = false)