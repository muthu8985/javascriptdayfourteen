// task of set
//  new set
console.log("---------------task-------------");
let groceries = new Set(["salt", "sugar", "paste", "pasta", "soap"]);
// size of set
console.log(groceries.size);
// add set
//  let addgro = groceries.add("oil", "shampoo", "tomato");

let addgro = groceries.add("oil").add("shampoo").add("tomato");
console.log(addgro);
// del set
let delgro = groceries.delete("tomato");

console.log(delgro);
console.log(groceries);
//  list  all set
ligro = "";
for (const x of groceries) {
  ligro += x + "<br>";
}
console.log(ligro);
// has set
let hasgro = groceries.has("tomato");
console.log(hasgro);
// entries
let entgro = groceries.entries();
let txt = "";
for (const g of entgro) {
  txt += g + "<br>";
}
console.log(txt);
//   for each
let eachtxt = "";
groceries.forEach(function (value) {
  eachtxt += value + "<br>";
});
console.log(eachtxt);
