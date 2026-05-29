function nameSwapper(name){
    let nameArray = name.split(' ');
     let first_name = nameArray[0];
     let last_name = nameArray[1];
  let reversedName1 =last_name  + " " +first_name;
 
  return reversedName1;

}
console.log(nameSwapper("Madhav Aanand"));