import Splide from "@splidejs/splide"

var splide = new Splide(".splide", {
  pagination: false,
  arrows: false,
  type: "loop",
  perPage: 5,
  breakpoints: {
    1024: {
      perPage: 3,
    },
  },
  perMove: 1,
})

splide.mount()
