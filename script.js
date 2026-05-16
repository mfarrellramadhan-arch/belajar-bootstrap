const logo = document.querySelector('a.navbar-brand')
logo.innerText = "LATIHAN JS";
logo.style.color = 'none';

const judul = document.querySelector('section.A h2');
judul.innerText = "Selamat Datang di Web Saya";

const s = document.querySelectorAll('section');
s.forEach((section) => {
    const p = section.querySelectorAll('p');
        p.forEach((p, index) => {
    p.innerText = `Paragraf ke-${index + 1}`;
    });
});

// HOVER BUTTON
const btn = document.querySelector('.btn');

btn.addEventListener ('mouseenter', () => {
    btn.style.opacity = '0.6';
});

btn.addEventListener ('mouseleave', () => {
    btn.style.opacity = '1';
});

// DARK TOGGLE
    const html = document.documentElement;

    const save = localStorage.getItem('theme');

    if (save === 'dark') {
        html.setAttribute('data-theme', 'dark');
        btn.innerText = 'LIGHT'
    } 

    btn.addEventListener('click', () => {
        if (html.getAttribute('data-theme') === 'dark') {
            html.removeAttribute('data-theme');
            btn.innerText = 'DARK';
            localStorage.setItem('theme', 'light');
        } else {
            html.setAttribute('data-theme', 'dark');
            btn.innerText = 'LIGHT'
            localStorage.setItem('theme', 'dark')
        }
});

