// step-1: ad click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  //   step-2:  get the email address inside the email input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   console.log(email);
  // step-3: get password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  //   console.log(password);
  //   step-4: verify email & password
  if (email === "sontan@baap.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    // console.log("invalid");
    alert("Please put correct login information");
  }
});
