const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "show";
        kp2.style.backgroundColor = "#fff0f3";

        kp2.value = "";
        kp1.focus();
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#90EE90";
        kp2.style.color = "#000";
    }
};