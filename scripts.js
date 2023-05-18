let userPassword = document.getElementById("user_password");
let confirmPassword = document.getElementById("confirm_password");
let submitButton = document.getElementById("submit_btn")
let passwordInput = document.querySelector(".password-input");

let errorMessage = document.createElement("div");
errorMessage.textContent = "Passwords do not match.";
errorMessage.style.cssText = "align-self: center; color: red; font-weight: bold;";


submitButton.addEventListener("click", () => {
    if(userPassword != confirmPassword) {
        userPassword.classList.add("error");
        confirmPassword.classList.add("error");
        passwordInput.appendChild(errorMessage);
    }
})

userPassword.addEventListener("click", () => {
    if(errorMessage) {
        passwordInput.removeChild(errorMessage);
        userPassword.classList.toggle("error");
        confirmPassword.classList.toggle("error");
    }
})