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
      
    });
  });

  $(".ishitestimonials").owlCarousel({
    loop:true,
    dots:false,
    margin:30,
    autoplay:0,
    responsive:{
        0:{
            items:1
        },
        544:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
});