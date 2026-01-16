const music = document.getElementById("bgMusic");

document.body.addEventListener("click",()=>{
  music.play();
},{once:true});

function showScene(hide, show){
  hide.classList.add("hidden");
  setTimeout(()=>{
    hide.style.display="none";
    show.style.display="flex";
    show.classList.remove("hidden");
  },800);
}

const scene1 = scene1=document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");

function showScene(a,b){
  a.classList.add("hidden");
  b.classList.remove("hidden");
}

/* CAKE */
cakeVideo.onclick = ()=>showScene(scene1,scene2);

/* GIFT */
function showGift(){
  document.querySelector(".gift").classList.remove("hidden");
  document.getElementById("forceText").classList.remove("hidden");
}

noBtn.onclick = ()=>{
  runner.style.left = Math.random()*70 + "%";
};

function openGift(){
  giftTextBox.style.display="none";
  runner.style.display="none";
  setTimeout(()=>{
    letterMain.style.opacity=1;
    letterMain.style.transform="translateY(-150px)";
  },400);
}

/* LETTER */
function openLetter(){
  showScene(scene2,scene3);
  typeWish();
}


function typeWish(){
  const text = "HAPPY BIRTHDAYY CHIKUUUU ❤️\n Hope you have the best day today and a great year as well cutiee!!";
  let i=0;
  letterWish.innerHTML="";
  const t = setInterval(()=>{
    letterWish.innerHTML += text.charAt(i++);
    if(i>=text.length) clearInterval(t);
  },50);
}

/* Letter 2 */
function showSecondLetter(){
  showScene(scene3, scene2);
  letterMain.style.display="none";
  letterSecond.style.opacity=1;
  letterSecond.style.transform="translate(0,-150px)";
}

/* Bouquet */
function openBouquet(){
  showScene(scene2, scene4);
}
  let i=0;
  subtitle.style.opacity=1;
  const s=setInterval(()=>{
    subtitle.innerText=subs[i++];
    if(i>=subs.length)clearInterval(s);
  },2000);

  document.getElementById("sae-video-box").classList.add("speaking");
  voice.onended=()=>{
    document.getElementById("sae-video-box").classList.remove("speaking");
  };

}

/* Final */
function finalScene(){
  showScene(scene4, scene5);
  const msg = "Asli gift mil jaayega jald hi 😭🤭";
  let i=0;
  finalText.innerHTML="";
  const t = setInterval(()=>{
    finalText.innerHTML += msg.charAt(i++);
    if(i>=msg.length){
      clearInterval(t);
      setTimeout(()=>hugBox.classList.remove("hidden"),1200);
    }
  },60);
}











