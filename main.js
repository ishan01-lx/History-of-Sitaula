// Show button when user scrolls down 100px
window.onscroll = function() {
    const scrollButton = document.querySelector('.scroll-up-btn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
};

// Scroll to top when button is clicked
document.querySelector('.scroll-up-btn').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
window.addEventListener('load', () => {
    const homeContent = document.querySelector('.home-content');
    homeContent.style.opacity = 0;
    homeContent.style.transition = 'opacity 2s';

    setTimeout(() => {
        homeContent.style.opacity = 1;
    }, 500);
});
