window.onload = () => {
    // init
};

let isMobileMenuOpen = false;

function openMenu(element) {
    const mobileMenuLinks = document.getElementById('header-mobile-links');
    if (isMobileMenuOpen) {
        element.className = 'menu-button';
        mobileMenuLinks.style.transform = 'translateY(-100%)';
    } else {
        element.className = 'menu-button open';
        mobileMenuLinks.style.transform = 'translateY(60px)';
    }
    isMobileMenuOpen = !isMobileMenuOpen;
}
