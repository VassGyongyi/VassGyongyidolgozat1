window.addEventListener("load", init);
const kutyaLista = [
    "foxterrier",
    "kuvasz",
    "puli",
    "agár",
    "újfullandi",
    "keverék",
  ];
function init() {
 
const ART = document.querySelector("article");
ART.innerHTML +='<button>Kutya</button>'
const GOMB =document.querySelectorAll("article button")[0];
GOMB.addEventListener("click",egerEsemeny);
}

function egerEsemeny(){
    const ART2 = document.querySelector("article");
    ART2.innerHTML += `${kutyaLista[2]}`;
}