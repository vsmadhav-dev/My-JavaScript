function spacey(array) {
  let split = [...array];
  let arr =  [];
  for(let i = 0; i < split.length; i++){
    if(i == 0){
      arr.push(split[i]);
      continue;
    }else{
      split[i] = split[i - 1] + split[i];
    }
   arr.push(split[i]);
  }
  return arr;
}