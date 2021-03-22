
    const header=document.querySelector('.Html');
    const header=document.querySelector('.Css');
    const header=document.querySelector('.Bootstrap');
    const header=document.querySelector('.Php');
    const header=document.querySelector('.Python');
    const header=document.querySelector('.JavaScript');
    const header=document.querySelector('.ReactNative');
    const header=document.querySelector('.MySql');
    const header=document.querySelector('.Sqlite3');
    const header=document.querySelector('.C++">');
    const header=document.querySelector('.C');
    const mouseOver=()=>{
        console.log('enter');
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
  //  header.addEventListener('mouseover',mouseOver);
  mouseOver()
   