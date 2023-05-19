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

submitButton.addEventListener("click", () => {
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
    
    if(userPassword.value === "") {
        pw.classList.remove("hidden");
    } else {
        pw.classList.add("hidden");
    }

    if (confirmPassword.value === "") {
        confirmPw.classList.remove("hidden");
    } else {
        confirmPw.classList.add("hidden");
    }
})

// let errorMessage = document.createElement("div");
// errorMessage.textContent = "Passwords do not match.";
// errorMessage.style.cssText = "align-self: center; color: red; font-weight: bold;";

// submitButton.addEventListener("click", () => {
//     if(userPassword != confirmPassword) {
//         userPassword.classList.add("error");
//         confirmPassword.classList.add("error");
//         passwordInput.appendChild(errorMessage);
//     }
// })

// userPassword.addEventListener("click", () => {
//     if(errorMessage) {
//         passwordInput.removeChild(errorMessage);
//         userPassword.classList.toggle("error");
//         confirmPassword.classList.toggle("error");
//         userPassword.textContent = "";
//         confirmPassword.textContent ="";
//     }
// })

// confirmPassword.addEventListener("click", () => {
//     if (errorMessage) {
//         passwordInput.removeChild(errorMessage);
//         userPassword.classList.toggle("error");
//         confirmPassword.classList.toggle("error");
//         userPassword.textContent = "";
//         confirmPassword.textContent = "";
//     }
// })