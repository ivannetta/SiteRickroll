function play() {
    let div = document.getElementById("tmpInteract");
    let video = document.getElementById("importantvideo");
    div.remove();
    video.removeAttribute("hidden")
    video.play();
}