function validateForm(){

    let nameError = document.getElementById("nameError");
    let fullnameError = document.getElementById("fullnameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let ageError = document.getElementById("ageError");

    let isValid = true;

    const name = document.getElementById("name").value.trim()
    const fullname = document.getElementById("fullname").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    const age = document.getElementById("age").value.trim()

    if(name == ""){
        nameError.innerText = "Please enter your name."
        isValid = false
    }

    if(fullname == ""){
        fullnameError.innerText = "Please enter your full name."
        isValid = false
    }
    
    if(password == ""){
        passwordError.innerText = "Please enter your password."
        isValid = false
    }

    if(email == ""){
        emailError.innerText = "Please Enter your email."

        isValid = false
    }else if(!email.match(emailPattern)){
        emailError.innerText = "Please Enter valid email."
        isValid = false
    }

    let ageNumber = parseInt(age)

    if(age == ""){
        ageError.innerText = "Enter your age."
        isValid = false
    }else if(ageNumber == 0 || ageNumber > 100 || isNaN(ageNumber)){
        ageError.innerText = "Enter valid age."
        isValid = false
    }
    console.log({name:name , fullname:fullname , password:password , email:email , age:age});
    
    return isValid;
}