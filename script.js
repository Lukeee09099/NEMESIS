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
