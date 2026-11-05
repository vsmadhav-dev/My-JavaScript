const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

function checkPalindrome() {
    const original = textInput.value.trim();
    const check = original.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    if (check.split('').reverse().join('') === check) {
        result.innerText = `${original} is a palindrome`;
    } else {
        result.innerText = `${original} is not a palindrome`;
    }
}

checkBtn.addEventListener('click', () => {
    if (!textInput.value.trim()) {
        alert('Please input a value');
    } else {
        checkPalindrome();
    }
});