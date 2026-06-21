function paperWrapper(boxes) {
let paperRequired =  boxes.reduce((total , [l,w ,h]) =>{
  let area = 2 *(l * w + w * h + h * l);
  area += Math.min(l * w , w * h , h * l);
  return  total + area;
}, 0);
return paperRequired;
}
console.log(paperWrapper([[3 , 4 , 5]]));