const ban = "bad terrible garbage trash hate";
const incoming = ["Bad" ,  "message"];
const filter = incoming.map(function(str) {
    if(ban.includes(str.toLowerCase())){
       let result = "good";
       return result;
    }else{
        return str;
    }
});
console.log(filter);