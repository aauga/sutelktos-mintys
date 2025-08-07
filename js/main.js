// Handle mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.toggle('hidden');
            mobileMenuButton.parentElement.classList.toggle('menu-open', !isHidden);
        });
        
        // Handle window resize to hide mobile menu on larger screens
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.parentElement.classList.remove('menu-open');
            }
        });
    }

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delays for cascading effect
                let delay = 0;
                
                if (entry.target.classList.contains('heading')) {
                    delay = 0;
                } else if (entry.target.classList.contains('offering')) {
                    const offerings = document.querySelectorAll('.offering');
                    const index = Array.from(offerings).indexOf(entry.target);
                    delay = (index + 1) * 200; // 200ms delay between each offering
                } else if (entry.target.classList.contains('icon')) {
                    delay = 800; // Icons animate after their parent offering
                }
                
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, delay);
                
                observer.unobserve(entry.target); // Only trigger once
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.offerings .heading, .offering, .offering .icon');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
