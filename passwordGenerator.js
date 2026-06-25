function generatePassword(pass){
  let letter;
  let result = "";
  const password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const spass = password.split("");
  for(let i = 0; i < pass; i++){
  const random = Math.floor(Math.random() * spass.length);
   letter = spass[random];
 result += letter;
  }
  return result;
}
let password = generatePassword(10);
console.log(`Generated password: ${password}`);