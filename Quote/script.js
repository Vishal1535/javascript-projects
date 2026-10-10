let API = "https://corsproxy.io/?https://zenquotes.io/api/quotes";
let Next=document.getElementById('Next');
let Message=document.querySelector('.Message');
let author=document.getElementById('author')
Next.addEventListener("click",()=>{
    Get();
    
})
async function Get(){
    let data= await fetch(API);
    let value=await data.json();
  
    
  let r=Math.floor(Math.random()*value.length);
  Message.innerHTML=`${value[r].q}`;
  author.innerText=`${value[r].a}`;
  
  
    
}