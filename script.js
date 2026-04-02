// Мобильное меню
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Плавное появление элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Назначаем анимации на элементы
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
document.querySelectorAll('.fade-in-delay').forEach(el => observer.observe(el));
document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));
document.querySelectorAll('.slide-in-delay').forEach(el => observer.observe(el));
document.querySelectorAll('.slide-in-left').forEach(el => observer.observe(el));
document.querySelectorAll('.slide-in-right').forEach(el => observer.observe(el));
document.querySelectorAll('.pop-up').forEach(el => observer.observe(el));

// Обработка формы
const serviceForm = document.getElementById('serviceForm');
serviceForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // В реальном проекте здесь был бы AJAX-запрос
    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    serviceForm.reset();
});

// Динамическое изменение шапки при скролле
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
});