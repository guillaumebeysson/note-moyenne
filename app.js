let myinputarr = [];
let size = 10; // Array size
const button = document.querySelector("button");
const phraseMoyenne = document.getElementById("phraseMoyenne");
let bestBadNote = document.getElementById("meilleurePireNote");
let listeNotes = document.getElementById("listeNotes");
let medianeNotes = document.getElementById("medianeNotes");
let noteListColor = document.getElementById("noteListColor");
var note = document.querySelector(".note");

button.onclick = function () {
  for (var a = 0; a < size; a++) {
    myinputarr[a] = prompt("Entrer 10 notes" + (a + 1) + "/10");
    console.log(typeof myinputarr[a]);
  }

  //user enter array
  console.log("tableau de valeurs:" + myinputarr);
  somme = 0;
  for (let i = 0; i < myinputarr.length; i++) {
    somme += +myinputarr[i];
    console.log("apres incrémentation       :   " + somme);
    moyenne = somme / 10;
    console.log("moyenne finale:" + moyenne);
  }

  for (let i = 0; i < myinputarr.length; i++) {
    if (+myinputarr[i] < moyenne) {
      noteListColor.innerHTML +=
        "<div class='red noteColor'><strong>" +
        myinputarr[i] +
        "</strong></div>";
    } else {
      noteListColor.innerHTML +=
        "<div class='green noteColor'><strong>" +
        myinputarr[i] +
        "</strong></div>";
    }
    console.log("test ***********************" + myinputarr[i]);
  }

  //Fonction pour comparer les nombres
  console.log(myinputarr);
  function compareNombres(a, b) {
    return a - b;
  }
  //transformer le tableau string en number
  myinputarr = myinputarr.map(Number);
  //Permet de trier les nombres du plus petits au plus grand
  myinputarr = myinputarr.sort(compareNombres);
  console.log(myinputarr);

  meilleureNote = myinputarr[9];
  pireNote = myinputarr[0];
  mediane = (myinputarr[4] + myinputarr[5]) / 2;
  console.log("la médiane est: " + mediane);
  console.log("pire note: " + pireNote);
  console.log("meilleure note: " + meilleureNote);

  //ajoute en HTML la pire et la meilleure
  bestBadNote.innerHTML =
    "<p id='bad'><i class='fa-solid fa-thumbs-down'></i>" +
    pireNote +
    "</p><p id='best'><i class='fa-solid fa-crown'></i>" +
    meilleureNote +
    "</p>";

  //Technique pour obtenir la plus grande valeur d'un tableau
  let best = 0;
  for (i = 0; i < myinputarr.length; i++) {
    if (myinputarr[i] > best) {
      best = myinputarr[i];
    }
  }
  console.log("La meilleure note en faisant une boucle est: " + best);
  //

  medianeNotes.innerHTML = "<p>La médiane est: " + mediane + "</p>";

  phraseMoyenne.innerHTML =
    "<p>La moyenne est de: <div class='moyenneAffichee'>" +
    moyenne +
    "</div></p>";
  listeNotes.innerHTML = "Liste des notes: <br>";
};
