window.onload = function() {
  AOS.init({
    delay: 300,
    duration: 2000,
    once: false
  });
}

function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("block");
}