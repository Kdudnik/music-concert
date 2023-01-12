// Shots section slider
const shots = new Splide(".shots .splide", {
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
      perMove: 1,
      fixedWidth: 370,
      gap: 10,
    },
  },
  perMove: 1,
  padding: 370, 
  gap: 30,
})

shots.mount()

// Quote section slider
const quote = new Splide(".quote .splide", {
  pagination: false,
  arrows: false,
  type: "loop",
  focus: 'center',
  perPage: 1,
  perMove: 1,
  gap: 30,
})

const mql = window.matchMedia("(min-width: 991px)")
if(mql.matches) quote.mount()
console.log(mql)
console.log(mql.matches)
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

// SELECT

const mql = window.matchMedia('(min-width: 991px)')

function activateTabs (selector) {
  const tabs = document.querySelector(selector)
  const tabArr = tabs.querySelectorAll('.tab')
  const tableArr = tabs.querySelectorAll('.table')
  let activeTab = tabs.querySelector('.tab-active')
  let activeTable = tabs.querySelector('.table-active')
  
  tabArr.forEach(tab => {
    tab.addEventListener('click', () => {
      tab.classList.add('tab-active')
      activeTab.classList.remove('tab-active')
      activeTab = tab
      tableArr.forEach(table => {
        if(tab.dataset.target == table.dataset.table) {
          table.classList.add('table-active')
          activeTable.classList.remove('table-active')
          activeTable = table
        }
      })
    })
  })
}

if(mql.matches) activateTabs('.event .event__desktop')
else activateTabs('.event .event__mobile')
