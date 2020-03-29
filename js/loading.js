var loading = document.querySelector(".loading");
var letters = loading.textContent.split("");
loading.textContent = "";
letters.forEach(function (letter, i) {
  var span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = i / 5 + "s";
  loading.append(span);
});

window.onload = function(event){
    Array.from(this.document.getElementsByClassName("initially-hidden")).forEach(function(element, index, _){
        element.style.visibility = "visible";
    })
    const loading = document.getElementById("loading");
    loading.parentNode.removeChild(loading);
}

