// 1. Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleButton.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
});

// 2. Customer Reviews Carousel
const reviews = [
    '"Pure Clean makes my home sparkle!" - Jane Doe',
    '"The best eco-friendly products I\'ve used!" - John Smith',
    '"Outstanding quality and results every time!" - Emma Brown'
];
let reviewIndex = 0;
setInterval(() => {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    document.getElementById('carousel').innerHTML = `<p>${reviews[reviewIndex]}</p>`;
}, 3000);

// 3. Smooth Scroll-to-Top Button
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// 4. Dynamic Product Filters
const filter = document.getElementById('product-filter');
const products = document.querySelectorAll('.product');
filter.addEventListener('change', () => {
    const category = filter.value;
    products.forEach(product => {
        product.style.display = (category === 'all' || product.classList.contains(category)) ? '' : 'none';
    });
});

// 5. Pop-up Modal
const modal = document.getElementById('promo-modal');
const closeModal = document.getElementById('close-modal');
setTimeout(() => {
    modal.style.display = 'block';
}, 5000);
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 6. Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }
    alert(`Thank you, ${name}, for your message!`);
    form.reset();
});
