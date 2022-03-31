const ham = document.querySelector('.nav-bar__responsive--icon');
const link = document.querySelector('.nav-bar__responsive-ul'); 
const bars = document.querySelectorAll('.nav-bar__responsive--icon span');
ham.addEventListener('click', () => {
    link.classList.toggle('active');
    bars.forEach(child => {
        child.classList.toggle('rotate')
    });
});













