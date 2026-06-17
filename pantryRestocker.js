const rawData = [
  "A10|Tomatoes|5|2027-01-01",        
  "B21|Bananas|10|2027-01-01|fridge", 
  "C32|Eggs|3|2027-01-01|pantry",     
];
function parseShipment(rawData){
  let shipment = [];
  let item = {}
  for(let i = 0; i < rawData.length; i++){
  let rawData2 = rawData[i].split("|");

  item = {
    sku: rawData2[0],
    name: rawData2[1],
    qty: Number(rawData2[2]),
    expires: rawData2[3],
    zone: rawData2[4] || "general"


  };
  shipment.push(item); 
  }
   
  console.log(shipment)
}
function planRestock(pantry, shipment){
  let act = [];
for(let i = 0; i < pantry.length; i++){
  if(pantry[i].qty <= 0 ){
    act.push({
      type: "discard",
      item: pantry[i]
  });
 
  }
 else {
  for(let j = 0; j < shipment.length; j++){
  if(pantry[i].sku === shipment[j].sku){

  
  
    act.push({
      type: "restock",
      item: pantry[i]
  })}
  }
  if(pantry[i].sku !== shipment[i].sku){
    act.push({
      type: "restock",
      item: pantry[i]
  })
  }
 }
 }}
parseShipment(rawData); 