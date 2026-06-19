function sumTwoSmallestNumbers(numbers) {  
  let numarr = [...numbers]; 
  // using bubble sort algo
  for(let i = 0; i < numarr.length -1; i++ ){
    for(let j =  0; j < numarr.length - i - 1; j++){
      if(numarr[j] > numarr[j + 1]){
       [numarr[j], numarr[j + 1]] = [numarr[j + 1], numarr[j]];
    }
      }
   
  }
   
  const firstNum = Number(numarr[0]);
  const secNum = Number(numarr[1]);
  const result = firstNum + secNum;
  return result;
}