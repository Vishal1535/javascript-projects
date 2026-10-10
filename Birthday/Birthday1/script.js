const intro =
document.getElementById('intro');

const typing =
document.getElementById('typing');

const title =
document.getElementById('title');

const message =
document.getElementById('message');

const popup =
document.getElementById('popup');

const music =
document.getElementById('music');

let play=false;

/* OPEN GIFT */

function openGift(){

  intro.style.opacity='0';

  setTimeout(()=>{

    intro.style.display='none';

  },1000);

  typeText();

}

/* TYPING EFFECT */

function typeText(){

  let text=
  "Dear Kusum, may your birthday be filled with happiness, smiles and beautiful memories 💖";

  let i=0;

  let interval=
  setInterval(()=>{

    typing.innerHTML+=text[i];

    i++;

    if(i>=text.length){

      clearInterval(interval);

    }

  },40);

}

/* MUSIC */

function toggleMusic(){

  if(!play){

    music.play();

    play=true;

  }

  else{

    music.pause();

    play=false;

  }

}

/* BUTTONS */

function showWish(){

  title.innerHTML=
  "Sweet Birthday Wish 💌";

  message.innerHTML=
  "May your smile always stay beautiful and your dreams come true ✨";

}

function showSpecial(){

  title.innerHTML=
  "Why You Are Special 🌸";

  message.innerHTML=
  "✨ Your Smile <br> 💖 Your Nature <br> 🌸 Your Kindness <br> 🥺 Your Cute Reactions";

}

function showMemories(){

  title.innerHTML=
  "Beautiful Memories 📸";

  message.innerHTML=
  "Some people become unforgettable because they make life beautiful 💕";

}

function showCute(){

  title.innerHTML=
  "Cute Mode 🥺";

  message.innerHTML=
  "You honestly look cutest when you smile 💖";

}

/* POPUP */

function finalSurprise(){

  popup.style.display='flex';

}

function closePopup(){

  popup.style.display='none';

}

/* RANDOM QUOTES */

const quotes=[

"Your smile is literally sunshine 🌸",

"You make ordinary moments special 💖",

"Pretty heart. Pretty soul. Pretty smile ✨",

"Some people are magic and you are one of them 🥺"

];

setInterval(()=>{

  let random=
  quotes[Math.floor(Math.random()*quotes.length)];

  document.querySelector('.quote').innerHTML=
  random;

},4000);

/* DOUBLE CLICK HEART */

document.body.addEventListener('dblclick',(e)=>{

  const heart=
  document.createElement('div');

  heart.innerHTML='💖';

  heart.style.position='fixed';

  heart.style.left=e.clientX+'px';

  heart.style.top=e.clientY+'px';

  heart.style.fontSize='2rem';

  heart.style.pointerEvents='none';

  document.body.appendChild(heart);

  heart.animate([

    {
      transform:'translateY(0)',
      opacity:1
    },

    {
      transform:'translateY(-120px)',
      opacity:0
    }

  ],{

    duration:1500

  });

  setTimeout(()=>{

    heart.remove();

  },1500);

});