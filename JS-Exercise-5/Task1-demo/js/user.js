const uname = (window.location.href).split("=")[1];

function renderCourses(){
    document.getElementById("uname").innerHTML = `${uname}`;
    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    let courses;
    for(user in users){
        if(users[user].username == uname){
            courses = users[user].course;
            console.log(courses);
            break;
        }
    }
    let list = "<ul>";
    for(course in courses){
        list += `<li>${courses[course]}</li>`
    }
    list+="</ul>";
    document.getElementById("listOfCourses").innerHTML = list;
}