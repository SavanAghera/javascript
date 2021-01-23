
const uname = (window.location.href).split("=")[1];
function showCourses(){
    if(document.getElementById("course_container").style.display === "none")
        document.getElementById("course_container").style.display = "";
    else    
    document.getElementById("course_container").style.display = "none";
}

function showStudents(){
    if(document.getElementById("student_container").style.display === "none")
        document.getElementById("student_container").style.display = "";
    else    
    document.getElementById("student_container").style.display = "none";
}

function addCourse(name){

    if(!localStorage.getItem("courses")){
        localStorage.setItem("courses", "[]");
    }

    const courses = JSON.parse(localStorage.getItem("courses"));
    let flag = true;
        for(course in courses){
            if(courses[course] === name){
                flag = false;
                alert("Course already exist!");
                break;
            }
        }
        if(flag){
            courses.push(name);
            localStorage.setItem("courses", JSON.stringify(courses));
            alert("Course added successfully");
            let list = "<ul>";
            for(course in courses){
                list += `<li>${courses[course]}</li>`;
            }
            list += `</ul>`
            document.getElementById("listOfCourses").innerHTML = list;
            document.getElementById("course").value = "";
        }
}

function renderData(){
    document.getElementById("nav_admin").innerHTML= `${uname}(Admin)`;
    if(!localStorage.getItem("courses")){
        localStorage.setItem("courses", "[]");
    }

    const courses = JSON.parse(localStorage.getItem("courses"));
    let list = '<ul class="list-group">';
    for(course in courses){
        list += `<li class="list-group-item">${courses[course]}</li>`;
    }
    list += `</ul>`
    document.getElementById("listOfCourses").innerHTML = list;

    if(!localStorage.getItem("users")){
        localStorage.setItem("users", "[]");
    }

    const users = JSON.parse(localStorage.getItem("users"));
    let list2 = '<ul class="list-group" >';
    for(user in users){
        console.log(users[user].course);
        list2 += `<li class="list-group-item">${users[user].username}&nbsp&nbsp&nbsp<button class = "btn btn-primary" onclick="studentDetails('${users[user].username}', '${users[user].course}')">Details</button></li><div id = "${users[user].username}" style = "display:none;"></div>`;
    }
    list2 += `</ul>`
    document.getElementById("listOfStudents").innerHTML = list2;
}

function studentDetails(name, subjects){
    if(document.getElementById(name).style.display === "none"){
        document.getElementById(name).style.display = "";
        const courses = JSON.parse(localStorage.getItem("courses"));
        let list = "<table border = '1' style= 'border-style: dashed;'>";
        let flag = false;
        
        let subs = subjects.split(",");
        console.log(subs);
        for(course in courses){
            flag = false;
            list+="<tr>";
            if(subs.length == 0)
                list += `<td>${courses[course]}</td><td><button class="btn btn-primary" id = "assign${courses[course]}" onclick = "assignCourse('${name}', '${courses[course]}')">Assign</button>
                        <button class="btn btn-primary" id = "revoke${courses[course]}" onclick = "revokeCourse('${name}', '${courses[course]}')" style = "display:none;">Revoke</button></td>`;
            else{
                for(sub in subs){
                    if(subs[sub] === courses[course]){
                        list += `<td>${courses[course]}</td>
                        <button class = "btn btn-primary" id = "assign${courses[course]}" onclick = "assignCourse('${name}', '${courses[course]}')" style = "display:none;">Assign</button>
                        <td><button class = "btn btn-danger" id = "revoke${courses[course]}" onclick = "revokeCourse('${name}', '${courses[course]}')">Revoke</button></td>`;
                        flag = true;
                        break;
                    }    
                }
                if(flag)
                    continue;
                list += `<td>${courses[course]}</td><td><button class = "btn btn-primary"  id = "assign${courses[course]}" onclick = "assignCourse('${name}', '${courses[course]}')">Assign</button>
                        <button class = "btn btn-danger" id = "revoke${courses[course]}" onclick = "revokeCourse('${name}', '${courses[course]}')" style = "display:none;">Revoke</button></td>`;
            }
            list+= "</tr>";
        }
        list += `</table>`
        document.getElementById(name).innerHTML = list;
    }
    else    
        document.getElementById(name).style.display = "none";
}

function assignCourse(userName, courseName){
    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    for(user in users){
        if(users[user].username === userName){
            users[user].course.push(courseName);
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById(`assign${courseName}`).style.display = "none";
            document.getElementById(`revoke${courseName}`).style.display = "";
            alert("course assigned");
            location.reload();
        }
    }
    console.log(user);
}

function revokeCourse(userName, courseName){
    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    for(user in users){
        if(users[user].username === userName){
            const index = users[user].course.indexOf(courseName);
            console.log(index);
            users[user].course.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById(`assign${courseName}`).style.display = "";
            document.getElementById(`revoke${courseName}`).style.display = "none";
            alert("course revoked");
            location.reload();
        }
    }
}


function renderCourses(){
    document.getElementById("uname2").innerHTML = `${uname}`;
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
    let list = '<ul class="list-group">';
    for(course in courses){
        list += `<li class="list-group-item">${courses[course]}</li>`
    }
    list+="</ul>";
    document.getElementById("listOfCourses").innerHTML = list;
}