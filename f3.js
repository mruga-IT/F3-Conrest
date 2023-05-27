document.addEventListener("DOMContentLoaded", function() {
    // Check if the access token exists in local storage
    if (localStorage.getItem("accessToken")) {
      // Redirect to the profile page
      showPage("profile-page");
      displayProfileDetails();
    } else {
      // Redirect to the signup page
      showPage("signup-page");
    }
  });
  
  // Signup form submit event
  document.getElementById("signup-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Validate input fields
    if (username === "" || password === "") {
      showError("All fields are mandatory.");
      return;
    }
  
    // Generate a random access token
    var accessToken = generateAccessToken();
  
    // Create the user state object
    var userState = {
      username:
  