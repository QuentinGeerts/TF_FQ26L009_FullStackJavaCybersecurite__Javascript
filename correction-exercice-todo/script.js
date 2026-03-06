/*

Exercice todo list: 
réaliser une petite todo list comme l'image :
- un champ input text avec un bouton d'ajout
- la liste des tâche à faire
- un bouton supprimer sur la tâche
- une checkbox qui une fois coché passe la case en rouge
Bonus: Si l'utilisateur ne rentre pas de texte, afficher un petit message d'erreur

*/

window.addEventListener("DOMContentLoaded", () => {
  const taskname = document.getElementById("taskname");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const clearTasksBtn = document.getElementById("clearTasksBtn");
  const tasks = document.getElementById("tasks");

  addTaskBtn.addEventListener("click", addTask);
  clearTasksBtn.addEventListener("click", clearTasks);

  function addTask() {
    // Permet de récupérer la valeur et de la nettoyer
    let value = taskname.value.trim();

    // Permet de vider le champ
    taskname.value = "";

    // Refocus le champ
    taskname.focus();

    // En cas d'erreur, affiche un message et on stop la méthode
    if (value == "") {
      alert("Vous devez entrer une valeur");
      return;
    }

    // Création des éléments
    const li = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const removeBtn = document.createElement("button");

    // Paramétrer les éléments
    label.textContent = value;
    checkbox.type = "checkbox";
    removeBtn.textContent = "Supprimer";

    // Ajouter les éléments aux parents
    tasks.appendChild(li);
    li.appendChild(label);
    li.appendChild(removeBtn);
    label.insertAdjacentElement("afterbegin", checkbox);

    // Gestion des événements
    checkbox.addEventListener("change", toggleCheck);
    removeBtn.addEventListener("click", removeTask);
    // removeBtn.addEventListener("click", () => {
    //   li.remove();
    // })
  }

  function removeTask(event) {
    // console.log("Déclenchement de la méthode: removeTask");
    // console.log('this :>> ', this);
    // console.log('event :>> ', event);

    // console.log('this.parentElement :>> ', this.parentElement);
    // console.log('event.target.parentElement :>> ', event.target.parentElement);

    event.target.parentElement.remove();
  }

  function toggleCheck(event) {
    // console.log("Déclenchement de la méthode: toggleCheck");
    // console.log('this :>> ', this);
    // console.dir(this);
    // console.log('event :>> ', event);

    if (this.checked) {
      this.parentElement.classList.add("isDone")
    }
    else {
      this.parentElement.classList.remove("isDone")
    }
  }

  function clearTasks () {
    tasks.textContent = "";
  }
});
