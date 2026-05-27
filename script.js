const logo = document.querySelector("a.navbar-brand");
logo.innerText = "LATIHAN JS";

const judul = document.querySelector("section.a h2");
judul.innerText = "Selamat Datang di Web Saya";

const s = document.querySelectorAll("section");
s.forEach((section) => {
  const p = section.querySelectorAll("p");
  p.forEach((p, index) => {
    p.innerText = `Paragraf ke-${index + 1}`;
  });
});

// HOVER BUTTON
const btn = document.querySelector(".btn-toggle");

// btn.addEventListener ('mouseenter', () => {
//     btn.style.opacity = '0.9';
// });

// btn.addEventListener ('mouseleave', () => {
//     btn.style.opacity = '1';
// });

// DARK TOGGLE
const html = document.documentElement;
const themeBtn = document.querySelector(".btn-toggle");
const save = localStorage.getItem("theme");

if (save === "dark") {
  html.setAttribute("data-theme", "dark");
}

btn.addEventListener("click", () => {
  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

// Autoclose Nav & Smooth Scroll
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

const handleAutoClose = (e) => {
  if (menuToggle.classList.contains("show") && (!e || !e.target.closest(".navbar"))) {
    bsCollapse.hide()
  };
};

document.addEventListener('click', handleAutoClose);
window.addEventListener('scroll', () => handleAutoClose())

navLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    const targetId = links.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      e.preventDefault();

      const doScroll = () => {
        targetSection.scrollIntoView({ behavior: "smooth" });
      };

      if (menuToggle.classList.contains("show")) {
        bsCollapse.hide();
        menuToggle.addEventListener('hidden.bs.collapse', () => {
          doScroll();
        }, { once: true });
      } else {
        doScroll();
      }
    }
  });
});

// // NEW PARAGRAF
// const pNew = document.createElement ('p')
// const teksP = document.createTextNode ('Paragraf ke-4')

// pNew.appendChild (teksP)

const sectionA = document.getElementById('c1')

// sectionA.appendChild (pNew)


// RANDOM COLOR BUTTON
const gantiWarna = document.getElementById('btn-play')
const paragraf = document.querySelectorAll('section.a p')

gantiWarna.addEventListener('click', () => {
    const r1 = Math.round(Math.random() * 255 + 1);
    const g1 = Math.round(Math.random() * 255 + 1);
    const b1 = Math.round(Math.random() * 255 + 1);

    const r2 = Math.round(Math.random() * 255 + 1);
    const g2 = Math.round(Math.random() * 255 + 1);
    const b2 = Math.round(Math.random() * 255 + 1);

    gantiWarna.style.backgroundColor = 'rgb('+ r1 +','+ g1 +','+ b1 +')';
    gantiWarna.style.color = 'rgb('+ r2 +','+ g2 +','+ b2 +')';
    paragraf.forEach((p) => {
        p.style.color = 'rgb('+ r2 +','+ g1 +','+ b2 +')';
        p.style.textShadow = '0 0 20px rgb('+ r1 +','+ g1 +','+ b1 +')';
    });
});

const resetButton = document.getElementById('btn-reset')

resetButton.addEventListener('click', () => {
    gantiWarna.style.backgroundColor = '';
    gantiWarna.style.color = '';
    paragraf.forEach((p) => {
        p.style.color = '';
        p.style.textShadow = '';
    });
});

// CLOSE BUTTON
// const closeButton = document.querySelectorAll('.btn-close-card');

// closeButton.forEach((button) => {

//   button.addEventListener('click', () => {

//     button.parentElement.style.display = 'none'
//   });
// });

const containerCards = document.getElementById('containerCard');

containerCards.addEventListener('click', (e) => {
  if(e.target.className == 'btn-close-card') {
      e.target.parentElement.style.display = 'none'
  }
})


// FORM
const form = document.getElementById('form')
const submitButton = document.getElementById('submit-btn')
const jumlah = document.getElementById('jumlah')
const warna = document.getElementById('warna')
const slider = document.getElementById('atur')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  form.reset()
  submitButton.innerHTML = 'Terkirim !'

  setTimeout(() => {
    submitButton.innerHTML = 'Kirim'
  }, 3000);
});

jumlah.innerHTML = slider.value

slider.addEventListener('input', () => {
  jumlah.innerHTML = slider.value
})










