// Adicione funcionalidades interativas aqui, se necessário
console.log("Bem-vindo ao Depósito de Materiais de Construção!");

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animação de entrada para elementos
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Elementos para animar
document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// Animação para produtos
document.querySelectorAll('.product').forEach(product => {
  product.classList.add('fade-in');
  observer.observe(product);
});

// Validação do formulário
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validação básica
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !phone || !message) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  
  // Simulação de envio
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';
  
  setTimeout(() => {
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar Mensagem';
  }, 1500);
});

// Menu mobile
const menuButton = document.createElement('button');
menuButton.classList.add('menu-toggle');
menuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav').prepend(menuButton);

menuButton.addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
});

// Adicionar classe de scroll para header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Animação de preços
document.querySelectorAll('.price').forEach(price => {
  price.addEventListener('mouseover', () => {
    price.style.transform = 'scale(1.1)';
  });
  
  price.addEventListener('mouseout', () => {
    price.style.transform = 'scale(1)';
  });
});