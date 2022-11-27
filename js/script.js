var splide = new Splide(".splide", {
  pagination: false,
  type: "loop",
  perPage: 3,
  fixedWidth : 370,
  breakpoints: {
    1860: {
      padding: 300,
      perPage: 3,
      fixedWidth: 335,
    },

    1600: {
      padding: 290,
      perPage: 3,
      fixedWidth: 320,
    },

    768: {
      padding: '25%',
      perPage: 1,
      fixedWidth: 370,
      arrows: false,
    },

    425: {
      padding: { left: '6%', right: '5%' },
      perPage: 1,
      fixedWidth: 370,
      gap: 10,
    },
  },
  perMove: 1,
  padding: 370, 
  gap: 30,
})

splide.mount()
