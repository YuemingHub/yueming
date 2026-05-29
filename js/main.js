document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active') ? 'true' : 'false');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (navMenu) navMenu.classList.remove('active');
                    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    const updateNavbar = () => {
        if (!navbar) return;
        navbar.classList.toggle('scrolled', window.scrollY > 24);
    };

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealItems.length) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealItems.forEach(item => observer.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add('is-visible'));
    }

    document.querySelectorAll('.pyramid-layer').forEach(layer => {
        layer.addEventListener('click', function() {
            const layerNum = this.getAttribute('data-layer');
            const detail = document.getElementById('layer-' + layerNum);
            const isActive = this.classList.contains('active');

            document.querySelectorAll('.pyramid-layer').forEach(item => item.classList.remove('active'));
            document.querySelectorAll('.pyramid-detail').forEach(item => item.classList.remove('active'));

            if (!isActive && detail) {
                this.classList.add('active');
                detail.classList.add('active');
            }
        });
    });

    if (document.body.classList.contains('home-dark') && window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('pointermove', event => {
            document.body.style.setProperty('--cursor-x', event.clientX + 'px');
            document.body.style.setProperty('--cursor-y', event.clientY + 'px');
        }, { passive: true });

        document.querySelectorAll('.interactive-card').forEach(card => {
            card.addEventListener('pointermove', event => {
                const rect = card.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-6px)`;
            });

            card.addEventListener('pointerleave', () => {
                card.style.transform = '';
            });
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            if (!data.name || !data.phone || !data.message) {
                alert('请填写姓名、联系电话和主要困扰。');
                return;
            }

            this.reset();
            window.location.href = 'thanks.html';
        });
    }
});
