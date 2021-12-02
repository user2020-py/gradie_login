var d = document;
var input1 = d.querySelector("#email");
var input2 = d.querySelector("#password");
var submit = d.getElementById("submit")
var isE, isP;

const enableBtn = () => {
    if(isP && isE){
        submit.style.opacity = "1.0";
        submit.removeAttribute("disabled");
    } else {
        submit.style.opacity = "0.5";
        submit.setAttribute("disabled", "");
    }
}

const testEmail = () => {
    let email = d.getElementById("email");
    isE = isEmailAddress(email)
    enableBtn()
}

const testPassword = () => {
    let password = d.getElementById("password");
    isP = isPassword(password)
    enableBtn()
}

// Keypress event
input1.addEventListener("keypress", testEmail);
input2.addEventListener("keypress", testPassword);

// Test functions
function isEmailAddress(email) { 
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,3}$/; 
    if (Boolean(email.value.match(pattern))) {
        email.style.borderColor = "#0f0";
        email.style.borderWidth = "2px";
        return true
    } else {
        email.style.borderColor = "#f00";
        email.style.borderWidth = "2px";
        return false
    } 
}

function isPassword(password) {
    var pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/
    if (Boolean(password.value.match(pattern))) {
        password.style.borderColor = "#0f0";
        password.style.borderWidth = "2px";
        return true
    } else {
        password.style.borderColor = "#f00";
        password.style.borderWidth = "2px";
        return false
    }
}
