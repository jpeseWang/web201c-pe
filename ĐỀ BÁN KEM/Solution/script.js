function calTotal() {
  var checkboxes = document.querySelectorAll(".item:checked");
  var total = 0;
  var orderList = [];

  checkboxes.forEach(function (checkbox) {
    total += parseFloat(checkbox.getAttribute("data-price"));
    orderList.push(checkbox.value);
  });

  var orderListText =
    orderList.length > 0
      ? "Selected Items: " + orderList.join(", ")
      : "No items selected";
  document.getElementById("order-list").textContent = orderListText;
  document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}
