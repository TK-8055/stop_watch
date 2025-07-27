let timer;
let second=0;
let running=false;




function updateclock(){
    const now =new Date();
    const hours=now.getHours().toString().padStart(2,'0');
    const minutes=now.getMinutes().toString().padStart(2,'0');
    document.getElementById("clock").innerHTML=`${hours}:${minutes}`;
}

setInterval(updateclock,1000);
updateclock();

function start(){
    if(!running){
        running =true;
        timer = setInterval(()=>{
            second++;
            updateDisplay();
        },1000);
    }
}

function formatetime(s){
    let sec=Math.floor(s%60);
    let min=Math.floor(s/60);
    return `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

function updateDisplay(){
    document.getElementById("stopwatch").innerHTML=formatetime(second);
}

function sto(){
    running=false;
    clearInterval(timer);
    setTimeout(()=>{
        second=0;
        updateDisplay();
    },2000)
}