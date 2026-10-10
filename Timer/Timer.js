let Reset=document.getElementById('Reset');
let Start=document.getElementById('Start');
let Stop=document.getElementById('Stop');
let timerDisplay=document.getElementById('timerDisplay');
let msec,sec,min;
msec=sec=min=0;
let TimerId=null;
let StartTimer=()=>{
    msec++;
    console.log("Start")
    if(msec===100)
        {
            sec++;
            msec=0;
        }
    if(sec==60)
        {
            min++;
            sec=0;
        }
     
        let msecString=msec<10?('0'+msec):msec;
        let secString=sec<10?('0'+sec):sec;
        let minString=min<10?('0'+min):min;
        timerDisplay.innerText=minString+':'+secString +':'+msecString;
}
Start.addEventListener('click',()=>{
    if(TimerId!=null)
        clearInterval(TimerId);
    
    TimerId=setInterval(StartTimer,10);
    
});
Stop.addEventListener('click',()=>{
    clearInterval(TimerId);
    
    
})
Reset.addEventListener('click',()=>{
    min=sec=msec=0;
    clearInterval(TimerId);
    
   
    
    timerDisplay.innerText="00:00:00";
})
