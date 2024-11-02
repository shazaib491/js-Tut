  let nameValidation = document.getElementById("nameErr");
let emailValidation = document.getElementById("emailErr");
let passwordValidation = document.getElementById("passwordErr");
let confirmValidation = document.getElementById("confirmPasswordErr");
let nameValid,
  emailValid,
  passwordValid,
  confirmValid = false;
function onUserInput(event) {
  let name = event.target.value;
  let nameCondition = !(name.length > 3 && name.length < 15); //name must be between 3 to 14
  let contain = !name.startsWith("Mr");
  if (nameCondition || contain) {
    if (nameCondition) {
      nameValidation.textContent = "Name length must be between 3 to 14";
    }
    if (contain) {
      nameValidation.textContent = "name must contain Mr";
    }
  } else {
    nameValid = true;
    nameValidation.textContent = "";
  }
}

function onUserBLurtheForm(event) {
  let name = event.target.value;
  if (!name.length) {
    nameValidation.textContent = "Name is required";
  } else {
    nameValidation.textContent = "";
  }
}

function validateEmail(event) {
  let emailValue = event.target.value;
  if (!emailValue.includes("@gmail.com")) {
    emailValidation.textContent = "Email Must be in valid format";
  } else {
    passwordValid = true;
    emailValidation.textContent = "";
  }
}

function onEmailBlur(event) {
  let emailValue = event.target.value;
  if (!emailValue.length) {
    emailValidation.textContent = "Email is required";
  } else {
    emailValid = true;
    emailValidation.textContent = "";
  }
}

function onBlurPassword(event) {
  let password = event.target.value;
  if (!password.length) {
    passwordValidation.textContent = "Password is required";
  } else {
    passwordValidation.textContent = "";
  }
}

function onBlurConfirmPassword(event) {
  let password = event.target.value;
  if (!password.length) {
    confirmValidation.textContent = "Confirm Password is required";
  } else {
    confirmValidation.textContent = "";
  }
}

function onInputPassword(event) {
  let password = event.target.value;
  if (!(password.length > 8 && password.includes("@"))) {
    passwordValidation.textContent = "Password must be at least 8 characters";
  } else {
    passwordValid = true;
    passwordValidation.textContent = "";
  }
}

function onInputConfirmPassword(event) {
  let originalPassword = document.getElementById("password");
  let confirmPassword = event.target.value;
  if (!(originalPassword.value == confirmPassword)) {
    confirmValidation.innerHTML = "Confirm password must be same ";
  } else {
    confirmValid = true;
    confirmValidation.innerHTML = "";
  }
}

function onSubmitForm(event) {
  event.preventDefault();
  if (
    !nameValidation.textContent &&
    !emailValidation.textContent &&
    !passwordValidation.textContent &&
    !confirmValidation.textContent
  ) {
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(event.target.confirmpassword.value);
  }
}

