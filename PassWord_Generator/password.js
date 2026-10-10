let passBox=document.getElementById('passBox');
let inputSlider=document.getElementById('inputSlider');
let SlideValue=document.getElementById('SlideValue');
let lowercase=document.getElementById('lowercase');
let uppercase=document.getElementById('uppercase');
let numbers=document.getElementById('numbers');
let symbols=document.getElementById('symbols');
let btn=document.getElementById('btn');
let Copied_Icon=document.getElementById('Copied_Icon');
SlideValue.innerText=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    SlideValue.innerText=inputSlider.value;
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 


let generatePassword=()=>{
   let genpass="";
   let allchar="";
   allchar+=lowercase.checked?lowerChars:"";
   allchar+=uppercase.checked?upperChars:"";
   allchar+=numbers.checked?allNumbers:"";
   allchar+=symbols.checked?allSymbols:"";
   if(allchar.length==0)
    return "";
   for(let i=1;i<=inputSlider.value;i++)
   {
    genpass+=allchar.charAt(Math.floor(Math.random()*allchar.length));
   }
   return genpass;
}
btn.addEventListener('click',()=>{
    passBox.value=generatePassword();
});
Copied_Icon.addEventListener('click',()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        Copied_Icon.innerText = "Copied";
  
        setTimeout(()=>{
            Copied_Icon.innerHTML = "";
            Copied_Icon.title = "";
        }, 3000)
    }
    
});
window.addEventListener("load", function () {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });
  alert("Generate your Password");
});