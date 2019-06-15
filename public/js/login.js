$(document).ready(function() {

    let emailInput = $("#signInEmail");
    let passwordInput = $("#signInPassword");

    $("#signInButton").on("click", function() {
        event.preventDefault();
        console.log("made it")
                    if (!emailInput.val().trim() || !passwordInput.val()) {
            return;
          }

        let user = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        logIn(user);
        emailInput.val("");
        passwordInput.val("");

        function logIn(user) {
            $.ajax("/api/login", {
                type: "POST",
                data: user
            }).then(function() {
                console.log(user)
                window.location.replace("/example")
            }).catch(function(err) {
                console.log(err);
            })
        }

    
        
    })
       
})