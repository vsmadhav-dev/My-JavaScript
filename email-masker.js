function maskEmail(email) {
    let numtomask = email.indexOf("@");
    let num = numtomask -2;
    
    let maskedEmail = "*".repeat(num);
    let rest = email.slice(numtomask);
    let finalEmail =  email[0] + maskedEmail + num + rest;
    return finalEmail; 
     // return maskedEmail.length; [result will be 7 done for checking if that's working correct or not(optional).]
   
}
console.log(maskEmail("m47903237@gmail.co.in"));