let Container=document.querySelector('.Container');
let ButtonSection=document.querySelector('.ButtonSection');
let ItemArr=[
    {
        name:'Vaaste',
        Logo:'https://i.ytimg.com/vi/hG77NTZ0lhI/mqdefault.jpg',
        song:'Vaste.mp3'
    },
    {
     name:"Dekha Tenu",
     Logo:"https://c.saavncdn.com/395/Dekhha-Tenu-From-Mr-And-Mrs-Mahi-Hindi-2024-20240514202401-500x500.jpg",
     song:'DekhaTenu.m4a'
     
    },
    {
        name:'Milne Hai Mujhse Aayi',
        Logo:"https://i.scdn.co/image/ab67616d0000b2736404721c1943d5069f0805f3",
        song:"MilneMujhseAai.mp3"
    },
    {
        name:"Aaj Sajeya",
        Logo:"data:image/jpeg;base64,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",
        song:'AajSajeya.mp3'
      
    },
    {
        name:'Chale Aana',
        Logo:'https://c.saavncdn.com/082/Chale-Aana-From-De-De-Pyaar-De-Hindi-2019-20231017141606-500x500.jpg',
        song:'Chaleaana.mp3'
    },
    {
        name:'Chand Sifarish',
        Logo:'https://a10.gaanacdn.com/gn_img/albums/XzVWRyL3dq/zVWRr6kWdq/size_m.jpg',
        song:'ChandSifaris.mp3'

    },
    {
        name:'Halki Si Barsaat',
        Logo:"https://www.cineblues.com/uploads/article/halki-si-barsaat-song-lyrics-starring-munawar-faruqui-and-nazila-20220608142946873.jpg",
        song:'HalkiSiBarsaat.mp3'
    }


]
let idx=0;
let isPlaying=false;
let Music=new Audio(`${ItemArr[idx].song}`);
// let check=1;
let Images;
let AddItem = () => {
    let old = Container.querySelector('.MusicContainer');
    if (old) old.remove();

    let elem = document.createElement('div');
    elem.className = 'MusicContainer';
    elem.innerHTML = `
        <h1 class="id">${ItemArr[idx].name}</h1>
        <img src="${ItemArr[idx].Logo}" class="SongImg">
    `;

    Container.insertBefore(elem, ButtonSection);

    // 🔥 NEW image ko yahin select karo
    Images = document.querySelector('.SongImg');

    // agar song already playing hai → animation lagao
   if(isPlaying)
   {
     Images.classList.add('Ani')
   }
};


AddItem();
 Images=document.querySelector('.SongImg');


let PlayPauseBtn=document.getElementById('PlayPauseBtn');
let ManageMusic=()=>{
    Music.pause();
    if(!isPlaying)
    {
         Images.classList.add('Ani')
        //  console.log(Images);
         
        isPlaying=true;
        Music.play();
        PlayPauseBtn.className='fa-solid fa-pause'
        
    }
    else
        {
             Images.classList.remove('Ani')
            //  console.log(Images);
             
        
        PlayPauseBtn.className='fa-solid fa-play';
        isPlaying=false;
        Music.pause();
    }
}
PlayPauseBtn.addEventListener('click' ,ManageMusic)
let PreviousBtn=document.getElementById('PreviousBtn');
let NextBtn=document.getElementById('NextBtn');
NextBtn.addEventListener('click', () => {
    Music.pause();

    idx = (idx + 1) % ItemArr.length;

    Music = new Audio(ItemArr[idx].song);
    isPlaying = true;

    AddItem();
    Music.play();
    Images.classList.add('Ani');

    PlayPauseBtn.className = 'fa-solid fa-pause';
});

PreviousBtn.addEventListener('click', () => {
    Music.pause();

    idx = (idx - 1 + ItemArr.length) % ItemArr.length;

    Music = new Audio(ItemArr[idx].song);
    isPlaying = true;

    AddItem();
    Music.play();
    Images.classList.add('Ani');

    PlayPauseBtn.className = 'fa-solid fa-pause';
});

