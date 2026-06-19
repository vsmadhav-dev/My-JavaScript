const rawData = [
  "A10|Tomatoes|5|2027-01-01",        
  "B21|Bananas|10|2027-01-01|fridge", 
  "C32|Eggs|3|2027-01-01|pantry",     
];

const currentPantry = [
  { sku: "A10", name: "Tomatoes", qty: 0, expires: "2026-06-01", zone: "general" },
  { sku: "B21", name: "Bananas", qty: 2, expires: "2026-06-20", zone: "fridge" },
  { sku: "D43", name: "Milk", qty: 4, expires: "2026-06-25", zone: "fridge" }
];

function parseShipment(rawData){
  let shipment = [];
  for(let i = 0; i < rawData.length; i++){
    let rawData2 = rawData[i].split("|");
    let item = {
      sku: rawData2[0],
      name: rawData2[1],
      qty: Number(rawData2[2]),
      expires: rawData2[3],
      zone: rawData2[4] || "general"
    };
    shipment.push(item); 
  }
  return shipment;
}

function planRestock(pantry, shipment){
  let act = [];
  let processedSKUs = []; 

  for(let i = 0; i < shipment.length; i++){
    let shipmentItem = shipment[i];

    
    let isDuplicate = false;
    for(let k = 0; k < processedSKUs.length; k++) {
      if(processedSKUs[k] === shipmentItem.sku) {
        isDuplicate = true;
        break;
      }
    }
    if(isDuplicate) {
      continue; 
    }
    processedSKUs.push(shipmentItem.sku);

    
    if(shipmentItem.qty <= 0) {
      act.push({
        type: "discard",
        item: shipmentItem
      });
      continue;
    }

    
    let pantryMatch = null;
    for(let j = 0; j < pantry.length; j++) {
      if(pantry[j].sku === shipmentItem.sku) {
        pantryMatch = pantry[j];
        break;
      }
    }

if(pantryMatch === null) {
      act.push({
        type: "donate",
        item: shipmentItem
      });
    } else {
      act.push({
        type: "restock",
        item: shipmentItem
      });
    }
  } 
  return act;
}

function groupByZone(actions){
  let grouped = {};
  for(let i = 0; i < actions.length; i++){
    let currentAction = actions[i];
    let zon = currentAction.item.zone; 
    
    if(!grouped[zon]){
      grouped[zon] = [];  
    }

    grouped[zon].push(currentAction);
  }
  return grouped;
}

function clonePantry(pantry){
  let clone = [];
  for(let i = 0; i < pantry.length; i++){
    clone.push({
      sku: pantry[i].sku,
      name: pantry[i].name,
      qty: pantry[i].qty,
      expires: pantry[i].expires,
      zone: pantry[i].zone
    });
  }
  return clone; 
}


const parsedShipment = parseShipment(rawData); 
const actions = planRestock(currentPantry, parsedShipment);
const groupedResult = groupByZone(actions);


console.log(JSON.stringify(groupedResult, null, 2));