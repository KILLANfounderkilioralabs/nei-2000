// ===========================
// FAQ ACCORDÉON
// ===========================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

const question = item.querySelector('.faq-question');

question.addEventListener('click', () => {

faqItems.forEach(faq => {

if(faq !== item){

faq.classList.remove('active');

}

});

item.classList.toggle('active');

});

});

// ===========================
// HEADER AU SCROLL
// ===========================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

if(window.scrollY > 50){

header.style.boxShadow =
'0 10px 30px rgba(0,0,0,0.08)';

header.style.background =
'rgba(255,255,255,0.98)';

}else{

header.style.boxShadow = 'none';

header.style.background =
'rgba(255,255,255,0.95)';

}

});

// ===========================
// ANIMATION AU SCROLL
// ===========================

const revealElements = document.querySelectorAll(
'.feature-card, .gallery-item, .class-card, .fee-card, .kit-item, .step, .contact-card'
);

const revealOnScroll = () => {

revealElements.forEach(element => {

const windowHeight = window.innerHeight;

const elementTop =
element.getBoundingClientRect().top;

const revealPoint = 120;

if(elementTop < windowHeight - revealPoint){

element.classList.add('show');

}

});

};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

// ===========================
// BOUTON RETOUR EN HAUT
// ===========================

const scrollBtn = document.createElement('button');

scrollBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

scrollBtn.classList.add('scroll-top');

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {

if(window.scrollY > 400){

scrollBtn.classList.add('active');

}else{

scrollBtn.classList.remove('active');

}

});

scrollBtn.addEventListener('click', () => {

window.scrollTo({

top:0,
behavior:'smooth'

});

});

// ===========================
// ANIMATION HERO
// ===========================

window.addEventListener('load', () => {

const heroContent =
document.querySelector('.hero-content');

heroContent.style.opacity = '0';

heroContent.style.transform =
'translateY(30px)';

setTimeout(() => {

heroContent.style.transition =
'all 1s ease';

heroContent.style.opacity = '1';

heroContent.style.transform =
'translateY(0)';

}, 200);

});

// ===========================
// MENU MOBILE SIMPLE
// ===========================

const menuToggle =
document.querySelector('.menu-toggle');

const navLinks =
document.querySelector('.nav-links');

if(menuToggle){

menuToggle.addEventListener('click', () => {

navLinks.classList.toggle('mobile-active');

});

}

// ===========================
// FERMER MENU AU CLIC
// ===========================

document
.querySelectorAll('.nav-links a')
.forEach(link => {

link.addEventListener('click', () => {

navLinks.classList.remove('mobile-active');

});

});

const form = document.getElementById("whatsappForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const parent = document.getElementById("parent").value;
const telephone = document.getElementById("telephone").value;
const eleve = document.getElementById("eleve").value;
const classe = document.getElementById("classe").value;
const message = document.getElementById("message").value;

const texte =
`Bonjour, je souhaite pré-inscrire mon enfant au Collège Privé NEI-2000.

👤 Parent : ${parent}
📞 Téléphone : ${telephone}
🎓 Élève : ${eleve}
🏫 Classe souhaitée : ${classe}

📝 Message :
${message || "Aucun message supplémentaire."}

Merci de me recontacter concernant les modalités d'inscription.`;

const url = "https://wa.me/2250708344422?text=" +
encodeURIComponent(texte);

window.open(url, "_blank");

});

}