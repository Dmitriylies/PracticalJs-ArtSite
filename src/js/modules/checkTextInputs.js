const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    function isValid(str){
        if (str.value.search(/[^a-z]/ig)) {
            str.value = '';
        } 
    }
    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if(e.key.match(/[^а-яё 0-9 -]/ig)) {
                e.preventDefault();
            } 
        });
        input.addEventListener('input', ()=> {
            isValid(input);
        });
    });
};

export default checkTextInputs;