anime({
  targets: '.Html_lang',

  translateX:[{
    value:200,
    duration:500},{
      value:-200,
      duration:2000
    }
  ],
  rotate:{
    value: '+=2turn', // 0 + 2 = '2turn'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  translateY:[{
      value:200,
      duration:2000
    }
  ],

  scale: {
    value: 2,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets:'.css',
  translateX:[{
    value:-100,
    duration:2000,
  }],
  loop:true
})