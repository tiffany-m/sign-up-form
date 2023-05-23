// Input texts
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let userEmail = document.getElementById("user_email");
let userTel = document.getElementById("user_tel");
let userPassword = document.getElementById("user_password");
let confirmPassword = document.getElementById("confirm_password");

// Required elements
let fName = document.querySelector(".fName");
let lName = document.querySelector(".lName");
let eMail = document.querySelector(".eMail");
let phoneNum = document.querySelector(".phoneNum");
let pw = document.querySelector(".pw");
let confirmPw = document.querySelector(".confirmPw");

let submitButton = document.getElementById("submit_btn")
let passwordInput = document.querySelector(".password-input");
let pwErrorMessage = document.querySelector(".pwErrorMessage");
let emailTelErrorMessage = document.querySelector(".emailTelErrorMessage");

let emailRegX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let phoneRegX = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

function validateEmailPhone(mail, phone) {
    if (emailRegX.test(mail.value) === false && phoneRegX.test(phone.value) === false) {
        userEmail.classList.add("error");
        userTel.classList.add("error");
        emailTelErrorMessage.classList.remove("hidden");
        emailTelErrorMessage.textContent = "Email and Tel are invalid.";
    }
    else if (emailRegX.test(mail.value) === true && phoneRegX.test(phone.value) === false) {
        userEmail.classList.remove("error");
        userTel.classList.add("error");
        emailTelErrorMessage.classList.remove("hidden");
        emailTelErrorMessage.textContent = "Tel is invalid.";
    } else if (emailRegX.test(mail.value) === false && phoneRegX.test(phone.value) === true) {
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
        fName.classList.remove("hidden");
    } else {
        fName.classList.add("hidden");
    }

    if (lastName.value === "") {
        lName.classList.remove("hidden");
    } else {
        lName.classList.add("hidden");
    }

    if (userEmail.value === "") {
        eMail.classList.remove("hidden");
    } else {
        eMail.classList.add("hidden");
    }

    if (userTel.value === "") {
        phoneNum.classList.remove("hidden");
    } else {
        phoneNum.classList.add("hidden");
    }

    if (userPassword.value === "") {
        pw.classList.remove("hidden");
    } else {
        pw.classList.add("hidden");
    }

    if (confirmPassword.value === "") {
        confirmPw.classList.remove("hidden");
    } else {
        confirmPw.classList.add("hidden");
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
    validateEmailPhone(userEmail, userTel);
    validatePwConfirmMatch();
})

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
userPassword.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
userPassword.onblur = function () {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
userPassword.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (userPassword.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (userPassword.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (userPassword.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (userPassword.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

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