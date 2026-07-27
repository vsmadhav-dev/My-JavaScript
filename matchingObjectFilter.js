function whatIsInAName(arr , obj){
  const keys = Object.keys(obj);
 const final = arr.filter(item => {
    const matchedKeys= keys.filter(
      key => item.hasOwnProperty(key) && item[key] == obj[key]
    );
    return matchedKeys.length === keys.length;
  })
  return final;
}