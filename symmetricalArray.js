function diffArray(arr1 , arr2){
  let arr = arr1.filter(item => !arr2.includes(item));
 let arr3 = arr2.filter(item => !arr1.includes(item));
  return arr.concat(arr3);
  
}