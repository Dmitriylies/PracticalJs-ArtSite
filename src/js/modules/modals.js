const modals = () => {
    let btnPressed = false;

    function bindModal (triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = modal.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        const openModal = (selector) => {
            selector.classList.add('show');
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
        };

        const closeModal = () => {
            modal.classList.remove('show');
            document.body.style.overflow = "";
            document.body.style.marginRight = ``;
        };
        trigger.forEach(btn => {
                btn.addEventListener('click', (e)=> {
                    if (e.target) {
                        e.preventDefault();
                    }    
                    if (e.target && destroy) {
                        btn.remove();
                    }    
                    btnPressed = true;

                    windows.forEach(item => {
                        item.classList.remove('show');
                        item.classList.add('animated', 'fadeIn');
                    });
                    openModal(modal); 
                });
        });
       
        modal.addEventListener('click', (e) => {
            if ( e.target == modal || e.target == close ) {
                windows.forEach(item => {
                    item.classList.remove('show');
                });
                closeModal();
            }
        });
    }
    function showModalByTime(selector,time) {
        
     
        setTimeout(function() {
            let wasOpened;
            document.querySelectorAll('[data-modal]').forEach(item=> {
                if (item.classList.contains('show')) {
                    wasOpened = true; 
                }
            });
                if (!wasOpened) {
                    document.querySelector(selector).classList.add('animated', 'fadeIn', 'show');
                    document.body.style.overflow = "hidden";

                }
           
        }, time);
    }
    function showModalByScroll(selector) {
        //let scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

        window.addEventListener('scroll', ()=> {
            if(!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                    document.querySelector(selector).click();
            }
        });
    }

    function calcScroll() {
        const div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    bindModal('.button-design', '.popup-design', '.popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-close', true);
    showModalByScroll('.fixed-gift');
    
    showModalByTime( '.popup-consultation', 5000);
};

export default modals;