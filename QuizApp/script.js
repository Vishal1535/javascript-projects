const questions = [
  {
    q: "What is the full form of HTML?",
    options: [
      "Hyper Test Markup Language",
      "High Text Machine Language",
      "Hyper Tool Mark Language",
      "Hyper Text Markup Language"
    ]
  },
  {
    q: "What is CSS used for?",
    options: [
      "Storing data",
      "Creating databases",
      "Running servers",
      "Designing websites"
    ]
  },
  {
    q: "JavaScript is mainly used for?",
    options: [
      "Styling web pages",
      "Creating structure",
      "Adding interaction",
      "Editing images"
    ]
  }
];
let Timer=document.querySelector('.Timer');
let id=null;
let time;
let QuestionContainer=document.querySelector('.QuestionContainer');
let Next=document.querySelector('.Next');
TimerFunction=()=>{
    clearInterval(id);
    id=setInterval(()=>{
        time--;
        Timer.innerText=time;
        if(time===0)
            clearInterval(id);

    },1000)
}
page=-1;
Next.addEventListener('click',()=>{
    page++;
    Next.innerHTML="Next"
    time=16;
    TimerFunction();
    AddItem();

})

let AddItem=()=>{
    QuestionContainer.innerHTML="";
    let ele=document.createElement("div");
    ele.className='OptionContainer';
   ele.innerHTML=`
    <p class="QuestionHeading">${questions[page].q}</p>
    ${questions[page].options.map(obj=>
        `<p class=option>${obj}`
    ).join()};
   `
    QuestionContainer.append(ele);
};
