






var byte=document.getElementById("byte")



      


function byteinlogg(){
    byteregi.replaceWith(bytelogin);
    
}

function callogin(){
    bytelogin.replaceWith(byteregi);
}




var byteregi=document.getElementById("byteregi")
var bytelogin=document.getElementById("bytelogin")


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


 var logout=document.getElementById("logout");

 function welcome(){
    bytelogin.replaceWith(logout)
    byteregi.style.display="none"
    document.getElementById("glass").innerHTML="Hej vad roligt att se er igen välkomna tillbaka."
 }
function login() {

var username= document.getElementById("username").value
var password= document.getElementById("password").value

for(i=0;i<objPeople.length;i++){
    if(username==objPeople[i].username && password==objPeople[i].password){
       console.log(username+"is loggged in")
       
        welcome() 
       localStorage.setItem("isloggedin",username);  
       return
    }
    }
}


 document.getElementById("islogged").innerHTML=localStorage.getItem("isloggedin",username)

function registister(){
  
    var regististerUser = document.getElementById("newuser").value
    var registerPassword= document.getElementById("newpassword").value
    var newUser={
        username:regististerUser,
        password:registerPassword
    }
    objPeople.push(newUser)
    console.log(objPeople)
    localStorage.setItem("user",JSON.stringify(objPeople))
}

function logoutbutton(){
localStorage.removeItem("isloggedin");


}

(function init(){
    if(localStorage.getItem("isloggedin"))
    localStorage.setItem("isloggedin",username)
    
})();
