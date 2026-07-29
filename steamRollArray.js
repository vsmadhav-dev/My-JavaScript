function steamrollArray(arr){
let result = [];
for(let i of arr){
  if(Array.isArray(i)){
    result = result.concat(steamrollArray(i))
  }else{
    result.push(i)
  }
}
return result;
}