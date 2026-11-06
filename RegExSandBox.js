let regexPattern = document.querySelector('#pattern');
const stringToTest = document.querySelector('#test-string');
const testButton = document.querySelector('#test-btn');
const testResult = document.querySelector('#result');
const caseInsensitiveFlag = document.querySelector('#i');
const globalFlag = document.querySelector('#g');

function getFlags() {
    let flags = '';

    if (caseInsensitiveFlag.checked) {
        flags += 'i';
    }
    if (globalFlag.checked) {
        flags += 'g';
    }

    return flags;

}
testButton.addEventListener('click' , ()=>{
    let flags =  getFlags();
    console.log(regexPattern.value)
    let pattern =  new  RegExp(regexPattern.value , flags)
    console.log(pattern);
    let test = stringToTest.textContent.match(pattern);
    console.log(test);
    if(test){

        testResult.innerText = flags.includes('g') ? test.join(', ') : test[0];

        stringToTest.innerHTML = stringToTest.innerText.replace(
            pattern,
            match => `<span class="highlight">${match}</span>`
        );
    }else{
        testResult.innerText = 'no match'
        stringToTest.innerHTML = stringToTest.innerText
    }
});