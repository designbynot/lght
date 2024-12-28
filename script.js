document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuOverlay = document.querySelector('.menu-overlay');
    const topMenu = document.querySelector('.top-menu');
    const higherLink = document.querySelector('.higher-link');
    const higherPopup = document.querySelector('.higher-popup');

    // Hamburger menu functionality
    hamburger.addEventListener('click', () => {
        menuOverlay.style.display = 'block';
        topMenu.classList.add('active');
        hamburger.classList.add('menu-open');
    });

    menuOverlay.addEventListener('click', () => {
        menuOverlay.style.display = 'none';
        topMenu.classList.remove('active');
        hamburger.classList.remove('menu-open');
    });

    // Higher link popup functionality
    higherLink.addEventListener('click', (e) => {
        e.stopPropagation();
        const rect = higherLink.getBoundingClientRect();
        higherPopup.style.display = 'flex';
        higherPopup.style.top = `${rect.bottom + window.scrollY + 10}px`;
        higherPopup.style.left = `${rect.left + (rect.width / 2) - 100}px`;
    });

    document.addEventListener('click', (e) => {
        if (!higherPopup.contains(e.target) && e.target !== higherLink) {
            higherPopup.style.display = 'none';
        }
    });
});
