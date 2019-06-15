$(document).ready(function() {

    let nameInput = $("#signUpName");
    let emailInput = $("#signUpEmail");
    let passwordInput = $("#signUpPassword");

    $("#signUpButton").on("click", function() {
        event.preventDefault();
        console.log("made it")
        if (!nameInput.val().trim() || !emailInput.val().trim() || !passwordInput.val()) {
            return;
          }

        let newUser = {
            name: nameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        console.log(newUser.name + "<--newUser.name") 
        signUp();
        nameInput.val("");
        emailInput.val("");
        passwordInput.val("");

        function signUp() {
            $.ajax("/api/new", {
                type: "POST",
                data: newUser
            }).then(function(dbEntry) {
                console.log(dbEntry);
                window.location.replace("/market")
            })
        }

    
        
    })
       
})