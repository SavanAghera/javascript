let colorb2 = 100;
let colorb4 = 10000;
let press_one =true;

alert("Greetings please Choose Surprice box");
b1.innerHTML += "Click me First";
b1.onclick = clickB1;

//change box 2 color
setInterval(()=>{
    colorb2 +=200;
    //console.log((colorb2%16777215).toString(16))
    b2.style.backgroundColor ="#"+ (colorb2%16777215).toString(16);
},3000)



function clickB1(){
    b3.innerHTML += "Opps Something is wrong!!"
    b1.onclick ="";
}

document.addEventListener("keydown",   
function (e) {
    
    if((e.which == '38' || e.which =='40' || e.which == '37' || e.which == '39')&&press_one){
       press_one =false;
        setInterval(()=>{
        colorb4 +=500;
        console.log("time out b4");
        b4.style.backgroundColor ="#"+ (colorb4%16777215).toString(16);
        },5000)
    } 
    if (e.keyCode == '38' || e.which == '39') {
        // up or right arrow 
        colorb4 +=500;
        b4.style.backgroundColor ="#"+ (colorb4%16777215).toString(16);
        console.log("up or right" )
       

    }
     if (e.which == '40' || e.which == '37') {
        // left or down arrow
        colorb4 -=500;
        b4.style.backgroundColor ="#"+ (colorb4%16777215).toString(16);
        console.log("down or left")
       
    }

});