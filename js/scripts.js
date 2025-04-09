// slide show function
let intIndex = 0;

function showImage() {
    let images = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");

    if (images.length === 0) return;

    for (let n = 0; n < images.length; n++) {
        images[n].style.display = "none";
        dots[n].className = dots[n].className.replace(" active", "");
    }

    if (intIndex >= images.length) {
        intIndex = 0;
    }
    if (intIndex < 0) {
        intIndex = images.length - 1;
    }

    images[intIndex].style.display = "block";
    dots[intIndex].className += " active";

    intIndex++;
}


setInterval(showImage, 5000);

window.onload = function () {
    document.getElementById("copyright").innerHTML = new Date().getFullYear();
    showImage(); 
};
