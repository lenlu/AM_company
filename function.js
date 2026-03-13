// JavaScript Document

/* AM-COMPANY Glass scripts - Enhanced for Professional Interactivity */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Quantum Loader & Progress Bar Logic
    const loader = document.getElementById('quantumLoader');
    const loaderBar = document.getElementById('loaderBar');
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        if (loaderBar) loaderBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                if (loader) loader.classList.add('hidden');
                // Trigger reveal animations for the hero section immediately
                const hero = document.querySelector('.hero');
                if (hero) hero.classList.add('active');
                
                // Fallback: Trigger reveal for all elements currently in viewport
                document.querySelectorAll('.reveal').forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        el.classList.add('active');
                    }
                });
            }, 600);
        }
    }, 200);

    // 2. Custom Cursor Logic
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Inertia for the cursor
    const animateCursor = () => {
        const easing = 0.15;
        const dotEasing = 0.25;

        cursorX += (mouseX - cursorX) * easing;
        cursorY += (mouseY - cursorY) * easing;
        
        dotX += (mouseX - dotX) * dotEasing;
        dotY += (mouseY - dotY) * dotEasing;

        if (cursor) {
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
        }
        if (cursorDot) {
            cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
        }

        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Hover effect for cursor
    const hoverElements = document.querySelectorAll('a, button, .tilt-card, .chip, .new-chat-btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor?.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor?.classList.remove('hover'));
    });

    // 3. Scroll Progress Bar
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (scrollProgress) scrollProgress.style.width = scrolled + "%";
    });

    // 4. Professional Reveal Animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 5. 3D Tilt Effect Logic
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // 6. Toast Notification System
    window.showToast = (message, type = 'info') => {
        const container = document.getElementById('toastContainer');
        if (!container) {
            const newContainer = document.createElement('div');
            newContainer.id = 'toastContainer';
            newContainer.className = 'toast-container';
            document.body.appendChild(newContainer);
        }
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</div>
            <div class="toast-message">${message}</div>
        `;
        
        document.getElementById('toastContainer').appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Header scroll background
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.pageYOffset > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Parallax for shapes
    window.addEventListener('scroll', () => {
        const shapes = document.querySelectorAll('.shape');
        const scrolled = window.pageYOffset;
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
        });
    });

    // Quantum particles
    function createQuantumParticle() {
        if (document.hidden) return;
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = ['#e0a3ff', '#ff69b4', '#9370db'][Math.floor(Math.random() * 3)];
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '105vh';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
        
        document.body.appendChild(particle);
        
        const duration = Math.random() * 4000 + 3000;
        const drift = (Math.random() - 0.5) * 150;
        
        particle.animate([
            { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
            { transform: `translateY(-110vh) translateX(${drift}px)`, opacity: 0.6 }
        ], {
            duration: duration,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
    setInterval(createQuantumParticle, 2000);

    // AI Assistant System
    class AMAssistant {
        constructor() {
            this.initializeKnowledgeBase();
        }
        
        initializeKnowledgeBase() {
            this.knowledgeBase = {
                founders: {
                    patterns: ['founder', 'founders', 'who.*create', 'who.*made', 'manisha', 'arunesh', 'owners', 'partners', 'created'],
                    responses: [
                        'Manisha-A was founded by <strong>Manisha</strong> and <strong>Arunesh</strong>, two passionate AI engineers. Manisha is pursuing B.E CSE (AIML) at Sona College of Technology, Salem. Arunesh is at NIAT x Crescent University, Chennai.',
                        'Our founders are Manisha (B.E CSE AIML) and Arunesh (B.Tech CSE AIML). Together, they bring expertise in AI, ML, and innovative design.'
                    ]
                },
                about: {
                    patterns: ['about', 'what.*company', 'mission', 'purpose', 'what.*do', 'describe', 'tell.*about'],
                    responses: [
                        'Manisha-A is a cutting-edge startup focused on creating futuristic AI-powered interfaces blending consciousness with technology.',
                        'We\'re building the future with cyberpunk aesthetics and glassmorphism design, specializing in next-generation applications where AI meets beautiful design.'
                    ]
                },
                features: {
                    patterns: ['feature', 'offer', 'service', 'product', 'capability', 'ui', 'security', 'storage', 'navigation', 'target'],
                    responses: [
                        '<strong>UI:</strong> 3D interfaces | <strong>Security:</strong> Unbreakable encryption | <strong>Warp Navigation:</strong> Instant travel | <strong>Storage:</strong> Hybrid access | <strong>Target:</strong> Thought-based systems',
                        'Our features include advanced UI systems, military-grade security encryption, high-speed navigation, and intelligent targeting capabilities.'
                    ]
                },
                contact: {
                    patterns: ['contact', 'email', 'reach', 'connect', 'mail', 'write', 'social', 'linkedin'],
                    responses: [
                        'Contact us at aruneshmanisha@gmail.com. Connect on LinkedIn with Arunesh and Manisha or visit our GitHub.',
                        'You can reach us via email (aruneshmanisha@gmail.com) or use the contact form right here in the chat!'
                    ]
                }
            };
        }
        
        processMessage(userMessage) {
            const lowerMessage = userMessage.toLowerCase().trim();
            for (const [category, data] of Object.entries(this.knowledgeBase)) {
                for (const pattern of data.patterns) {
                    const regex = new RegExp(pattern, 'i');
                    if (regex.test(lowerMessage)) return this.getRandomResponse(data.responses);
                }
            }
            return this.getRandomResponse([
                'That\'s an interesting question! For specific details, feel free to contact the founders directly.',
                'I\'m still learning! You can ask me about founders, features, the evolution roadmap, or how to contact us.'
            ]);
        }
        
        getRandomResponse(responses) {
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    window.amAssistant = new AMAssistant();
});
