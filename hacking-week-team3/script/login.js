// Hanno partecipato Andrei, Andrea, Luca, Giorgia, Dario

const email = document.querySelector("#log-email");
const password = document.querySelector("#log-password");

document.getElementById("loginbtn").addEventListener("click", async (event) => {
  event.preventDefault();

  let headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  };

  let dataForm = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  try {

    let url = "https://api-nodejs-todolist.herokuapp.com/user/login";

    await fetch(url, {
      headers: headers,
      method: "POST",
      body: dataForm
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("token", JSON.stringify(data.token));
        console.log(data);
      });
    
 //Push Andrea
    
 //Push Andrei

    url = "https://api-nodejs-todolist.herokuapp.com/user/me";

    let token = JSON.parse(sessionStorage.getItem("token"));

    await fetch(url, {
      headers: {
        headers,
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("data", JSON.stringify(data));
        location.href = "profile.html";
      });

  } catch (error) {
    document.querySelector("#div-err").style.display = "flex";
  }
});
