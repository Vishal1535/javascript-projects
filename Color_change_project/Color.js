let green=document.getElementById('green')
let red=document.getElementById('red');
let blue=document.getElementById('blue');
let yellow=document.getElementById('yellow')
let yellow_c,blue_c,red_c,greeen_c;
yellow_c=blue_c=red_c=greeen_c=0;

let total=0;
let container=document.querySelector('.container');
red.addEventListener('click',()=>{
    red_c++;
    if(red_c==1){
        total++;
    }
       if(total>=4)
    {
        container.style.backgroundColor="Aqua";
        // alert("Won");
        // container.style.backgroundColor="white"
        setTimeout(()=>{

        },3000)
      
    }
})
  

yellow.addEventListener('click',()=>{
    yellow_c++;
    if(yellow_c==1)
        total++;
     if(total>=4)
    {
        container.style.backgroundColor="Aqua";
       
       setTimeout(()=>{
        alert("Won");
          container.innerText="Game finish";
          container.style.backgroundColor="white"
       },1000)
       
    }
})
blue.addEventListener('click',()=>{
    blue_c++
    if(blue_c===1)
        total++;
    console.log(total);
    if(total>=4)
    {
        container.style.backgroundColor="Aqua";
       
       setTimeout(()=>{
        alert("Won");
          container.innerText="Game finish";
          container.style.backgroundColor="white"
       },1000)
       
    }
});
green.addEventListener('click',()=>{
    greeen_c++;
    if(greeen_c==1)
        total=total+1;
    console.log(total)
    
      if(total>=4)
    {
        container.style.backgroundColor="Aqua";
       
       setTimeout(()=>{
        alert("Won");
          container.innerText="Game finish";
          container.style.backgroundColor="white"
       },1000)
       
    }
});


