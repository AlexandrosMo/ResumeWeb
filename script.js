document.addEventListener('DOMContentLoaded', () => {
    const handleAnchorClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor=> {
        anchor.addEventListener('click', handleAnchorClick);
    });document.addEventListener('DOMContentLoaded', () => {
    const handleAnchorClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
    });

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const DARK_MODE_CLASS = 'dark-mode';
    const DARK_MODE_KEY = 'dark-mode';

    const updateTheme = (isDarkMode) => {
        body.classList.toggle(DARK_MODE_CLASS, isDarkMode);
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem(DARK_MODE_KEY, isDarkMode);
    };

    const savedDarkMode = localStorage.getItem(DARK_MODE_KEY) === 'true';
    updateTheme(savedDarkMode);

    themeToggle.addEventListener('click', () => {
        const isDarkMode = !body.classList.contains(DARK_MODE_CLASS);
        updateTheme(isDarkMode);
    });

    const initializeChart = () => {
        const ctx = document.getElementById('skillsChart')?.getContext('2d');
        if (!ctx) return;

        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#6a11cb');
        gradient.addColorStop(1, '#2575fc');

        const isDarkMode = body.classList.contains(DARK_MODE_CLASS);
        const gridColor = isDarkMode ? '#333' : '#eee';
        const textColor = isDarkMode ? '#fff' : '#333';

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['C++', 'Python', 'C#', 'JavaScript', 'React', 'Angular'],
                datasets: [{
                    label: 'Skill Level',
                    data: [85, 90, 88, 92, 80, 75],
                    backgroundColor: gradient,
                    borderColor: '#6a11cb',
                    borderWidth: 2,
                    hoverBackgroundColor: '#bb86fc',
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        max: 100,
                        grid: { color: gridColor }
                    },
                    x: {
                        grid: { color: gridColor }
                    }
                },
                plugins: {
                    legend: {
                        labels: { color: textColor }
                    }
                }
            }
        });
    };

    initializeChart();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundPositionY = `${scrollY * 0.5}px`;
        }
    };

    window.addEventListener('scroll', handleScroll);
});


    
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const DARK_MODE_CLASS = 'dark-mode';
    const DARK_MODE_KEY = 'dark-mode';

    const updateTheme = (isDarkMode) => {
        body.classList.toggle(DARK_MODE_CLASS, isDarkMode);
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem(DARK_MODE_KEY, isDarkMode);
    };

    const savedDarkMode = localStorage.getItem(DARK_MODE_KEY) === 'true';
    updateTheme(savedDarkMode);

    themeToggle.addEventListener('click', () => {
        const isDarkMode = !body.classList.contains(DARK_MODE_CLASS);
        updateTheme(isDarkMode);
    });

   
    const initializeChart = () => {
        const ctx = document.getElementById('skillsChart')?.getContext('2d');
        if (!ctx) return;

        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#6a11cb');
        gradient.addColorStop(1, '#2575fc');

        const isDarkMode = body.classList.contains(DARK_MODE_CLASS);
        const gridColor = isDarkMode ? '#333' : '#eee';
        const textColor = isDarkMode ? '#fff' : '#333';

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Golang','C++', 'Python', 'C#', 'JavaScript', 'React', 'Angular'],
                datasets: [{
                    label: 'Skill Level',
                    data: [70,85, 90, 82, 85, 80, 75],
                    backgroundColor: gradient,
                    borderColor: '#6a11cb',
                    borderWidth: 2,
                    hoverBackgroundColor: '#bb86fc',
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        max: 100,
                        grid: { color: gridColor }
                    },
                    x: {
                        grid: { color: gridColor }
                    }
                },
                plugins: {
                    legend: {
                        labels: { color: textColor }
                    }
                }
            }
        });
    };

    initializeChart();

 
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundPositionY = `${scrollY * 0.5}px`;
        }
    };

    window.addEventListener('scroll', handleScroll);
});