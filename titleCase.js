function titleCase(str){
  const split = str.split(" ");
  let title;
  let spfinal = "";
  for(let i = 0; i < split.length; i++){
  let sp = split[i].toLowerCase().split("");
 sp[0] = sp[0].toUpperCase();
   spfinal += sp.join("") + " ";
   title = spfinal; 
  }
  return title.trim();

}
console.log(titleCase("I'm a little tea poT."));