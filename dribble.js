document.getElementById("create-account-button").addEventListener("click", function(event) {
    event.preventDefault();

    resetErrorMessages();

    var name = document.getElementById("name").value.trim();
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var terms = document.getElementById("terms").checked;

    var formValid = true;

    if (name === "") {
        displayErrorMessage("name-error", "please enter your name.");
        formValid = false;
    }
    if (username === "") {
        displayErrorMessage("username-error", "please enter a username.");
        formValid = false;
    }
    if (email === "") {
        displayErrorMessage("email-error", "please enter your email address.");
        formValid = false;
    }
    if (password === "") {
        displayErrorMessage("password-error", "please enter a password.");
        formValid = false;
    }
    if (!terms) {
        displayErrorMessage("terms-error", "please accept the terms.");
        formValid = false;
    }

    if (formValid) {
        var usernameAvailable = checkUsernameAvailability(username);
        if (!usernameAvailable) {
            displayErrorMessage("username-error", "Username is not available. please choose a different one.");
            formValid = false;
        }
    }

    if (formValid) {
        window.location.href = "profile.html";
    }
});

function checkUsernameAvailability(username) {
    return true;
}

function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function resetErrorMessages() {
    var errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function(element) {
        element.innerText = "";
    });
}
