function nerdify(txt){
  let result = ''
  for(let i = 0; i < txt.length; i++){
    let lower = txt[i].toLowerCase();
   if(lower == 'a'){
      txt[i] = 4;
      
    }else if(lower == 'e'){
      txt[i] = 3;
      
    }else if(txt[i] == 'l'){
      txt[i] = 1;
    }
    result += txt[i]
  }
  return result;
}