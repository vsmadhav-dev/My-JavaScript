function sumFibs(number){
  let sum = 0;
  let prev = 0;
  let crr = 1;
while( crr <= number ){
    if(crr %2 !== 0){
      sum+= crr;
    }
    let next = prev + crr;
    prev = crr;
    crr = next;
  }
  return sum;
}
