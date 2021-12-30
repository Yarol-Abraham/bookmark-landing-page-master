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

function toggleTabsRemove(questionsResponsesItemParagraph, questionsResponsesItemTitle) 
{
    // remove class
    questionsResponsesItemParagraph.forEach(
        el => el.classList.remove('questions__responses__item--paragraph--active')
    );
    questionsResponsesItemTitle.forEach(
        el => el.classList.remove('questions__responses__item--title--active')
    );
}

export function tabsQuestions() 
{
    const questionsResponses = document.querySelector('.questions__responses');
    const questionsResponsesItemParagraph = document.querySelectorAll('.questions__responses__item--paragraph');
    const questionsResponsesItemTitle = document.querySelectorAll('.questions__responses__item--title');
    questionsResponses.addEventListener('click', function (e) {
        const clicked = e.target.closest('.questions__responses__item--title');
        if(!clicked) return;
        
        if(clicked.classList.contains('questions__responses__item--title--active')){
            toggleTabsRemove(questionsResponsesItemParagraph, questionsResponsesItemTitle);
        }else{
            toggleTabsRemove(questionsResponsesItemParagraph, questionsResponsesItemTitle);
            
            // activate button
            clicked.classList.add('questions__responses__item--title--active');

            // add class
            document.querySelector(`.questions__responses__item--paragraph--${clicked.dataset.question}`)
            .classList.add('questions__responses__item--paragraph--active');
        }
    });
}

function validateEmail(field) 
{
    console.log(field);
    if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(field)){
        return true;
    }else{ 
        return false;
     }
}

export function handleForm()
{
    // form
    const contactForm = document.querySelector('.contact__form');
    const contactFormItemText = document.querySelector('.contact__form__item--text');
    // class
    const contactFormItemField = document.querySelector('.contact__form__item--field');
    const contactFormItemImagen = document.querySelector('.contact__form__item--imagen'); 
    const contactFormItemAlert = document.querySelector('.contact__form__item--alert');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if(
            !validateEmail(contactFormItemText.value.trim())
        )
        {
            contactFormItemField.classList.add('contact__form__item--field--active');
            contactFormItemImagen.classList.add('contact__form__item--imagen--active');
            contactFormItemAlert.classList.add('contact__form__item--alert--active');
        }else{
            contactFormItemField.classList.remove('contact__form__item--field--active');
            contactFormItemImagen.classList.remove('contact__form__item--imagen--active');
            contactFormItemAlert.classList.remove('contact__form__item--alert--active');
        }
    })
}

export function stickyNav()
{
    const bookmark = document.querySelector('.bookmark');
    const container = document.querySelector('.container');
    const navHeight = container.getBoundingClientRect().height;
    
    const handleStiky = function (entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) container.classList.add('header__nav--sticky');
        else container.classList.remove('header__nav--sticky');
    }
    
    const headerObserver = new IntersectionObserver(handleStiky, {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px`,
    });
      
    headerObserver.observe(bookmark);
}