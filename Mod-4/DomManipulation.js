// Dom Methods: access any Node object

// let tag1 = document.getElementsByTagName("h1");
// tag1[1].innerText = "Updated Heading";

// let x = document.getElementById("heading1");
// console.log(x);

// let y = document.getElementsByClassName("para")[0];
// y.style.color = "blue";
// y.style.fontFamily = "arial"
// y.style.display = "none"

// let z = document.querySelector(".para")
// console.log(z);

// Events Handling

// 1. Inline Event Handling
// 2. Using the Ref. variable
// 3. Using addEventListener

function task1() {
  let h1Ele = document.querySelector("h1");
  h1Ele.style.textAlign = "center";
  h1Ele.style.textTransform = "uppercase";
}

let btn2 = document.querySelector("#btn2");

// Event Biniding
btn2.onmouseover = function () {
  let para2 = document.getElementsByTagName("p")[1];
  para2.style.textAlign = "justify";
  para2.style.color = "red";
};
btn2.onmouseleave = function () {
  let para2 = document.getElementsByTagName("p")[1];
  para2.style.textAlign = "justify";
  para2.style.color = "blue";
};

let btn3 = document.getElementById("btn3");

// Event Binding using AddEventListener

btn3.addEventListener("click", button3Fun);

function button3Fun() {
  let para2 = document.getElementsByTagName("p")[1];
  para2.style.display = "none";
}
// Remove the Event Binding
// btn3.removeEventListener("click", button3Fun);