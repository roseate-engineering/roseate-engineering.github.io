const lazyLoad = function(){
    const lazyImages = document.getElementsByClassName("lazy-img");
    for (lazyImage of lazyImages){
        lazyImage.src = lazyImage.dataset.src 
    }
    const slideshow = document.getElementById('slideshow');
}

document.addEventListener("DOMContentLoaded", lazyLoad);

