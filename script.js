
    const Html=document.querySelector('.Html');
    const Css=document.querySelector('.Css');
    const Bootstrap=document.querySelector('.Bootstrap');
    const Php=document.querySelector('.Php');
    const Python=document.querySelector('.Python');
    const JavaScript=document.querySelector('.JavaScript');
    const ReactNative=document.querySelector('.ReactNative');
    const MySql=document.querySelector('.MySql');
    const Sqlite3=document.querySelector('.Sqlite3');
    const C_plus_plus=document.querySelector('.C_plus_plus');
    const C=document.querySelector('.C');
//   animate html
    const animateHtml=()=>{
        console.log('enter');
        anime({
            targets:Html,
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
// animaite css
    const animateCss=()=>{
        console.log('enter');
        anime({
            targets:Css,
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
    // animate bootstrap
    const animateBootstrap=()=>{
        console.log('enter');
        anime({
            targets:Bootstrap,
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
    // animate JavaSript
    const animateJavaScript=()=>{
        console.log('JavaScript');
        anime({
            targets:JavaScript,
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
                value: 20,
                duration: 800
              },
            duration: 4000,
            easing: 'easeOutElastic(1, .8)',
            loop: true
          });
    }
    
    // animate Php
    const animatePhp=()=>{
        console.log('Php');
        anime({
            targets:Php,
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
    // animate python
    const animatePython=()=>{
        console.log('Python');
        anime({
            targets:Python,
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
    // animate Sqlite3
    const animateSqlite3=()=>{
        console.log('Sqlite3');
        anime({
            targets:Sqlite3,
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
                value: 20,
                duration: 800
              },
            duration: 4000,
            easing: 'easeOutElastic(1, .8)',
            loop: true
          });
    }
    // animate MySql
    const animateMySql=()=>{
        console.log('MySql');
        anime({
            targets:MySql,
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
             
            duration: 4000,
            easing: 'easeOutElastic(1, .8)',
            loop: true
          });
    }
    // animate C_plus_plus
    const animateCPlusPlus=()=>{
        console.log('C_plus_plus');
        anime({
            targets:C_plus_plus,
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
            
            duration: 4000,
            easing: 'easeOutElastic(1, .8)',
            loop: true
          });
    }
    // animate reactnative
    const animateReactNative=()=>{
        console.log('ReactNative');
        anime({
            targets:ReactNative,
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
                value: 20,
                duration: 800
              },
            duration: 4000,
            easing: 'easeOutElastic(1, .8)',
            loop: true
          });
    }
    // animate c
    const animateC=()=>{
        console.log('animateC');
        anime({
            targets:C,
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
             
            duration: 4000,
            easing: 'easeOutElastic(1, .8)',
            loop: true
          });
    }
  //  header.addEventListener('mouseover',mouseOver);
  animateHtml()
  animateCss()
  animateBootstrap()
  animateJavaScript()
  animatePython()
  animateMySql()
  animatePhp()
  animateMySql()
  animateSqlite3()
  animateReactNative()
  animateC();
  animateCPlusPlus()
   