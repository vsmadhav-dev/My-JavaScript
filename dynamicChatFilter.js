const ban = "bad terrible garbage trash hate";
let incoming = "Bad message";
incoming = incoming.split(" ");
const filter = incoming.map(function(str) {
    if(ban.includes(str.toLowerCase())){
       let result = "good";
       return result;
    }else{
        return str;
    }
});
let final = filter.join(" ");
console.log(final);