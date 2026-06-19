function squareNumber(number) {
    let splited = number.toString().split(",");
    for(let i = 0; i < splited.length; i++){
        splited[i].trim();
    }
      let result = 0;
    for( i = 0; i < splited.length; i++){
         result += Number(splited[i] * splited[i]); 
          
    }
    return result;
}
console.log(squareNumber([1 , 2 , 3]));