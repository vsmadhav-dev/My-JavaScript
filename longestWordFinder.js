function findLongestWordLength(string){
 const splitString = string.split(" ");
  let longWord = 0;
 for(let i = 0; i < splitString.length; i++){
 
  if(splitString[i].length > longWord ){
    longWord = splitString[i].length;
  }
 }
 return longWord;
}
console.log(findLongestWordLength("I am a JavaScript developer"));