const togglebtn = document.querySelector('.listbar');
const menu = document.querySelector('.div_menu');
const icon = document.querySelector('.div_icon');

togglebtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})