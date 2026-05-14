(function () {
    'use strict';

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-dot');
    const counter = document.getElementById('slide-counter');
    const progress = document.getElementById('progress');
    const container = document.getElementById('slides');
    const total = slides.length;

    let current = 0;

    function update(index) {
        current = index;
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        if (counter) counter.textContent = `${index + 1} / ${total}`;
        if (progress) progress.style.width = `${((index + 1) / total) * 100}%`;
    }

    // Intersection Observer for visibility + animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                update(Array.from(slides).indexOf(entry.target));
            }
        });
    }, { threshold: 0.5 });

    slides.forEach(s => observer.observe(s));

    // Dot navigation
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => slides[i].scrollIntoView({ behavior: 'smooth' }));
    });

    // Arrow buttons
    document.getElementById('btn-up').addEventListener('click', () => {
        if (current > 0) slides[current - 1].scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('btn-down').addEventListener('click', () => {
        if (current < total - 1) slides[current + 1].scrollIntoView({ behavior: 'smooth' });
    });

    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            if (current < total - 1) slides[current + 1].scrollIntoView({ behavior: 'smooth' });
        }
        if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            if (current > 0) slides[current - 1].scrollIntoView({ behavior: 'smooth' });
        }
    });
})();
