let headers = {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json",
};

let token = JSON.parse(sessionStorage.getItem("token"));

document.querySelector("#logoutbtn").onclick = async function logout() {
  try {
    let url = "https://api-nodejs-todolist.herokuapp.com/user/logout";

    await fetch(url, {
      headers: headers,
      method: "POST",
      Authorization: `Bearer ${token}`,
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.clear();
        window.location.href = "./home.html";
      });
  } catch (error) {
    alert("Error");
  }
};
