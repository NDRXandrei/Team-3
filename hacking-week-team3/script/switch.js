// Hanno partecipato Giorgia e Dario
let logbtn = document.querySelector("#upper-loginbtn")
let signbtn = document.querySelector("#upper-registerbtn")
let registerForm = document.querySelector("#signUp")
let loginForm = document.querySelector("#login")

logbtn.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "flex";
  })
  
  signbtn.addEventListener("click", () => {
    registerForm.style.display = "flex";
    loginForm.style.display = "none";
  })
