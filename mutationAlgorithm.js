function mutation(array){
  let lowerArray = array[0].toLowerCase();
  let lowerArray2 = array[1].toLowerCase();
  for(let i = 0; i < lowerArray2.length; i++){
    if(!lowerArray.includes(lowerArray2[i])){
      return false;
    }

  }
  return true;
}