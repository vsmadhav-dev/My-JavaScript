function pyramid(str , int , bol){
  let result = '\n';
  if(bol == false){
    for(let i =  0; i < int; i++){
      let spaces = " ".repeat(int - i - 1);
  result += spaces +  str.repeat(i + i + 1) + "\n";
  
    }
  }
  else{
    for(let i = int - 1; i >= 0; i--){
      let spaces = " ".repeat(int - i - 1);
  result += spaces +  str.repeat(i + i + 1) + "\n";
  
    }
  }
    return result;
}
console.log(pyramid("k" , 12 , false));
console.log(pyramid("k" , 12 , true));