function convertHTML(str){
  const replacementMap ={
    '&': '&amp;' ,
    '<': '&lt;' ,
    '>': '&gt;' ,
    '"' : '&quot;' ,
    "'" : '&apos;' 
  };
  let result ='';
  for(const i of str){
    if(replacementMap[i] !== undefined){
     result += replacementMap[i];
    }else{
      result += i;
    }
  }
  return result;
}
console.log(convertHTML("Dolce & Gabbana"));