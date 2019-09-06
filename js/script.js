window.onload = () => {
    let isMobileMenuOpen = false;
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuLinks = document.getElementById('header-mobile-links');
    const mobileMenuArrow = document.getElementById('hw-menu-arrow');

    mobileMenuButton.addEventListener('click', () => {
        if (isMobileMenuOpen) {
            mobileMenuLinks.style.transform = 'translateY(-100%)';
            mobileMenuArrow.setAttribute('src', '/img/down-arrow.svg');
        } else {
            mobileMenuLinks.style.transform = 'translateY(60px)';
            mobileMenuArrow.setAttribute('src', '/img/up-arrow.svg');
        }
        isMobileMenuOpen = !isMobileMenuOpen;
    });
};
