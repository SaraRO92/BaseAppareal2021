const email = document.getElementById("email-address");
const button = document.getElementById("submit-button");

email.addEventListener("input", (e) => {
  // e.preventDefault;
 if (email.validity.valid == true) {
  console.log(email.validity.valid)
  document.getElementById("error-message").innerHTML = "";
  email.classList.remove("input-error");
  button.classList.remove("button-error");
  email.classList.add("input-success");
  button.classList.add("button-success");
 } else {
  text = "No parece un correo electrónico";
  document.getElementById("error-message").innerHTML = text;
  email.classList.add("input-error");
  button.classList.add("button-error");
  email.classList.remove("input-success");
  button.classList.remove("button-success");
 } 
});
