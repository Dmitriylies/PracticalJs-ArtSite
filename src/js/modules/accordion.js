const accordion = (heading) => {

    const accordionHead = document.querySelectorAll(heading);

    accordionHead.forEach(btn => {
        btn.addEventListener('click', function() {
            accordionHead.forEach(activeBtn => {
                if (activeBtn.classList.contains('active-style')) {
                    activeBtn.classList.remove('active-style');
                    activeBtn.nextElementSibling.classList.remove('active-content');
                    activeBtn.nextElementSibling.style.maxHeight = 0;
                }
            });
            
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = 0;
            }
        });
    });

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