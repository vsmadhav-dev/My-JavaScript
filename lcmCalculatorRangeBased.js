function gcd(a , b){
  while(b !== 0){
    let temp = b;
    b = a % b;
    a = temp
  }
  return a;
}
function smallestCommons(arr){
  let min = Math.min(arr[0] , arr[1]);
  let max = Math.max(arr[0] , arr[1]);
  let lcm = min;
  for(let i = min; i <= max; i++){
    lcm = (lcm * i) / gcd(lcm , i);
  }
  return lcm;
}