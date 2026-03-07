// MENU MOBILE

const menuBtn = document.getElementById("menuBtn")
const navMenu = document.getElementById("navMenu")

menuBtn.addEventListener("click", () => {

if(navMenu.style.display === "flex"){
navMenu.style.display="none"
}else{
navMenu.style.display="flex"
}

})


// TICKER NEWS

const ticker=document.getElementById("ticker")

const news=[

"Nuove immagini dal telescopio James Webb",
"Scavi archeologici rivelano civiltà sconosciuta",
"Studio neuroscienze sulla coscienza",
"Nuove tensioni geopolitiche nel mondo",
"IA e futuro della conoscenza"

]

let html=""

for(let i=0;i<3;i++){

news.forEach(n=>{

html+=`<span>🌍 <a href="news.html?title=${encodeURIComponent(n)}">${n}</a></span>`

})

}

ticker.innerHTML=html
/* ======================
NEWS PAGE SCRIPT
====================== */

if(window.location.pathname.includes("news.html")){

function getQueryParam(param){
const urlParams=new URLSearchParams(window.location.search);
return urlParams.get(param);
}

const title=getQueryParam('title') || "Notizia senza titolo";

/* DATE */

const date=new Date();
date.setHours(date.getHours()-Math.floor(Math.random()*48));

const formattedDate=date.toLocaleDateString('it-IT',{
day:'2-digit',
month:'long',
year:'numeric',
hour:'2-digit',
minute:'2-digit'
});

/* IMAGE */

let imageUrl="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3";

const t=title.toLowerCase();

if(t.includes("archeologia")||t.includes("civiltà")||t.includes("göbekli")){
imageUrl="https://images.pexels.com/photos/160846/gobekli-tepe-archaeological-site-excavation-ancient-160846.jpeg";
}

else if(t.includes("guerra")||t.includes("conflitto")){
imageUrl="https://images.pexels.com/photos/6994590/pexels-photo-6994590.jpeg";
}

else if(t.includes("spazio")||t.includes("nasa")){
imageUrl="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg";
}

else if(t.includes("cervello")||t.includes("mente")){
imageUrl="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg";
}

/* CONTENT */

const content=`

<p>Questa notizia è stata selezionata perché rientra nei pattern di analisi che stiamo studiando su NEMESIS.</p>

<p><strong>Titolo originale:</strong> ${title}</p>

<p>Secondo la nostra analisi, eventi simili si sono verificati più volte nella storia. Quando determinati segnali emergono contemporaneamente in ambiti diversi — scientifici, geopolitici o culturali — spesso indicano cambiamenti più profondi.</p>

<p>Il nostro obiettivo è osservare questi fenomeni con uno sguardo critico, confrontando i dati moderni con le dinamiche del passato.</p>

<p>Nei prossimi articoli approfondiremo ulteriormente questa tematica.</p>

`;

document.getElementById("newsTitle").textContent=title;
document.getElementById("newsDate").textContent="Pubblicato il "+formattedDate;
document.getElementById("newsImage").src=imageUrl;
document.getElementById("newsContent").innerHTML=content;

}
