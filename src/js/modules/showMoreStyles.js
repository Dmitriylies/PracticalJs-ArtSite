import { getResource } from "../services/request";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    
        // cards.forEach(card => {
        //     card.classList.add('animated', 'fadeInUp');
        // });

        // btn.addEventListener('click', () => {
        //     console.log('gfbfg');
            
        //     cards.forEach(card => {
        //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
        //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        //     });
        //     btn.remove();
        // });

    btn.addEventListener('click', function() {
         //getResource('http://localhost:3000/styles')
        getResource('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => {
                console.log(error.name);
                console.log(error.message);
            });
            
        this.remove();
    });
    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInDown', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
            <div class=styles-block>
                <img src=${src} alt="style">
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>
            `;
        const wrap = document.querySelector(wrapper);
        wrap.appendChild(card);
        });
    }
       
};
export default  showMoreStyles;
