const lazyLoad = function(){
    const lazyImages = document.getElementsByClassName("lazy-img");
    for (lazyImage of lazyImages){
        lazyImage.src = lazyImage.dataset.src 
    }
}

document.addEventListener("DOMContentLoaded", lazyLoad);