window.onload = function (){
    
    var top = document.querySelector("#top");
    top.onclick = function() {
        window.scrollTo(0, document.querySelector(".top").offsetTop)
    }

    var work = document.querySelector("#work");
    work.onclick = function() {
        window.scrollTo(0, document.querySelector(".work").offsetTop)
    }
    
    var portfolio = document.querySelector("#portfolio");
    portfolio.onclick = function() {
        window.scrollTo(0, document.querySelector(".portfolio").offsetTop)
    }

    var contact = document.querySelector("#contact");
    contact.onclick = function() {
        window.scrollTo(0, document.querySelector(".contact").offsetTop)
    }
    

}