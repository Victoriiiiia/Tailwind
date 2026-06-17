const themeToggle = document.getElementById('themeToggle');



// Обработчик клика
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        
        if (document.documentElement.classList.contains('dark')) {
            this.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            this.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Бургер-меню для мобильных
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}
