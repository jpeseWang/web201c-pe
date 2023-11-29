const toggleMobileMenu = () => {
  var navigation = document.querySelector(".mobile-navigation");
  navigation.classList.toggle("show");
  console.log("toggleMobileMenu");
};

const CalTotal = () => {
  var totalPeople = document.getElementById("totalPeople").value;
  var totalPrice = totalPeople * 150;
  document.getElementsByClassName(
    "tour-total"
  )[0].textContent = `Total amount: ${totalPrice}$`;
};
