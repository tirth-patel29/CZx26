/* ============================================
   BGMI TOURNAMENT - PREMIUM ESPORTS DASHBOARD
   COGNIZANCEX '26 - CHARUSAT
   
   STATIC DATA - HOW TO EDIT:
   - Find the groupsData object below
   - Each group has an array of teams
   - Update team stats: name, matches, chickenDinners, topFinishes, placementPoints
   - Total points auto-calculated: (chickenDinners × 5) + (topFinishes × 2) + placementPoints
   ============================================ */

// ============================================
// TOURNAMENT DATA - EDIT HERE
// ============================================

const groupsData = {
    A: [
        { name: "Phoenix Squad", matches: 3, chickenDinners: 2, topFinishes: 5, placementPoints: 15 },
        { name: "Blue Titans", matches: 3, chickenDinners: 2, topFinishes: 3, placementPoints: 14 },
        { name: "Apex Predators", matches: 3, chickenDinners: 1, topFinishes: 6, placementPoints: 11 },
        { name: "Shadow Warriors", matches: 3, chickenDinners: 1, topFinishes: 4, placementPoints: 12 },
        { name: "Ghost Protocol", matches: 3, chickenDinners: 1, topFinishes: 3, placementPoints: 9 },
        { name: "Cyber Knights", matches: 3, chickenDinners: 0, topFinishes: 5, placementPoints: 8 },
        { name: "Nova Legion", matches: 3, chickenDinners: 1, topFinishes: 2, placementPoints: 7 },
        { name: "Blaze Infinity", matches: 3, chickenDinners: 0, topFinishes: 4, placementPoints: 6 },
        { name: "Vortex Elite", matches: 3, chickenDinners: 0, topFinishes: 3, placementPoints: 5 },
        { name: "Nexus Fighters", matches: 3, chickenDinners: 0, topFinishes: 2, placementPoints: 4 },
        { name: "Iron Fists", matches: 3, chickenDinners: 0, topFinishes: 1, placementPoints: 3 },
        { name: "Thunder Clan", matches: 3, chickenDinners: 0, topFinishes: 1, placementPoints: 2 },
        { name: "Storm Chasers", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 1 },
        { name: "Crimson Force", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 0 },
        { name: "Dark Reapers", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 0 }
    ],
    B: [
        { name: "Raze Masters", matches: 3, chickenDinners: 2, topFinishes: 4, placementPoints: 16 },
        { name: "Pulse Syndicate", matches: 3, chickenDinners: 2, topFinishes: 3, placementPoints: 13 },
        { name: "Velocity Squad", matches: 3, chickenDinners: 1, topFinishes: 5, placementPoints: 10 },
        { name: "Echo Dominance", matches: 3, chickenDinners: 1, topFinishes: 4, placementPoints: 11 },
        { name: "Inferno Tribe", matches: 3, chickenDinners: 1, topFinishes: 3, placementPoints: 8 },
        { name: "Spectre Ops", matches: 3, chickenDinners: 0, topFinishes: 6, placementPoints: 9 },
        { name: "Prism Kings", matches: 3, chickenDinners: 0, topFinishes: 4, placementPoints: 7 },
        { name: "Quantum Squad", matches: 3, chickenDinners: 0, topFinishes: 3, placementPoints: 6 },
        { name: "Apex Force", matches: 3, chickenDinners: 0, topFinishes: 2, placementPoints: 5 },
        { name: "Eclipse Team", matches: 3, chickenDinners: 0, topFinishes: 2, placementPoints: 4 },
        { name: "Void Fighters", matches: 3, chickenDinners: 0, topFinishes: 1, placementPoints: 3 },
        { name: "Surge Warriors", matches: 3, chickenDinners: 0, topFinishes: 1, placementPoints: 2 },
        { name: "Frost Legends", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 1 },
        { name: "Steel Brigade", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 0 },
        { name: "Silent Hunters", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 0 }
    ],
    C: [
        { name: "Titanium Empire", matches: 3, chickenDinners: 2, topFinishes: 6, placementPoints: 14 },
        { name: "Omega Strike", matches: 3, chickenDinners: 2, topFinishes: 4, placementPoints: 12 },
        { name: "Zenith Gaming", matches: 3, chickenDinners: 1, topFinishes: 5, placementPoints: 11 },
        { name: "Velocity Kings", matches: 3, chickenDinners: 1, topFinishes: 4, placementPoints: 10 },
        { name: "Neon Phantoms", matches: 3, chickenDinners: 1, topFinishes: 3, placementPoints: 8 },
        { name: "Nebula Force", matches: 3, chickenDinners: 0, topFinishes: 5, placementPoints: 7 },
        { name: "Phantom Crew", matches: 3, chickenDinners: 0, topFinishes: 4, placementPoints: 6 },
        { name: "Radiant Squad", matches: 3, chickenDinners: 0, topFinishes: 3, placementPoints: 5 },
        { name: "Blitz Legends", matches: 3, chickenDinners: 0, topFinishes: 2, placementPoints: 4 },
        { name: "Crystal Knights", matches: 3, chickenDinners: 0, topFinishes: 2, placementPoints: 3 },
        { name: "Surge Titans", matches: 3, chickenDinners: 0, topFinishes: 1, placementPoints: 2 },
        { name: "Havoc Crew", matches: 3, chickenDinners: 0, topFinishes: 1, placementPoints: 1 },
        { name: "Inferno Knights", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 0 },
        { name: "Mystic Legends", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 0 },
        { name: "Rogue Assassins", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 0 }
    ],
    D: [
        { name: "Vortex Dragons", matches: 3, chickenDinners: 2, topFinishes: 5, placementPoints: 13 },
        { name: "Crimson Angels", matches: 3, chickenDinners: 2, topFinishes: 3, placementPoints: 15 },
        { name: "Velocity Demons", matches: 3, chickenDinners: 1, topFinishes: 6, placementPoints: 12 },
        { name: "Obsidian Squad", matches: 3, chickenDinners: 1, topFinishes: 4, placementPoints: 9 },
        { name: "Titanium Flames", matches: 3, chickenDinners: 1, topFinishes: 3, placementPoints: 10 },
        { name: "Azure Guardians", matches: 3, chickenDinners: 0, topFinishes: 5, placementPoints: 8 },
        { name: "Eclipse Shadows", matches: 3, chickenDinners: 0, topFinishes: 4, placementPoints: 7 },
        { name: "Prism Legends", matches: 3, chickenDinners: 0, topFinishes: 3, placementPoints: 6 },
        { name: "Nova Knights", matches: 3, chickenDinners: 0, topFinishes: 2, placementPoints: 5 },
        { name: "Synergy Force", matches: 3, chickenDinners: 0, topFinishes: 2, placementPoints: 4 },
        { name: "Inferno Squad", matches: 3, chickenDinners: 0, topFinishes: 1, placementPoints: 3 },
        { name: "Void Legion", matches: 3, chickenDinners: 0, topFinishes: 1, placementPoints: 2 },
        { name: "Apex Legends", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 1 },
        { name: "Shadow Kings", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 0 },
        { name: "Rogue Squad", matches: 3, chickenDinners: 0, topFinishes: 0, placementPoints: 0 }
    ]
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

function calculateTotalPoints(team) {
    return (team.chickenDinners * 5) + (team.topFinishes * 2) + team.placementPoints;
}

function sortTeams(teams) {
    return teams
        .map(team => ({
            ...team,
            totalPoints: calculateTotalPoints(team)
        }))
        .sort((a, b) => b.totalPoints - a.totalPoints);
}

function isQualified(rank) {
    return rank <= 4;
}

function renderTable(groupKey, tableElementId) {
    const rawTeams = groupsData[groupKey];
    const sortedTeams = sortTeams(rawTeams);
    const tableBody = document.getElementById(tableElementId);
    
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    sortedTeams.forEach((team, index) => {
        const rank = index + 1;
        const row = document.createElement('tr');
        
        if (isQualified(rank)) {
            row.classList.add('qualified');
        }
        
        row.innerHTML = `
            <td>${rank}</td>
            <td>${team.name}</td>
            <td>${team.matches}</td>
            <td>${team.chickenDinners}</td>
            <td>${team.topFinishes}</td>
            <td>${team.placementPoints}</td>
            <td><strong>${team.totalPoints}</strong></td>
        `;
        
        tableBody.appendChild(row);
    });
}

// ============================================
// ANIMATED NUMBER COUNTER
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = Date.now();
    
    const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (target - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    };
    
    update();
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        let currentSection = 'home';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active-indicator');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active-indicator');
            }
        });
    });
}

// ============================================
// TAB SWITCHING
// ============================================

function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tableContainers = document.querySelectorAll('.table-container');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tableContainers.forEach(container => container.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
            
            // Load image for the selected group
            loadGroupImage(tabName);
        });
    });
}

// ============================================
// LOAD GROUP IMAGES
// ============================================

function loadGroupImage(groupId) {
    // groupId format: "groupA", "groupB", etc.
    const groupLetter = groupId.replace('group', ''); // Extract letter (A, B, C, D)
    const imgElement = document.getElementById(`img${groupLetter}`);
    
    if (imgElement) {
        const imagePath = `table${groupLetter}.png`;
        imgElement.src = imagePath;
    }
}

// ============================================
// GROUP CARD NAVIGATION
// ============================================

function setupGroupCardNavigation() {
    const groupCards = document.querySelectorAll('.group-card');
    
    groupCards.forEach(card => {
        const viewBtn = card.querySelector('.view-btn');
        const groupLetter = card.getAttribute('data-group');
        
        viewBtn.addEventListener('click', () => {
            const tabBtn = document.querySelector(`[data-tab="group${groupLetter}"]`);
            if (tabBtn) {
                tabBtn.click();
                document.getElementById('standings').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.format-card, .group-card, .coordinator-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ============================================
// CTA BUTTON NAVIGATION
// ============================================

function setupCTAButton() {
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.getElementById('standings').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// ============================================
// HERO SPOTLIGHT EFFECT
// ============================================

function setupHeroSpotlight() {
    const spotlight = document.getElementById('spotlight');
    const hero = document.querySelector('.hero');
    
    if (spotlight && hero) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            spotlight.style.left = (x - 250) + 'px';
            spotlight.style.top = (y - 250) + 'px';
        });
    }
}

// ============================================
// REMOVE LOADING SCREEN
// ============================================

function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2500);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 BGMI Tournament - Premium Dashboard Initialized');
    console.log('📊 60 Teams | 4 Groups | Static Data Ready');
    
    // Initialize all features
    initializeTables();
    setupNavbarScroll();
    setupTabSwitching();
    setupGroupCardNavigation();
    setupSmoothScroll();
    setupScrollAnimations();
    setupMobileMenu();
    setupCTAButton();
    setupHeroSpotlight();
    hideLoadingScreen();
    
    // Animate stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                entry.target.classList.add('animated');
            }
        });
    });
    
    statNumbers.forEach(num => observer.observe(num));
    
    // Load Group A image on page load
    loadGroupImage('groupA');
    
    console.log('✅ Dashboard ready for action!');
});

// ============================================
// INITIALIZATION HELPER
// ============================================

function initializeTables() {
    // Table rendering disabled - now using image display only
    // When you provide an image, it will be displayed in the leaderboard section
    // Image containers ready for display: imgA, imgB, imgC, imgD
    
    // TODO: When user provides images, update src attributes:
    // document.getElementById('imgA').src = 'path/to/tableA.jpg';
    // document.getElementById('imgB').src = 'path/to/tableB.jpg';
    // document.getElementById('imgC').src = 'path/to/tableC.jpg';
    // document.getElementById('imgD').src = 'path/to/tableD.jpg';
}

/* ============================================
   HOW TO MODIFY TEAM DATA
   ============================================
   
   1. Find groupsData object at top of file
   2. Edit the group you want (A, B, C, or D)
   3. Each team has these properties:
      - name: Team name (string)
      - matches: Matches played (number)
      - chickenDinners: Match wins (number)
      - topFinishes: Top-10 finishes (number)
      - placementPoints: Placement points (number)
   
   4. Points are auto-calculated:
      Total = (Chicken Dinners × 5) + (Top Finishes × 2) + Placement Points
   
   5. Teams auto-sort by total points (highest first)
   6. Top 4 are highlighted with "qualified" class
   
   EXAMPLE TEAM:
   { name: "Phoenix Squad", matches: 3, chickenDinners: 2, topFinishes: 5, placementPoints: 15 }
   
   Points: (2×5) + (5×2) + 15 = 10 + 10 + 15 = 35 total points
   
   WHEN YOU UPDATE:
   - Tables auto-update
   - Ranks recalculate
   - Qualified teams (top 4) highlighted
   - No page refresh needed after editing JS
   
   ============================================ */
