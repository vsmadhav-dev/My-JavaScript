function pairElement(str){
  let arr =[];
  let sr = str.split("");
const pairs = {
  A: 'T' ,
  T: 'A' ,
  C: 'G' ,
  G: 'C'
};
for(let i = 0; i < sr.length; i++){
  let currentChar = sr[i];
  let matchingpair = pairs[currentChar];
  arr.push([ currentChar ,matchingpair ])
}
  return arr;
}
console.log(pairElement("ATCG"))