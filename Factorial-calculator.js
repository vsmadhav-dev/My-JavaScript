const num =5;
function factorialCalculator(number){
  let result = 1;
  do{
    result = result * number;
    number--;

  }while(number > 1);
   
  return result;
}
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);