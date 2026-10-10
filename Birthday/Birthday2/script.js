const intro =
document.getElementById("intro");

const typing =
document.getElementById("typing");

const title =
document.getElementById("title");

const message =
document.getElementById("message");

const music =
document.getElementById("music");

const memoryPopup =
document.getElementById("memoryPopup");

const memoryImage =
document.getElementById("memoryImage");

const memoryTitle =
document.getElementById("memoryTitle");

const memoryText =
document.getElementById("memoryText");

let play = false;

/* OPEN INTRO */

function openGift(){

  intro.style.opacity = "0";

  intro.style.transform =
  "scale(1.2)";

  createHearts();

  setTimeout(()=>{

    intro.style.display = "none";

  },1200);

  typeText();

}

/* TYPING */

function typeText(){

  let text =
  "Dear Kusum, may your birthday always stay filled with happiness, beautiful memories and endless smiles 💖";

  let i = 0;

  typing.innerHTML = "";

  let interval =
  setInterval(()=>{

    typing.innerHTML += text[i];

    i++;

    if(i >= text.length){

      clearInterval(interval);

    }

  },40);

}

/* MUSIC */

function toggleMusic(){

  if(!play){

    music.play();

    play = true;

  }

  else{

    music.pause();

    play = false;

  }

}

/* BUTTONS */

function showWish(){

  title.innerHTML =
  "Sweet Birthday Wish 💌";

  message.innerHTML =
  "May your smile always stay beautiful and your dreams always come true ✨";

}

function showLetter(){

  title.innerHTML =
  "Cute Letter 🌸";

  message.innerHTML =
  "Thank you for making moments more beautiful just by being part of them 💖";

}

function showReasons(){

  title.innerHTML =
  "Why You Are Special ✨";

  message.innerHTML =
  `
  💖 Your Smile <br><br>
  🌸 Your Nature <br><br>
  ✨ Your Kindness <br><br>
  🥺 Your Cute Reactions
  `;

}

/* HEART EFFECT ONLY ON OPEN */

function createHearts(){

  for(let i=0;i<25;i++){

    let heart =
    document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.top =
    Math.random()*100 + "vh";

    heart.style.fontSize =
    Math.random()*20 + 20 + "px";

    heart.style.zIndex =
    "999999";

    document.body.appendChild(heart);

    heart.animate([

      {
        opacity:0,
        transform:"translateY(50px) scale(0.5)"
      },

      {
        opacity:1,
        transform:"translateY(0) scale(1)"
      },

      {
        opacity:0,
        transform:"translateY(-100px) scale(1.5)"
      }

    ],{

      duration:3000

    });

    setTimeout(()=>{

      heart.remove();

    },3000);

  }

}

/* MEMORIES */

let current = 0;

const memories = [

  {

    image:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",

    title:
    "Beautiful Smile 💖",

    text:
    "Your smile makes every moment feel soft, beautiful and magical ✨"

  },

  {

    image:
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",

    title:
    "Sweet Memories 🌸",

    text:
    "Some memories become unforgettable because of special people 💕"

  },

  {

    image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",

    title:
    "Pretty Soul ✨",

    text:
    "A beautiful heart is more special than anything 💖"

  }

];

let slider;

/* SHOW MEMORY */

function showMemory(){

  memoryPopup.style.display =
  "flex";

  updateMemory();

  clearInterval(slider);

  slider = setInterval(()=>{

    current++;

    if(current >= memories.length){

      current = 0;

    }

    updateMemory();

  },4000);

}

/* UPDATE MEMORY */

function updateMemory(){

  memoryImage.classList.remove(
  "fade-image");

  void memoryImage.offsetWidth;

  memoryImage.classList.add(
  "fade-image");

  memoryImage.src =
  memories[current].image;

  memoryTitle.innerHTML =
  memories[current].title;

  memoryText.innerHTML =
  memories[current].text;

}

/* CLOSE MEMORY */

function closeMemory(){

  memoryPopup.style.display =
  "none";

  clearInterval(slider);

}