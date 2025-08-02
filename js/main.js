// Handle mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.toggle('hidden');
            mobileMenuButton.parentElement.classList.toggle('menu-open', !isHidden);
        });
        
        // Handle window resize to hide mobile menu on larger screens
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) { // md breakpoint
                mobileMenu.classList.add('hidden');
                mobileMenuButton.parentElement.classList.remove('menu-open');
            }
        });
    }
});
