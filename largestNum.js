function largestOfAll(arr){
  let a = [];
  for(let i = 0; i < arr.length; i++){
   arr[i].sort((a, b) => b -a);
      a.push(arr[i][0]);

}  return a;}
console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));