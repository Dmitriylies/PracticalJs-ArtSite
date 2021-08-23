const filter = ()=> {
    const menu = document.querySelector('.portfolio-menu'),
          btns = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnGirls = menu.querySelector('.girl'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad');
    const wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirls = wrapper.querySelectorAll('.girl'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGuy = wrapper.querySelectorAll('.guy'),
          markNo = document.querySelector('.portfolio-no');  
          
    menu.addEventListener('click', (e)=> {
        let target = e.target;
        if (target && target.tagName == 'LI') {
            btns.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

    const typeFilter = (markType)=> {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });
        markNo.style.display = 'none';
        markNo.classList.remove('animated', 'fadeIn');

        if (markType.length >= 1) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            markNo.style.display = 'block';
            markNo.classList.remove('animated', 'fadeIn');
        }
    };


    function showActiveWorks() {
        btns.forEach(item => {
           let itemClass = item.className;
           let btn = menu.querySelector(`.${itemClass}`);
           let itemMark = wrapper.querySelectorAll(`.${itemClass}`);
           btns[0].classList.add('active');
           btn.addEventListener('click', ()=> {
            typeFilter(itemMark);
           });
        });
            
    }

    showActiveWorks();
};

export default filter;
