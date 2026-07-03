const inventory = [{
  name: "cake" ,
  quantity: 7 
},
{
name: "chocolate" ,
quantity: 5
}];
function findProductIndex(productname){
  let lower = productname.toLowerCase();
for(let i = 0; i < inventory.length; i++){
if(inventory[i].name == lower){
  return i;
  
}

  }
  return -1;
}
function addProduct(product){
for(let i = 0; i < inventory.length; i++){
  if(product == inventory[i]){
    inventory[i].quantity++;
    console.log(quantity);
    console.log("quantity updated")
  }
}
}
console.log(findProductIndex("chocolate"))