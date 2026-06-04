const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(records , id , prop , value){

  if(value === ""){
    delete records[id][prop];
   return records;  
  }
   if(prop !== "tracks" && value !== ""){
     records[id][prop] = value;
     return records;
   }
   if(!records[id].hasOwnProperty('tracks')){
        records[id]["tracks"] = [];
        
        
   }
  records[id]["tracks"].push(value);

   return records;
        
}
// Added code to check functionality of updateRecords function.
updateRecords(recordCollection, 2468, "tracks", "Delirious");
console.log(recordCollection[2468].tracks); 

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(recordCollection[5439].tracks); 

updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(recordCollection[5439].artist); 

updateRecords(recordCollection, 2548, "artist", "");
console.log(recordCollection[2548].artist); 

console.log(recordCollection);
