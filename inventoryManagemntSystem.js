const inventory = [];
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
  let p = product.name.toLowerCase();
 let index = findProductIndex(p);
 if(index != -1){
  inventory[index].quantity += product.quantity;
  console.log(inventory[index].name + " quantity updated");
 }else{
  product.name = p;
  inventory.push(product);
  console.log(product.name + " added to inventory");
 }
}
console.log(findProductIndex("chocolate"))