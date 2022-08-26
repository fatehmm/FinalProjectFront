let basket = JSON.parse(localStorage.getItem("basketLocal"));

$(document).ready(function(){
    if(!basket)
{
    $(".checkout-table")[0].style.display = "none"
}
else
{
    update_html();
}

$(".add-button").click(function(){
    let basket = JSON.parse(localStorage.getItem("basketLocal"));
   let prodName = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
   let prod = basket.find((val)=>{
    return val.name == prodName;
   })
   prod.count++;
   localStorage.setItem("basketLocal", JSON.stringify(basket));
   update_html();
   location.reload()
})

$(".remove-button").click(function(){
    let basket = JSON.parse(localStorage.getItem("basketLocal"));
   let prodName = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
   let prod = basket.find((val)=>{
    return val.name == prodName;
   })
   if(prod.count > 1)
        prod.count--;
    else{
        alert("Remove limit exceeded")
    }
   localStorage.setItem("basketLocal", JSON.stringify(basket));
   update_html();
   location.reload()

})

})


function update_html(){
    let basket = JSON.parse(localStorage.getItem("basketLocal"));
    $(".table-body")[0].innerHTML = '';
    for(let i = 0; i < basket.length; i++)
    {
        $(".table-body")[0].innerHTML += 
        `
            <tr>
            <td><img src="${basket[i].img}" style="height: 95%"></td>
            <td>${basket[i].name}</td>
            <td>${basket[i].count}</td>
            <td>${basket[i].price}</td>
            <td>${basket[i].price*basket[i].count}</td>
            <td><button class="add-button">+</button> <button class="remove-button">-</button></td>
            </tr>
        `
    }
}