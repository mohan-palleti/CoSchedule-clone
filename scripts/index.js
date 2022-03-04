document.querySelector(".sign_up_link").addEventListener("click", function () {
  window.location.href = "signup.html";
});
document.querySelector(".sign_in_link").addEventListener("click", function () {
  window.location.href = "signing.html";
});
document.querySelector(".demo_link").addEventListener("click", function () {
  window.location.href = "signup_demo.html";
});
document.querySelector(".pricing22").addEventListener("click", function () {
  window.location.href = "pricing.html";
});
document.querySelector("#price_link").addEventListener("click", function () {
  window.location.href = "pricing.html";
});
const toggleButton = document.getElementsByClassName("toggle-button")[1];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const wrapper = document.querySelector(".wrapper");
const header_mid_section = document.querySelector(".header_mid_section");
const header_right_section = document.querySelector(".header_right_section");

console.log(wrapper);

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  wrapper.classList.toggle("active");
  header_mid_section.classList.toggle("active");
  header_right_section.classList.toggle("active");
});
