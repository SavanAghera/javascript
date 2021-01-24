const uname = (window.location.href).split("=")[1];

function showCourses(){
    course_container.style.display="";
    student_container.style.display = "none";
}

function showStudents(){
    student_container.style.display = ""
    course_container.style.display = "none";
}



function render(){
    document.getElementById("nav_admin").innerHTML= `${uname}(Admin)`;
    if(!localStorage.getItem("courses")){
        localStorage.setItem("courses", "[]");
    }
    // show courses
    const courses = JSON.parse(localStorage.getItem("courses"));
    let list = '<div class="row ">';
    for(course in courses){
        list += `<div class="col-sm-12 col-lg-3 mb-4"><div class=" course">${courses[course]}</div></div>`;
    }
    list += `</div>`
    document.getElementById("list_Courses").innerHTML = list;

    if(!localStorage.getItem("users")){
        localStorage.setItem("users", "[]");
    }
    //show stdents
    const users = JSON.parse(localStorage.getItem("users"));
    let list2 = '<ul class="list-group" >';
    for(let user of users){
        let list = '<ul class="list-group mt-4">';
        
        let subs = user.course;
        console.log(subs);
        for(let course in courses){
            console.log(user.username)
            list += `<li class="list-group-item student_course_item">
                ${courses[course]}
                <div class="course_asign_revoke_btn">
                <button class="btn btn-primary" id='assign${user.username}${course}' onclick=assignc('${user.username}','${course}') style="display:'';">assign</button>
                <button class="btn btn-danger" id="revoke${user.username}${course}" onclick=revoke('${user.username}',${course}) style="display:'';">revoke</button>

                </li>`
        }
        list += `</ul>`
        console.log(user.course);


        list2 += `<li class="list-group-item student_courses_li">${user.username}&nbsp&nbsp&nbsp
            <button class = "btn btn-primary student_course_detailBtn" onclick="student_details('${user.username}', '${user.course}')">details</button>
            <div id = "${user.username}_" style = "display:none;">
            ${list}
            </div>
            </li>`;
    }
    list2 += `</ul>`
    document.getElementById("list_students").innerHTML = list2;
}

//show hide student details
function student_details(name, stu_courses){
    const courses = JSON.parse(localStorage.getItem("courses"));
    for(let course in courses){
        if(stu_courses.indexOf(courses[course]) >-1){
            document.getElementById(`assign${name}${course}`).style.display = 'none';
            document.getElementById(`revoke${name}${course}`).style.display = '';
            
        }else {
            document.getElementById(`assign${name}${course}`).style.display = ''
            document.getElementById(`revoke${name}${course}`).style.display = 'none';

        }   
    }
    if(document.getElementById(`${name}_`).style.display === "none"){
        document.getElementById(`${name}_`).style.display = "";
       
    }
    else    
        document.getElementById(`${name}_`).style.display = "none";
}

function assignc(name,course){
    let users = localStorage.getItem("users");
    const courses = JSON.parse(localStorage.getItem("courses"));
    users = JSON.parse(users);
    for(user in users){
        if(users[user].username === name){
            users[user].course.push(courses[course]);
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById(`assign${name}${course}`).style.display = "none";
            document.getElementById(`revoke${name}${course}`).style.display = "";
            alert("course assigned");
            location.reload();
        }

    }
}

function revoke(name,course){
    let users = localStorage.getItem("users");
    const courses = JSON.parse(localStorage.getItem("courses"));
    users = JSON.parse(users);
    for(user in users){
        if(users[user].username === name){
            const index = users[user].course.indexOf(courses[course]);
            users[user].course.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById(`assign${name}${course}`).style.display = "";
            document.getElementById(`revoke${name}${course}`).style.display = "none";
            alert("course revoked");
            location.reload();
        }
    }
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
        if(flag && name != ""){
            courses.push(name);
            localStorage.setItem("courses", JSON.stringify(courses));
            alert("Course added successfully");
            let list = '<div class="row ">';
            for(course in courses){
                list += `<div class="col-sm-12 col-lg-3 mb-4"><div class=" course">${courses[course]}</div></div>`;
            }
            list += `</div>`
            document.getElementById("list_Courses").innerHTML = list;
            document.getElementById("course").value = "";
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
    let list = '<div class="row">';
    for(course in courses){
        list += `<div class="col-sm-12 col-lg-3 mb-3"><div class="course">${courses[course]}</div></div>`
    }
    list+="</div>";
    document.getElementById("listOfCourses").innerHTML = list;
}