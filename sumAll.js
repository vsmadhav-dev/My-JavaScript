function sumAll(arr){
 let a = arr.toString().split(",")[0];
 let b = arr.toString().split(",")[1];
 let m = Number(a);
 let n = Number(b);
  if(m > n){
    let j = m;
    m = n;
    n = j;
  }
  const x = n - m + 1;
  const sum = x * (n + m) / 2;
  return sum;
}
console.log(sumAll([10, 8]));