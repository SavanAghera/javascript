let time = document.getElementById('time');
let date = document.getElementById('date');
let stopwatch = document.getElementById('stopwatch');
let tick , interval ,newtime,m,Resume,Stop,temp;

let date_obj = new Date();
time.innerHTML = date_obj.toTimeString().split(" ")[0];
date_obj = date_obj.toDateString().split(" ");
date.innerHTML = date_obj[2] + " " + date_obj[1]+ " " +date_obj[3];

function mainTimeUpdate(){
    time.innerHTML = new Date().toTimeString().split(" ")[0];
}
setInterval(mainTimeUpdate,1000);

function start(){
    if(!interval){
        tick = new Date().getTime();
        Stop =new Date().getTime();
        Resume = new Date().getTime();
        temp = new Date(0).getTime();
        interval = setInterval(tickUpdate,10);
    }
}
function stop(){
   
    if(interval){
        Stop=new Date().getTime();
        clearInterval(interval);
        interval = null;
    }
}

function resume(){
    if(!interval){
    Resume=new Date().getTime();
    temp = (temp + (Resume-Stop));
    interval = setInterval(tickUpdate,10);}
}
function reset(){
    if(!interval){
    tick = 0;
    formateTick(tick);
}
}
function tickUpdate(){
   newtime = new Date().getTime();
   formateTick(newtime-temp-tick)
}
function formateTick(time){
    m = new Date(time -(60*60*6-60*30)*1000).toTimeString().split(" ")[0];
    stopwatch.innerHTML = `${m}:${ Math.round(time%1000/10).toString().padStart(2, '0')}`;
}