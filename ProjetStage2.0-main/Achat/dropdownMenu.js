const dropdown = document.querySelector('.dropdown');
const dropdown_item = document.querySelectorAll('.dp');
const arrow = document.querySelector('.down-arrow');

dropdown.addEventListener('click',() => {
    arrow.classList.toggle('rotate');
    dropdown_item.forEach((dp) =>{
        dp.classList.toggle('show-dropdown');
    });
    
});