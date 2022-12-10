const modal = document.querySelector('.modal')
// const modalClose = document.querySelector('.modal-close')
const priceCardsWrapper = document.querySelector('.pricing-wrapper')

modal.addEventListener('click', (event) => {
    if(event.target.classList.contains('modal__bg') || event.target.closest('.modal-close')) {
        modal.classList.add("is-hidden")
        document.body.classList.remove("scroll-disable")
        document.documentElement.classList.remove("scroll-disable")
    } 
})

priceCardsWrapper.addEventListener("click", (event) => {
    if(!event.target.classList.contains('btn') ) return
  
    const text = event.target.parentElement.querySelector('.card__title').innerHTML
    const price = event.target.parentElement.querySelector('.card__price').innerHTML
  
    modal.classList.remove("is-hidden")
    modal.querySelector('.modal__title').innerHTML = `You have choosed ${text} for ${price}`
    document.body.classList.add("scroll-disable")
    document.documentElement.classList.add("scroll-disable")
  })