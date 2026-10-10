let logo = document.querySelectorAll('.logo');

logo.forEach((ele, index) => {
    ele.style.left = (index * 100) + "%";
});

let Previous = document.querySelector("#Previous");
let Next = document.querySelector("#Next");
let Name=["Hrithik Roshan","Kajal Raghwani",'Amprapali Dubey',"Amir Khan"];

let Count = 0;
let index=0;

Previous.addEventListener("click", () => {
    
    if(Count<=0||index==0){
        return;

    }
    index--;
    Count--;
    Slide();
    NameFunction();
});

Next.addEventListener("click", () => {
    if(Count>3||index===Name.length-1)
        {
            return;   
        }
        Count++;
        index++;
    Slide();
    NameFunction();
});

let Slide = () => {
    logo.forEach((ele) => {
        ele.style.transform = `translateX(${-Count * 100}%)`;
    });
};
let naam=document.querySelector('.naam');

let NameFunction=()=>{
  
  

    naam.innerText=Name[index];
}
