// Hanno partecipato Andrei, Andrea, Luca, Giorgia, Dario

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const name = document.querySelector("#name");
const age = document.querySelector("#age");

document.getElementById("register").addEventListener("click", async (event) => {
  event.preventDefault();

  let headers = {
    Accept: "application/json, text/plain, /",
    "Content-Type": "application/json",
  };

  let data = JSON.stringify({
    email: email.value,
    password: password.value,
    name: name.value,
    age: age.value,
  });
  let url = "https://api-nodejs-todolist.herokuapp.com/user/register";

  await fetch(url, { headers: headers, method: "POST", body: data })
    .then((response) => {

      if (response.status == 201) {
        return response.json()
      } else {
        document.querySelector(".div-err-reg").style.display = "flex";
      }
    })
    .then((data) => {
      sessionStorage.setItem("token", JSON.stringify(data.token));
      sessionStorage.setItem("data", JSON.stringify(data.user));
      location.href = "./profile.html";
    })
});
