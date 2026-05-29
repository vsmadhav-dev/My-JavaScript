function nameSwapper(name){
    let nameArray = name.split(' ');
     let first_name = nameArray[1];
     let last_name = nameArray[0];
  let reversedName1 = first_name + " " +last_name;
 
  return reversedName1;

}
console.log(nameSwapper("Madhav Aanand"));