function bouncer(arr){

  const finalarr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      finalarr.push(arr[i]);
    }
  }
  return finalarr;
}
console.log(bouncer(["a", false , NaN, "c"]))