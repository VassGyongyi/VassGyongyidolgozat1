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
  // ART.innerHTML +='<button>Kutya</button>'
  // const GOMB =document.querySelectorAll("article button")[0];
  // GOMB.addEventListener("click",egerEsemeny);

  let txt = osszeallit();
  ART.innerHTML += txt;
}

// function egerEsemeny(){
//     const ART2 = document.querySelector("article");
//     ART2.innerHTML += `${kutyaLista[2]}`;
// }

function osszeallit() {
  //összeállítjuk azt a szöveges tartalmat, ami a HTML kódot jelenti
  let txt = "";
  for (let index = 0; index < kutyaLista.length; index++) {
    txt += `<div><p>${kutyaLista[index]}</p></div>`;
  }
  return txt;
}
