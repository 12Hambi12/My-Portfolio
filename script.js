document.addEventListener("DOMContentLoaded", function () {
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5
    });

    const fadeSections = document.querySelectorAll('.fade-section');
    fadeSections.forEach(section => {
        observer.observe(section);
    });
});

