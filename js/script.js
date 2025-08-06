function animateCounter(id, target) {
    let count = 0;
    const interval = setInterval(() => {
        if (count < target) {
            count++;
            document.getElementById(id).textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

function observeStats() {
    const statsSection = document.querySelector('.stats');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter('projects', 120);
                animateCounter('clients', 85);
                animateCounter('experts', 50);
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}

window.addEventListener('load', observeStats);
