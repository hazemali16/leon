let span = document.createElement("span")
let spantext = document.createElement("i")
spantext.className = "fas fa-chevron-up"
span.appendChild(spantext)
span.style.cssText = "background-color: #10c5b2; color: white; border: none; padding: 12px; position: fixed; bottom: 30px; right: 30px; border-radius: 4px; cursor: pointer; opacity: 0; font-weight: bold; font-family: arial; transition-duration: 0.3s;"
document.body.appendChild(span)


window.onscroll = function () {
    if (window.scrollY >= 1000) {
        span.style.opacity = "1"
    }else {
        span.style.opacity = "0" 
    }
}

span.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior:"smooth",
    })
}