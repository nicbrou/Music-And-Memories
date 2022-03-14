let signUpButton = document.getElementById("signUpButton");
let appDescription = document.getElementById("appDescription");

signUpButton.addEventListener("click", newAccount);

function newAccount() {
  appDescription.style.visibility = "hidden";
}
