let user = {
            
}
function Signup() {
    let uname = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let comfirm_password = document.getElementById('comfirm_password').value;
    let user_type = document.getElementsByName('User_type');
    
    if(uname == null || uname.length <3 || uname.split(" ").length >= 2){
        alert("Please enter your username ,length must be greater then 3 , cant enter space in username");
        return false;
    }
    if(password == null || password.length<5){
        alert("Please enter your password ,length must be greater then 5");
        return false;
    }
    if(comfirm_password != password){
        alert('password didnt match');
        return false;
    }
    //for user
    if(user_type[1].checked){
        const newUser = {username: uname,
                    password: password,
                    userType: 'user',
                    course: []};
         console.log(localStorage.getItem("users"));
         if(!localStorage.getItem("users"))
         {
             localStorage.setItem("users", "[]");
                 }
            const users = JSON.parse(localStorage.getItem("users"));
            let flag = true;
            for(user in users){
                console.log(user);
                if(users[user].username === uname){
                    
                    flag = false;
                    alert("user already exist!");
                    return false;
                    break;
                }
            }
            if(flag){
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                alert("Registered successfylly!");
            }
    }
    //for admin
    if(user_type[0].checked){
        const newUser = {username: uname,
                password: password,
                userType: 'admin',
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
                return false;
                break;
            }
            }
            if(flag){
                admins.push(newUser);
                localStorage.setItem("admins", JSON.stringify(admins));
                alert("Registered successfylly!");
            }   
        }   
            return false
    
    
}