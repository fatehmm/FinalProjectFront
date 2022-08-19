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

window.addEventListener("scroll", function(e){
    console.log(window.scrollY)
    if (this.window.scrollY >= 245)
    {
        $('.navbar')[0].classList.add("fixed-navbar")
    }
    else
    {
        $('.navbar')[0].classList.remove("fixed-navbar")
    }
})