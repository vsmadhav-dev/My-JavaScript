function getIndexToIns(arr , num){
  arr.sort((a , b) => a - b);
 let index = arr.findIndex(index => index >= num);
 return index === -1 ? arr.length : index;
}
console.log(getIndexToIns([1, 2, 3, 4], 1.5))