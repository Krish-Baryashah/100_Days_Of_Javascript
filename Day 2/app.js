const inputField = document.querySelector("#password");
const outputField = document.querySelector("#output");
const icon = document.querySelector("svg");

inputField.addEventListener("input", function () {
  console.log(inputField.value);
  let password = inputField.value;
  if (password.length < 8) {
    outputField.innerText = "Password is too short";
    outputField.style.color = "red";
    outputField.style.textShadow =
      " rgb(241 0 3) -2px 0px 16px, rgb(235 63 63) 0px 0px 0px;";
    icon.style.color = "red";
  } else if (password.search(/[a-z]/) == -1) {
    outputField.innerText = "Password is missing a Lowercase letter";
    outputField.style.color = "red";
    icon.style.color = "red";

    outputField.style.textShadow =
      " rgb(241 0 3) -2px 0px 16px, rgb(235 63 63) 0px 0px 0px;";
  } else if (password.search(/[A-Z]/) == -1) {
    outputField.innerText = "Password is missing a Uppercase letter";
    outputField.style.color = "red";
    icon.style.color = "red";

    outputField.style.textShadow =
      " rgb(241 0 3) -2px 0px 16px, rgb(235 63 63) 0px 0px 0px;";
  } else if (password.search(/[0-9]/) == -1) {
    outputField.innerText = "Password is missing a Numeric letter";
    outputField.style.color = "red";
    icon.style.color = "red";

    outputField.style.textShadow =
      " rgb(241 0 3) -2px 0px 16px, rgb(235 63 63) 0px 0px 0px;";
  } else if (
    password.search(/[!\@\#\$\%\^\&\*\(\)\+\-\<\>\,\.\?\/\|\\]/) == -1
  ) {
    outputField.innerText = "Password is missing a Special letter";
    outputField.style.color = "red";
    icon.style.color = "red";

    outputField.style.textShadow =
      " rgb(241 0 3) -2px 0px 16px, rgb(235 63 63) 0px 0px 0px;";
  } else {
    icon.style.color = 'green'
    outputField.innerText = "Password is Strong";
    outputField.style.color = "green";
    outputField.style.textShadow =
      " rgb(52 197 24) 0px 0px 8px, rgb(0 4 2) 0px 0px 0px";
  }
});
