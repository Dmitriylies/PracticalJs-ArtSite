const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    function isValid(str){
       // str.value = '';
        
        var patt = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
        var res = patt.test(str);
        if (patt.test(str)) {
            
            return false;
        }
        console.log(res);
        return true;
        
        
        
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