function registerUser() {
  var userName = prompt("Enter your name:");
  var phoneNumber = prompt("Enter your phone number:");
  var email = prompt("Enter your email:");
  var password = prompt("Enter your password:");
  var confirmPassword = prompt("Confirm your password:");

  if (!userName || !phoneNumber || !email || !password || !confirmPassword) {
    Swal.fire({
      title: "Error!",
      text: "Please fill in all the input fields.",
      icon: "error",
    });
  } else {
    if (password === confirmPassword) {
      Swal.fire({
        title: "Good job!",
        text: "You are successfully registered!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Passwords do not match. Please enter the same password in both fields.",
        icon: "error",
      });
    }
  }
}

registerUser();
