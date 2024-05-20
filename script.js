// // დავალება 1

// async function delayedFunction(a, b) {
//   console.log((await a) * b);
// }

// console.log(delayedFunction(4, 5));
// setTimeout(() => console.log(20 * 32), 2000);
// console.log(1, 2, 3, 4);

// // დავალება 2

// setTimeout(() => {
//   console.log("Hello world");
// }, 3000);

// დავალება 3

const search = document.getElementById("search");
async function searchFunction() {
  const obj = await fetch("https://fakestoreapi.com/products");
  const data = await obj.json();
  return data;
}
searchFunction();

async function myFunction(array) {
  const container = document.querySelector(".container");
  for (let element of array) {
    const block = document.createElement("div");
    block.classList.add("block");
    container.appendChild(block);
    const title = document.createElement("h3");
    title.classList.add("h3");
    block.appendChild(title);
    title.textContent = element.title;
  }
}

async function getData() {
  const data = await searchFunction();
  myFunction(data);
}
getData();

search.addEventListener("change", async (e) => {
  const data = await searchFunction();
  const filteredData = data.filter((data2) =>
    data2.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  const container = document.querySelector(".container");
  container.textContent = "";
  myFunction(filteredData);
  console.log(filteredData);
});
