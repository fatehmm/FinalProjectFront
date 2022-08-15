let navbar = document.querySelector(".navbar")
window.addEventListener("scroll", function(e){
    if (window.scrollY > 90)
    {
        navbar.classList.add("fixed-navbar")
    }
    else 
    {
        navbar.classList.remove("fixed-navbar")
    }
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        dotsEach: true,
        nav: true
    });
  });