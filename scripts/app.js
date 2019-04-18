function openNav() {
    document.getElementById("nav").style.width = "100%";

    var links = document.getElementsByClassName("overlayLink");
    for (let element of links) {
        element.style.animation = "slideInBottom 0.3s";
    }
}
function closeNav() {
    document.getElementById("nav").style.width = "0";
    var links = document.getElementsByClassName("overlayLink");
    for (let element of links) {
        element.style.animation = "slideOutBottom 0.3s";
    }
}
