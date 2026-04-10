/* Javascript form validation */

function validateform() {

    document.getElementById("nameerror").innerText = "";
    document.getElementById("emailerror").innerText = "";
    document.getElementById("ageerror").innerText = "";
    document.getElementById("passworderror").innerText = "";
    document.getElementById("ziperror").innerText = "";

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let age = document.getElementById("age").value.trim();
    let zip = document.getElementById("zip").value.trim();

    let formUser = {
        name,
        email,
        password,
        age,
        zip
    }

    console.log(formUser);

    // name
    if (name === "") {
        document.getElementById("nameerror").innerText = "Please Enter your name.";
        isValid = false;
    }

    // email
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (email === "") {
        document.getElementById("emailerror").innerText = "Please Enter your email.";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailerror").innerText = "Please Enter valid email...";
        isValid = false;
    }

    // password
    if (password === "") {
        document.getElementById("passworderror").innerText = "Please Enter your password.";
        isValid = false;
    }

    // age
    if (age === "") {
        document.getElementById("ageerror").innerText = "Please Enter your age.";
        isValid = false;
    }

    // zip
    if (zip === "") {
        document.getElementById("ziperror").innerText = "Please Enter your zipcode.";
        isValid = false;
    }

    return isValid;
}