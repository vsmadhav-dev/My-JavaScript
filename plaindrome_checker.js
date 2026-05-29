function plaindromeChecker(str) {
    let split = str.split('');
    let reverse = split.reverse();
    let join = reverse.join('');
    if(str === join){
        return "The string is a Plaindrome " + str  ;
    }
    else{
        return `The string is not a Plaindrome ${str}`;
    }
    
}
console.log(plaindromeChecker("madam"));
console.log(plaindromeChecker("hello"));