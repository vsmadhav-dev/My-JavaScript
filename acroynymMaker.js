function acronymn(sentences){
let words = sentences.split(' ');

let initials = words.map(function(word){
  return word[0];   
  
});
let acronym = initials.join('');
return acronym;
}
console.log(acronymn("Central Investigation Agency"));
