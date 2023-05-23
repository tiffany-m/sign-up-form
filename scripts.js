// Input Fields
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let userEmail = document.getElementById("user_email");
let userTel = document.getElementById("user_tel");
let userPassword = document.getElementById("user_password");
let confirmPassword = document.getElementById("confirm_password");
// Required Message Elements
let firstNameRequired = document.querySelector(".first-name-required");
let lastNameRequired = document.querySelector(".last-name-required");
let emailRequired = document.querySelector(".email-required");
let phoneRequired = document.querySelector(".phone-required");
let pwRequired = document.querySelector(".pw-required");
let confirmPwRequired = document.querySelector(".confirm-pw-required");
// Error Messages
let pwErrorMessage = document.querySelector(".pw-error-message");
let emailTelErrorMessage = document.querySelector(".email-tel-error-message");
// Regex Patterns
const emailRegX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegX = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;
// Password Validation
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
// Other
let submitButton = document.getElementById("submit_btn")

function validateEmailPhone(mail, phone) {
    if (mail === "" && phone === "") {
        return;
    }
    else if (emailRegX.test(mail) === false && phoneRegX.test(phone) === false) {
        userEmail.classList.add("error");
        userTel.classList.add("error");
        emailTelErrorMessage.classList.remove("hidden");
        emailTelErrorMessage.textContent = "Email and Tel are invalid.";
    }
    else if (emailRegX.test(mail) === true && phoneRegX.test(phone) === false) {
        userEmail.classList.remove("error");
        userTel.classList.add("error");
        emailTelErrorMessage.classList.remove("hidden");
        emailTelErrorMessage.textContent = "Tel is invalid.";
    } else if (emailRegX.test(mail) === false && phoneRegX.test(phone) === true) {
        userEmail.classList.add("error");
        userTel.classList.remove("error");
        emailTelErrorMessage.classList.remove("hidden");
        emailTelErrorMessage.textContent = "Email is invalid.";
    } else {
        userEmail.classList.remove("error");
        userTel.classList.remove("error");
        emailTelErrorMessage.classList.add("hidden");
    }
}

function validateRequiredFields() {
    if (firstName.value === "") {
        firstNameRequired.classList.remove("hidden");
    } else {
        firstNameRequired.classList.add("hidden");
    }

    if (lastName.value === "") {
        lastNameRequired.classList.remove("hidden");
    } else {
        lastNameRequired.classList.add("hidden");
    }

    if (userEmail.value === "") {
        emailRequired.classList.remove("hidden");
    } else {
        emailRequired.classList.add("hidden");
    }

    if (userTel.value === "") {
        phoneRequired.classList.remove("hidden");
    } else {
        phoneRequired.classList.add("hidden");
    }

    if (userPassword.value === "") {
        pwRequired.classList.remove("hidden");
    } else {
        pwRequired.classList.add("hidden");
    }

    if (confirmPassword.value === "") {
        confirmPwRequired.classList.remove("hidden");
    } else {
        confirmPwRequired.classList.add("hidden");
    }
}

function validatePwConfirmMatch() {
    if ((userPassword != confirmPassword) && (userPassword.value != "" && confirmPassword.value != "")) {
        userPassword.classList.add("error");
        confirmPassword.classList.add("error");
        pwErrorMessage.classList.remove("hidden");
        userPassword.textContent = "";
        confirmPassword.textContent = "";
    }
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    validateRequiredFields();
    validateEmailPhone(userEmail.value, userTel.value);
    validatePwConfirmMatch();
})

// ------------------ PASSWORD MESSAGE BOX ---------------------
// When user clicks on password field, show message box
userPassword.onfocus = function () {
    document.getElementById("message").style.display = "block";
}
// When user clicks outside of password field, hide message box
userPassword.onblur = function () {
    document.getElementById("message").style.display = "none";
}
// When user starts to type something inside password field
userPassword.onkeyup = function () {
    if (userPassword.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    if (userPassword.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    if (userPassword.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (userPassword.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

// Remove Error from password and confirm password fields
userPassword.addEventListener("click", () => {
    userPassword.classList.remove("error");
    confirmPassword.classList.remove("error");
    pwErrorMessage.classList.add("hidden");
})

confirmPassword.addEventListener("click", () => {
    userPassword.classList.remove("error");
    confirmPassword.classList.remove("error");
    pwErrorMessage.classList.add("hidden");
})