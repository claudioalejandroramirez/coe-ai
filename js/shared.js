(function () {
    'use strict';

    // Progress bar
    var bar = document.getElementById('progress');
    if (bar) {
        window.addEventListener('scroll', function () {
            var s = window.scrollY || document.documentElement.scrollTop;
            var h = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = (h > 0 ? (s / h) * 100 : 0) + '%';
        }, { passive: true });
    }

    // Mobile nav toggle
    var toggle = document.getElementById('nav-toggle');
    var mobileNav = document.getElementById('nav-mobile');
    if (toggle && mobileNav) {
        toggle.addEventListener('click', function () {
            var open = mobileNav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            document.body.style.overflow = open ? 'hidden' : '';
        });
        // Close on link click
        mobileNav.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                mobileNav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // Active sidebar link on scroll (for pages with sidebar)
    var sidebarLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
    if (sidebarLinks.length > 0) {
        var sections = Array.prototype.slice.call(sidebarLinks).map(function (l) {
            return document.querySelector(l.getAttribute('href'));
        }).filter(Boolean);

        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    sidebarLinks.forEach(function (l) { l.classList.remove('active'); });
                    var active = document.querySelector('.sidebar-nav a[href="#' + e.target.id + '"]');
                    if (active) active.classList.add('active');
                }
            });
        }, { rootMargin: '-15% 0px -75% 0px' });

        sections.forEach(function (s) { obs.observe(s); });

        sidebarLinks.forEach(function (l) {
            l.addEventListener('click', function (e) {
                e.preventDefault();
                var target = document.querySelector(l.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
})();
