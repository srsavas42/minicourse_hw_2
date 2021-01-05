
document.getElementById("k").addEventListener("click", playAudio(sounds/crash.mp3))

document.getElementById("l").addEventListener("click", playAudio(sounds/kick.mp3))

document.getElementById("j").addEventListener("click", playAudio(sounds/snare.mp3))

document.getElementById("w").addEventListener("click", playAudio(sounds/tom1.mp3))

document.getElementById("a").addEventListener("click", playAudio(sounds/tom2.mp3))

document.getElementById("s").addEventListener("click", playAudio(sounds/tom3.mp3))

document.getElementById("d").addEventListener("click", playAudio(sounds/tom4.mp3))


function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}
