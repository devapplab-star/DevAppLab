document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
});

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll(
        '.feature-card, 
         .legal-card, 
         .section-header, 
         .hero-content,
         .hero-visual'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 100}ms`;
        observer.observe(el);
    });
}
