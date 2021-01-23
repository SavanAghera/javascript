function signup(){
    const uname = document.getElementById("uname").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;
    const type = document.querySelector('input[name="userType"]:checked').value;


    if(pass.length < 5){
        alert("password length must be more than 5");
        return;
    }

    if(pass != cpass){
        alert("Passwords must match");
        return;
    }

    if(uname === "" || pass === "" || type === ""){
        alert("Fields cannot be empty");
        return;
    }
    if(type === "user"){
        const newUser = {username: uname,
                            password: pass,
                            userType: type,
                            course: []};
        console.log(localStorage.getItem("users"));
        if(!localStorage.getItem("users")){
            localStorage.setItem("users", "[]");
        }
        const users = JSON.parse(localStorage.getItem("users"));
        let flag = true;
        for(user in users){
            console.log(user);
            if(users[user].username === uname){
                
                flag = false;
                alert("user already exist!");
                break;
            }
        }
        if(flag){
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registered successfylly!");
        }
        document.getElementById("uname").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("cpass").value = "";
    }
    else{
        const newUser = {username: uname,
                        password: pass,
                        userType: type,
                        course: []};
        if(!localStorage.getItem("admins")){
        localStorage.setItem("admins", "[]");
        }
        const admins = JSON.parse(localStorage.getItem("admins"));
        let flag = true;
        for(admin in admins){
            console.log(admin);
            if(admins[admin].username === uname){
                flag = false;
                alert("user already exist!");
                break;
            }
        }
        if(flag){
            admins.push(newUser);
            localStorage.setItem("admins", JSON.stringify(admins));
            alert("Registered successfylly!");
        }
        document.getElementById("uname").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("cpass").value = "";
    }
}

function login(){
    const uname = document.getElementById("uname").value;
    const pass = document.getElementById("pass").value;
    const type = document.querySelector('input[name="userType"]:checked').value;
    if(type === "user"){
        const users = JSON.parse(localStorage.getItem("users"));
        let flag = true;
        for(user in users){
            console.log(user);
            if(users[user].username === uname && users[user].password === pass){
                alert("login success");
                window.location = window.location = './user.html?username=' + uname;
                flag = false;
                break;
            }
        }
        if(flag){
            alert("enter valid user name and password");
        }
    }

    if(type === "admin"){
        const admins = JSON.parse(localStorage.getItem("admins"));
        let flag = true;
        for(admin in admins){
            if(admins[admin].username === uname && admins[admin].password === pass){
                alert("login success");
                window.location = window.location = './admin.html?username=' + uname;
                flag = false;
                break;
            }
        }
        if(flag){
            alert("enter valid user name and password");
        }
    }
}

function showLoginForm(){
    document.getElementById("cpass").style.display = "none";
    document.getElementById("backToLogin").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "";
    document.getElementById("backToSignup").style.display = "";
}

function showRegisterForm(){
    document.getElementById("cpass").style.display = "";
    document.getElementById("backToLogin").style.display = "";
    document.getElementById("signup").style.display = "";
    document.getElementById("login").style.display = "none";
    document.getElementById("backToSignup").style.display = "none";
}