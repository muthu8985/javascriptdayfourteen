// task of set
//  new set
let groceries = new Set(["salt", "sugar", "paste", "pasta", "soap"]);
// size of set
console.log(groceries.size);
// add set 
addgro = groceries.add("oil", "shampoo", "tomato");
console.log(addgro);
// del set
delgro = groceries.delete("tomato");
console.log(delgro);
//  list  all set
ligro="";
for (const x of groceries){
    ligro += x+"<br>"
}
console.log(ligro)
// has set 
hasgro= groceries.has("tomato");
// entries
entgro=groceries.entries()
 let txt="";
 for (const g of entgro){
    txt += g +"<br>"
 }
 console.log(txt)
//   for each
  let eachtxt ="";
   groceries.forEach(function (value) {
    
    eachtxt += value+"<br>"
   });
   console.log(eachtxt)