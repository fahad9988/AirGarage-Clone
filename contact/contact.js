let dropdown=document.querySelector(".dropdown");
dropdown.onclick= function () {
    dropdown.classList.toggle('active');
}
function show(anything) {
  document.querySelector(".textBox").value=anything;
}