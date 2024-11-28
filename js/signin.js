
var signinEmailInpht = document.getElementById("signinEmail");
var signinPasswordInpht = document.getElementById("signinPassword");
var Login = document.getElementById("Login");
var msg = document.getElementById("msg");
var username=document.getElementById("username")
var signupList = [];
if (localStorage.getItem("sitecontainer") !== null) {
  signupList = JSON.parse(localStorage.getItem("sitecontainer"));
}
Login.addEventListener("click", function () {
  if (signinEmailInpht.value == "" && signinPasswordInpht.value == "")
     {
      msg.innerHTML = ` <span>All inputs is required</span>`;
  }
  
  else {
   if ( checkPaas()==false) {
    msg.innerHTML ='<span class=" text-success">Success</span>'; 
    window.location = "./home.html";
    localStorage.setItem("nameUser", JSON.stringify(signupList[i].name))
    

   }
   else{
msg.innerHTML ='<span>incorrect email or password</span>';
   }
 
  }
});


function checkPaas() {
  for (i = 0; i < signupList.length; i++) {
    if (signupList[i].email.toLowerCase() == signinEmailInpht.value.toLowerCase()
    && signupList[i].password== signinPasswordInpht.value) {
      return false;
    }
  }
}

