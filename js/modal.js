const pricing = {
    Basic: '100$',
    Standard: '150$',
    Premium: '200$'
}

const modal = document.querySelector('.modal')
const modalCall = document.querySelectorAll('.modal-caller')
const modalClose = document.querySelector('.modal-close')
const result = document.querySelector('.modal__title')

modalClose.addEventListener('click', () => {
    modal.classList.add("is-hidden")
})

modalCall.forEach(card => {
    card.addEventListener('click', () => {
        modal.classList.remove("is-hidden")
        result.innerHTML = `You have choosed ${card.dataset.level} for ${pricing[card.dataset.level]}`
    })
})