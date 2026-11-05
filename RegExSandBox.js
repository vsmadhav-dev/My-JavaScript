const regexPattern = document.querySelector('#pattern');
const stringTOTest = document.querySelector('#test-string');
const testButton = document.querySelector('#test-btn');
const testResult = document.querySelector('#testResult');
const caseInsensitiveFlag = document.querySelector('#i');
const globalFlag = document.querySelector('#g');

function getFlags(){
    let box;
    if(caseInsensitiveFlag.checked){
        box = 'i';
    }else if(globalFlag){
        box = 'g'
    }else{
        box='';
    }
    return box;
}