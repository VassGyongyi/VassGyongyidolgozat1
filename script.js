window.addEventListener("load", init);
// const kutyaLista = [
//   "foxterrier",
//   "kuvasz",
//   "puli",
//   "agár",
//   "újfullandi",
//   "keverék",
// ];
const kutyaLista = [
  {
    név: "Dézi",
    fajta: "foxterrier",
    marmagasság: 52,
    neme: "szuka",
    kor: 13,
  },
  {
    név: "Kira",
    fajta: "terrier",
    marmagasság: 20,
    neme: "szuka",
    kor: 13,
  },
  {
    név: "Foltos",
    fajta: "kuvasz",
    marmagasság: 40,
    neme: "kan",
    kor: 13,
  },
  {
    név: "Pötyi",
    fajta: "újfullandi",
    marmagasság: 50,
    neme: "kan",
    kor: 6,
  },
];
function init() {
  const ART = document.querySelector("article");
  // ART.innerHTML +='<button>Kutya</button>'
  // const GOMB =document.querySelectorAll("article button")[0];
  // GOMB.addEventListener("click",egerEsemeny);

  let txt = osszeallit();
  
  ART.innerHTML += txt;
  
  const GOMB = document.querySelectorAll("article div button");
  for (let i = 0; i < GOMB.length; i++) {
    GOMB[i].addEventListener("click", function(){
        egerEsemeny(event);
        //console.log(i)
    });
    
  }
}

// function egerEsemeny(){
//     const ART2 = document.querySelector("article");
//     ART2.innerHTML += `${kutyaLista[2]}`;
// }

function osszeallit() {
  //összeállítjuk azt a szöveges tartalmat, ami a HTML kódot jelenti
  let txt = "";
  for (let index = 0; index < kutyaLista.length; index++) {
    txt += "<div><button>Törlés</button>";
    for (const key in kutyaLista[index]) {
      // console.log(key,kutyaLista[index][key]);

      txt += `<p>${key} : ${(key, kutyaLista[index][key])}</p>`;
    }
    txt += "</div>";
  }
  return txt;
}
function egerEsemeny(event) {
  //console.log(i);
const GOMB = event.target;
GOMB.parentElement.remove();
 }
