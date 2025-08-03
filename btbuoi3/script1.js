let paragraTag = document.getElementsByTagName("p");
let container = document.querySelector(".container");
let titleElement = document.querySelector("#title");
console.log(titleElement.textContent);
titleElement.innerText = "Khóa Web 25A - Phạm Cao Minh Quân";
container.appendChild(titleElement);
let spanElement = document.createElement("span");
spanElement.innerHTML = "<span> Khóa Web 25A - Phạm Cao Minh Quân</span>";
container.appendChild(spanElement);
let a = [1, 2, 3, 4, 5];
console.log(a);
let btnAdd = document.getElementById("btn");
let containerLast = document.querySelector(".container-last");
console.log(btnAdd);
let inputfield = document.getElementById("inputfield");
inputfield.addEventListener("input", () => {
  console.log(inputfield.value);
});

btnAdd.addEventListener("click", () => {
  let newElement = document.createElement("p");
  newElement.innerText = inputfield.value;
  containerLast.appendChild(newElement);
  inputfield.value = "";
});

