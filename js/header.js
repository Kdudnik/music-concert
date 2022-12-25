// ANCHOR BTN NAVBAR
const btn = document.querySelector('#anchorBtn')
const pricing = document.querySelector('.pricing')

btn.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo(0, (pricing.offsetTop - 100))
})
// STICKY NAVBAR

const navbar = document.querySelector('#navbarSticky')
const sticky = navbar.offsetTop
const hero = document.querySelector('.hero');

window.onscroll = function() {stickyFunc()};
function stickyFunc() {
    if (window.pageYOffset <= sticky) {
        navbar.classList.remove('js-sticky');
    }
    else {
        navbar.classList.add('js-sticky')
    }
}