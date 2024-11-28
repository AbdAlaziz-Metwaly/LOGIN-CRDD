var userName = JSON.parse(localStorage.getItem("nameUser"));


var Logout=document.getElementById("Logout")






document.getElementById("username").innerHTML =`Welcome `+ userName;



Logout.addEventListener("click", function () {
    localStorage.removeItem("nameUser");
    window.location = "./signin.html";
  });