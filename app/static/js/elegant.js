// Dashboard élégant avec animations sophistiquées
class ElegantDashboard {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.setupEventListeners();
        this.initSmoothAnimations();
        this.initElegantCharts();
        this.initRealTimeUpdates();
        this.initScrollEffects();
        this.initPageTransitions();
    }

    setupEventListeners() {
        // Navigation scroll effect
        window.addEventListener('scroll', () => {
            this.handleNavbarScroll();
        });

        // Hover effects pour les cartes
        this.initHoverEffects();
    }

    handleNavbarScroll() {
        const navbar = document.querySelector('.navbar-elegant');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    initHoverEffects() {
        const cards = document.querySelectorAll('.elegant-card, .elegant-stat-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.animateCardHover(e.currentTarget, true);
            });
            
            card.addEventListener('mouseleave', (e) => {
                this.animateCardHover(e.currentTarget, false);
            });
        });
    }

    animateCardHover(card, isHovering) {
        if (isHovering) {
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.4,
                ease: "power2.out"
            });
        } else {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        }
    }

    initSmoothAnimations() {
        // Animation d'entrée en séquence
        this.animateEntranceSequence();
        
        // Compteurs animés
        this.animateStatistics();
    }

    animateEntranceSequence() {
        const tl = gsap.timeline();
        
        tl.from('.elegant-page-header', {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        .from('.elegant-stat-card', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.5")
        .from('.elegant-card', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.3");
    }

    animateStatistics() {
        const stats = document.querySelectorAll('.elegant-stat-number');
        
        stats.forEach((stat, index) => {
            const target = parseInt(stat.getAttribute('data-target')) || 
                          [156, 42, 78, 89][index];
            
            const duration = 2.5;
            const startValue = 0;
            
            gsap.to(stat, {
                innerText: target,
                duration: duration,
                snap: { innerText: 1 },
                ease: "power2.out",
                stagger: index * 0.2,
                onUpdate: function() {
                    const value = Math.floor(this.targets()[0].innerText);
                    stat.textContent = value.toLocaleString();
                    
                    // Effet de pulse sur le changement
                    if (value % 10 === 0) {
                        gsap.to(stat, {
                            scale: 1.1,
                            duration: 0.1,
                            yoyo: true,
                            repeat: 1
                        });
                    }
                }
            });
        });
    }

    initElegantCharts() {
        this.createDistributionChart();
        this.createGrowthChart();
        this.createActivityChart();
    }

    createDistributionChart() {
        const ctx = document.getElementById('clientsChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Clients Actifs', 'Prospects', 'En négociation', 'Archivés'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: [
                        'rgba(99, 102, 241, 0.9)',
                        'rgba(245, 158, 11, 0.9)',
                        'rgba(6, 182, 212, 0.9)',
                        'rgba(100, 116, 139, 0.9)'
                    ],
                    borderColor: [
                        'rgba(99, 102, 241, 1)',
                        'rgba(245, 158, 11, 1)',
                        'rgba(6, 182, 212, 1)',
                        'rgba(100, 116, 139, 1)'
                    ],
                    borderWidth: 3,
                    hoverOffset: 20,
                    spacing: 3
                }]
            },
            options: {
                responsive: true,
                cutout: '75%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 25,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: {
                                size: 13,
                                weight: '600',
                                family: 'Inter'
                            },
                            color: 'rgba(39, 39, 42, 0.9)'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(24, 24, 27, 0.95)',
                        titleFont: {
                            size: 13,
                            family: 'Inter'
                        },
                        bodyFont: {
                            size: 13,
                            family: 'Inter',
                            weight: '600'
                        },
                        padding: 12,
                        cornerRadius: 12,
                        displayColors: true
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    createGrowthChart() {
        const ctx = document.getElementById('monthlyChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
                datasets: [{
                    label: 'Nouveaux Clients',
                    data: [18, 25, 22, 30, 35, 42, 48, 52, 45, 58, 62, 70],
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(99, 102, 241, 1)',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        },
                        ticks: {
                            color: 'rgba(39, 39, 42, 0.7)',
                            font: {
                                weight: '600',
                                family: 'Inter'
                            },
                            padding: 10
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'rgba(39, 39, 42, 0.7)',
                            font: {
                                weight: '600',
                                family: 'Inter'
                            },
                            padding: 10
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    createActivityChart() {
        const ctx = document.getElementById('activityChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
                datasets: [{
                    label: 'Activité',
                    data: [65, 78, 82, 79, 85, 45, 35],
                    backgroundColor: 'rgba(99, 102, 241, 0.8)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 2,
                    borderRadius: 12,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        },
                        ticks: {
                            color: 'rgba(39, 39, 42, 0.7)',
                            font: {
                                weight: '600',
                                family: 'Inter'
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'rgba(39, 39, 42, 0.7)',
                            font: {
                                weight: '600',
                                family: 'Inter'
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    initRealTimeUpdates() {
        // Mise à jour en temps réel élégante
        setInterval(() => {
            this.updateLiveData();
        }, 8000);
    }

    updateLiveData() {
        const stats = document.querySelectorAll('.elegant-stat-number');
        const trends = document.querySelectorAll('.elegant-stat-trend');
        
        stats.forEach((stat, index) => {
            const current = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            const change = Math.floor(Math.random() * 6) - 1; // Variation subtile
            const newValue = Math.max(10, current + change);
            
            // Animation fluide
            gsap.to(stat, {
                innerText: newValue,
                duration: 1.5,
                snap: { innerText: 1 },
                ease: "power2.out",
                onUpdate: function() {
                    const value = Math.floor(this.targets()[0].innerText);
                    stat.textContent = value.toLocaleString();
                }
            });
            
            // Mise à jour des tendances avec animation
            if (trends[index]) {
                const trendClass = change > 0 ? 'trend-positive' : change < 0 ? 'trend-negative' : 'trend-neutral';
                const trendSymbol = change > 0 ? '↗' : change < 0 ? '↙' : '→';
                const trendText = change > 0 ? `+${change}%` : change < 0 ? `${change}%` : 'Stable';
                
                gsap.to(trends[index], {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        trends[index].className = `elegant-stat-trend ${trendClass}`;
                        trends[index].innerHTML = `${trendSymbol} ${trendText}`;
                        gsap.to(trends[index], { opacity: 1, duration: 0.3 });
                    }
                });
            }
        });
    }

    initScrollEffects() {
        // Animation au défilement
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.elegant-card, .elegant-stat-card').forEach(el => {
            gsap.set(el, { y: 30, opacity: 0 });
            observer.observe(el);
        });
    }

    initPageTransitions() {
        // Transition douce entre les pages
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="/"]')) {
                e.preventDefault();
                const href = e.target.getAttribute('href');
                
                // Animation de sortie
                gsap.to('main', {
                    opacity: 0,
                    y: 20,
                    duration: 0.3,
                    onComplete: () => {
                        window.location.href = href;
                    }
                });
            }
        });
    }
}

// Effets visuels avancés
class VisualEffects {
    static initParticles() {
        const canvas = document.createElement('canvas');
        canvas.className = 'particles-background';
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.1
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
                
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
                ctx.fill();
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    new ElegantDashboard();
    VisualEffects.initParticles();
    
    // Effet de saisie élégant pour les formulaires
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});

// Fonctions utilitaires élégantes
function showElegantNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `elegant-notification elegant-notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        padding: 1.5rem 2rem;
        border-radius: 16px;
        box-shadow: var(--shadow-2xl);
        border: 1px solid rgba(255, 255, 255, 0.8);
        z-index: 9999;
        transform: translateX(400px);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
    `;
    
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    notification.innerHTML = `
        <div class="d-flex align-items-center gap-3">
            <span style="font-size: 1.5rem;">${icon}</span>
            <span style="font-weight: 600; color: var(--elegant-gray-800);">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Auto-suppression
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

function elegantLoading(action = 'show') {
    if (action === 'show') {
        const loader = document.createElement('div');
        loader.id = 'elegant-loader';
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
        `;
        loader.innerHTML = `
            <div class="text-center">
                <div class="elegant-spinner" style="
                    width: 60px;
                    height: 60px;
                    border: 3px solid rgba(99, 102, 241, 0.3);
                    border-top: 3px solid var(--primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 1rem;
                "></div>
                <p style="color: var(--elegant-gray-600); font-weight: 600;">Chargement...</p>
            </div>
        `;
        document.body.appendChild(loader);
        
        gsap.to(loader, { opacity: 1, duration: 0.3 });
    } else {
        const loader = document.getElementById('elegant-loader');
        if (loader) {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    if (loader.parentNode) {
                        loader.parentNode.removeChild(loader);
                    }
                }
            });
        }
    }
}