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
    value:-200,
    duration:2000,
  },{
    value:200,
    duration:3000,
  }],

  translateY:[{
    value:400,
    duration:3000
  }],
  scale:{
    value:-2,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  rotate:{
    value:'+=2turn',
    duration:5000
    
  },

  loop:true
});
anime({
  
  targets:'.react',
  scale:{
    value:-1,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  rotate:{
    value:'+=2turn',
    duration:5000
  },
  loop:true

})
anime({
  targets:'.tailwind',
  translateY:{
    value:-250,
    duration:10000
  },
  translateX:{
    value:500,
    duration:10000
  },
  translateY:{
    value:-200,
    duration:5000
  },
  translateY:{
    value:-200,
    duration:5000
  },
  rotate:{value:300, duration:3000},
  translateY:{
    value:-200,
    duration:5000
  },
  rotate:{value:300, duration:3000},
  
  duration:300,
  loop:true,
})
anime({
  targets:'.bootstrap',
  translateY: {function() { return anime.random(0, 200) + 'rem'; }},
  loop:true,
})