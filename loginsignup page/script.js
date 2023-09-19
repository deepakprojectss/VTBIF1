var login = document.querySelector(".containers1");
var signup = document.querySelector(".containers2");
var login_btn = document.querySelector(".login-btn");
var signup_btn = document.querySelector(".signup-btn")
function showSignUp(){
   signup.classList.remove("hide"); // Remove mystyle class from DIV
  signup.classList.add("show"); 
  login.classList.remove("show"); // Remove mystyle class from DIV
  login.classList.add("hide"); 
  signup_btn.classList.add("active"); // Remove mystyle class from DIV
  login_btn.classList.remove("active"); // Remove mystyle class from DIV



}
function showLogin(){
    login.classList.remove("hide"); // Remove mystyle class from DIV
   login.classList.add("show"); 
   signup.classList.remove("show"); // Remove mystyle class from DIV
   signup.classList.add("hide"); 
   login_btn.classList.add("active"); // Remove mystyle class from DIV
   signup_btn.classList.remove("active"); // Remove mystyle class from DIV
 
 
 
 }
