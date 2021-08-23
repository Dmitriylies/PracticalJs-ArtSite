import { getResource } from "../services/request";

const calc = (size, material, options, promocode, result)=> {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);
          
    function getData(selector) {
        

        getResource('assets/calcPrise.json')
        .then(res => {
            const selectOptions = document.querySelectorAll(`${selector} option`);
            
            res.values.forEach((element) => {
 
                selectOptions.forEach((item, i)=> {
                    switch(selector) {
                        case size: 
                        item.value = Object.values(element.sizes)[i];
                        break;
                        case material: 
                        item.value = Object.values(element.materials)[i];
                        break;
                        case options: 
                        item.value = Object.values(element.options)[i];
                        break;
                    }
                });
            });
            
        })
        .catch(error => {
            console.log(error.name);
            console.log(error.message);
        });
        
    }

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выбирите размер и материал картины.';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = `${Math.round(sum * 0.7)} руб.`;
            console.log(sum);
            
        } else {
            resultBlock.textContent = `${sum} руб.`;
        }
    }; 
    getData(size);
    getData(material);
    getData(options);
    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;