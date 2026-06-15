function repeatStringNumTimes(string , num){
 let result = '';
  if(num <= 0){
    return "";
  }
  for(let i =0; i < num; i++){
    result += string;
  }
  return result;
}
console.log( repeatStringNumTimes("a" , 3));