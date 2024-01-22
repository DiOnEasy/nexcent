let registrationForm = document.querySelector(
  ".overlay .registration__content"
);
let thanks = document.querySelector(".overlay .thanks");

let registrationFirst = document.querySelector(
  ".registration .registration__form"
);
let registrationSecond = document.querySelector(".overlay .registration__form");
let overlay = document.querySelector(".overlay");
document.querySelectorAll(".modal__button").forEach((button) => {
  button.onclick = () => openModal();
});

document.querySelector('body').addEventListener('mouseleave', function(event) {
  openModal()
});

function openModal() {
  overlay.classList.remove("none");
  registrationForm.classList.remove("none");
}

registrationForm.onclick = (e) => stopProp(e);
thanks.onclick = (e) => stopProp(e);

function stopProp(e) {
  e.stopPropagation();
}
function updateCountdown(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;

  document.querySelector(".hours p").textContent = hours;
  document.querySelector(".minutes p").textContent = minutes;
  document.querySelector(".seconds p").textContent = remainingSeconds;
  document.querySelector(".overlay .hours p").textContent = hours;
  document.querySelector(".overlay .minutes p").textContent = minutes;
  document.querySelector(".overlay .seconds p").textContent = remainingSeconds;
}

var totalSeconds = 12 * 60 * 60;

var countdownInterval = setInterval(function () {
  updateCountdown(totalSeconds);

  totalSeconds--;
}, 1000);

overlay.onclick = (e) => {
  overlay.classList.add("none");
  registrationForm.classList.add("none");
  thanks.classList.add("none");
  e.stopPropagation();
};

registrationFirst.onsubmit = (e) => submitForm(e);
registrationSecond.onsubmit = (e) => submitForm(e);

function submitForm(e) {
  e.preventDefault();
  overlay.classList.remove("none");
  registrationForm.classList.add("none");
  thanks.classList.remove("none");
  document.querySelectorAll(".registration__form input").forEach((input) => {
    input.value = "";
  });
}

document.querySelector(".thanks__button").onclick = () => closeModal();
document.querySelector(".x").onclick = () => closeModal();

function closeModal() {
  overlay.classList.add("none");
  registrationForm.classList.add("none");
  thanks.classList.add("none");
}

let burger = document.querySelector(".burger");

document
  .querySelectorAll(".header__links a")
  .forEach((link) => (link.onclick = () => openMobileMenu()));

burger.onclick = () => openMobileMenu();

function openMobileMenu() {
  if (window.innerWidth <= 1280) {
    document
      .querySelector(".header__nav-links")
      .classList.toggle("links__opened");
    document.querySelector(".header__links").classList.toggle("flex");
    document
      .querySelector(".burger__line:nth-child(1)")
      .classList.toggle("mobile-menu__line_rotated");
    document
      .querySelector(".burger__line:nth-child(2)")
      .classList.toggle("none");

    document
      .querySelector(".burger__line:nth-child(3)")
      .classList.toggle("mobile-menu__line_other-rotated");

    document.querySelector("body").classList.toggle("hidden");
  }
}
