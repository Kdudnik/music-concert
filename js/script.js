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

// COUNTDOWN-JS

const END = new Date('January 22, 2023 00:00:00')
const goal = new Date(END.getTime())
const countdown = Countdown.timer(goal, function(time) {
  document.querySelector('[data-days]').textContent = `${time.days}d`
  document.querySelector('[data-hours]').textContent = `${time.hours}h`
  document.querySelector('[data-minutes]').textContent = `${time.minutes}m`
  document.querySelector('[data-seconds]').textContent = `${time.seconds}s`
},function() {
  document.querySelector('[data-seconds]').textContent = '0s'
})