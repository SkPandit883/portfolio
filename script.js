
    const header=document.querySelector('.header');
    const mouseOver=()=>{
        
        anime({
            targets:header,
            translateX: {
                value: 250,
                duration: 800,
                easing: 'easeInOutSine'
              },
              rotate: {
                value: 30,
                duration: 1800,
                easing: 'easeInOutSine'
              },
              translateY: {
                value: 250,
                duration: 800
              },
            duration: 4000,
            easing: 'easeOutElastic(1, .8)',
            loop: true
          });
    }
    header.addEventListener('mouseover',mouseOver);
   