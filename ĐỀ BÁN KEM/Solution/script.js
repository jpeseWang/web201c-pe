function toggleMobileMenu() {
  var navigation = document.querySelector(".mobile-navigation");
  navigation.classList.toggle("show");
}

function calTotal() {
  var checkboxes = document.querySelectorAll(".item:checked");
  var total = 0;
  var orderList = [];

  checkboxes.forEach(function (checkbox) {
    total += parseFloat(checkbox.getAttribute("data-price"));
    orderList.push(checkbox.value);
  });

  var orderListText =
    orderList.length > 0 ? orderList.join("<br>") : "No items selected";

  // Use [0] to access the first element with the specified class
  document.getElementsByClassName("cart-item")[0].innerHTML = orderListText;
  document.getElementsByClassName("cart-total")[0].textContent =
    "Total: $" + total.toFixed(2);
}
