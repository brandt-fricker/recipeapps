$(document).ready(function(){

    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    signUpForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
          email: emailInput.val().trim(),
          password: passwordInput.val().trim()
        };
    
        if (!userData.email || !userData.password) {
          return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
      });

    function signUpUser(email, password) {
        $.post("/api/signup", {
          email: email,
          password: password
        })
          .then(function(data) {
            window.location.replace("/members");
            // If there's an error, handle it by throwing up a bootstrap alert
          })
          .catch(handleLoginErr);
      }
})