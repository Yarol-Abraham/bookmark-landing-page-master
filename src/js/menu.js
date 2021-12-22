export function menu() {

    const btnOpen = document.querySelector('#btn--menu');
    const btnClose = document.querySelector('#btn--close');
    const nav = document.querySelector('.header__nav');
    
    btnOpen.addEventListener('click', function() { nav.classList.remove('hidden') });
    btnClose.addEventListener('click', function() { nav.classList.add('hidden') });
}