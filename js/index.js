// Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// Discount Media
const video = document.querySelector(".video");
const button = document.querySelector(".video-control");

button.addEventListener("click", playpausevideo);

function playpausevideo() {
  if (video.paused) {
    button.innerHTML = "<i class='bx bx-pause' ></i>";
    video.play();
  } else {
    button.innerHTML = "<i class='bx bx-play' ></i>";
    video.pause();
  }
}

// Preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

// Scroll
const links = document.querySelectorAll(".nav-link");
const navigation = document.querySelector(".navigation");

Array.from(links).map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navigation.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth"
    });

    navList.classList.remove("open");
  });
});


// Scroll Reveal

const scroll = ScrollReveal({
  distance: "100px",
  duration: 2500,
  reset: true,
});

scroll.reveal(`.content h1, .content .btn`, {
  origin: "top",
  interval: 100,
});

scroll.reveal(`.about .col h1, .about .col p, .about .col .btn`, {
  origin: "left",
  interval: 150,
});

scroll.reveal(
  `.about .col:last-child,.contact .location,.more .col:last-child,.newsletter .form`,
  {
    origin: "right",
  }
);

scroll.reveal(`.service img,.contact .title`, {
  origin: "top",
});

scroll.reveal(`.service .col,.trip .row`, {
  origin: "bottom",
});

scroll.reveal(`.trip .title,.more .col:first-child,.newsletter .col`, {
  origin: "left",
});

scroll.reveal('.faq .title', {
  origin: 'top',
  distance: '80px',
  duration: 2000,
});

scroll.reveal('.faq .faq-item', {
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  interval: 200,
});

scroll.reveal('.testimonials .title', {
  origin: 'top',
  distance: '80px',
  duration: 2000,
});

scroll.reveal('.testimonial-slider', {
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
});


//faq

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

//depoimento
const container = document.querySelector('.testimonial-wrapper');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const cards = document.querySelectorAll('.testimonial-card');
const gap = 20;
const cardsPerView = 3;
const scrollStep = (cards[0].offsetWidth + gap) * cardsPerView;

cards.forEach(card => {
  const clone = card.cloneNode(true);
  container.appendChild(clone);
});

// Evento NEXT
next.addEventListener('click', () => {
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  container.scrollBy({ left: scrollStep, behavior: 'smooth' });

  // Se chegou no clone (parte extra), reseta para o começo após a animação
  setTimeout(() => {
    if (container.scrollLeft >= maxScrollLeft - (scrollStep / 2)) {
      container.scrollTo({ left: 0, behavior: 'auto' });
    }
  }, 500); 
});

// Evento PREV
prev.addEventListener('click', () => {
  if (container.scrollLeft <= 0) {
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    container.scrollTo({ left: maxScrollLeft, behavior: 'auto' });
    container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  }
});


//tema
function toggleTheme() {
  console.log("Toggle acionado");
  const icon = document.getElementById('switch-icon');
  const label = document.getElementById('switch-label');
  const button = document.querySelector('.theme-switch');

  document.documentElement.classList.toggle('dark-mode');

  const darkMode = document.documentElement.classList.contains('dark-mode');

  if (darkMode) {
    icon.src = 'imagens/dark.png';
    icon.alt = 'Tema atual: escuro';
    label.textContent = 'ESCURO';
    button.setAttribute('aria-pressed', 'true');
  } else {
    icon.src = 'imagens/light.png';
    icon.alt = 'Tema atual: claro';
    label.textContent = 'CLARO';
    button.setAttribute('aria-pressed', 'false');
  }
}

//video 
function openVideo() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  modal.style.display = 'block';
  video.play();
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  modal.style.display = 'none';
  video.pause();
  video.currentTime = 0;
}

// Fechar vídeo
window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target == modal) {
    closeVideo();
  }
}



