// Dashboard professionnel avec animations élégantes
class ProfessionalDashboard {
    constructor() {
        this.init();
    }

    init() {
        this.initCharts();
        this.initSmoothAnimations();
        this.initRealTimeStats();
        this.initScrollAnimations();
    }

    initCharts() {
        // Diagramme circulaire - Style professionnel
        this.initClientsDistribution();
        
        // Diagramme en barres - Évolution sobre
        this.initMonthlyGrowth();
        
        // Graphique linéaire - Tendances
        this.initActivityTrend();
    }

    initClientsDistribution() {
        const ctx = document.getElementById('clientsChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Clients Actifs', 'Prospects', 'Archivés'],
                datasets: [{
                    data: [65, 25, 10],
                    backgroundColor: [
                        'rgba(37, 99, 235, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(100, 116, 139, 0.8)'
                    ],
                    borderColor: [
                        'rgba(37, 99, 235, 1)',
                        'rgba(245, 158, 11, 1)',
                        'rgba(100, 116, 139, 1)'
                    ],
                    borderWidth: 2,
                    hoverOffset: 15
                }]
            },
            options: {
                responsive: true,
                cutout: '65%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                size: 13,
                                weight: '600'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(30, 41, 59, 0.9)',
                        titleFont: {
                            size: 13
                        },
                        bodyFont: {
                            size: 13
                        }
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

    initMonthlyGrowth() {
        const ctx = document.getElementById('monthlyChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
                datasets: [{
                    label: 'Nouveaux Clients',
                    data: [12, 19, 15, 25, 22, 30, 28, 35, 32, 40, 38, 45],
                    backgroundColor: 'rgba(37, 99, 235, 0.7)',
                    borderColor: 'rgba(37, 99, 235, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
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
                            color: 'rgba(226, 232, 240, 0.8)'
                        },
                        ticks: {
                            color: 'rgba(100, 116, 139, 0.8)',
                            font: {
                                weight: '600'
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'rgba(100, 116, 139, 0.8)',
                            font: {
                                weight: '600'
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

    initActivityTrend() {
        const ctx = document.getElementById('heatmapChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
                datasets: [{
                    label: 'Activité Clients',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: true,
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderColor: 'rgba(37, 99, 235, 1)',
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(37, 99, 235, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 3,
                    pointRadius: 6
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
                        grid: {
                            color: 'rgba(226, 232, 240, 0.8)'
                        },
                        ticks: {
                            color: 'rgba(100, 116, 139, 0.8)',
                            font: {
                                weight: '600'
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'rgba(100, 116, 139, 0.8)',
                            font: {
                                weight: '600'
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

    initSmoothAnimations() {
        // Animation fluide des statistiques avec comptage
        this.animateStatistics();
        
        // Animations au scroll
        this.initScrollAnimations();
    }

    animateStatistics() {
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach((stat, index) => {
            const target = parseInt(stat.getAttribute('data-target')) || 
                          parseInt(stat.textContent.replace(/[^0-9]/g, '')) || 
                          [142, 28, 67, 45][index];
            
            stat.setAttribute('data-target', target);
            stat.textContent = '0';
            
            // Animation de comptage élégante
            const duration = 2000;
            const startTime = performance.now();
            const startValue = 0;
            
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function pour un effet plus naturel
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = Math.floor(startValue + easeOutQuart * (target - startValue));
                
                stat.textContent = currentValue.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            // Démarrer avec un délai progressif
            setTimeout(() => {
                requestAnimationFrame(animate);
            }, index * 300);
        });
    }

    initRealTimeStats() {
        // Mise à jour périodique des stats (simulation)
        setInterval(() => {
            this.updateLiveData();
        }, 10000);
    }

    updateLiveData() {
        const stats = document.querySelectorAll('.stat-number');
        const trends = document.querySelectorAll('.stat-trend');
        
        stats.forEach((stat, index) => {
            const current = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            const change = Math.floor(Math.random() * 8) - 2; // Variation réaliste
            const newValue = Math.max(0, current + change);
            
            // Animation fluide vers la nouvelle valeur
            gsap.to(stat, {
                innerText: newValue,
                duration: 1.5,
                snap: { innerText: 1 },
                ease: "power2.out",
                onUpdate: function() {
                    stat.textContent = Math.floor(this.targets()[0].innerText).toLocaleString();
                }
            });
            
            // Mise à jour des tendances
            if (trends[index]) {
                const trendClass = change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral';
                const trendSymbol = change > 0 ? '↗' : change < 0 ? '↙' : '→';
                const trendText = change > 0 ? `+${change}%` : change < 0 ? `${change}%` : 'Stable';
                
                trends[index].className = `stat-trend ${trendClass}`;
                trends[index].textContent = `${trendSymbol} ${trendText}`;
            }
        });
    }

    initScrollAnimations() {
        // Animation des éléments au défilement
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observer les cartes de statistiques
        document.querySelectorAll('.stat-card, .pro-card, .chart-container').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    const dashboard = new ProfessionalDashboard();
    
    // Effets hover subtils
    const interactiveElements = document.querySelectorAll('.stat-card, .pro-card, .btn-pro');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Simulation de données initiales
    setTimeout(() => {
        dashboard.animateStatistics();
    }, 500);
});

// Fonction utilitaire pour générer des rapports
function generateReport() {
    const btn = event.target;
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Génération...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        // Notification de succès
        showNotification('Rapport généré avec succès!', 'success');
    }, 2000);
}

function showNotification(message, type = 'info') {
    // Créer une notification toast élégante
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    toast.style.cssText = 'top: 20px; right: 20px; z-index: 1050; min-width: 300px;';
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(toast);
    
    // Auto-suppression après 5 secondes
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 5000);
}