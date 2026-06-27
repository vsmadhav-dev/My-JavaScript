function frankenSplice(arr1 , arr2 , index){
  let arr = [...arr2];
  arr.splice(index, 0 , ...arr1);
  return arr;
}