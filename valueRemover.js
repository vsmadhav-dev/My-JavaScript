function destroyer(arr , ...args){
  let final = arr.filter(num => !args.includes(num));
  return final

}