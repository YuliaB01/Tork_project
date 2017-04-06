$(document).ready(function() {
    var form = document.forms.subscribe;
    var email = document.getElementById("email");
    var errorMessage = document.getElementById("errorMessage");
    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    form.addEventListener("submit", function(e) {
        if (!email.value.match(emailRegEx)) {
            e.preventDefault();
            errorMessage.textContent = "Please, include an '@' and a '.' in your email address!";
        } else if (email.value.trim() == "" || !email.value) {
            e.preventDefault();
            errorMessage.textContent = "Invalid input! Please, enter your email address!";
        } else {
            errorMessage.textContent = "";
            clearFormInputs();
        }
    });

    $(".see-more-btn").on("click", function() {
       return false;
    });

    $(".get-in-touch__link").on("click", function() {
       return false;
    });

    $(".btn").on("click", function() {
       return false;
    });
});

function clearFormInputs(target) {
    target.find(":input").val("");
}
