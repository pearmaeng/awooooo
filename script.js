// The Quirky Website

// Alert 
function welcome() {
    alert("Hello hooman! I am a BORDER COLLIE 🐶. \nPlease unmute to hear me AWOOOO~");
} 
window.onload = welcome ;

// Sound is muted at first
let soundMuted = true; 

function toggleSound() {
    var muteButton = document.getElementById("mute-button");
    var howlSound = document.getElementById("howling");

    // To unlock sound and text on first click 
    if (soundMuted) {
        howlSound.play()
        howlSound.pause();
        howlSound.currentTime = 0;
    }

    // For mute/unmute 
    soundMuted = !soundMuted;
    muteButton.innerHTML = soundMuted ? "🔇" : "🔊";

    // Stop if Muted
    if (soundMuted) {
        howlSound.pause();
        howlSound.currentTime = 0;
    }

}

// On Mouse Over Dog Change, Howling on, and AWOO appear
function dogChange() {
    var howlSound = document.getElementById("howling");

    document.getElementById("dogCollie").src = "img/dog-howling.png";

    if (!soundMuted) {
        document.getElementById("awooText").innerHTML = "A W O o o o o o O ~";
        howlSound.loop = true;
        howlSound.currentTime = 0;
        howlSound.play();
    }
}

// Mouse away and everything back to original
function dogReturn() {
    document.getElementById("dogCollie").src = "img/dog.png";
    document.getElementById("awooText").innerHTML = "";

    var howlSound = document.getElementById("howling");
    howlSound.pause();
    howlSound.currentTime = 0;
}
