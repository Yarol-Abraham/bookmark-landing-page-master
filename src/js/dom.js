export function menu() 
{
    const btnOpen = document.querySelector('#btn--menu');
    const btnClose = document.querySelector('#btn--close');
    const nav = document.querySelector('.header__nav');

    btnOpen.addEventListener('click', function() { nav.classList.remove('hidden') });
    btnClose.addEventListener('click', function() { nav.classList.add('hidden') });
}

export function tabsComponents() 
{
    const features__options = document.querySelector('.features__options');
    const features__tabs = document.querySelectorAll('.features__tabs');
    const btn_simple = document.querySelectorAll('.btn-simple');

    features__options.addEventListener('click', function(e) {
        const clicked = e.target.closest('.btn-simple');
 
        if(!clicked) return;

        // remove class
        features__tabs.forEach(el => el.classList.remove('features__tabs--active') );
        btn_simple.forEach(el=> el.classList.remove('features__options--active') );

        // Activate button
        clicked.classList.add('features__options--active');

         // Activate content area
        document.querySelector(`.features__tabs--${clicked.dataset.tab}`).
        classList.add('features__tabs--active');

    })

}