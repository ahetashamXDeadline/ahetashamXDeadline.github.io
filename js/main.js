// ===================================
// PORTFOLIO JAVASCRIPT - Ahetasham Shifat
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ===================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80; // Height of sticky header
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // SKILL BARS ANIMATION ON SCROLL
    // ===================================
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (barPosition < screenPosition) {
                bar.style.width = bar.style.width || '0%';
            }
        });
    };
    
    window.addEventListener('scroll', animateSkillBars);
    
    // ===================================
    // ACTIVE NAVIGATION HIGHLIGHT
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNavigation = () => {
        const scrollPosition = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ===================================
    // SCROLL TO TOP BUTTON (Optional)
    // ===================================
    const createScrollTopButton = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'scroll-top-btn';
        button.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(button);
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        });
    };
    
    // Uncomment to enable scroll-to-top button
    // createScrollTopButton();
    
    // ===================================
    // TYPING EFFECT FOR HERO SUBTITLE (Optional)
    // ===================================
    const typeWriter = (element, text, speed = 100) => {
        let i = 0;
        element.textContent = '';
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    };
    
    // Uncomment to enable typing effect
    // const subtitle = document.querySelector('.hero-text .subtitle');
    // if (subtitle) {
    //     const originalText = subtitle.textContent;
    //     typeWriter(subtitle, originalText, 50);
    // }
    
    // ===================================
    // MOBILE MENU TOGGLE (Add this when you create mobile menu)
    // ===================================
    const createMobileMenu = () => {
        // This is a placeholder for mobile menu functionality
        // Implement when you add a hamburger menu button
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuBtn.classList.toggle('active');
            });
        }
    };
    
    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===================================
    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observe all cards
        const cards = document.querySelectorAll('.education-card, .project-card, .experience-card, .contact-card');
        cards.forEach(card => observer.observe(card));
    };
    
    observeElements();
    
    // ===================================
    // CONSOLE MESSAGE
    // ===================================
    console.log('%c👋 Hello! Welcome to my portfolio', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cInterested in the code? Check it out on GitHub!', 'color: #b0b0b0; font-size: 14px;');
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}



// ===================================
// ADDITIONAL FEATURES TO ADD LATER:
// ===================================
// - Form validation for contact form
// - Dark/Light theme toggle
// - Project filtering by category
// - Lazy loading for images
// - Analytics integration
// - Animation on scroll library (AOS, ScrollReveal)
// - Particles.js background effect