if(localStorage.getItem('login')){
    localStorage.removeItem('login');
}

function login() {
    let uname = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user_type = document.getElementsByName('User_type');
    let isTrue = true;

    if(uname == null || uname.length <3){
        alert("Please enter your username ,length must be greater then 3");
        isTrue = false;
    }
    if(password == null || password.length<5){
        alert("Please enter your password ,length must be greater then 5");
        isTrue = false;
    }
   
    if(isTrue){
    if(user_type[1].checked){
        const users = JSON.parse(localStorage.getItem("users"));
        let flag = true;
        for(let user in users){
            console.log(user);
            if(users[user].username === uname && users[user].password === password){
                alert("login success");
                const user_ = JSON.stringify([{username:uname, type:'user'}]);
                window.localStorage.setItem("login",user_);
                window.location = window.location = './user.html?username=' + uname;
                flag = false;
                break;
            }
        }
        if(flag){
            alert("enter valid user name and password");

        }
    }

    if(user_type[0].checked){
        const admins = JSON.parse(localStorage.getItem("admins"));
        let flag = true;
        for(admin in admins){
            if(admins[admin].username === uname && admins[admin].password === password){
                alert("login success");
                localStorage.setItem("login",{username:uname, type:'admin'}); 
                const user_ = JSON.stringify([{username:uname, type:'user'}]);
                window.localStorage.setItem("login",user_);
                window.location = window.location = './admin.html?username=' + uname;
                flag = false;
                break;
            }
        }
        if(flag){
            alert("enter valid user name and password");
            return false;
        }
    }
}   
}