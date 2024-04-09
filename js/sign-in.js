const username = document.getElementById("username");
const password = document.getElementById("password");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
  
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  };
  
  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
  
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
  
    if (usernameValue === "") {
      setError(username, "Username is required");
      username.focus();
      return;
    } else {
      setSuccess(username);
    }
  
    if (passwordValue === "") {
      setError(password, "Password is required");
      password.focus();
      return;
    } else if (passwordValue.length < 8) {
      setError(password, "Password must be at least 8 character.");
      password.focus();
      return;
    } else {
      setSuccess(password);
    }

    const user = JSON.parse(localStorage.getItem(username.value));
    const email = JSON.parse(localStorage.getItem(username.value));
    if((usernameValue == user.name || usernameValue == email.email) && passwordValue == user.pass){
        window.location.href = "../index.html";
        alert("Login Successful");
    } else {
        setError(password, "Invalid Username or Password");
        password.focus();
    }
    
  };