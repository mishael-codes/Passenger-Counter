let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  countEl.textContent = count += 1;
  console.log(count);
}

// function save(){
//     let countStr = " " + count + " - ";
//     saveEl.innerText += countStr;
// }

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;

  count = 0;
  countEl.textContent = 0;
}