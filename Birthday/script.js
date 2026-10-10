const loader = document.getElementById('loader');

window.addEventListener('load',()=>{

  setTimeout(()=>{

    loader.style.opacity='0';

    setTimeout(()=>{
      loader.style.display='none';
    },1000);

  },2500);

});

/* SURPRISE */

function showSurprise(){

  document.getElementById('popup').style.display='flex';

  createConfetti();

}

/* CLOSE */

function closePopup(){

  document.getElementById('popup').style.display='none';

}

/* LETTER */

function showLetter(){

  document.getElementById('letter').style.display='flex';

  createHearts();

}

function closeLetter(){

  document.getElementById('letter').style.display='none';

}

/* CONFETTI */

function createConfetti(){

  for(let i=0;i<120;i++){

    const confetti=document.createElement('div');

    confetti.style.position='fixed';

    confetti.style.width='10px';

    confetti.style.height='10px';

    confetti.style.left=Math.random()*100+'vw';

    confetti.style.top='-20px';

    confetti.style.background=
    `hsl(${Math.random()*360},100%,70%)`;

    confetti.style.zIndex='99999';

    confetti.style.borderRadius='50%';

    document.body.appendChild(confetti);

    confetti.animate([

      {
        transform:'translateY(0) rotate(0deg)',
        opacity:1
      },

      {
        transform:'translateY(100vh) rotate(720deg)',
        opacity:0
      }

    ],{

      duration:3000,
      easing:'linear'

    });

    setTimeout(()=>{
      confetti.remove();
    },3000);

  }

}

/* HEART RAIN */

function createHearts(){

  for(let i=0;i<50;i++){

    const heart=document.createElement('div');

    heart.innerHTML='💖';

    heart.style.position='fixed';

    heart.style.left=Math.random()*100+'vw';

    heart.style.top='-20px';

    heart.style.fontSize=Math.random()*20+20+'px';

    heart.style.zIndex='99999';

    document.body.appendChild(heart);

    heart.animate([

      {
        transform:'translateY(0)',
        opacity:1
      },

      {
        transform:'translateY(100vh)',
        opacity:0
      }

    ],{

      duration:4000,
      easing:'linear'

    });

    setTimeout(()=>{
      heart.remove();
    },4000);

  }

}