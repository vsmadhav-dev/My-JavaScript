function isPalindrome(word){
  let words = word.toUpperCase();
  if(words.split("").reverse().join("") == words){
    return true;
  }else{
    return false;
  }
}
 function findPalindromeBreaks(words){
  let arr = [];
  for(let i = 0; i < words.length; i++){
    let word = words[i].toUpperCase();
    if(word.split("").reverse().join("")  !== word){
      arr.push(i);
    } 
  }
  return arr;
 }
 function findRepeatedPhrases(words, phraseLength) {
  
  if (phraseLength >= words.length || phraseLength <= 0) {
    return [];
  }

  let counts = {};
  let startIndexMap = {};
  let result = [];

 
  for (let i = 0; i <= words.length - phraseLength; i++) {
    
    let phrase = words.slice(i, i + phraseLength).join(",");

   
    counts[phrase] = (counts[phrase] || 0) + 1;

    if (!startIndexMap[phrase]) {
      startIndexMap[phrase] = [];
    }
    startIndexMap[phrase].push(i);
  }


  for (let phrase in counts) {
    if (counts[phrase] > 1) {
      result.push(...startIndexMap[phrase]);
    }
  }

 
  return result.sort((a, b) => a - b);
}
function analyzeTexts(texts , phraseLength){
  let final = [];
  if(!texts || texts.length == 0){
 return final;
  }
  for(let i = 0; i < texts.length; i++){
    let text = texts[i];
  let firstFun = findPalindromeBreaks(text);
  let secondFun = findRepeatedPhrases(text, phraseLength);
  final.push({
   repeatedPhrases: secondFun,
    palindromeBreaks: firstFun
  });
  }
  return final;
}