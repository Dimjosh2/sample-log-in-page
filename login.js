function login() {
  // Get the username and password from the input fields
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate the username and password
  if (username === "Dimjosh2" && password === "Dim-josh27771@") {
    // Redirect to your Login account
    window.location.href = "https://login.com/yourUsername";
  } else {
    // Display an error message if the username or password is incorrect
    alert("Incorrect username or password. Please try again.");
  }
}
