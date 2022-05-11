function play() {
    let div = document.getElementById("tmpInteract");
    let video = document.getElementById("video"); //???
    div.remove();
    video.removeAttribute("hidden")
    video.play();
}