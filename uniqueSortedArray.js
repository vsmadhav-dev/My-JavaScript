function uniteUnique(...args){
let finalArr = [];
for(let i = 0; i < args.length; i++){
  let num = args[i];
  for(let j = 0; j < num.length; j++){
    if(finalArr.indexOf(num[j]) === -1){
      finalArr.push(num[j]);
    }
  }
}
return finalArr;
}
console.log(uniteUnique([1, 2, 4], [2, 3, 5]))