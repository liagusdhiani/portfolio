document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navigation Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Active Navigation Link on Scroll (Scrollspy)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 3. Hamburger Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.nav-link, .btn-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 4. Case Study Interactive Switcher
    const switchBtns = document.querySelectorAll('.switch-btn');
    const casePanes = document.querySelectorAll('.case-pane');

    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetCase = btn.getAttribute('data-case');

            // Toggle active button
            switchBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Toggle active case pane
            casePanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.getAttribute('id') === targetCase) {
                    pane.classList.add('active');
                }
            });
        });
    });

    // 5. Case Study 2: YouTube Lift Data Table Tabs
    const tabPills = document.querySelectorAll('.tab-pill');
    const tableRows = document.querySelectorAll('.table-data-row');

    tabPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const phase = pill.getAttribute('data-phase');
            
            tabPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            tableRows.forEach(row => {
                if (row.getAttribute('data-row-phase') === phase) {
                    row.style.opacity = '1';
                    row.style.background = 'rgba(6, 182, 212, 0.05)';
                    setTimeout(() => {
                        row.style.background = 'transparent';
                    }, 800);
                } else {
                    row.style.opacity = '0.35';
                }
            });
        });
    });

    // 6. Number Ticker/Counter Animation
    const statsSection = document.getElementById('stats');
    const statNums = document.querySelectorAll('.stat-num');
    let animated = false;

    const animateStats = () => {
        statNums.forEach(num => {
            const target = +num.getAttribute('data-target');
            const suffix = num.getAttribute('data-suffix') || '';
            const isFloat = num.getAttribute('data-float') === 'true';
            
            let count = 0;
            const speed = 40; // lower is faster
            const inc = target / speed;

            const updateCount = () => {
                count += inc;
                if (count < target) {
                    num.innerText = (isFloat ? count.toFixed(1) : Math.floor(count)) + suffix;
                    setTimeout(updateCount, 20);
                } else {
                    num.innerText = (isFloat ? target.toFixed(1) : target) + suffix;
                }
            };
            
            updateCount();
        });
    };

    // Intersection Observer for Stats Section
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateStats();
                animated = true;
            }
        });
    }, { threshold: 0.3 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // 7. Connect Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const submitAlert = document.getElementById('submitAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Fetch input values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                return;
            }

            // Button loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending Message <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            // Simulate form submission API call
            setTimeout(() => {
                submitBtn.innerHTML = 'Message Sent <i class="fas fa-check"></i>';
                submitAlert.classList.add('success');
                submitAlert.innerHTML = `<strong>Thank you, ${name}!</strong> Your message has been received. I'll get back to you at <strong>${email}</strong> shortly.`;
                submitAlert.style.display = 'block';
                
                // Clear the form
                contactForm.reset();

                // Reset button state after a delay
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                }, 4000);
            }, 1500);
        });
    }

    // 8. Theme Switcher (Dark/Light Mode)
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        
        // Function to set and save a theme
        const setTheme = (theme) => {
            if (theme === 'light') {
                document.body.setAttribute('data-theme', 'light');
                themeIcon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'light');
            } else {
                document.body.removeAttribute('data-theme');
                themeIcon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'dark');
            }
        };

        // Get saved preference or fallback to system settings
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

        if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
            setTheme('light');
        } else {
            setTheme('dark');
        }

        // Toggle trigger
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            if (currentTheme === 'light') {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        });
    }
});
