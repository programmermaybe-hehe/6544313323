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

/* Scene 1 */
function goToGift(){
  showScene(scene1, scene2);
}

/* Scene 2 */
noBtn.onclick = ()=>{
  runner.classList.add("run");
  noBtn.style.display="none";
  forceText.classList.remove("hidden");
  showGift();
};

function showGift(){
  document.querySelector(".gift").classList.remove("hidden");
}

function openGift(){
  document.querySelector(".gift").classList.add("open");
  letterMain.style.opacity=1;
  letterMain.style.transform="translate(0,-150px)";
}

/* Letter 1 */
function openLetter(){
  showScene(scene2, scene3);
  typeWish();
}

function typeWish(){
  const text = "HAPPY BIRTHDAYY CHIKUUUU ❤️\nMake a wish 🤗\nBest memories.";
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
