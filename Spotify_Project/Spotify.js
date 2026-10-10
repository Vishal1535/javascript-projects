
let songIndex=0;
let audioElement=new Audio("c:\Users\Vishal\Downloads\Dilbar Ki Aankhon Ka _ Thamma _ Nora F, Ayushmann K, Rashmika M _Sachin-Jigar, Rashmeet K, Amitabh B.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressBar');

let songs=[
    {songName:"Salam-E-Ishq",filePath:"HTML/Spotify_Project/Song/Dilbar_Ki_Aankhon_Ka(48k).mp3" ,cover:"cover/1.jpg"},
    {songName:"Salam-E-Ishq",filePath:"HTML/Spotify_Project/Song/Dilbar_Ki_Aankhon_Ka(48k).mp3" ,cover:"cover/1.jpg"},
    {songName:"Salam-E-Ishq",filePath:"HTML/Spotify_Project/Song/Dilbar_Ki_Aankhon_Ka(48k).mp3" ,cover:"cover/1.jpg"},
    {songName:"Salam-E-Ishq",filePath:"HTML/Spotify_Project/Song/Dilbar_Ki_Aankhon_Ka(48k).mp3" ,cover:"cover/1.jpg"},
    {songName:"Salam-E-Ishq",filePath:"HTML/Spotify_Project/Song/Dilbar_Ki_Aankhon_Ka(48k).mp3" ,cover:"cover/1.jpg"},
    {songName:"Salam-E-Ishq",filePath:"HTML/Spotify_Project/Song/Dilbar_Ki_Aankhon_Ka(48k).mp3" ,cover:"cover/1.jpg"},
    {songName:"Salam-E-Ishq",filePath:"HTML/Spotify_Project/Song/Dilbar_Ki_Aankhon_Ka(48k).mp3" ,cover:"cover/1.jpg"},
    {songName:"Salam-E-Ishq",filePath:"HTML/Spotify_Project/Song/Dilbar_Ki_Aankhon_Ka(48k).mp3" ,cover:"cover/1.jpg"},
    {songName:"Salam-E-Ishq",filePath:"HTML/Spotify_Project/Song/Dilbar_Ki_Aankhon_Ka(48k).mp3" ,cover:"cover/1.jpg"}
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log("heii");
})


