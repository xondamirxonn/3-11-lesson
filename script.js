let toppings = document.querySelectorAll(".topping");
let button = document.querySelector("#button")
let total = 2;


button.addEventListener("click", () => {
let random = Math.floor(Math.random() * 30 );
  

  if(total == 2){
    alert("Siz hali buyurtma bermadingiz")

  }

  else 
  alert(random + " raqam Buyurtmangiz tayyor \nXaridingiz uchun raxmat😊");
})

function updatePrice() {
  document.querySelector(".total").textContent = total;
}

let checkbox = document.querySelector("input");

toppings.forEach((t) => {
  t.addEventListener("click", (e) => {
    let li = e.target;

    while (li.tagName !== "LI") {
      li = e.target.parentElement;
    }

    let checkbox = li.children[0];
    let price = +li.getAttribute("data-price");
    let target = document.querySelector(li.getAttribute("data-target"));

    if (checkbox.checked) {
      checkbox.checked = false;
      target.classList.remove("show");
      total -= price;
    } else {
      checkbox.checked = true;
      target.classList.add("show");
      total += price;
    }

    updatePrice();
  });
});
