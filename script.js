const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const quoteForm = document.querySelector('#quote-form');
const yearSpan = document.querySelector('#year');
const themeToggle = document.querySelector('#theme-toggle');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => menu?.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.querySelector('#nome').value.trim();
    const telefone = document.querySelector('#telefone').value.trim();
    const bairro = document.querySelector('#bairro').value.trim();
    const mensagem = document.querySelector('#mensagem').value.trim();

    const text = `Olá! Quero fazer uma cotação sem compromisso.\nMateriais: (papel/papelão/plástico)\nNome: ${nome}\nTelefone: ${telefone}\nBairro/Cidade: ${bairro}\nObservações: ${mensagem || '(Anexei as fotos dos materiais)'}`;
    const url = `https://api.whatsapp.com/send?phone=5511947105318&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}

if (yearSpan) yearSpan.textContent = new Date().getFullYear();

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
