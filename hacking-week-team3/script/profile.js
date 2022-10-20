// Hanno partecipato Andrei, Dario, Giorgia
let data = JSON.parse(sessionStorage.getItem("data"));
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let age = document.querySelector("#age");

name.append(data.name);
email.append(data.email);
age.append(data.age);
