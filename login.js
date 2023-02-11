function validate(){
    var username= document.getElementById("uname").value;
   // console.log(username);
    var password= document.getElementById("pass").value;
    //console.log(password);

    if (username.trim()==""){
        alert("Username must be filled");
        return false;
    }else if(password.trim()==""){
        alert("Password must be filled");
        return false;
    }else if(password.length < 5 ){
        alert("Password too short");
        return false;
    }else{
        alert("Logged in succesfully");
    }

    
   
}

