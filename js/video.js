var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	let vol=document.querySelector("#volume");
	vol.innerHTML=video.volume*100+"%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
		video.playbackRate*=0.8;
  	console.log("Speed is "+video.playbackRate );
}

function increaseSpeed() {
	video.playbackRate*=1.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	if(video.duration<=video.currentTime+60){
		video.currentTime=0;
		video.playbackRate=1;
		console.log(video.playbackRate);
	}
	else{
		console.log(video.playbackRate);
		video.currentTime+=60;
	}
	console.log("Current location is "+ video.currentTime);
}

function mute() {
	if (video.muted){
  		console.log("Muted");
			video.muted=false;
			document.querySelector("#mute").innerHTML="Mute";
	}else{
      console.log("Unmuted");
			video.muted=true;
			document.querySelector("#mute").innerHTML="Unmute";
		}
}

function changeVolume() {
	let volume=document.querySelector("#volumeSlider").value;
	console.log("Volume is ",volume);
	video.volume=volume/100;
	document.querySelector("#volume").innerHTML=volume+"%"

}


function gray() {
	// document.querySelector("style").classList.remove("grayscale")
	if(video.classList.value==""){
		video.classList.toggle("grayscale")

		console.log(video.classList)
	}
}

function color() {

	if(video.classList.value=="grayscale"){
		video.classList.toggle("grayscale")

		console.log(video.classList)
	}
}
