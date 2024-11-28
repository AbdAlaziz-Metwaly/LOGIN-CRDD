var signupNameInpt = document.getElementById("signupName");
var signupEmailInpt = document.getElementById("signupEmail");
var signupPasswordInpt = document.getElementById("signupPassword");
var SignUp = document.getElementById("SignUp");
var msg = document.getElementById("msg");
var signupList = [];
if (localStorage.getItem("sitecontainer") != null) {
  signupList = JSON.parse(localStorage.getItem("sitecontainer"));
} else {
  signupList = [];
}

if (signupList == []) {
  arraySignUp.push(email);
  localStorage.setItem("sitecontainer", JSON.stringify(signupList));
}
SignUp.addEventListener("click", function () {
  var  user = {
      name: signupNameInpt.value,
      email: signupEmailInpt.value,
      password: signupPasswordInpt.value,}
      if (signupList==[]) {
        signupList.push(user);
        localStorage.setItem("sitecontainer", JSON.stringify(signupList));
      }
  if (
    signupNameInpt.value == "" &&
    signupEmailInpt.value == "" &&
    signupPasswordInpt.value == ""
  ) {
    msg.innerHTML =
    '<span>All inputs is required</span>';
    
  } else {
    
    if (checkEmail()==false) {
      msg.innerHTML =
      '<span class="text-danger">this email is existing</span>';
    }
    else{
      signupList.push(user);
    localStorage.setItem("sitecontainer", JSON.stringify(signupList));
      msg.innerHTML =
      '<span class=" text-success">Success</span>'; 
      console.log(signupList);
    }
  }
});


function checkEmail() {
  for (i = 0; i < signupList.length; i++) {
    if (signupList[i].email.toLowerCase() == signupEmailInpt.value.toLowerCase()) {
      return false;
    }
  }
}

