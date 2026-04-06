document.getElementById("my-form").addEventListener("submit" , function(e){
    
    e.preventDefault()

    let isValid = true;

    const NameError = document.getElementById("nameError");
    const EmailError = document.getElementById("emailError");
    const AgeError = document.getElementById("ageError");
    const PasswordError = document.getElementById("passwordError");
    const ZipError = document.getElementById("zipError");
    const CourseError = document.getElementById("coursesError");
    const GenderError = document.getElementById("genderError")

    const name = document.getElementById("inputname4").value.trim()
    const email = document.getElementById("inputEmail4").value.trim()
    const password = document.getElementById("inputPassword4").value.trim()
    const age = document.getElementById("inputage").value.trim()
    const zip = document.getElementById("inputZip").value.trim()
    const course = document.getElementById("courses").value
    const gender = document.querySelector("input[name=gender]:checked")

    // clear old error

    NameError.innerHTML = "";
    EmailError.innerHTML = "";
    PasswordError.innerHTML = "";
    AgeError.innerHTML = "";
    ZipError.innerHTML = "";
    CourseError.innerHTML = "";
    GenderError.innerHTML = "";
    

    if (name === "") {
        NameError.innerText = "Please Enter your name."
        isValid = false
    }

    // email

    const emailPattern = /^\S+@\S+\.\S+$/

    if (email === "") {
         EmailError.innerText = "Please Enter your email."
         isValid = false
    } else if (!emailPattern.test(email)) {
         EmailError.innerText = "Please Enter valid email..."
         isValid = false
    }

    // password 

    if (password === "") {
        PasswordError.innerText = "Please Enter your password."
        isValid = false
    }

    // age 

    if (age === "") {
        AgeError.innerText = "Please Enter your age."
        isValid = false
    }

    // zip

    if (zip === "") {
        ZipError.innerText = "Please Enter your zipcode.";
        isValid = false;
    }

    // course

    if(course === ""){
        CourseError.innerText = "Please Select a course"

        isValid = false;
    }

    // gender
    
    if(!gender){
        GenderError.innerText = "Please select gender."
        isValid = false;
    }

    if(isValid){
        const formData = {
            name:name,
            email:email,
            password:password,
            age:age,
            zip:zip,
            course:course,
            gender:gender.value
        }

        console.log("Form Data :" , formData);

        alert("Form Submitted Successfully.")
        
    }

    return isValid
});