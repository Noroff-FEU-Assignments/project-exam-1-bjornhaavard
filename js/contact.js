import { hamburgerMenu } from "./constants/hamburger.js";
hamburgerMenu()

const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const messageSent = document.querySelector("#messageSent");
const textArea = document.querySelector("#textArea")
const textError = document.querySelector("#textError")

function validateInput(event) {

  event.preventDefault();

  if (checkValue(fullName.value, 5)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkValue(subject.value, 10)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (checkValue(textArea.value, 25)) {
    textError.style.display = "none";
  } else {
    textError.style.display = "block";
  }

  if (checkValue(fullName.value, 5) && validateEmail(email.value) && checkValue(subject.value, 10) && checkValue(textArea.value, 25)) {
    messageSent.innerHTML = `<div id="messageSent"> Message sent, 
                                you will be redirected to the homepage </div>`;
    messageSent.style.display = "block";
    form.reset();
    setTimeout(() => {
      // messageSent.style.display = "none";
      document.location.href = "/index.html";
    }, 4000); 
  }
}

form.addEventListener("submit", validateInput);

function checkValue(value, char) {
  if (value.trim().length >= char) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

