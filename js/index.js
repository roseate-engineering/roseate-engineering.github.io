const lazyLoad = function(){
    const lazyImages = document.getElementsByClassName("lazy-img");
    for (lazyImage of lazyImages){
        lazyImage.src = lazyImage.dataset.src 
    }
    const slideshow = document.getElementById('slideshow');
}

const centerCanvas = () => {
    canvases = document.getElementsByClassName('canvasjs-chart-canvas');
    canvases.forEach(canvas => canvas.style = `${canvas.style};position: relative;`)
}

document.addEventListener("DOMContentLoaded", lazyLoad);
document.addEventListener("DOMContentLoaded", centerCanvas);

