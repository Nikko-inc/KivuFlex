const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const quoteForm = document.getElementById('quote-form');
const successBox = document.getElementById('success-box');

quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    quoteForm.reset();
    successBox.classList.remove('hidden');
    setTimeout(() => {
        successBox.classList.add('hidden');
    }, 6000);
});