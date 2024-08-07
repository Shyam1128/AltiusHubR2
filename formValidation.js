function Validate(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(!username ||  !password || !email){
        alert("Invalid Login Please Enter UserName and Password");
    }
    else{
        alert("Register Sucessful");
    }
}