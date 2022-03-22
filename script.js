const inputTask = document.querySelector('[name="tarefa"]');
const btnAdd = document.querySelector('[data-btn-add=""]');
const listTask = document.getElementsByClassName("lista-tarefa-container")[0];
const btnExcluir = document.getElementsByClassName("remover-tarefa");
const btnConcluir = document.getElementsByClassName("concluir-tarefa");
const textTask = document.getElementsByClassName("text-task-item")[0];

const createTask = function (valueElement) {
  const newElement = document.createElement("li");
  newElement.classList.add("lista-tarefa-container-item");
  newElement.innerHTML = `
  <span class="icon-task remover-tarefa">
    <i class="fa-solid fa-xmark"></i>
  </span>
  <p class="text-task-item">
    ${valueElement}
  </p>
  <span class="icon-task concluir-tarefa">
    <i class="fa-solid fa-check"></i>
  </span>
  `;

  listTask.insertAdjacentElement("afterbegin", newElement);
};

const handleClick = function (e) {
  const valueTrue = function () {
    createTask(inputTask.value);
    inputTask.value = "";
    inputTask.focus();
    handleEvents();
  };
  e.preventDefault();
  const value = inputTask.value.trim();
  !!value.length ? valueTrue() : null;
};
btnAdd.addEventListener("click", handleClick);

const handleConcluir = function (e) {
  this.parentNode.classList.toggle("concluida");
  this.children[0].classList.toggle("fa-arrow-rotate-right");
  this.children[0].classList.toggle("fa-check");
  if (this.parentNode.classList.contains("concluida")) {
    listTask.appendChild(this.parentNode);
  } else {
    listTask.insertAdjacentElement("afterbegin", this.parentNode);
  }
};
const handleExcluir = function (e) {
  listTask.removeChild(this.parentNode);
};

function handleEvents() {
  [...btnConcluir, ...btnExcluir].forEach((element) => {
    element.classList.contains("concluir-tarefa")
      ? element.addEventListener("click", handleConcluir)
      : element.addEventListener("click", handleExcluir);
  });
}
handleEvents();
inputTask.focus();
