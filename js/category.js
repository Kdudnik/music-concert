const categoryCards = document.querySelectorAll('.category-block')
let currentActive = document.querySelector('.category-block--active')

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        currentActive.classList.remove('category-block--active')
        card.classList.add('category-block--active')
        currentActive = card
    })
})