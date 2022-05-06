let myinputarr = [];
let size = 10; // Array size
const button = document.querySelector("button");
const phraseMoyenne = document.getElementById("phraseMoyenne");
let listeNotes = document.getElementById("listeNotes");
let noteListColor = document.getElementById("noteListColor");
var note = document.querySelector(".note");

button.onclick = function () {
  for (var a = 0; a < size; a++) {
    myinputarr[a] = prompt("Entrer 10 notes" + (a + 1) + "/10");
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

  phraseMoyenne.innerHTML =
    "<p>La moyenne est de: <div class='moyenneAffichee'>" +
    moyenne +
    "</div></p>";
  listeNotes.innerHTML = "Liste des notes: <br>";
};
