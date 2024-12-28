document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuOverlay = document.querySelector('.menu-overlay');
    const topMenu = document.querySelector('.top-menu');
    const higherLink = document.querySelector('.higher-link');
    const higherPopup = document.querySelector('.higher-popup');

    // Hamburger menu functionality
    hamburger.addEventListener('click', () => {
        const menuHeight = topMenu.scrollHeight;
        topMenu.style.transform = `translateY(${menuHeight}px)`;
        menuOverlay.style.display = 'block';
        hamburger.classList.add('menu-open');
    });

    menuOverlay.addEventListener('click', () => {
        topMenu.style.transform = 'translateY(0)';
        menuOverlay.style.display = 'none';
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

    // Handle window resize
    window.addEventListener('resize', () => {
        if (menuOverlay.style.display === 'block') {
            const menuHeight = topMenu.scrollHeight;
            topMenu.style.transform = `translateY(${menuHeight}px)`;
        }
    });
});
