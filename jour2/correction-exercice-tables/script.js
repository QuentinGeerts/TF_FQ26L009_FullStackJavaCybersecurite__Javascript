/*
  Exercice : Table de multiplication
  Réaliser un programme qui permet de demander à l'utilisateur la sélection depuis une liste déroulante, la table de multiplication à afficher (calculs de 1 à 20).

  La liste déroulante doit être générée automatiquement à l'ouverture de la page.

  Bonus:
  - Permettre à l'utilisateur de choisir l'opération (+, -, *, /)
*/

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("table");
  const btnCalcul = document.querySelector("#btnCalcul");
  const divResult = document.querySelector("div#result");

  let firstLoad = true;

  window.addEventListener("keypress", (e) => {
    if (select.value != "" && e.key === "Enter") calcul();
  });

  select.addEventListener("click", () => {
    if (firstLoad) {
      select.removeChild(select.children[0]);
      initSelect();
      firstLoad = false;
    }
  });
  
  btnCalcul.addEventListener("click", calcul);

  function initSelect() {
    for (let i = 1; i <= 20; i++) {
      const option = select.appendChild(document.createElement("option"));
      option.value = i;
      option.textContent = "Table de " + i;
    }
  }

  function calcul() {
    divResult.textContent = "";
    for (let i = 1; i <= 20; i++) {
      const p = divResult.appendChild(document.createElement("p"));
      p.textContent = `${i} * ${select.value} = ${i * select.value}`;
    }
  }
});
