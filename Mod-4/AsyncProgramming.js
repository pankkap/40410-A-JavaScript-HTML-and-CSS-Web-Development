// JavaScript is basically a Synchronous Programming Langauage
// All statements extecuted one after the other.
// Asynchronous Programming: which allow the statement to be extecuted in async way

// // Asynchronous Programming Example
// console.log("Statement-1");
// console.log("Statement-2");

// setTimeout(() => {
//   let counter = 0;
//   for (let i = 0; i <= 1000000000; i++) {
//     counter = counter + i;
//   }
// }, 0);

// console.log("Statement-3");

// Promise: It is an object that return Future value
// It has Three states: Fullfilled, Reject, Pending

const url = "https://jsonplaceholder.typicode.com/users";

function getData(api_url) {
  fetch(api_url)
    .then((res) => {
      return res.json();
    })
    .then((result) => createTableData(result));
}

function createTableData(data) {
  for (var user of data) {
    var newtr = document.createElement("tr");

    var newtd1 = document.createElement("td");
    var newtd2 = document.createElement("td");
    var newtd3 = document.createElement("td");
    var newtd4 = document.createElement("td");

    newtd1.innerText = `${user.id}`;
    newtd2.innerText = `${user.name}`;
    newtd3.innerText = `${user.email}`;
    newtd4.innerText = `${user.phone}`;

    newtr.appendChild(newtd1);
    newtr.appendChild(newtd2);
    newtr.appendChild(newtd3);
    newtr.appendChild(newtd4);

    document.querySelector("table").appendChild(newtr);
  }
}

getData(url);
