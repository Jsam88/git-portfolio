$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
    $('.menu-btn i').click(function(){
        $('.navbar .menu').toggleClass("before");
    })
});


var delayInMilliseconds = 2000;

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        var element = document.getElementById("WaitingGif");
        element.classList.add("fade-out");
        setTimeout(function() {
            element.classList.add("hidden");
        }, delayInMilliseconds);
        // element.style.display = "none";
}
    });