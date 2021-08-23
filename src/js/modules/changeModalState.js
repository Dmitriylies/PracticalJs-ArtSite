

const changeModalState = (state, size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result),
          btn = document.querySelector('.calc_form .button-order');

          btn.setAttribute("disabled", "disabled");
          btn.classList.add('button-order_disabled');
    const bindValues = (event, elem, prop) => {
        elem.addEventListener(event, ()=> {
                    if (sizeBlock.value !== '' && materialBlock.value !== '') {
                        btn.removeAttribute("disabled","disabled");
                        btn.classList.remove('button-order_disabled');
                    } else {
                        btn.setAttribute("disabled", "disabled");
                        btn.classList.add('button-order_disabled');
                    }
                switch(elem.nodeName) {
                    case 'SELECT' :
                        state[prop] = elem.value;
                        state.price = resultBlock.innerHTML;
                        console.log(state);
                        
                        break;
                    case 'INPUT' :
                        if (elem.value === 'IWANTPOPART') {
                            state[prop] = true;
                            console.log(state);
                            state.price = resultBlock.innerHTML;
                        } else{
                            state[prop] = false;
                            state.price = resultBlock.innerHTML;
                            console.log(state);
                        }
                        break;
                }
            });
    };

    bindValues('change', sizeBlock, 'size');
    bindValues('change', materialBlock, 'mateial');
    bindValues('change', optionsBlock, 'opions');
    bindValues('input', promocodeBlock, 'promo');
};

export default changeModalState;