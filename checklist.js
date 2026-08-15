const ul = document.querySelector(".item-list");
const button = document.querySelectorAll('.favorite-icon');
button.forEach(btn => {
btn.addEventListener("click" , ()=> {
  if(btn.classList.contains('filled')){
    btn.classList.remove('filled')
  }else{
    btn.classList.add('filled');
    btn.innerHTML = '&#10084';
  }
})
});