console.log("hello world");

const mainTitle = document.getElementById("main-title");
console.log(mainTitle);
mainTitle.textContent = "Gotcha!";

// On récupère les éléments HTML
const inputNickname = document.getElementById("nickname-input");
const inputPower = document.getElementById("power-input");
const formBtn = document.getElementById("btn-form");
const details = document.getElementById("details");

// On ajoute l'évenement "click" sur le bouton
formBtn.addEventListener("click", addValue);
formBtn.addEventListener("touchend", addValue);
// formBtn.removeEventListener("click", addValue);
// formBtn.removeEventListener("touchend", addValue);


function addValue() {
  // on réagit à l'évenement
  console.log("J'ai cliqué!");

  // récupère les informations des inputs
  const nickname = inputNickname.value;
  console.log(`Le nickname récupéré est: ${nickname}`);
  const power = inputPower.valueAsNumber; // on récupère en number
  console.log(inputPower.value + 2); // .value récupère un string
  console.log(power + 2);

  // On va créer les éléments à placer le "details"
  const charTitle = document.createElement("h2");
  charTitle.textContent = nickname;
  details.appendChild(charTitle); // En tant que dernier enfant
  // details.prepend(charTitle); // En tant que premier enfant

  const charPowerP = document.createElement("p");
  charPowerP.textContent = power;
  details.appendChild(charPowerP);

  // on pourrait rajouter un event sur charPowerP
  charPowerP.addEventListener("click", function () {
    charPowerP.remove();
  });

  // On appliquer un style au titre s'il n'est pas déjà appliqué
  // on enlève le style au titre s'il est déjà présent
  mainTitle.classList.toggle("green");

  // remplace complètement l'attribut "class" du node
  //   mainTitle.className = "green";
}