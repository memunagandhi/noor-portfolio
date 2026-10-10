document.addEventListener('DOMContentLoaded', () => {
    // Soft Reveal Observer
    const noorObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.noor-reveal').forEach(el => noorObserver.observe(el));

    // Smooth Page Entry
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Parallax on scroll for organic shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.parallax-shape').forEach(shape => {
            const speed = shape.getAttribute('data-speed') || 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});
