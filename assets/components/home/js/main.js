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
    $("#search-bar")[0].classList.add("d-none");
    $("#settings-bar")[0].classList.add("d-none");

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

$(".navbar__icons__link").click(function(event){
    event.preventDefault();
})
$("#magnifier-icon").click(function(e){
    if ($("#search-bar")[0].className.includes("d-none"))
    {
        $("#search-bar")[0].classList.remove("d-none")
        $("#search-bar")[0].classList.add("d-block")

        $("#settings-bar")[0].classList.add("d-none")
        $("#settings-bar")[0].classList.remove("d-block")
    }
    else
    {
        $("#search-bar")[0].classList.add("d-none")
        $("#search-bar")[0].classList.remove("d-block")
    }
    
})

$("#account-icon").click(function(e){
    if ($("#settings-bar")[0].className.includes("d-none"))
    {
        $("#settings-bar")[0].classList.remove("d-none")
        $("#settings-bar")[0].classList.add("d-block")

        $("#search-bar")[0].classList.add("d-none")
        $("#search-bar")[0].classList.remove("d-block")
    }
    else
    {
        $("#settings-bar")[0].classList.add("d-none")
        $("#settings-bar")[0].classList.remove("d-block")
    }
    
})

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
        e.preventDefault();
    });
});

$('#partners-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        410:{
            items:2,
            nav:true
        },
        820:{
            items:3,
            nav:false
        },
        990:{
            items:5,
            nav:false,
            loop:true
        }
    }
})