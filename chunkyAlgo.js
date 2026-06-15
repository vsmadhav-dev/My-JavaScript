function chunkArrayInGroups(arr , num){
  let final = [];
   let index = 0;
   while(index < arr.length){
    let chunks = arr.slice(index , num+ index);
    final.push(chunks);
    index+= num; 

   }
   return final;
}