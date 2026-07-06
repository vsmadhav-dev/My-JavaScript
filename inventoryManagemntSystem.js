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
  } else {
    product.name = p;
    inventory.push(product);
    console.log(product.name + " added to inventory");
  }
}

function removeProduct(name, quantity){
  let name1 = name.toLowerCase();
  let isFound = false;

  for(let i = 0; i < inventory.length; i++){
    if(inventory[i].name == name1){
      isFound = true;
      
      if(quantity > inventory[i].quantity){
        console.log("Not enough " + inventory[i].name + " available, remaining pieces: " + inventory[i].quantity);
      } else {
        inventory[i].quantity = inventory[i].quantity - quantity;
        
        if(inventory[i].quantity == 0){
          inventory.splice(i, 1);
        } else {
          console.log("Remaining " + inventory[i].name + " pieces: " + inventory[i].quantity);
        }
      }
      break;
    }
  }
  
  if(isFound == false){
    console.log(name1 + " not found");
  }
}