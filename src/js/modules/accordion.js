const accordion = (heading) => {

    const accordionHead = document.querySelectorAll(heading);
    let btnNumber ;
// переменная не позволяет функции сработать, когда открыт таб, а пользователь кликает на него для закрытия.
    accordionHead.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            hide();

            if (btnNumber !== i){
            show(this);
            }

            btnNumber= undefined;
        });
        
    });

    function show(trigger) {
        trigger.classList.add('active-style');
        trigger.nextElementSibling.classList.add('active-content');
        if (trigger.classList.contains('active-style')) {
            trigger.nextElementSibling.style.maxHeight = trigger.nextElementSibling.scrollHeight + 80 + "px";
        } else {
            trigger.nextElementSibling.style.maxHeight = 0;
        }
    }

    function hide() {
        accordionHead.forEach((activeBtn, i) => {
            if (activeBtn.classList.contains('active-style')) {
                activeBtn.classList.remove('active-style');
                activeBtn.nextElementSibling.classList.remove('active-content');
                activeBtn.nextElementSibling.style.maxHeight = 0;
                btnNumber = i;
            }
                
        });
    }

    //       accordionBlocks = document.querySelectorAll(blocks);

    // accordionBlocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // accordionHead.forEach(btn => {
    //     btn.addEventListener('click', function() {
            
    //         if(!this.classList.contains('active')){
    //             accordionHead.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
          
      
};

export default accordion;

// function hideBlocks() {
//     accordionBlocks.forEach(block => {
//         block.style.display = 'none';
//         //block.classList.remove('animated', 'fadeInDown');
//         //block.classList.add('animated', 'fadeInUp');
        
        
//     });
// }
// function showBlocks(n) {
//     accordionBlocks[n].style.display = 'block';
//     // accordionBlocks[n].classList.remove('animated', 'fadeInUp');
//     accordionBlocks[n].classList.add('animated', 'fadeInDown');
// }

// accordionHead.forEach((header, i)=> {
//     header.addEventListener('click', ()=> {
//             if (accordionBlocks[i].style.display == 'none') {
//                 hideBlocks();
//                 showBlocks(i);
//             } else {
//                 hideBlocks();
//             }

        
//     });
    
    
// });

// hideBlocks();