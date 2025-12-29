<<<<<<< HEAD
// JavaScript for basic interactivity

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
=======
function showMessage() {
    alert("Thank you for contacting me!");
}
>>>>>>> 3a3c26dedf602a5d9f1b506e204fcc49a18eed2c
