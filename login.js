






var byte=document.getElementById("byte")



      


function byteinlogg(){
    byteregi.replaceWith(bytelogin);
    
}

function callogin(){
    bytelogin.replaceWith(byteregi);
}




var byteregi=document.getElementById("byteregi");
var bytelogin=document.getElementById("bytelogin");
var namn=document.getElementById("namn");

var objPeople=[
    {
        username:"sam",
        password:"sam"
    },
    {
        username:"matt",
        password:"matt"
    },
    {
        username:"fredrik",
        password:"12345"
    },
   
]

var glasstext=document.getElementById("glasstext");
 var logout=document.getElementById("logout");
var glass=document.getElementById("glass");
 function welcome(){
    bytelogin.replaceWith(logout);
    byteregi.style.display="none"
    glass.style.display="none"
    document.getElementById("glasstext").innerHTML="Hej vad roligt att se er igen välkomna tillbaka.";
   
 }
function login() {

var username= document.getElementById("username").value
var password= document.getElementById("password").value

for(i=0;i<objPeople.length;i++){
    if(username==objPeople[i].username && password==objPeople[i].password){
       console.log(username+"is loggged in: ");
       
        welcome() ;
        localStorage.setItem("user",JSON.stringify(objPeople));
       return localStorage.setItem("isloggedin",username);
    
    }
    }
}


 document.getElementById("islogged").innerHTML=localStorage.getItem("isloggedin",username)

function registister(){
  byteregi.style.display="block";
    var regististerUser = document.getElementById("newuser").value
    var registerPassword= document.getElementById("newpassword").value
    var newUser={
        username:regististerUser,
        password:registerPassword
    }
    objPeople.push(newUser);
    console.log(objPeople);
    console.log("Ny användare: "+regististerUser);
}

function logoutbutton(){
localStorage.removeItem("isloggedin");
logout.replaceWith(bytelogin);
byteregi.style.display="block"
glass.style.display="block"

}

(function init(){
    if(localStorage.getItem("isloggedin",username=true)){
welcome();
    }else{
        logoutbutton();
    }

})();

