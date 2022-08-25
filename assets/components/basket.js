let basketTemp;
let basketLocal;
let shoppingDiv;
if(!basketLocal)
    {
        basketLocal = localStorage.setItem("basketLocal", JSON.stringify([]))
        basketTemp = localStorage.getItem("basketLocal");
    }
else{
    basketTemp = localStorage.getItem("basketLocal");
}
if (basketTemp.length == 0) {
    $("#cart-div__shopping")[0].innerText = "Your shopping cart is empty!"
}
else{
    for(let i = 0; i < basketTemp.length; i++){
        console.log(basketTemp[i]);
    }
}


$(document).ready(function(){
    
    let basket = localStorage.getItem("basketLocal");
    $("#BASKET_COUNT")[0].innerText = basket.length
    $(".cart").click(function(){
        let img = this.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.src;
        let name = this.previousElementSibling.firstElementChild.innerText;
        let price = this.previousElementSibling.firstElementChild.nextElementSibling.innerText;
        let obj = {
            img, name, price
        }
        let basket = JSON.parse(localStorage.getItem("basketLocal"));
        basket.push(obj);
        $("#BASKET_COUNT")[0].innerText = basket.length
        localStorage.setItem("basketLocal", JSON.stringify(basket));
        // console.log($(".BASKET_COUNT")[0].innerText)
        basketTemp = localStorage.getItem("basketLocal");
        if (basketTemp.length == 0) {
            $("#cart-div__shopping")[0].innerText = "Your shopping cart is empty!"
        }
        else{
            for(let i = 0; i < basketTemp.length; i++){
                $("#cart-div__shopping")[0].innerText += JSON.stringify(basketTemp[i]);
            }
        }
        
    })
})