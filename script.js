// The Quirky Website

// On Mouse Over Dog Change to Howling and AWOO appear
function dogChange() {
    document.getElementById("dogCollie").src = "img/dog-howling.png"
    document.getElementById("awooText").innerHTML = "A W O o o o o o O ~"

    var howlSound = document.getElementById("howling");
    howlSound.play();
    howlSound.loop = true;
}

function dogReturn() {
    document.getElementById("dogCollie").src = "img/dog.png"
    document.getElementById("awooText").innerHTML = ""

    var howlSound = document.getElementById("howling");
    howlSound.pause();
    howlSound.currentTime = 0;
}
